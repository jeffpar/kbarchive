---
layout: page
title: "Q187615: Setup Hangs When System Includes More Than Two RAW Drives"
permalink: /kb/187/Q187615/
---

## Q187615: Setup Hangs When System Includes More Than Two RAW Drives

	Article: Q187615
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Setup (text mode) stops responding (hangs) in SetupDD when the system
	has more than two RAW drives.
	
	CAUSE
	=====
	
	One requirement for Windows NT Setup is to determine that all of the drives have
	the same FT signature, same checksum, and same partition table status (TRUE or
	FALSE). SppInitializeHardDiskArcNames runs into a problem trying to match up the
	disks to the ARC names.
	
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	To install the service pack, first reduce the number of RAW drives to two or
	less.
	
	To work around the problem, reduce the number of RAW drives to two or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: stop disk probe Dell Computers Seagate
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
