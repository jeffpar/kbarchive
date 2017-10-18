---
layout: page
title: "Q67516: Windows Err Msg: Cannot Save New Settings"
permalink: kb/067/Q67516/
---

## Q67516: Windows Err Msg: Cannot Save New Settings

	Article: Q67516
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The WIN.INI file must be set for read/write access to properly run
	Microsoft Windows. If the file attributes for WIN.INI are set to Read Only
	you may receive one of the following error messages:
	
	  Cannot save new settings
	
	  -or-
	
	  This file exists and is read-only. Use a different filename.
	
	Changing this attribute at the MS-DOS level to read/write corrects
	this problem. (Refer to your MS-DOS manual for specific instructions
	on setting the MS-DOS file attributes.) You can also change the file
	attributes with the Windows File Manager using the Change Attributes
	command from the File menu.
	
	In a network situation, verify that you have read/write access to the
	WIN.INI file.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 application writes
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
