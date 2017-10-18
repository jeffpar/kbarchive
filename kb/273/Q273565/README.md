---
layout: page
title: "Q273565: Unexpected Error 0x8007c801 When You Start the FTP Service"
permalink: kb/273/Q273565/
---

## Q273565: Unexpected Error 0x8007c801 When You Start the FTP Service

	Article: Q273565
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the File Transport Protocol (FTP) service, you may receive the
	following error message:
	
	  Internet Service Manager: Unexpected error 0x8007c801 occurred
	
	CAUSE
	=====
	
	The behavior can occur if one of the following has occured:
	
	- The Allow Anonymous Connections check box is not selected and the user name
	  for anonymous access is missing.
	
	- Internet Information Services (IIS) has previously been installed without the
	  FTP service, and anonymous access has been disabled from the WWW Service
	  Master Properties. When the FTP service is installed later, it cannot start
	  because the required AnonymousUserName key is not inherited. The FTP Service
	  Master Properties inherits some settings from the WWW Service Master
	  Properties, and because anonymous access has been disabled, the anonymous
	  user account is not inherited. This causes all new FTP sites to fail with the
	  error message above.
	
	RESOLUTION
	==========
	
	1. Using the Microsoft Management Console (MMC) Internet Service Manager
	  snap-in, open the Internet Information Services (IIS) server snap-in.
	
	2. Right-click the name of the server, and then click Properties.
	
	3. In the Master Properties drop-down list, click FTP Service, and then click
	  Edit.
	
	4. Click the Security Accounts tab.
	
	5. Select the Allow Anonymous Connections check box and enter a valid user
	  account to use for anonymous access to this resource.
	
	6. Click Apply to apply the settings.
	
	NOTE: If you prefer not to allow anonymous connections, you can clear the Allow
	Anonymous Connections check box.
	You can now start the FTP site without receiving the error.
	
	MORE INFORMATION
	================
	
	
	Additional query words: iis 5 0x8007c801
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
