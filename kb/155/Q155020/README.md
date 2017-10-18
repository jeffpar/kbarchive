---
layout: page
title: "Q155020: Cannot Boot Windows NT from CD-ROM"
permalink: kb/155/Q155020/
---

## Q155020: Cannot Boot Windows NT from CD-ROM

	Article: Q155020
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A computer that can boot from the CD-ROM drive may not be able to boot from the
	Windows NT 4.0 CD-ROM.
	
	CAUSE
	=====
	
	A computer can boot from the Windows NT CD-ROM only if both the SCSI BIOS and
	the system BIOS support the El Torito specification. Computers that do not
	successfully boot from the Windows NT CD-ROM either do not support the
	specification or do not support it fully.
	
	There are three ways to support the El Torito specification: Emulating a floppy
	disk, emulating a hard disk, or using no emulation. Windows NT requires using no
	emulation.
	
	RESOLUTION
	==========
	
	Some computers have a configuration tool that permits you to choose the boot
	order among the floppy disk drive, hard disk, or CD-ROM drive. If your computer
	has a configurable boot order, verify that the CD-ROM drive is first in the
	sequence, and set to No Emulation.
	
	If your computer is not configurable, or does not adhere to the El Torito
	specification, contact your computer's manufacturer for information concerning
	an upgrade.
	
	MORE INFORMATION
	================
	
	The following computers are known to exhibit this behavior:
	
	- Compaq ProLiant 4000
	
	- Compaq ProLiant 4500
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
