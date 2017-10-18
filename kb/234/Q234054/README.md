---
layout: page
title: "Q234054: Errmsg: Setup Did Not Find Any Hard Disk Drives Installed"
permalink: kb/234/Q234054/
---

## Q234054: Errmsg: Setup Did Not Find Any Hard Disk Drives Installed

	Article: Q234054
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the text-mode portion of Windows NT Setup, you may receive the following
	error message after Setup detects all SCSI adapters and then proceeds to copy
	files for installation:
	
	  Setup did not find any hard disk drives installed in your system.
	
	CAUSE
	=====
	
	This behavior occurs because any SCSI adapter that requires updated original
	equipment manufacturer (OEM) drivers must be detected last if that SCSI adapter
	is the controller for the disk drive that will contain the system partition. If
	you are installing to a drive that is connected to an unsupported SCSI adapter
	that requires updated OEM drivers, that unsupported SCSI adapter is the first
	adapter to be detected, and without the correct SCSI driver, Setup returns the
	error message that the drive can not be found.
	
	RESOLUTION
	==========
	
	The SCSI adapter requires that Setup detect updated OEM drivers correctly. To
	resolve this behavior, add that driver after Setup detects all other SCSI
	adapters in the computer. If you are adding more than one SCSI driver during
	Setup, you must add the driver for the adapter that is associated with the drive
	that the system partition will be located on last.
	
	Additional query words: SBS45
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
