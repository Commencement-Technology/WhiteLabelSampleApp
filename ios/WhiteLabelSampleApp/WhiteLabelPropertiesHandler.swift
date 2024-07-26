import Foundation

@objc(WhiteLabelPropertiesHandler)
public class WhiteLabelPropertiesHandler: NSObject {
  @objc
  public static let shared = WhiteLabelPropertiesHandler()
  
  private override init() {}
  
  @objc
  public func loadProperties() -> NSDictionary {
    guard let propertiesPath = Bundle.main.url(forResource: Bundle.main.bundleIdentifier, withExtension: ".plist") else {
      return [:]
    }
    guard let properties = try? NSDictionary(contentsOf: propertiesPath, error: ()) else {
      return [:]
    }
    return properties
  }
}
