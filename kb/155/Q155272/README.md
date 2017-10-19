---
layout: page
title: "Q155272: Cogent eMaster 110 Network Card Detected as DEC 21140"
permalink: /kb/155/Q155272/
---

## Q155272: Cogent eMaster 110 Network Card Detected as DEC 21140

	Article: Q155272
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT 4.0, your Cogent eMaster 110 Fast Ethernet
	PCI adapter is detected as a DEC 21140 network card.
	
	If you use this driver, the network card causes large amounts of network traffic
	(a broadcast storm).
	
	CAUSE
	=====
	
	Windows NT Setup does not automatically detect the Cogent eMaster card.
	
	RESOLUTION
	==========
	
	After Setup finishes, install the driver for the Cogent eMaster card from the
	Windows NT 4.0 CD-ROM. To install the driver, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. On the Adapters tab, click the DEC 21140 network card, and then click Remove.
	
	3. Click OK, and then click Add.
	
	4. Click Have Disk.
	
	5. Enter the following path:
	
	  <drive>:\drvlib\netcard\x86\empci
	
	  -OR-
	
	  <drive>:\i386\drvlib.nic\empci
	
	  where <drive> is the drive letter for your CD-ROM drive.
	
	6. Click OK.
	
	7. Select the proper settings for the card, and restart your computer when you
	  are prompted to do so.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
