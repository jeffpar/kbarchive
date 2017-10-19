---
layout: page
title: "Q162466: NTFS and DISK Synchronous Request Never Completes"
permalink: /kb/162/Q162466/
---

## Q162466: NTFS and DISK Synchronous Request Never Completes

	Article: Q162466
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When NTFS and DISK use a synchronous request to perform an I/O control within a
	page fault, it never completes.
	
	CAUSE
	=====
	
	This problem occurs as a result of the NTFS dismount code. NTFS is doing a
	IOCTL_DISK_IS_WRITABLE I/O control within a page fault. Both NTFS and DISK are
	doing this, using a synchronous request which never completes because APC are
	disabled to do the page fault. This problem may affect removable media
	dismounts.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 2.
	
	Additional query words: file system 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA MIPS x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
