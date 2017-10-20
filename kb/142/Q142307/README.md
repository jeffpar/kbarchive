---
layout: page
title: "Q142307: Name Resolution Fails on Multihomed Laptop and Docking Station"
permalink: /kb/142/Q142307/
---

## Q142307: Name Resolution Fails on Multihomed Laptop and Docking Station

{% raw %}

	Article: Q142307
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Typically, this occurs in a laptop with a docking station (DS), with a network
	interface card (NIC) in the DS and another NIC in the laptop. With the laptop
	docked, both NIC drivers load. Name resolution works as expected.
	
	If the laptop is undocked and restarted, the NIC driver for the DS fails to load
	and the laptop NIC loads, which is the expected behavior. Ipconfig reveals that
	this is now a single-homed system, with one IP address. However, name resolution
	has been affected.
	
	If you are using Windows Internet Name Service (WINS) for resolution, pinging by
	name will generate the error 'Bad IP Address', but a NET USE will be
	successful.
	
	If you are using LMHOSTS for name resolution, both PING and NET USE fail.
	
	If the laptop is redocked and restarted, name resolution once again behaves
	normally. If you undock, remove the NIC driver for the DS and restart, name
	resolution works fine.
	
	This problem can only be seen if both NICs have addresses on the same subnet. If
	they are assigned addresses from different subnets the problem does not occur,
	whether your laptop is docked or undocked, or whether you are using WINS or
	LMHOSTS for name resolution.
	
	This problem has been reproduced in a PC where the second NIC was removed (as
	opposed to just undocking).
	
	NOTE: Pinging an IP address always works in all scenarios. Only name resolution
	seems to be affected.
	
	RESOLUTION
	==========
	
	To work around this problem, use the HOSTS file instead of the LMHOSTS file for
	name resolution. Be sure to check the "Enable DNS for Windows Name Resolution"
	in the Advanced Microsoft TCP/IP Configuration dialog. You will now have names
	resolved no matter if the computer is docked or undocked. But, if a domain
	controller is not on the local subnet you will not be able to log on to the
	domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
