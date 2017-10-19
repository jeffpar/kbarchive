---
layout: page
title: "Q135964: General Protection Fault Error Message Running ScanDisk"
permalink: /kb/135/Q135964/
---

## Q135964: General Protection Fault Error Message Running ScanDisk

	Article: Q135964
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ScanDisk, you may receive the following error message:
	
	  SCANDSKW
	  This program has performed an illegal operation and will be shut down.
	
	If you click Details, you see the following information:
	
	  SCANDSKW caused a general protection fault in module KRNL386.EXE at...
	
	CAUSE
	=====
	
	This error can occur if the Dskmaint.dll file in the Windows\System folder is
	damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, extract a new copy of the Dskmaint.dll file from the
	Plus_2.cab file. To do so, follow these steps:
	
	1. Restart your computer in MS-DOS mode.
	
	2. Change to the Windows\System directory.
	
	3. Type the following line at the MS-DOS command prompt
	
	  " extract <drive>:\plus_2.cab dskmaint.dll " (without the quotation
	  marks)
	
	  where <drive> is the drive letter of the CD-ROM drive containing the
	  Microsoft Plus! CD-ROM, or of the floppy disk drive containing disk 2 of the
	  original Microsoft Plus! disks.
	
	4. Restart your computer normally.
	
	MORE INFORMATION
	================
	
	If you do not have Microsoft Plus! installed, extract the Dskmaint.dll file from
	the Precopy2.cab file on your original Windows 95 disks or CD-ROM.
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
