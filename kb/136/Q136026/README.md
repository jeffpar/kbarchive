---
layout: page
title: "Q136026: Wrong Volume Label Returned to OS/2 Clients"
permalink: /kb/136/Q136026/
---

## Q136026: Wrong Volume Label Returned to OS/2 Clients

	Article: Q136026
	Product(s): Microsoft Windows NT
	Version(s): 3.5 SP3,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5 SP3, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5 SP3, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When OS/2 clients retrieve a directory listing of a directory shared by a server
	running Windows NT 3.5 and Service Pack 3 or Windows NT 3.51, the directory
	listing may show an incorrect volume label. It does not matter which OS/2
	version you have or which client software you use. This problem was confirmed
	with OS/1.3, OS/2 2.x, LAN Manager 2.2c, and LAN Server 3.0 client.
	
	The error occurs when the volume label is longer than eight characters. For
	example, instead of showing DATASERV1_D it shows DATASERV.1_.
	
	CAUSE
	=====
	
	A fix was created for Windows NT 3.5 (see Q129054) that changed the way the
	volume label is returned to down level clients. This change cause the problem
	mentioned above.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWinNTS350search kbWinNTW350SP3 kbWinNTS350SP3
	Version           : :3.5 SP3,3.51,4.0
	
	=============================================================================
	
