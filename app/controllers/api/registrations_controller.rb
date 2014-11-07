class Api::RegistrationsController < Devise::RegistrationsController
  skip_before_filter :verify_authenticity_token

  def new
    super
  end

  def create
    build_resource(sign_up_params)
    resource_saved = resource.save
    if resource_saved
      respond_to do |format|
      format.json {
            render :json => { :success => true, :user => resource }
          }
      end
    else
      respond_to do |format|
        format.json {
              render :json => { :error => true, :status => resource.errors.full_messages.join(', ') }
            }
      end
    end
  end

end