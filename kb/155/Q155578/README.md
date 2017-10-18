---
layout: page
title: "Q155578: Computer May Not Boot with CD-ROM Installed"
permalink: kb/155/Q155578/
---

## Q155578: Computer May Not Boot with CD-ROM Installed

	Article: Q155578
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to boot a Compaq Prosignia server with a CD-ROM in the first
	CD-ROM drive, the computer may stop responding while waiting for the CD-ROM to
	boot. The computer does not boot until the CD-ROM is removed from the drive.
	
	CAUSE
	=====
	
	This behavior can be caused by a system BIOS firmware or configuration problem.
	
	RESOLUTION
	==========
	
	Change the boot sequence in the computer's CMOS settings to boot first from the
	hard disk, then from drive A, and then from the CD-ROM drive.
	
	If the computer hangs with the CD-ROM installed, but boots when the CD-ROM is
	removed, the system's firmware does not fully support booting from a CD-ROM.
	Contact the manufacturer to obtain a firmware upgrade.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
