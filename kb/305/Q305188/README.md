---
layout: page
title: "Q305188: Integrating Passport Sign In Features for WindowsXP and Passport"
permalink: /kb/305/Q305188/
---

## Q305188: Integrating Passport Sign In Features for WindowsXP and Passport

	Article: Q305188
	Product(s): Microsoft Developer Network
	Version(s): 1.4,1.99,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.4, 1.99, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enable the new features for Passport Sign In with the Microsoft Windows XP
	operating system, such as the locally served credentials user interface, you
	must use the new methods for authentication.
	
	MORE INFORMATION
	================
	
	Passport methods that generated URLs for the Login server (such as LogoTag and
	AuthURL) have been superseded by newer APIs: LogoTag2, LoginUser and AuthURL2.
	(The older methods are still accessible but are being deprecated.) For more
	information, see the following Passport Software Development Kit (SDK) Web
	site:
	
	  http://www.passport.com/sdkdocuments/sdk14/
	
	Calls to LogoTag should be made instead to the LogoTag2 method. For more
	information, see the following Passport Software Development Kit (SDK) Web
	site:
	
	  LogoTag2
	  http://www.passport.com/sdkdocuments/sdk14/reference/scriptreference/ifaces/ipassportmanager2/logotag2.htm
	
	The syntax and signature for LogoTag2 are the same as for LogoTag. The only
	change that must be made to existing implementations is to change the method
	name in the call.
	
	Calls to AuthURL should be made instead to the AuthURL2 method. For more
	information, see the following Passport SDK Web site:
	
	  AuthURL2
	  http://www.passport.com/sdkdocuments/sdk14/Reference/scriptreference/ifaces/ipassportmanager2/authurl2.htm
	
	The syntax and signature for AuthURL2 are the same as for AuthURL. The only
	change that must be made to existing implementations is to change the method
	name in the call.
	
	The LoginUser method logs the user on, either by outputting a 302 redirect URL,
	or initiating a Passport-aware client authentication exchange. The LoginUser
	method supports Passport-aware client applications and the credentials manager
	as used in the Windows XP operating system. For more information, see the
	following Passport SDK Web site:
	
	  LoginUser
	  http://www.passport.com/sdkdocuments/sdk14/Reference/scriptreference/ifaces/ipassportmanager2/loginuser.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport199 kbPassport200 kbPassportSearch
	Version           : :1.4,1.99,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
