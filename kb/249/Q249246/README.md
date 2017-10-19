---
layout: page
title: "Q249246: PC MMTA: Drive Is Either Local, Used, or Greater Than Lastdrive"
permalink: /kb/249/Q249246/
---

## Q249246: PC MMTA: Drive Is Either Local, Used, or Greater Than Lastdrive

	Article: Q249246
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade the Dispatch.exe program for Microsoft Mail Multitasking MTA
	for Windows NT (NT MMTA) to version 3.5.23 or later, if you use DrivesUNC
	statements in the Dispatch.ini file and run the Dispatch program from the
	command line, the following error message is displayed:
	
	  Drive is either local, used or greater than lastdrive.
	
	CAUSE
	=====
	
	Version 3.5.23 of the Dispatch.exe program was changed to accept drive letters
	so that the Dispatch program and the External program can use drives from
	different pools of drives.
	
	RESOLUTION
	==========
	
	Add the drive letter or range to the following line in the Dispatch.ini file:
	
	  DrivesDynamic=<drive letter or range>
	
	In the following example TV is the drive range, but you can use any free drive
	letters:
	
	  [dispatch]
	  DrivesDynamic=tv
	  Drivesunc=\\server\share
	  Drivesunc=\\server\share
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
