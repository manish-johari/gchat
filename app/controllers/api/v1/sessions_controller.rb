class Api::V1::SessionsController < Devise::SessionsController
  skip_before_filter :verify_authenticity_token, :only => [:create, :destroy]

  def create
    if params[:provider] == 'facebook'
      user = User.from_omniauth(fb_data, current_user)
      sign_in(user) if user.persisted?
    else
      self.resource = warden.authenticate!(auth_options)
    end
  end

  def destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    respond_to do |format|
      format.json {
            render :json => { :success => true, status: 'logged out'}
          }
    end
  end

  private

  def fb_data
    auth = {"provider"=>"#{params["provider"]}",
             "uid"=>"#{params["fb_user_id"]}",
             "info"=>
              {"email"=>"#{params["email"]}",
               "first_name"=>"#{params["first_name"]}",
               "last_name"=>"#{params["last_name"]}",
               "image"=>"#{params["image_url"]}",
               },
             "credentials"=>
              {"token"=>
                "#{params["fb_access_token"]}",
              },
             "extra"=>
              {"raw_info"=>
                {
                 "gender"=>"#{params["gender"]}"
                }
              }
            }
    return auth
  end

end
