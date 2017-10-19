---
layout: page
title: "Q183654: IBM DTTA-351010 10.1 GB Drive Capacity Is Inaccurate"
permalink: /kb/183/Q183654/
---

## Q183654: IBM DTTA-351010 10.1 GB Drive Capacity Is Inaccurate

	Article: Q183654
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT may incorrectly report the size of the 10.1-gigabytes (GB) capacity
	IBM DTTA-351010 fixed disk drive to be 7,550-megabytes (7.5 GB), or incorrectly
	report the size of the 18 GB capacity IBM DTTA-351680 fixed disk drive or a 12
	GB Quantum Bigfoot TX fixed disk drive to be 8 GB even though the System BIOS
	supports INT 13 extensions and can see the full capacity of the drive. Note that
	this problem may also occur with some Maxtor DiamondMax drives larger than 8.5
	GB, and may occur on some hard disks not listed here.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, follow the instructions in the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q197667
	  TITLE : Installing Windows NT Server on a Large IDE Hard Disk
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: hard drive driver
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
