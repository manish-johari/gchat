class Api::SessionsController < Devise::SessionsController
  skip_before_filter :verify_authenticity_token, :only => [:create, :destroy]
  
  def create
    self.resource = warden.authenticate!(auth_options)
  end

  def destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    respond_to do |format|
      format.json {
            render :json => { :success => true, status: 'logged out'}
          }
    end
  end
end