---
layout: page
title: "Q169290: DHCP Reservations Do Not Get Assigned from a Superscope"
permalink: /kb/169/Q169290/
---

## Q169290: DHCP Reservations Do Not Get Assigned from a Superscope

{% raw %}

	Article: Q169290
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a dynamic host configuration protocol (DHCP) superscope,
	reservations made in any subscope, except for the first subscope, may not be
	given out.
	
	For example, you have a single segment using the following superscopes:
	
	192.168.1.1-255, subnet mask 255.255.255.0
	192.168.2.1-255, subnet mask 255.255.255.0
	
	You use one DHCP server, create a scope for each network, and then create a
	superscope using these two scopes. This allows your DHCP server to assign
	addresses from either scope to clients on the same physical segment.
	
	Then you create a reservation in scope #2 for a client computer. When the client
	computer tries to get an address using DHCP, the DHCP server gives the client
	computer an address from the first scope instead of giving it the reservation in
	the second scope.
	
	CAUSE
	=====
	
	This is happening because a DHCP server normally hands out addresses from a
	superscope starting with the first scope. After that scope is full, the server
	starts handing out addresses from the second scope, third scope, and so on.
	
	Because the reservation is in the second scope, the DHCP server gives out an
	address from the first scope if it is not full. If the first scope had been
	full, then the client reservation would have been given out correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 2.
	This problem has been corrected in Microsoft Windows NT 4.0 Service Pack 3. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	For more information about superscopes, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q161571 Using DHCP "Superscopes" to Serve Multiple Logical Subnets
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
