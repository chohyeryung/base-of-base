class RemoveTitleFromArticle < ActiveRecord::Migration[6.1]
  def change
    remove_column :articles, :title, :string
  end
end
