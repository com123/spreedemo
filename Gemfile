source "http://rubygems.org"

gem 'rails', '3.2.11'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'
group :production do
  gem 'pg'
  gem 'passenger'
end
group :development do 
   gem 'sqlite3'
   gem 'debugger'
end
gem 'spree', :git => 'https://github.com/com123/spreemodif.git'

gem 'spree_email_to_friend', :git => 'git://github.com/com123/spree_email_to_friend.git'
gem "recaptcha", :require => "recaptcha/rails"
gem 'execjs',  :platforms => :ruby
gem "spree_social", :git => "git://github.com/com123/spree_social-1.git"
gem 'therubyracer', '0.10.2', :platforms => :ruby

#gem 'spree', :path => '../spree'
gem 'spree_reviews', :git => 'git://github.com/com123/spree_reviews.git'
gem "spree_comments",:git => 'git://github.com/spree/spree_comments.git',:branch => '1-2-stable'
#gem "spree_customrole", :path => "spree_customrole"
#gem "spree_social", :git => "git://github.com/spree/spree_social.git" 
#gem 'spree_gateway', :git => 'git://github.com/spree/spree_gateway.git', :branch => '2-0-stable'	
gem 'devise-encryptable'
gem 'devise',"~>2.1.0"

gem 'spree_auth_devise', :git => 'git://github.com/com123/spree_auth_devise.git' , :branch => '1-3-stable'	
#gem "spree_social", :git => "git://github.com/spree/spree_social.git"
# Gems used only for assets and not required
# in production environments by default.

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end


gem 'jquery-rails'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'

