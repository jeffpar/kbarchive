---
layout: page
title: "Q138702: STOP 0x7F when Running Network Monitor Agent"
permalink: /kb/138/Q138702/
---

## Q138702: STOP 0x7F when Running Network Monitor Agent

	Article: Q138702
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer traps at approximately two months intervals when it runs Network
	Monitor Agent (BHNT.SYS) and is not rebooted during that interval.
	The following stop error appears:
	
	  STOP 0x0000007F (0x00000000, 0x00000000, 0x00000000, 0x00000000)
	
	CAUSE
	=====
	
	This STOP error is caused by a divide by zero trap.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: netmon prodnt sp2 blue screen
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
