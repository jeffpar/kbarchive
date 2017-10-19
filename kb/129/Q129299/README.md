---
layout: page
title: "Q129299: Setup Requests Disk 9 with Multiple CD-ROM Drives"
permalink: /kb/129/Q129299/
---

## Q129299: Setup Requests Disk 9 with Multiple CD-ROM Drives

	Article: Q129299
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 3.51 Setup goes through two processes when choosing the CD-ROM
	drive from which Windows NT 3.51 will be set up. First, when Setup is in text
	mode, Setup prompts you to choose SCSI drives on your machine and loads Windows
	NT 3.51 from the first drive specified. Second, when Setup is in the graphical
	user interface (GUI) mode, Setup accesses the CD-ROM drive depending on the
	priority that the CD-ROM drive has in the computer. This situation might cause
	the following error message to be displayed:
	
	  Please insert Windows NT Workstation/Server diskette # <disk number> or
	  Windows NT Workstation/Server CD-ROM.
	
	RESOLUTION
	==========
	
	To set up Windows NT 3.51 on computers with multiple CD-ROM drives installed:
	
	- Choose the CD-ROM drive that has first priority. You will not be able to view
	  which CD-ROM drive has priority on your computer, but you can follow this
	  list:
	
	  SCSI devices
	  IDE (ATAPI) devices
	  Non-SCSI devices in the following order: Sony, Panasonic, Mitsumi
	
	  -or-
	
	- Place the Windows NT 3.51 CD in each CD-ROM drive until the CD-ROM drive that
	  has priority on your computer accepts it for copying files.
	
	Additional query words: prodnt 9 nine
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
