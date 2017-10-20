---
layout: page
title: "Q159600: PerfMon Server-Sessions Errored Out Also Tracks Autodisconnects"
permalink: /kb/159/Q159600/
---

## Q159600: PerfMon Server-Sessions Errored Out Also Tracks Autodisconnects

{% raw %}

	Article: Q159600
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Explain details for the Server object, Sessions Errored Out counter in
	Performance Monitor, reads as follows:
	
	  The number of sessions that have been closed due to unexpected error
	  conditions. Indicates how frequently network problems are causing dropped
	  sessions on the server.
	
	This explanation fails to mention that this counter also increments when normal
	session disconnects occur as a result of the AUTODISCONNECT parameter. The
	AUTODISCONNECT value represents the number of minutes that idle sessions have
	before being disconnected automatically by a server. The default value is 15
	minutes. This counter increments as a result of normal server operation, not as
	an indication of network problems. When this counter increments as the result of
	network problems, other symptoms occur, which may indicate a problem exists. If
	network users connected to the server remain unaffected when this counter
	increments, then automatic disconnections and reconnections occur normally.
	Therefore, this behavior is considered an expected condition, not an unexpected
	error condition as the Explain button currently reads.
	
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
