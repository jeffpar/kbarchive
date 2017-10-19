---
layout: page
title: "Q128715: 3Com 3C619B Fails Using Default Settings"
permalink: /kb/128/Q128715/
---

## Q128715: 3Com 3C619B Fails Using Default Settings

	Article: Q128715
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you configure the 3Com TokenLink III network adapter (3C619B) with the
	default settings (3Com mode) using the DOS Configuration utility (3TOKDIAG.EXE)
	and start Windows NT, the following system events appear in the Event Viewer:
	
	  Event ID: 5017 Source: tlnk3 Type: Warning Description: There is a memory
	  conflict at address 0x0000000000000000.
	
	  Event ID: 5000 Source: tlnk3 Type : Error Description: Has encountered a
	  conflict in resources and could not load.
	
	These symptoms occur sporadically.
	
	CAUSE
	=====
	
	The driver tries to load into an illegal memory address of 0x0 if the adapter is
	set for an I/O Port address of A20 or above.
	
	These are the default settings of the 3C619B network adapter:
	
	  Mode:        3com
	  Base I/O:    A20
	  Base (MMIO): CC000h
	  Shared Ram:  D8000 - DBFFF
	  Memory mode: 16
	  I/O mode:    16
	
	The Windows NT Diagostics (WINMSD) utility reports the following in the Adapters
	option:
	
	  Memory address      length
	  0x0                 0x2000
	
	  Port address        length
	  0x110               0x4
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Configure the 3C619B network adapter to use an I/O port address below A20 in
	  3Com mode.
	
	  -or-
	
	- Configure the 3C619B network adapter as follows:
	
	     Mode:        IBM
	     Base I/O:    Primary
	     Base (MMIO): CC000h
	     Shared Ram:  D0000h
	     Memory mode: 16
	     I/O mode:    16
	
	  In Windows NT, use the IBM Token Ring Adapter driver.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	The 3Com product discussed here is manufactured by 3Com Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt scsi ibmtok
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
