---
layout: page
title: "Q226520: NTFS Formatted Removable Media Write Operations Extremely Slow"
permalink: /kb/226/Q226520/
---

## Q226520: NTFS Formatted Removable Media Write Operations Extremely Slow

	Article: Q226520
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you write data to removable media that has been formatted with the NTFS
	file system, it may take up to five times longer to complete the operation than
	using the same media that has been formatted with the FAT file system.
	
	CAUSE
	=====
	
	This behavior occurs because NTFS performs write and commit transactions into
	the log area of the volume throughout the write operation. Removable media
	typically takes longer to seek the read/write heads. The penalty for logging is
	higher with removable media because the log area is in a fixed position on the
	disk.
	
	RESOLUTION
	==========
	
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
