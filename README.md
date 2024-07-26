# WhiteLabelSampleApp

"white-label" app example with Re.Pack used for code-splitting

Reference:
- https://re-pack.dev/docs/getting-started
- https://re-pack.dev/docs/code-splitting/guide-async-chunks
- https://medium.com/@michaelmavris/how-to-create-a-white-label-ios-app-part-1-a8712f4756e1

## iOS notes

- to achieve different flavors in iOS, multiple targets are configured in XCode
- each target need to be initialized with Cocoapods setup in Podfile
- each target need to have its own resources
   - all assets, storyboards and app icons need to be put in separate resource directories and assigned to specific target
   - .plist files need to be put in separate resource directories
   - initial "white-label" configuration can be kept in .plist files (apart from sensitive data)
- to connect "white-label" configuration dictionary with React Native root view, additional handler class need to be implemented
   - the handler class loads .plist dictionary
   - the dictionary is then used to populate `self.initialProps` on delegate class that extends `RCTAppDelegate`

## Android notes
- to achieve different flavors in Android, some Gradle configuration is required:
   - `flavorDimensions` & `productFlavor` properties in `android` block needs to be configured
   - `debuggableVariants` list property in React Native Gradle Plugin's `react` block needs to be modified to mark flavored debug variants as debuggable
- each flavor can have its own resources
- to connect "white-label" configuration with React Native root view, the `getLaunchOptions` method on `ReactActivityDelegate` returned from `createReactActivityDelegate` on `ReactActivity` needs to be overriden
   - it returns Java's `Bundle` type
   - to populate `Bundle`, each resource value needs to be manually added
   - there's no way to automatically load all resources to `Bundle` as different types of resources live under different XML files and each of them needs to be required with its key/id
