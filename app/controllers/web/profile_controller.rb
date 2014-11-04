class Web::ProfileController < ApplicationController

  def index
  end

  def edit
  end

  def deactivate
    # deactivate current_user
    begin
      current_user.set_deactive
      Devise.sign_out_all_scopes ? sign_out : sign_out(current_user) unless current_user.blank?
      flash[:notice] = t(:deactivate)
      redirect_to root_path
    rescue => e
      flash[:notice] = t(:error)
      redirect_to root_path
    end
  end

end
