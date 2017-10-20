---
layout: page
title: "Q150844: NetWare Client Buffer-Size Limitation of FPNW Sent Messages"
permalink: /kb/150/Q150844/
---

## Q150844: NetWare Client Buffer-Size Limitation of FPNW Sent Messages

{% raw %}

	Article: Q150844
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When in File and Print Services for NetWare, you direct Server Manager to send a
	message, only the first 55 characters of the message are received by the Novell
	clients; any characters in excess of 55 are not received. Also, sending a
	message longer than 55 characters may cause the client computer to stop
	responding.
	
	CAUSE
	=====
	
	This problem is caused by a size limitation in the NetWare client buffer. The
	buffer is hard-coded and cannot be tuned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
