---
layout: page
title: "Q10856: HOWTO: Change the Name of a Second Instance of an Application"
permalink: /kb/010/Q10856/
---

## Q10856: HOWTO: Change the Name of a Second Instance of an Application

	Article: Q10856
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running a Windows-based application with multiple instances, check
	hPrevInstance if you need to know if your instance is the first instance. If it
	is NULL, this is a new instance of static data; if it is not NULL, it is not a
	new instance of static data. You can give the instance a unique name by doing
	either of the following:
	
	1. Use CreateWindow() and give it a unique name.
	
	2. Use GetWindowLong() to access the CREATSTRUCT structure passed when
	  processing a WM_CREATE message and specifically change the lpszName field (if
	  you want to change the caption name on the existing, already named instance).
	
	You cannot change the icon name dynamically. You should use the second method to
	update the icon name from untitled to a unique name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
