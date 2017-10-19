---
layout: page
title: "Q125040: WFWG Err Msg: Setup Cannot Find or Update Your AUTOEXEC.BAT..."
permalink: /kb/125/Q125040/
---

## Q125040: WFWG Err Msg: Setup Cannot Find or Update Your AUTOEXEC.BAT...

	Article: Q125040
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Windows for Workgroups Network Setup, you receive the
	following error message:
	
	  Setup cannot find or update your AUTOEXEC.BAT and CONFIG.SYS files on drive
	  C. If you started your system from a floppy disk, make sure it is not
	  write-protected. Insert the disk in drive A and choose the Retry button.
	
	  To place the new version of these files in your Windows directory instead of
	  on the floppy disk, choose the Cancel button.
	
	When you choose the Cancel button, you may receive the following error message:
	
	  Windows Setup cannot find or write to the drive where the CONFIG.SYS and
	  AUTOEXEC.BAT files are located. CONFIG.SYS will be saved as
	  C:\WINDOWS\CONFIG.SYS.
	
	CAUSE
	=====
	
	These error messages can occur if you have too many files in the root directory
	of your hard disk. The maximum number of files and directories in the root
	directory is 512.
	
	RESOLUTION
	==========
	
	To resolve this situation, move or delete some of the files in your hard disk's
	root directory.
	
	Additional query words: 3.10 3.11 error winsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
