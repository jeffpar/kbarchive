---
layout: page
title: "Q186562: Terminal Server Multiprocessor Support"
permalink: /kb/186/Q186562/
---

## Q186562: Terminal Server Multiprocessor Support

	Article: Q186562
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminal Server 4.0 is based on Windows NT Server 4.0. Both products share a
	common Hardware Abstraction Layer (HAL) and registry hives, and so both share a
	common limitation of 4 processors. However, OEM-supplied modifications allow for
	more than 4 processors. The OEM modifications for Windows NT Server 4.0 are
	applicable to Terminal Server 4.0 as well.
	
	MORE INFORMATION
	================
	
	Additional Information on Multiprocessor Support
	------------------------------------------------
	
	The x86 HALs that shipped with Windows NT 4.0 support up to 8 processors.
	
	
	The Windows NT system in general can support up to 32 processors.
	
	
	Microsoft Windows NT Server is limited to 4 processors through the registry hives
	that ship on the retail Windows NT Server CD.
	
	
	Microsoft Windows NT Server, Enterprise Edition supports up to 8 processors
	through the registry hives that ship on the Windows NT Server, Enterprise
	Edition CD.
	
	
	OEMs can increase the number of processors they support by modifying the registry
	hives that ship on the CD. They can modify the hives because they are provided
	the base files and tools to compile the hives in the Windows NT OEM Adaptation
	Kit. The OEMs also may provide special HALs to optimize performance on their
	systems.
	
	
	Additional query words: multi-processor multi processor
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
