---
layout: page
title: "Q121423: WFWG Err Msg: Couldn't Locate Windows Installation"
permalink: /kb/121/Q121423/
---

## Q121423: WFWG Err Msg: Couldn't Locate Windows Installation

	Article: Q121423
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the IPCONFIG command at an MS-DOS command prompt from within the
	Windows directory, the following error message is displayed:
	
	  Error: couldn't locate Windows installation
	
	CAUSE
	=====
	
	This error message occurs when the Windows directory is not in the path.
	
	RESOLUTION
	==========
	
	Edit the AUTOEXEC.BAT file and add the Windows directory to the path. For
	example, at the MS-DOS command prompt type
	
	  edit c:\autoexec.bat
	
	press ENTER, and then change
	
	  path c:\dos;c:\ 
	
	to:
	
	  path c:\dos;c:\;c:\windows
	
	Save the file, exit MS-DOS Editor, and restart the system.
	
	Additional query words: 3.11 tcpip err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
