---
layout: page
title: "Q186462: DHCPLOC Should Not Be Run from DHCP Servers"
permalink: /kb/186/Q186462/
---

## Q186462: DHCPLOC Should Not Be Run from DHCP Servers

{% raw %}

	Article: Q186462
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Dhcploc.exe utility in the Windows NT Resource Kit is designed to assist in
	determining what Dynamic Host Configuration Protocol (DHCP) servers are
	available to clients on a particular network segment. If you run Dhcploc.exe on
	a computer that is acting as a DHCP server, you may notice that the DHCP server
	no longer responds to all requests for IP addresses from DHCP clients.
	
	CAUSE
	=====
	
	The Dhcploc.exe utility listens for DHCP servers by taking DHCP packets off the
	IP stack. However, the utility has no means to reintroduce DHCP packets to the
	stack. Therefore, running this utility on a DHCP server will prevent DHCP
	packets from reaching the DHCP server service, and the DHCP server will appear
	not to respond.
	
	RESOLUTION
	==========
	
	Run Dhcploc.exe only from computers not acting as DHCP servers.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: dhcploc rogue
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
