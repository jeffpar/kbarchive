---
layout: page
title: "Q93700: WFWG: Error Attempting to Move Local Schedule+ .CAL File"
permalink: kb/093/Q93700/
---

## Q93700: WFWG: Error Attempting to Move Local Schedule+ .CAL File

	Article: Q93700
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter a space after your logon name when logging into the Windows for
	Workgroups (WFWG) Schedule+ application, the following error message occurs when
	WFWG attempts to move the local .CAL file from within Schedule+:
	
	  There is not enough memory to display this dialog box. Please close some
	  windows and try again.
	
	The error message can also occur when you choose Create Archive or Export
	Appointments from the Schedule+ File menu.
	
	WORKAROUND
	==========
	
	Edit the SCHDPLUS.INI file using the steps outlined below to resolve the
	problem:
	
	1. Open the SCHDPLUS.INI file using a text editor such as Notepad.
	
	2. In the [Microsoft Schedule+] section of the file, the path and filename of
	  the local .CAL file appears as follows
	
	     LocalPath=D:\WFW\USER .CAL
	
	  where USER is the user name used at logon.
	
	3. Delete the space immediately following the user name. For example:
	
	     LocalPath=D:\WFW\USER.CAL
	
	4. Save the SCHDPLUS.INI file.
	
	5. Close Notepad and restart Schedule+.
	
	The local .CAL file can now be moved without errors.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
