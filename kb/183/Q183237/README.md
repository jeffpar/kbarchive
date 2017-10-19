---
layout: page
title: "Q183237: Windows NT 4.0 Fails to Start on a Uniprocessor Compaq"
permalink: /kb/183/Q183237/
---

## Q183237: Windows NT 4.0 Fails to Start on a Uniprocessor Compaq

	Article: Q183237
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a post-Service Pack 3 (SP3) hotfix Ntoskrnl.exe dated 11/20/97
	or later, the system fails to restart. The system will stop responding (hang) at
	the Blue screen listing the Windows NT version and service pack information. The
	personal computer is a uni-processor Compaq running Compaq's System Manager
	driver, Sysmgmt.sys.
	
	
	CAUSE
	=====
	
	Newer Ntoskrnl.exe code has been redesigned because of the Pentium errata bug.
	This new behavior conflicts with Compaq's Sysmgmt.sys driver, causing the driver
	to fail to load, which stops the system from starting.
	
	RESOLUTION
	==========
	
	Rename Sysmgmt.sys or get the latest driver from Compaq which resolves this
	problem.
	
	Sysmgmt.sys is manufactured by Compaq Corp., a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information on the Pentium errata bug, please see the following
	Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q163852
	  TITLE : Invalid Operand with Locked CMPXCHG8B Instruction
	
	
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
