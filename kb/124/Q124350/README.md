---
layout: page
title: "Q124350: WFWG Err Msg: The API Return Buffer Is Too Small"
permalink: kb/124/Q124350/
---

## Q124350: WFWG Err Msg: The API Return Buffer Is Too Small

	Article: Q124350
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a password list for the first time, or try to create a
	password list for a new user, the following error message may be displayed:
	
	  The API return buffer is too small
	
	CAUSE
	=====
	
	This error message is displayed when a forward slash is included in the Windows
	portion of the path statement (that is, the path reads C:/<WINDOWS
	DIRECTORY> instead of C:\<WINDOWS DIRECTORY>). This error message may
	also occur if there is a missing slash in the windows path.
	
	RESOLUTION
	==========
	
	To prevent this error message, change the forward slash in the path entry to a
	backslash. To do this, type the following at the MS-DOS command prompt:
	
	  edit autoexec.bat
	
	After you make the change save and close the file.
	
	MORE INFORMATION
	================
	
	Windows starts correctly in this situation because MS-DOS can use either slash
	mark; however, you cannot set up applications, and applications that rely on the
	Windows entry in the path statement do not function correctly. For example, if
	you try to run Windows Setup or Network Setup, you receive the error message
	
	  You are attempting to set up Windows from within Windows. Quit Windows and
	  type 'setup' at the MS-DOS command prompt.
	
	Additional query words: 3.11 pwl err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
