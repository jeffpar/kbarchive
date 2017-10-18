---
layout: page
title: "Q95855: Backup Err Msg: Not Ready Error Accessing Drive x"
permalink: kb/095/Q95855/
---

## Q95855: Backup Err Msg: Not Ready Error Accessing Drive x

	Article: Q95855
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you back up to a network drive
	using Microsoft Backup for Windows
	
	  Not ready error accessing drive x
	
	where x is the letter of your network drive.
	
	CAUSE
	=====
	
	This error occurs when the network generates a timeout error, due to the way
	MS-DOS creates a file for the backup. Therefore, this error occurs more often
	with a slow server or when you're doing a very large backup.
	
	WORKAROUND
	==========
	
	To work around this problem, either back up smaller portions of your hard disk
	or increase your timeout setting for your network. If you are using Microsoft
	LAN Manager version 2.1 or later, or a 100-percent LAN Manager-compatible
	network, add the following statement to the [workstation] section of the
	LANMAN.INI file.
	
	  SESSTIMEOUT=180
	
	
	Additional query words: 6.00 6.20 decnet ibm lan server manager mwbackup compatible
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
