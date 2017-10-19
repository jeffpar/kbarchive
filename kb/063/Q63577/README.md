---
layout: page
title: "Q63577: Terminal: Sending Escape Sequences Assigned to Function Keys"
permalink: /kb/063/Q63577/
---

## Q63577: Terminal: Sending Escape Sequences Assigned to Function Keys

	Article: Q63577
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to send a sequence of escape characters in the Terminal program
	supplied with Microsoft Windows versions 3.0 and 3.1 and Microsoft Windows for
	Workgroups, use the following:
	
	  ^[
	
	MORE INFORMATION
	================
	
	This keystroke combination is equivalent to pressing ESC on a VT100 terminal.
	You must use these commands when you want to assign them to a function key
	because if you push the ESC key when assigning keys as outlined on page 330 of
	the "Microsoft Windows User's Guide" version 3.0 manual, you cancel the dialog
	box.
	
	REFERENCES
	==========
	
	A complete list of escape character sequences for the VT100 is outlined on page
	579 of the "User's Guide" for version 3.0. This information is found on page 391
	of the "User's Guide" for Windows 3.1.
	
	
	KBCategory: kbusage kbtool
	KBSubcategory: win30 win31 wfw wfwg wincomm
	
	Additional query words: winapps win31 wfwg win30 3.00 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
