---
layout: page
title: "Q72160: MS-DOS 5 README.TXT: Installing on OS/2 Dual-Boot System"
permalink: /kb/072/Q72160/
---

## Q72160: MS-DOS 5 README.TXT: Installing on OS/2 Dual-Boot System

	Article: Q72160
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 README.TXT file.
	This is the packaged product of MS-DOS version 5.0 that is licensed to OEMs
	(original equipment manufacturers).
	
	MORE INFORMATION
	================
	
	Installing MS-DOS 5.0 on an OS/2 Dual-Boot System
	-------------------------------------------------
	
	If you install your operating system by using the BOOT /OS2 or BOOT /DOS command,
	install MS-DOS 5.0 as follows:
	
	1. Start DOS by using the BOOT /DOS command.
	
	2. Run Setup.
	
	If you use the form of an OS/2 dual-boot system that prompts you at startup to
	select an operating system, do the following:
	
	1. Install MS-DOS 5.0 on your hard disk.
	
	2. Create a system disk by inserting a disk in drive A and typing the FORMAT A:
	  /S command.
	
	3. Delete the COMMAND.COM file from the floppy disk.
	
	4. On the floppy disk, create a CONFIG.SYS file that includes the following:
	
	  shell=c:\dos\command.com /p /e:256
	
	5. On the floppy disk, create an AUTOEXEC.BAT file that includes the following
	  commands:
	
	  path=c:\dos
	  append /e
	  append c:\dos
	  prompt $p$g
	  set comspec=
	
	6. Reinstall the OS/2 operating system on your hard disk.
	
	7. Insert in drive A the system disk you created and restart your computer.
	
	8. Run the dual-boot program (C:\DUALBOOT\DUALBOOT.EXE).
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
