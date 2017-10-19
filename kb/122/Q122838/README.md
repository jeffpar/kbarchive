---
layout: page
title: "Q122838: Memory Leak in LMREPL Service"
permalink: /kb/122/Q122838/
---

## Q122838: Memory Leak in LMREPL Service

	Article: Q122838
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork kbbug3.10 kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Directory Replicator Service (LMREPL) in Windows NT Server version 3.5 and
	Windows NT Advanced Server version 3.1 has a memory leak, which can slowly
	consume nonpaged pool resources and as a result, it can degrade system
	performance.
	
	CAUSE
	=====
	
	The leak appears to be located at the client side of LMREPL which wakes up each
	15 minutes to perform a replication, depending on the results of a cyclic
	redundancy check (CRC). Each 15-minute pulse consumes approximately 1 kilobyte
	(K) of nonpaged pool.
	
	WORKAROUND
	==========
	
	Periodically, the Directory Replicator can be stopped and restarted to free the
	memory; this should be done at regular intervals (every two weeks or so) until a
	fix is available.
	
	To monitor this resource, use Performance Monitor to look at Object
	<Process>, Instance <LMREPL>, Counter <Pool NonPaged Bytes>.
	The initial value should be approximately 9860 bytes and values larger than this
	can indicate a leak. Over a period of weeks, this value can grow to 3 megabytes
	(MB) or more.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1 and Windows NT Server version 3.5. This problem was corrected in the
	latest U.S. Service Pack for Windows NT version 3.5. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.10 perfmon
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search
	
	=============================================================================
	
