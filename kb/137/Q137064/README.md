---
layout: page
title: "Q137064: Unable to Read Error 52225 During Windows NT Setup"
permalink: kb/137/Q137064/
---

## Q137064: Unable to Read Error 52225 During Windows NT Setup

	Article: Q137064
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Server or Workstation, the following error appears
	during the text mode portion of Setup:
	
	  UNABLE TO READ
	  Error 52225 line 1933
	  D:\winnt\private\ntos\boot\setup\setup.c
	
	  -or-
	
	  ERROR
	  Unexpected error [769] occured at
	  Line 1933 in d:\nt\private\ntos\boot\setup.c
	  Press any key to continue
	
	  -or -
	
	The error during Windows NT V4.0 setup is as follows:
	
	Unexpected error (256) occurred at
	Line 2180 in d:\nt\private\ntos\boot\setup\setup.c
	
	Setup cannot configure your computer to start windows NT. This may indicate a
	problem with the hard disk containing your C: drive or C: may be severely
	corrupt. Setup cannot continue.
	
	Press F3 to exit.
	
	CAUSE
	=====
	
	The error occurs because Setup cannot write the disk signature. Some computers
	have a BIOS option to enable protection of the master boot record (MBR) and/or
	boot sector. If this option is turned on, Setup is not able to write the disk
	signature or create/delete partitions during Setup.
	
	RESOLUTION
	==========
	
	Disable the CMOS option to protect the MBR and boot sector.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
