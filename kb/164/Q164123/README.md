---
layout: page
title: "Q164123: Multiple Successful Print Events with Zero Bytes in Event Viewer"
permalink: kb/164/Q164123/
---

## Q164123: Multiple Successful Print Events with Zero Bytes in Event Viewer

	Article: Q164123
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprintkbbuglist kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After sending a print job to a Windows NT 4.0 printer, Event Viewer may report
	multiple instances of the same job printing successfully every two to five
	seconds, even though the print job is not printed until later. In these events,
	the byte count on the job is 0. When the job prints, the event reports the
	actual byte size.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on The following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
