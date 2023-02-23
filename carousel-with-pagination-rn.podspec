require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']
  s.homepage     = package['homepage']
  s.source       = { :git => 'https://github.com/dvijeniii05/carousel-with-pagination-rn.git', :tag => "v#{s.version}" }

  s.authors      = package['author']
  s.platforms    = { :ios => '11.0', :tvos => '12.0' }

    # Dependencies
    s.dependency 'React-Core'
end