class Api::ProfileController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def deactivate
    user = User.find_by(email: params[:email])
    status = user.set_deactive if user
    Devise.sign_out_all_scopes ? sign_out : sign_out(user) unless user.blank?

    respond_to do |format|
      if status
        format.json{render :json => {:success => true, :status => t(:deactivate)} and return}
      else
        format.json {render :json => {:errors => true, :status => t(:error)} and return}
      end
    end
  end

end
