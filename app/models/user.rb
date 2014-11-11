class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable,
         :confirmable

  has_many :profile_photos
  has_one :profile

  def self.from_omniauth(auth, current_user)
    authorization = Authorization.where(:provider => auth["provider"], :uid => auth["uid"].to_s, :token => auth["credentials"]["token"], :secret => auth["credentials"]["secret"]).first_or_initialize
    if authorization.user.blank?
      user = current_user.nil? ? User.where('email = ?', auth["info"]["email"]).first : current_user
      if user.blank?
       user = User.new
       user.password = Devise.friendly_token[0,10]
       # user.name = auth.info.name
       user.email = auth["info"]["email"]
       user.skip_confirmation! # skip confirmation through email during signup via facebook.
       user.save(:validate => false)
     end
     # authorization.username = auth.info.nickname
     authorization.user_id = user.id
     authorization.save
    end
    authorization.user
  end

  def set_deactive
    self.is_active = false
    self.save!
  end

  def set_active
    self.is_active = true
    self.save!
  end

  def is_deactive?
    # return true if user is not active (is_active: false)
    !is_active
  end

end
