---
layout: page
title: "Q121645: STOP 0x0000001E in SRV.SYS"
permalink: /kb/121/Q121645/
---

## Q121645: STOP 0x0000001E in SRV.SYS

	Article: Q121645
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following STOP message appears:
	
	  STOP 0x1E (0xC0000005, 0xfc9f7bee, 0, 0xc) - SRV.SYS Unhandled kernel
	  exception in 0xfc9f7bee has base at 0xfc9f0000
	
	  0xC0000005 - Access violation.
	
	  Offset = 0x7bee
	
	
	CAUSE
	=====
	
	An illegal transact SMB (function WaitNamedPipe) was received. The transaction
	name in the SMB was "\PIPE\EVENTLOGOG" without the null character termination.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT Workstation and Windows NT Server
	version 3.5. This problem was corrected in the latest U.S. Service Pack for
	Windows NT version 3.5. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	
	=============================================================================
	
