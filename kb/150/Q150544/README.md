---
layout: page
title: "Q150544: DHCP Manager Scope Properties"
permalink: /kb/150/Q150544/
---

## Q150544: DHCP Manager Scope Properties

	Article: Q150544
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
	
	The following information describes the general properties and maintenance
	activities performed on Microsoft DHCP scopes.
	
	MORE INFORMATION
	================
	
	The subnet identifiers and address pool make up the properties of scopes. You
	can change the properties of an existing scope by selecting the scope for which
	you want to change properties and then clicking Properties on the Scope menu.
	You can also double-click the scope to access its properties.
	
	Modifying a Scope
	-----------------
	
	After a scope has been created, you can extend the address range of the scope,
	but you cannot reduce it.
	
	Removing a Scope
	----------------
	
	No leases can be active when a user wants to remove a scope. This task can be
	accomplished by deactivating the scope until all client leases expire or all
	client lease extension requests are denied. Once there are no more active leases
	contained in the scope, you can remove the scope by selecting the scope under
	DHCP Servers and choosing Delete on the Scope menu.
	
	Add Reservations
	----------------
	
	You can configure DHCP so that a DHCP server always assigns the same IP address
	to a client. This is called a client reservation. This may be necessary because
	you may need to assign a DHCP client the same IP address every time it makes a
	request.
	
	To configure a reservation, select the Scope under DHCP Servers and choose Add
	Reservations on the Scope menu. Type the appropriate IP address and the Unique
	Identifier/MAC address of the client. The unique identifier can be displayed by
	typing NET CONFIG RDR or IPCONFIG /ALL (WINIPCFG on Windows 95) from a command
	prompt.
	
	One advantage of a reservation over an exclusion is that with a reservation, the
	clients can still be administered using the Active Leases option on the Scope
	menu. If you statically assign an address and exclude it from the scope, the
	client will not show up in the Active Leases list.
	
	In addition, a reservation still requires that the client register with the DHCP
	server. This forces the client to accept the DHCP options that may be configured
	for the subnet. An exclusion will NOT receive DHCP options for that scope
	dynamically; they must be hardcoded on the client.
	
	Active Leases
	-------------
	
	The Active Leases option allows a graphical display of current leased IPs as well
	as client reservation. If the computer symbol includes a phone, it is a lease
	owned by the RAS service (NDISWANx wrapper).
	
	Although a client lease can be deleted from within this graphical display, the
	client may still receive the same address following an IPCONFIG /RENEW command
	because the client also has a copy of its address information locally. Until a
	client receives a different address or a negative acknowledgment (NACK) for a
	request to have the same address, it will ask for the same IP.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
