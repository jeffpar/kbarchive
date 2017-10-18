---
layout: page
title: "Q89568: Additional Documentation for GetDOSEnvironment()"
permalink: kb/089/Q89568/
---

## Q89568: Additional Documentation for GetDOSEnvironment()

	Article: Q89568
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Add the following comment to the documentation for GetDOSEnvironment() on page
	366 of the Microsoft Windows Software Development Kit (SDK) "Programmer's
	Reference, Volume 2: Functions" manual:
	
	  If the TEMP MS-DOS environment variable points to an invalid directory, the
	  GetDOSEnvironment function removes the TEMP environment variable from the
	  returned environment string and replaces its contents with "x" characters.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
