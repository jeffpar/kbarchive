---
layout: page
title: "Q142603: STOP 0x0000000A - NTOSKRNL.EXE in Windows NT 3.51"
permalink: /kb/142/Q142603/
---

## Q142603: STOP 0x0000000A - NTOSKRNL.EXE in Windows NT 3.51

	Article: Q142603
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following STOP error message appears in Windows NT 3.51:
	
	  STOP 0x0000000A NTOSKRNL.EXE
	
	CAUSE
	=====
	
	This problem occurs when the redirector attempts to free an already free Server
	Message Block (SMB) buffer.
	
	
	RESOLUTION
	==========
	
	Microsoft has modified the RDR.SYS file to correct this probelm.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
