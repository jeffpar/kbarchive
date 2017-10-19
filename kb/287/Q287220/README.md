---
layout: page
title: "Q287220: Stop Error 0x7B Appears When Starting Windows NT Server 4.0"
permalink: /kb/287/Q287220/
---

## Q287220: Stop Error 0x7B Appears When Starting Windows NT Server 4.0

	Article: Q287220
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows NT Server 4.0 Service Pack 4 on a Compaq ProLiant
	800 computer equipped with a Symbios onboard SCSI controller, the following
	error message may appear when you start the computer:
	
	  STOP 0x0000007b (0xf4013bd8, 0xc0000034, 0x00000000, 0x00000000)
	
	RESOLUTION
	==========
	
	To resolve this behavior, copy the Symc810.sys file from a parallel installation
	to the original installation:
	
	1. Install a parallel copy of Windows NT Server 4.0 on a second partition.
	  During installation, the operating system detects the SCSI controller as a
	  Symbios 810.
	
	2. In Windows Explorer, copy Symc810.sys from the parallel installation to the
	  C:\Winnt.sys\System32 folder in the original installation.
	
	3. Restart the computer in the original installation.
	
	MORE INFORMATION
	================
	
	To avoid this behavior, obtain and install the latest version of the driver from
	the manufacturer.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Compaq Computer Corp., click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
