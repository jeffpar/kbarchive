---
layout: page
title: "Q136074: STOP Msg: 0x0000007B on Digitial Venturis 466 with 32-Bit I/O"
permalink: kb/136/Q136074/
---

## Q136074: STOP Msg: 0x0000007B on Digitial Venturis 466 with 32-Bit I/O

	Article: Q136074
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you turn on the 32-bit I/O in the LBA portion of CMOS on a Digital Venturis
	466 machine after Windows NT 3.51 is installed, the following error appears at
	the blue build screen:
	
	  STOP: 0X0000007B
	  INACCESSIBLE_BOOT_DEVICE
	
	This same option also causes Setup to fail to recognize the hard drive during an
	upgrade or a new installation. The following message appears:
	
	  Setup did not find any hard disk drives installed in our system. Make sure
	  you hard disk drivers are powered on....... Setup cannot continue. Press F3
	  to exit
	
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	a. Disable the 32-bit I/O option in CMOS.
	
	b. Disable the read-ahead mode in CMOS.
	
	c. Change mode from pio-3 to standard. -or-
	
	d. Contact Microsoft PSS regarding a fix.
	
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q134285 TITLE : STOP Msg: 0x0000007B or "0x4,0,0,0 Error" in
	  WinNT 3.51 Setup
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	Additional query words: prodnt stop 7b setup venturis
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
