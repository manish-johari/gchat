class CreateProfilePhotos < ActiveRecord::Migration
  def change
    create_table :profile_photos do |t|
      t.integer :user_id
      t.string :image_file_name
      t.string :image_file_size
      t.string :image_content_type
      t.datetime :image_update_at
      t.boolean :is_default

      t.timestamps
    end
  end
end
