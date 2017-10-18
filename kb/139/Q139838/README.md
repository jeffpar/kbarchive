---
layout: page
title: "Q139838: STOP A in AFD.SYS When Polling Sockets"
permalink: kb/139/Q139838/
---

## Q139838: STOP A in AFD.SYS When Polling Sockets

	Article: Q139838
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a sockets application, Windows NT fails with a STOP 0x0000000A in
	AFD.SYS.
	
	CAUSE
	=====
	
	AfdPoll tries to back reference the endpoint from the connection before the
	pointer is set up, causing the STOP message.
	
	
	RESOLUTION
	==========
	
	AFD.SYS was fixed in Windows NT 3.5 Service Pack 3.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt blue screen trap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
