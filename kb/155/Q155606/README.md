---
layout: page
title: "Q155606: Windows NT Setup Hangs with NE2000 Installed at Port 340"
permalink: kb/155/Q155606/
---

## Q155606: Windows NT Setup Hangs with NE2000 Installed at Port 340

	Article: Q155606
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the initial text-based portion of Windows NT 4.0 Setup, your
	computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if an NE2000 network adapter is installed in the
	computer using a port address of 340h.
	
	RESOLUTION
	==========
	
	To work around this problem, either change the I/O port to a port other than
	340h, or remove the network adapter for the duration of Windows NT Setup.
	
	Windows NT will run properly with the NE2000 network adapter at I/O address 340h
	after Setup is finished.
	
	MORE INFORMATION
	================
	
	This problem occurs because of a conflict with the Sparrow.sys driver. This
	problem occurs whether or not a SCSI device or adapter is installed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
