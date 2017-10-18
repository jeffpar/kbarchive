---
layout: page
title: "Q114360: Modifying Configuration Files When Upgrading from Novell DOS 7"
permalink: kb/114/Q114360/
---

## Q114360: Modifying Configuration Files When Upgrading from Novell DOS 7

	Article: Q114360
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Novell DOS 7 (without compression installed) to MS-DOS
	6.21, you receive the following error message at the beginning of Setup:
	
	  Your CONFIG.SYS file contains commands that are not valid MS-DOS commands.
	  You can have Setup create new AUTOEXEC.BAT and CONFIG.SYS files, or you can
	  have Setup disable any invalid commands it finds in your current AUTOEXEC.BAT
	  and CONFIG.SYS files. If you choose to have Setup create new files, your
	  original files will be renamed and stored in the root directory of your
	  startup disk.
	
	You have the following two options:
	
	- Create New AUTOEXEC.BAT And CONFIG.SYS
	
	- Modify Original Files
	
	If you choose Modify Original Files, Setup updates the files to load MS-DOS
	device drivers but does not remove all the Novell DOS device drivers. This could
	result in your system trying to load more than one expanded memory manager or
	disk cache.
	
	WORKAROUND
	==========
	
	To work around this problem, choose Create New AUTOEXEC.BAT And CONFIG.SYS when
	you install MS-DOS 6.21 over Novell DOS 7 or manually update your configuration
	files using MS-DOS Editor.
	
	Additional query words: netware 7.0 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	
