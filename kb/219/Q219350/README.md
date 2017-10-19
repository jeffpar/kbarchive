---
layout: page
title: "Q219350: Cannot Dual Boot After SP5 Is Installed on Alpha Computer"
permalink: /kb/219/Q219350/
---

## Q219350: Cannot Dual Boot After SP5 Is Installed on Alpha Computer

	Article: Q219350
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbdocerr
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows NT 4.0 Service Pack 5 on an Alpha-based
	computer, you cannot use the dual-boot feature to install a secondary copy of
	Windows NT on another drive partition.
	
	CAUSE
	=====
	
	This behavior occurs if you click No when you are prompted to overwrite the
	Hal.dll and Atapi.sys files during the original installation. The older files
	that are not overwritten cannot support the dual-boot option.
	
	RESOLUTION
	==========
	
	To resolve this problem, click Yes when you are prompted to overwrite the
	Hal.dll and Atapi.sys files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbdocerr 
	Technology        : kbWinNTsearch kbWinNTWsearch
	Version           : winnt:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
