---
layout: page
title: "Q272229: Computer Hangs with a Forerunner PCI ATM Network Adapter"
permalink: kb/272/Q272229/
---

## Q272229: Computer Hangs with a Forerunner PCI ATM Network Adapter

	Article: Q272229
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Marconi/Fore PCA ForeRunner ATM network adapter in your
	Windows NT-based, multiple-processor computer, your computer may stop responding
	(hang). Note that this issue does not occur if you are using only one central
	processing unit (CPU).
	
	CAUSE
	=====
	
	This issue can occur if you are using a version of the ForeRunner ATM PCI
	network adapter driver (Foreatm.sys) that is earlier than version 5.1.0.49979.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Marconi to obtain a version of the ForeRunner ATM
	PCI network adapter driver (Foreatm.sys) that is later than version
	5.1.0.49979.
	
	To work around this issue, use the appropriate switch in the Boot.ini file to
	limit your computer to a single CPU:
	
	- /numproc=1
	
	- /onecpu (only for use with Compaq computers)
	
	Additional query words: lock
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
