---
layout: page
title: "Q154640: Computer Hangs During Setup with Intel EtherExpress PRO/100A"
permalink: /kb/154/Q154640/
---

## Q154640: Computer Hangs During Setup with Intel EtherExpress PRO/100A

	Article: Q154640
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Setup on a computer equipped with an Intel EtherExpress PRO/100A network
	adapter, the computer may stop responding (hang) when the network is being
	started.
	
	
	CAUSE
	=====
	
	The Intel EtherExpress PRO/100 EISA and PCI cards are not supported in Windows
	NT version 4.0.
	
	RESOLUTION
	==========
	
	The Intel EtherExpress PRO/100B network adapter is supported by Windows NT 4.0.
	The driver is included in the Drvlib\Netcard\X86\E100b folder on the Windows NT
	4.0 CD-ROM.
	
	
	Additional query words: access violation
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
