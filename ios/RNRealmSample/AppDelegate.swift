//
//  AppDelegate.swift
//  RNRealmSample
//
//  Created by Developer on 10/28/17.
// 
//

import UIKit
import RealmSwift

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    var jsCodeLocation: URL? = nil
    static var sharedInstance: AppDelegate {
        get {
            return UIApplication.shared.delegate as! AppDelegate
        }
    }

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        self.jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
        self.window = UIWindow.init(frame: UIScreen.main.bounds)
        RCCManager.sharedIntance().initBridge(withBundleURL: self.jsCodeLocation)
        return true
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }
  
    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }
}

