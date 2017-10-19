---
layout: page
title: "Q299493: Passport Manager Object Misconfigured"
permalink: /kb/299/Q299493/
---

## Q299493: Passport Manager Object Misconfigured

	Article: Q299493
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to a Passport site, you may receive the following error
	message:
	
	  Passport Manager object misconfigured
	
	CAUSE
	=====
	
	The error is usually caused by an incorrect registry key value, or by missing or
	corrupted encryption keys.
	
	RESOLUTION
	==========
	
	Try reloading the page once; there are occasionally lingering configuration
	issues that appear only the first time that a Passport Manager object is
	initiated on a server.
	
	If the error appears again, check the registry key values by using the Passport
	Manager Administration utility and verify that all configuration values are
	correct. The encryption keys that you received at registration may have to be
	reinstalled on your Web server if you have recently reinstalled the Passport
	Software Development Kit (SDK).
	
	Verify that you are following the instructions that are provided with the key
	installation program.
	
	REFERENCES
	==========
	
	For more information about installing Passport encryption keys, see the
	following Passport SDK Web site:
	
	  Installing the Encryption Key
	  http://www.passport.com/sdkdocuments/sdk14/implementation/enckey.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
