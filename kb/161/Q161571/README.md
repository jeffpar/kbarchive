---
layout: page
title: "Q161571: Using DHCP &quot;Superscopes&quot; to Serve Multiple Logical Subnets"
permalink: /kb/161/Q161571/
---

## Q161571: Using DHCP &quot;Superscopes&quot; to Serve Multiple Logical Subnets

{% raw %}

	Article: Q161571
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 2 (SP2) provides support for a new DHCP "superscope"
	feature. This feature allows a Windows NT DHCP server to:
	
	- Support DHCP clients on locally attached networks that have multiple logical
	  subnets on one physical network (sometimes referred to as a "multi-net").
	
	- Support DHCP clients on the far side of bootp relay agents, where the network
	  on the far side of the relay agent has multiple logical subnets on one
	  physical network.
	
	MORE INFORMATION
	================
	
	Versions of Windows NT DHCP server prior to Windows NT 4.0 Service Pack 2 are
	not capable of assigning addresses from more than one scope to a given physical
	subnet. One workaround for this situation is to add additional network interface
	cards (NICs) to the server, and to address each of the NICs to a given logical
	IP subnet. This involves additional and otherwise unnecessary hardware, so a new
	solution was developed and implemented in SP2.
	
	The enhanced DHCP server allows the administrator to create different scopes
	(ranges of IP addresses), and then to group those scopes together into a
	superscope.
	
	To create a superscope, complete the following steps:
	
	1. Create each of the scopes using DHCP Manager. Assign global and scope
	  properties as desired. Be sure to enable each scope.
	
	2. In DHCP Manager, select the DHCP server. Click Scope, and then click
	  Superscopes.
	
	3. Click Create Superscope, supply a name for the superscope, and then click OK.
	
	4. Add the appropriate scopes from the Available Scopes list to the Child
	  Sub-Scopes list. When finished, the Child Scopes should be listed from top to
	  bottom in the order that you want addresses to be used from them.
	
	  NOTE: The order that you add the Child Sub-Scopes is of no consequence. DHCP
	  Manager will sort them in ascending order.
	
	5. Click OK.
	
	6. If the DHCP server is configured with the IgnorebroadcastFlag DHCP Registry
	  value set to 0, and if the Superscope is on a subnet that is directly
	  attached to the server (that is, not being reached via a DHCP relay agent),
	  then each of the logical subnets must be directly reachable by the DHCP
	  server. This means that there must be a local route to each logical subnet.
	  The easiest way to accomplish this is to add an IP address to the NIC on the
	  local server for each of the logical subnets that it is attached to.
	
	For additional information about the IgnorebroadcastFlag DHCP Registry value, see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q161429
	  TITLE : Configuring a Microsoft Windows NT 4.0 DHCP Server for Unicast
	
	Additional query words: multinet multihomed logical subnet scope superscope relay agent super
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
