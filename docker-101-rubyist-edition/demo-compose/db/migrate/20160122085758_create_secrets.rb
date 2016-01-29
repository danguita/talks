class CreateSecrets < ActiveRecord::Migration
  def change
    create_table :secrets do |t|
      t.string :key
      t.string :value

      t.timestamps null: false
    end
  end
end
