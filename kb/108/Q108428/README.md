---
layout: page
title: "Q108428: Err Msg: An Error Occurred Accessing the Security Settings..."
permalink: /kb/108/Q108428/
---

## Q108428: Err Msg: An Error Occurred Accessing the Security Settings...

	Article: Q108428
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the NET START command, you receive one of the following error
	messages:
	
	  Error 3: The specified path was not found. An error occurred accessing the
	  security settings file.
	
	  -or-
	
	  Error 2625: WFWSYS.CFG is Invalid.
	
	CAUSE
	=====
	
	These errors can be caused by one or both of the following situations:
	
	- The DEVDIR= line in the [network drivers] section of the SYSTEM.INI file is
	  set to a directory different from the directory where the WFWSYS.CFG file is
	  located.
	
	  If DEVDIR= points to the directory where the WFWSYS.CFG is located and you
	  still receive one of these error messages, you may have a damaged WFWSYS.CFG
	  file, or your WFWSYS.CFG file was copied from another computer. In this case,
	  you must reinstall Windows for Workgroups 3.11 or contact your system
	  administrator.
	
	
	- You are running a shared copy of Windows for Workgroups on a Novell NetWare
	  network and your Windows directory is set as a map root (for example,
	  U:\<UserName>\Windows).
	
	RESOLUTION
	==========
	
	- To correct this problem, change the DEVDIR line so that it points to the
	  correct location of the WFWSYS.CFG file.
	
	- Change the map root from the Windows directory to your user directory (for
	  example, U:\<UserName>).
	
	Additional query words: 3rdparty err msg administrator admin security stamp stamped
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
