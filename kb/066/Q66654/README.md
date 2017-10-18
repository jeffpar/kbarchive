---
layout: page
title: "Q66654: INFO: Possible Causes for System Resource Reduction"
permalink: kb/066/Q66654/
---

## Q66654: INFO: Possible Causes for System Resource Reduction

	Article: Q66654
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 10-JUN-1999
	
	3.00  3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can note via Program Manager's "About Box" that Windows's System Resources
	can be inadvertently reduced by a Windows-based application, causing subsequent
	RegisterWindow() or CreateWindow() function calls to fail.
	
	The system resources are a reflection of the lower USER and GDI's data segments.
	The following steps eliminate the major causes of USER's data segment fill-up
	listed in the following:
	
	- Ensure that the cbClsExtraBytes and cbWndExtraBytes are set to 0 in the
	  WNDCLASS structure, unless the application is definitely using them.
	
	- Ensure that a MakeProcInstance() is performed and the window procedure is
	  EXPORTed in the .DEF file.
	
	- Use CVW to verify that the application is receiving the WM_CREATE message.
	
	- Confirm that all menus created, loaded, or added dynamically [that is, using
	  CreateMenu(), AppendMenu(), and so forth] are properly destroyed before
	  terminating the application.
	
	The main reason why GDI's data segment fills up is that objects are being created
	and are not being destroyed when they are no longer needed.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
