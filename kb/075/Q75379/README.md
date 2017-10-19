---
layout: page
title: "Q75379: Minimal Install Does Not Set COMSPEC to Upgraded COMMAND.COM"
permalink: /kb/075/Q75379/
---

## Q75379: Minimal Install Does Not Set COMSPEC to Upgraded COMMAND.COM

	Article: Q75379
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Upon completing a minimal installation of MS-DOS using "a:setup /m", renaming
	the .NEW files, and rebooting your computer, you may receive the following
	message, at which time the computer hangs:
	
	  Bad or missing command interpreter
	
	MORE INFORMATION
	================
	
	Setup renames the AUTOEXEC.BAT file and a CONFIG.SYS file during minimal
	installation, giving them a new file extension of .NEW. Setup then modifies the
	AUTOEXEC.NEW and CONFIG.NEW files. Setup includes the following line in
	CONFIG.SYS:
	
	  shell=c:\dos\command.com c:\dos\ /p
	
	and remarks out any COMSPEC variable in AUTOEXEC.BAT as follows:
	
	     rem set comspec=[drive:][path]filename
	
	However, "setup /m" only copies the upgraded COMMAND.COM file to the root
	directory. It leaves the old COMMAND.COM file from the previous version of DOS
	in the DOS subdirectory, even though it sets the new COMSPEC variable there.
	
	To correct this problem, boot with the Uninstall disk or an MS-DOS system disk,
	and then copy the upgraded COMMAND.COM file from the root directory or the
	Uninstall/system disk to the DOS directory.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
