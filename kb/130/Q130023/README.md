---
layout: page
title: "Q130023: DOCERR: RasDial() with Username and Password as Empty Strings"
permalink: /kb/130/Q130023/
---

## Q130023: DOCERR: RasDial() with Username and Password as Empty Strings

	Article: Q130023
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr kbAPI kbRAS kbSDKPlatform kbOSWin311 kbGrpDSNet
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the RasDial() function incorrectly states the possible
	values for the members of one of the parameters, the RASDIALPARAMS structure.
	The documentation states:
	
	  If both the szUserName and the szPassword members are empty strings (""),
	  Remote Access uses the username and password of the currently logged-on user
	  for authentication.
	
	This API explicitly requires the name and the password for a valid RAS account
	even if the account belongs to the currently logged-on user. Specifying empty
	strings for the username and password members of RASDIALPARAMS results in
	authentication failure.
	
	NOTE: This is only a problem in 16-bit Windows. The Win32 version of the
	RasDial() function implements it as documented.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbdocerr kbAPI kbRAS kbSDKPlatform kbOSWin311 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
