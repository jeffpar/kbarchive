---
layout: page
title: "Q118694: Alternating DOS Client RPC Calls Fail"
permalink: /kb/118/Q118694/
---

## Q118694: Alternating DOS Client RPC Calls Fail

{% raw %}

	Article: Q118694
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	The information in this article applies to
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DOS DCE (data communication equipment) RPC (remote procedure calls) client
	binds to a DCE RPC server and places a successful RPC call. The client will not
	place any additional RPC calls for a period of time. During this window of time,
	some RPC servers may close the connection. The next RPC call from the client to
	the server will fail. If the exact same call is placed again, after the failing
	call, it will work. The above pattern repeats indefinitely.
	
	CAUSE
	=====
	
	The RPC runtime is not being notified of the closed connection. Once the RPC
	runtime discovers the connection is closed by a failing call, it will establish
	a new session on the next RPC call to the server.
	
	RESOLUTION
	==========
	
	RPC runtime will now retry three times if a call fails. During the retry, the
	connection will be reestablished.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest US Service
	Pack for Windows NT and Windows NT Advanced Server. For information on obtaining
	this update, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
