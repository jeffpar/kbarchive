---
layout: page
title: "Q159110: CDFS Does Not Complete IRPs Correctly"
permalink: kb/159/Q159110/
---

## Q159110: CDFS Does Not Complete IRPs Correctly

	Article: Q159110
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An I/O request to the Compact Disc File System (CDFS) to close the last
	reference to a file never completes. This could cause a program to stop
	responding or return errors when trying to access information on a compact disc.
	
	CAUSE
	=====
	
	The Compact Disc File System is not completing I/O Request Packets (IRPs)
	correctly. If the last reference to a File Control Block (FCB) is being closed,
	the IRP is not completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
