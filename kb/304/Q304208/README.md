---
layout: page
title: "Q304208: Error Message: STOP: 000000de POOL_CORRUPTION_IN_FILE_AREA"
permalink: /kb/304/Q304208/
---

## Q304208: Error Message: STOP: 000000de POOL_CORRUPTION_IN_FILE_AREA

{% raw %}

	Article: Q304208
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer may stop responding (hang), and you may receive the following
	error message:
	
	  STOP: 000000de POOL_CORRUPTION_IN_FILE_AREA
	
	CAUSE
	=====
	
	This issue can occur when a driver corrupts pool memory that is used for holding
	pages that are destined for the disk. This issue is discovered when the memory
	manager dereferences the file.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the special pool feature to isolate pool damage. For
	additional information about how to use the special pool feature to isolate pool
	damage, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q188831 How to Use the Special Pool Feature to Isolate Pool Damage
	
	Pool overrun detection helps to determine which driver corrupted the pool memory.
	Once another dump is generated, review the dump file to determine which driver
	is responsible for the pool damage. Note that you should set up pool detection
	to monitor all pools:
	
	+------------------------------------------------------------+
	| Pool to monitor | Character representation | Pool tag mask | 
	+------------------------------------------------------------+
	| All pools       | "*"                      | 0x2A          | 
	+------------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
