---
layout: page
title: "Q137421: PING to Broadcast Address May Get Response"
permalink: /kb/137/Q137421/
---

## Q137421: PING to Broadcast Address May Get Response

{% raw %}

	Article: Q137421
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	If the PING command is used to a broadcast address, some devices will
	respond.
	
	The following RFC section discusses pinging a broadcast address:
	
	  RFC-1122 Section 3.2.2.6 Echo Request/Reply
	
	  "An ICMP Echo Request destined to an IP broadcast or IP multicast address MAY
	  be silently discarded.
	
	  DISCUSSION:
	  This neutral provision results from a passionate debate between those who feel
	  that ICMP Echo to a broadcast address provides a valuable diagnostic
	  capability and those who feel that misuse of this feature can too easily
	  create packet storms."
	
	Windows NT 3.5 computers do not reply to these PING Echo Requests. Novell
	3.12 Servers send an Echo Reply.
	
	Additional query words: prodnt tcp/ip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
