---
layout: page
title: "Q216708: Error Message: Setup Cannot Find Oemsetup.inf"
permalink: /kb/216/Q216708/
---

## Q216708: Error Message: Setup Cannot Find Oemsetup.inf

	Article: Q216708
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a device from the Windows NT CD-ROM by clicking the Have
	Disk button and typing the path to the CD-ROM, you receive the following error
	message:
	
	  Setup cannot find Oemsetup.inf. Please type a new path to the Oemsetup.inf
	  file.
	
	CAUSE
	=====
	
	This message occurs because Setup is looking for an Original Equipment
	Manufacturer (OEM) installation (.inf) file, but cannot locate one.
	
	RESOLUTION
	==========
	
	Do not click the Have Disk button when you are installing a component that
	requires the Windows NT CD-ROM. Instead, double-click the component you want to
	install, or click it once and then click OK.
	
	MORE INFORMATION
	================
	
	The Have Disk button is only for the installation of OEM or third-party
	components that are not listed by default in Windows NT.
	
	Additional query words: driver
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
