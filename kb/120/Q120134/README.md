---
layout: page
title: "Q120134: Workgroup Add-On for MS-DOS Continuously Accesses Hard Disk"
permalink: kb/120/Q120134/
---

## Q120134: Workgroup Add-On for MS-DOS Continuously Accesses Hard Disk

	Article: Q120134
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share a network printer (NET SHARE PRINTER=LPTx) from a Workgroup
	Add-On for MS-DOS machine and you change to a large directory (more than 50
	files), your hard disk continuously spins. This continuous access slows down
	other commands (such as DIR), making your computer work slower.
	
	CAUSE
	=====
	
	Workgroup Add-On for MS-DOS uses conventional memory to spool print jobs in
	order to be backwards compatible. This spooler requires buffers or a drive cache
	to do to operate optimally.
	
	RESOLUTION
	==========
	
	To stop the spooler from continuously accessing the hard disk in large
	directories, do the following:
	
	- Open the AUTOEXEC.BAT file in a text editor (such as Windows Notepad) and set
	  SMARTDRV.EXE as the first statement.
	
	-or-
	
	- Open the CONFIG.SYS file in a text editor (such as Windows Notepad) and set
	  BUFFERS to a value greater than 30.
	
	Additional query words: 3.11 slow wgao
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
