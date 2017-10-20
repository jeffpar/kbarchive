---
layout: page
title: "Q160493: Nwlnkrip Data Structures Corrupt when Using Demand Dial NIC"
permalink: /kb/160/Q160493/
---

## Q160493: Nwlnkrip Data Structures Corrupt when Using Demand Dial NIC

{% raw %}

	Article: Q160493
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In stress redial conditions, using a demand-dial network interface card on a
	Windows NT server may result in a line ready message being ignored.
	
	CAUSE
	=====
	
	High intensity redial stress causes corruption of client node hash table lists.
	When a line ready message is received on a demand-dial network interface card
	that has not been reset from the previous client, it is ignored. However,
	subsequent line not ready messages are processed, resulting in a RemoveListEntry
	operation on the node that has already been removed from the list.
	
	WORKAROUND
	==========
	
	This problem does not occur if you configure the RAS server IPX configuration to
	not assign the same network number to all IPX clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
