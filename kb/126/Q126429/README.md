---
layout: page
title: "Q126429: Win16 Subsystem Fails When Used with Equinox Serial Driver"
permalink: /kb/126/Q126429/
---

## Q126429: Win16 Subsystem Fails When Used with Equinox Serial Driver

	Article: Q126429
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Equinox Systems intelligent serial board and driver, the Win16
	subsystem fails when a 16-bit terminal application is run. Example programs of
	this type are WinCim and Procomm Plus for Windows.
	
	The following message may appear:
	
	  Application caused an exception in the Win16 subsystem
	
	Then, the 16-bit application and the Win16 subsystem terminate. However, Windows
	NT does not fail.
	
	CAUSE
	=====
	
	The Win16 subsystem is not correctly dealing with overlapped reads when
	communicating with the COM ports.
	
	When a ReadFile is issued, the Win16 subsystem assumes it either has completed
	immediately or that it has failed (that is, it assumes that the read is
	synchronous). When using the Equinox serial driver, the Win16 subsystem assumes
	all the reads are failing because none of the reads are completed immediately.
	This situation eventually causes the Win16 subsystem to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
