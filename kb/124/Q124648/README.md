---
layout: page
title: "Q124648: DC21040 Causes Windows NT 3.5 to Stop Responding (Hang)"
permalink: /kb/124/Q124648/
---

## Q124648: DC21040 Causes Windows NT 3.5 to Stop Responding (Hang)

{% raw %}

	Article: Q124648
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network connections on your Windows NT computer are lost, new users cannot
	connect, and applications requiring network access stop responding (hang).
	Applications running locally may continue to function, but may also eventually
	hang.
	
	CAUSE
	=====
	
	You are using the DC21040.SYS Ethernet driver. A problem with the driver causes
	the protocol to run out of resources when dealing with loopback packets. The
	system becomes unable to accept anymore incoming packets from the adapter.
	Loopback occurs when an application is accessing a local resource (for example,
	a UNC file name) rather than a local driver letter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt DEC 2100 cpu
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
