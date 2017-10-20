---
layout: page
title: "Q150565: Creating DHCP Scopes Using DHCP Manager"
permalink: /kb/150/Q150565/
---

## Q150565: Creating DHCP Scopes Using DHCP Manager

{% raw %}

	Article: Q150565
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A DHCP scope is an administrative grouping of computers running the DHCP Client
	service. You create a scope for each subnet on the network to define parameters
	for that subnet.
	
	Each scope has the following properties:
	
	1. A unique subnet mask to determine the subnet related to a given IP address.
	
	2. A scope name assigned by the administrator when the scope is created.
	
	3. Lease duration values to be assigned to DHCP clients with dynamic addresses.
	
	MORE INFORMATION
	================
	
	You MUST use DHCP Manager to create, manage, or remove scopes. The DHCP database
	file (Dhcp.mdb) is a JET database that cannot be read by Microsoft Access or
	other application editors.
	
	To create a new DHCP scope, select the server in the DHCP Manager window, and on
	the Scope menu, click Create.
	
	A pop-up window is displayed requiring all necessary information to configure the
	DHCP Server. To configure the new scope, type the appropriate information into
	the following fields:
	
	IP Address Pool
	---------------
	
	Field          Description
	-------------------------------------------------------------------------
	Start address  Specifies the first IP address of the scope for the clients
	End address    Specifies the last IP address of the scope for the clients
	Subnet mask    Specifies the subnet mask for the client subnet
	
	Exclusion Range
	---------------
	
	By specifying addresses to be excluded from a range, DHCP Manager will not lease
	these addresses to requesting clients. An example of this is a UNIX Tower or
	similar machine that cannot be reconfigured with a static IP address outside of
	the intended/defined scope (for example, a corporate DNS).
	
	To implement several address scopes within one subnet on a single DHCP server,
	create one continuous IP address range that includes all available addresses
	within the subnet. Then, exclude necessary addresses or ranges from within the
	defined scope.
	
	For example:
	
	  Defined scope: 192.192.192.1 through 192.192.192.200
	  Excluded: 192.192.192.5 and 192.192.192.10 through 192.192.192.50
	  Available addresses: 192.192.192.1 through 192.192.192.4, 192.192.192.6
	  through 192.192.192.9, and 192.192.192.51 through 192.192.192.200
	
	Lease Duration Unlimited
	------------------------
	
	This option specifies that the DHCP lease assigned to a client will never expire.
	This is not a recommended option and should be substituted through the use of
	client reservations.
	
	Lease Duration Limited to
	-------------------------
	
	The number of days, hours, and minutes that a DHCP client lease is available
	before it must be renewed.
	
	Name
	----
	
	The scope name is the name that describes this subnet and is displayed after the
	IP address in DHCP Manager. The name can include any combination of letters,
	numbers, hyphens, underscores, or blank characters.
	
	Comment
	-------
	
	This is an optional field.
	
	Additional query words: prodnt 4.0
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51 4.00
	
	=============================================================================
	

{% endraw %}
