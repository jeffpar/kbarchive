---
layout: page
title: "Q126697: Err Msg: ERROR 3649: The IFSHLP.SYS Driver Is Not Installed"
permalink: /kb/126/Q126697/
---

## Q126697: Err Msg: ERROR 3649: The IFSHLP.SYS Driver Is Not Installed

	Article: Q126697
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the command NET START NETBEUI you receive the following error
	message:
	
	  ERROR 3649: To load NetBEUI, the NDISHLP.SYS driver must be listed in the
	  [Network Drivers] section of the SYSTEM.INI file.
	
	CAUSE
	=====
	
	This error message can occur for either of the following reasons:
	
	- The IFSHLP.SYS driver is not being loaded in the CONFIG.SYS file and you are
	  trying to run the NET START NETBEUI command.
	
	- The "Transport=" line is missing the NDISHLP.SYS driver entry in the [Network
	  Drivers] section of the SYSTEM.INI file.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Verify that the NDISHLP.SYS driver is listed in the "Transport=" line in the
	  [Network Drivers] section of the SYSTEM.INI file.
	
	2. Edit the CONFIG.SYS file with any text editor (such as Notepad). If it does
	  not already exist, place the line "device=c:\<windows>\ifshlp.sys"
	  (without the quotation marks) at the end of the file. Substitute the name of
	  your Windows directory for <windows> in the line above. Save and then
	  close the CONFIG.SYS file, quit Windows, and restart your computer.
	
	MORE INFORMATION
	================
	
	The IFSHLP.SYS driver is not automatically added in the CONFIG.SYS file when you
	are using multiple configurations.
	
	Additional query words: 3.11 netbuie ndishelp
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
