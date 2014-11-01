class Web::SessionsController < Devise::SessionsController

  def after_sign_in_path_for(user)
    if user.sign_in_count == 1
      # binding.pry
      user_edit_profile_path(user)
    else
      super
    end
  end

end
