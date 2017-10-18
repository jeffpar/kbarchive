---
layout: page
title: "Q158337: Could Not Load Kbdus.dll During Installation"
permalink: kb/158/Q158337/
---

## Q158337: Could Not Load Kbdus.dll During Installation

	Article: Q158337
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows NT Server 3.5 or 3.51 with the WINNT /B switch,
	the following error may occur:
	
	  Setup could not load the keyboard layout file KBDUS.DLL.
	  Setup cannot continue. Power down or reboot your computer now.
	
	If you attempt to install from the boot floppy disks, Setup may not recognize the
	partition and cannot continue.
	
	Other operating systems that may be on the drive, such as MS-DOS or Windows 95,
	appear to work fine.
	
	CAUSE
	=====
	
	This error has been attributed to the system ID byte in the partition table
	being set incorrectly to 0E. 0E refers to an undefined partition type. The
	actual cause of why this bit is being changed is still being researched.
	
	RESOLUTION
	==========
	
	To correct the problem, you will need a sector editor such as Norton's Diskedit
	to resolve the issue. Using the sector editor, change the system ID bit in the
	partition table from 0E to 06. 06 refers to a FAT partition. The following steps
	outline the procedure necessary to change the system ID bit:
	
	1. From within your sector editor, go to line 01C0 of physical sector 0, which
	  contains the partition type for the first partition. These lines are arranged
	  according to the order of the partitions; the first partition is 01C0, the
	  second partition is 01D0,the third partition is 01E0, and so on. You will see
	  something similar to the example below:
	
	  NOTE: This is a partial view of what will be on your screen.
	
	     01C0  01 00 0E FE....
	     01D0  01 0D 07 FE....
	     01E0  01 1A 06 FE....
	     01F0  00 00 00 00....
	
	  The first partition (01C0) is FAT, but the system ID byte for the partition is
	  listed as 0E, which means an undefined partition. This is the entry you must
	  change.
	
	2. Move your cursor to the 0E entry (third byte) of the first partition (01C0)
	  and change it to 06 for FAT. It is important to remember that most sector
	  editors are in read-only mode by default. Be sure you are in write mode when
	  making the changes.
	
	3. Restart the computer and verify that the system ID for the partition in
	  question is set correctly. If everything is correct, you should now be able
	  to install Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
