---
layout: page
title: "Q92780: WFWG Setup Modifies Wrong Lines in CONFIG.SYS File"
permalink: kb/092/Q92780/
---

## Q92780: WFWG Setup Modifies Wrong Lines in CONFIG.SYS File

	Article: Q92780
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows for Workgroups Setup may ignore REM statements in the
	CONFIG.SYS file. If you are using a utility such as Bootcon, this can create
	configuration problems because Bootcon uses REMs to delimit multiple boot
	configurations. Windows for Workgroups Setup may inadvertently modify the wrong
	configuration. For example, Setup may change the path of the Microsoft LAN
	Manager Net command to the Windows for Workgroups directory.
	
	WORKAROUND
	==========
	
	To avoid this problem, back up CONFIG.SYS before you install Windows for
	Workgroups. After installation, you may need to edit the CONFIG.SYS file to
	ensure Windows for Workgroups drivers and other network drivers are correctly
	loaded under the proper boot configuration.
	
	As an alternative, you can upgrade to MS-DOS 6.2 and use the Multi-Config feature
	instead of Bootcon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 3.10 3.11 wfwfest multi-boot multi-config
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
