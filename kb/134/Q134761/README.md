---
layout: page
title: "Q134761: Thomas Conrad Token Ring cards TC-4045 and TC 4145 Setup Problem"
permalink: kb/134/Q134761/
---

## Q134761: Thomas Conrad Token Ring cards TC-4045 and TC 4145 Setup Problem

	Article: Q134761
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 on your non-PCI bus computer that has a TC-
	4045 or TC-4145 network card installed, one or more of the following symptoms
	occur:
	
	- Your computer hangs during Windows NT Setup.
	
	- A message appears after Setup that the network could not start.
	
	- The System Log contains the following event after Setup:
	
	  5004: TC4045 could not connect to interrupt number supplied.
	
	- Your floppy drive does not work.
	
	CAUSE
	=====
	
	The OEMSETUP.INF file assumes that your TC-4045 or TC-4145 network card is
	installed a PCI bus, however, it should ask you to specify what type of bus
	(ISA, EISA, PCI, MCA) the card is installed in.
	
	RESOLUTION
	==========
	
	Thomas Conrad has a new OEMSETUP.INF file. To obtain this file, download the
	self-extracting NT351OEM.EXE file from the Thomas Conrad BBS, WEB server, or the
	CompuServe Thomas Conrad forum. For more information contact Thomas Conrad at:
	
	- BBS phone number: (512) 433-6156
	
	- WEB site address: WWW.TCI.COM
	
	- CompuServe forum: GO TCCForum
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
