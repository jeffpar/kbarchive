---
layout: page
title: "Q104034: DBLSPACE ERR Msg: Invalid DBLSPACE.INI Setting: SWITCHES=/N"
permalink: /kb/104/Q104034/
---

## Q104034: DBLSPACE ERR Msg: Invalid DBLSPACE.INI Setting: SWITCHES=/N

	Article: Q104034
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you modify the DBLSPACE.INI file with the DBLSPACE /SWITCHES command in
	MS-DOS 6.2 and then uninstall 6.2 and use MS-DOS 6.0, you receive one of the
	following error messages when you boot your computer:
	
	  Invalid DBLSPACE.INI setting: SWITCHES=/N
	  Invalid DBLSPACE.INI setting: SWITCHES=/F
	  Invalid DBLSPACE.INI setting: SWITCHES=/FN
	
	CAUSE
	=====
	
	These switches are not valid for the MS-DOS 6.0 DBLSPACE.INI file.
	
	RESOLUTION
	==========
	
	To work around this problem, edit the DBLSPACE.INI file and then add the
	switches to the CONFIG.SYS file. For example:
	
	1. Use the ATTRIB program to clear the DBLSPACE.INI file attributes. For
	  example:
	
	     attrib -r -h -s h:\dblspace.ini
	
	  To determine which drive is your host drive, type "dblspace /list" (without
	  the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Using MS-DOS Editor, edit the DBLSPACE.INI file and remove the SWITCHES
	  entries.
	
	3. Save the DBLSPACE.INI file.
	
	4. Edit the CONFIG.SYS file on drive C and add the SWITCHES entries.
	
	5. Save the CONFIG.SYS file and exit MS-DOS Editor.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
