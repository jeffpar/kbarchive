---
layout: page
title: "Q133724: STOP Message 0x0000001E in NTOskrnl"
permalink: /kb/133/Q133724/
---

## Q133724: STOP Message 0x0000001E in NTOskrnl

	Article: Q133724
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	STOP: 0x0000001E is returned while running Windows NT Server on a multiprocessor
	computer.
	
	CAUSE
	=====
	
	This problem occurs due to a contention condition involving an IO request Packet
	submitted by the Server service.
	
	
	RESOLUTION
	==========
	
	The Windows NT kernel has been modified to prevent the deadlock from occurring.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces): S E R V P A
	C K
	
	
	Additional query words: 3.51 prodnt trap blue screen 0x1E
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
