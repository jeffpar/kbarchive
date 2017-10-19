---
layout: page
title: "Q164826: Direct Draw Programs May Hang NT 4.0 with S3 968 Video Chipset"
permalink: /kb/164/Q164826/
---

## Q164826: Direct Draw Programs May Hang NT 4.0 with S3 968 Video Chipset

	Article: Q164826
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdpartykbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT 4.0 may stop responding (hang) when using Direct Draw applications on
	a computer with an S3 video adapter with the 968 chipset.
	
	CAUSE
	=====
	
	This problem can occur when the pixel formatter of the Direct Draw code path
	sends a bit level transfer of less than 32 pixels.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt S3 968 lock hang sp3
	
	======================================================================
	Keywords          : kb3rdparty kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
