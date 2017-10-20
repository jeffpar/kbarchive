---
layout: page
title: "Q151280: TCP/IP Does Not Function After Adding a Second Adapter"
permalink: /kb/151/Q151280/
---

## Q151280: TCP/IP Does Not Function After Adding a Second Adapter

{% raw %}

	Article: Q151280
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If TCP/IP is installed and working correctly under Microsoft Windows NT and you
	install additional network adapters of the same model, the computer may not be
	able to communicate with other hosts on either network.
	
	CAUSE
	=====
	
	The binding order of the network adapters may be influenced by bus slot number,
	I/O port address, or IRQ number. When one or more adapters of the same model are
	added to an existing configuration, the driver may bind to another network card
	instead of the adapter it was bound to in the previous configuration. As a
	result, the IP addresses configured for each adapter may not be assigned
	correctly. The adapters initialize properly, but do not communicate with other
	hosts on the network using TCP/IP. Other protocols may not exhibit this
	behavior.
	
	RESOLUTION
	==========
	
	Disconnect all but one one of the network cables, then use PING to determine
	which network IP adddress is still operational by pinging both local and remote
	hosts. Once this is determined you can either swap the IP addresses and default
	gateway on the affected adapters by using the Network tool in Control Panel, or
	physically swap the network cables between the affected network adapters.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
