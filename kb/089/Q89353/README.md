---
layout: page
title: "Q89353: WFWG Err Msg: Insufficient Memory Available... when Starting"
permalink: /kb/089/Q89353/
---

## Q89353: WFWG Err Msg: Insufficient Memory Available... when Starting

	Article: Q89353
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may appear when you start Windows for Workgroups:
	
	  Insufficient memory available
	
	The error message appears in a dialog box with "Windows for Workgroups" in the
	title bar.
	
	CAUSE
	=====
	
	There are too many drivers listed in the Drivers portion of Control Panel. When
	Windows for Workgroups starts, all of these drivers are loaded into conventional
	memory, and the amount of conventional memory available is reduced with the
	loading of each driver. When there is too little conventional memory for Windows
	for Workgroups to load the next driver, an error message appears.
	
	WORKAROUND
	==========
	
	The amount of available conventional memory must be increased. You can increase
	conventional memory by taking one or a combination of the following actions:
	
	- Load fewer drivers in the CONFIG.SYS and AUTOEXEC.BAT files.
	
	- Load some of the drivers in the CONFIG.SYS or AUTOEXEC.BAT files into high
	  memory.
	
	- Load fewer drivers in the Drivers portion of Control Panel.
	
	- Set LASTDRIVE (in CONFIG.SYS) to a letter such as J or K, rather than Z.
	  Since each letter uses about 100 bytes more memory than the preceding letter,
	  limiting the drive letters in this way can prevent the error from occurring.
	  (Note that this does limit the number of network drives that you can access.)
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
