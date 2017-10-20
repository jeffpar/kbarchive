---
layout: page
title: "Q69027: Handling Critical Errors in Windows-Based Application"
permalink: /kb/069/Q69027/
---

## Q69027: Handling Critical Errors in Windows-Based Application

{% raw %}

	Article: Q69027
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows SetErrorMode() function controls whether Windows handles MS-DOS
	Function 24H errors or allows the calling application to handle them. Listed
	below is an example of an MS-DOS Function 24H error and Windows's method for
	handling the error: if an application attempts to access drive A and there is no
	disk in that drive, Windows displays the System Error message box "Cannot read
	from drive A: (Cancel) (Retry)."
	
	Calling SetErrorMode() allows the application to handle these messages rather
	than defaulting to the System Error message box.
	
	The following code fragment demonstrates this process:
	
	    SetErrorMode(1);   // Allow application to handle system error
	        ...
	       /* If error occurs, handle it appropriately. */ 
	        ...
	     SetErrorMode(0);   // Windows will display the standard
	                        // INT 24H error message box for any other
	                        // System Errors.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
