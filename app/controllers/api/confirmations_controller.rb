class Api::ConfirmationsController < Devise::ConfirmationsController
  skip_before_filter :verify_authenticity_token

  def create
    self.resource = resource_class.send_confirmation_instructions(resource_params)
    if successfully_sent?(resource)
      respond_to do |format|
      format.json {
            render :json => { :success => true }
          }
      end
    else
      respond_to do |format|
      format.json {
            render :json => { :error => true, :error => t(:error) }
          }
      end
    end
  end
  
end