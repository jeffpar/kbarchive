---
layout: page
title: "Q162330: Err Msg: Windows NT Could Not Start..."
permalink: /kb/162/Q162330/
---

## Q162330: Err Msg: Windows NT Could Not Start...

	Article: Q162330
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT, the following error message may be displayed:
	
	  Windows NT could not start because of a computer hardware configuration
	  problem.
	
	  Could not read from the selected boot disk. Check boot path and disk
	  hardware.
	
	  Please check the Windows NT(TM) documentation about hardware disk
	  configuration and your hardware reference manuals for additional information.
	
	CAUSE
	=====
	
	This behavior can occur if any part of the arcpath statement in the Boot.ini
	file uses all uppercase charcters. For example:
	
	  MULTI(0)DISK(0)RDISK(0)PARTITION(1)\NT40="Windows NT Workstation
	  Version 4.00"
	
	RESOLUTION
	==========
	
	Change the arcpath statement to use lowercase letters. For example:
	
	  multi(0)disk(0)rdisk(0)partition(1)\NT40="Windows NT Workstation
	  Version 4.00"
	
	If the computer uses the FAT file system, boot from a bootable MS-DOS floppy disk
	and perform the following steps:
	
	1. Type the following line:
	
	  attrib -s -h -r c:\boot.ini
	
	2. Use any text editor to edit the Boot.ini file. Make the appropriate changes
	  to the arcpath statement.
	
	3. Save and then close the Boot.ini file.
	
	4. Type the following line:
	
	  attrib +s +h +r c:\boot.ini
	
	If the type of file system is NTFS, you can use the Emergency Repair procedure to
	fix this, choosing only the options to Inspect startup environment and Inspect
	Boot Sector (unchecking the other two options).
	
	To start the Emergency Repair procedure, insert your Windows NT setup floppy disk
	#1 into your floppy drive and reboot your machine. Follow the instructions on
	the screen, and press "R" for Repair when prompted.
	
	Note that you do not need to have recently updated your Emergency Repair
	information when choosing only the options to Inspect startup environment and
	Inspect Boot Sector.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	
	=============================================================================
	
