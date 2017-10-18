---
layout: page
title: "Q167052: Maximum Number of Supported SCSI Disk Drives Increased"
permalink: kb/167/Q167052/
---

## Q167052: Maximum Number of Supported SCSI Disk Drives Increased

	Article: Q167052
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You will not be able to connect more than 38 hard drives to a Windows NT
	computer.
	
	CAUSE
	=====
	
	A buffer used for communicating with the SCSI device request was limited to 2 KB
	causing the disk drive limitation.
	
	
	RESOLUTION
	==========
	
	The buffer size has been expanded by four times the original size.
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 4.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
