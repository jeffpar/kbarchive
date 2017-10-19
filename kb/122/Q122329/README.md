---
layout: page
title: "Q122329: Err Msg: System Error 59 Has Occurred, an Unexpected..."
permalink: /kb/122/Q122329/
---

## Q122329: Err Msg: System Error 59 Has Occurred, an Unexpected...

	Article: Q122329
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbtool kbui kberrmsg kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Windows NT Server version 3.5 computer is using the LMHOSTS file and
	TCP/IP is the only protocol, the following message may appear when you attempt
	to connect to a Windows NT Server version 3.5 that was recently rebooted:
	
	  System Error 59 has occurred, an unexpected network error occurred.
	
	CAUSE
	=====
	
	When a Windows NT Server version 3.5 shuts down, it sends out a remove name
	request for its server name. If the Windows NT server name was cached by other
	Windows NT version 3.5 servers through the LMHOSTS file, the server name entry
	(servername <20>) is removed from cache and those computers are not able
	to contact the server when it reboots. This behavior has been reproduced on a
	one-way trust between two domains.
	
	WORKAROUND
	==========
	
	On the Windows NT servers that cannot connect to the recently rebooted Windows
	NT server, use the command NBTSTAT -R to reload the cache. You can then
	reestablish connections with the rebooted Windows NT Server.
	
	NOTE: If a computer receives the above error message, you can determine if the
	server name was removed from its cache by using the command NBTSTAT -c.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT Server version 3.5.
	This problem was corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
