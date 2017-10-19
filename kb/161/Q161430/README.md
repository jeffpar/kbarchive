---
layout: page
title: "Q161430: DHCP: Detecting and Flagging Duplicate IP Addresses"
permalink: /kb/161/Q161430/
---

## Q161430: DHCP: Detecting and Flagging Duplicate IP Addresses

	Article: Q161430
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 2 (SP2) provides updated code to assist DHCP in
	detecting and flagging duplicate IP addresses. Functionality has been added both
	at the client and at the Windows NT DHCP server.
	
	MORE INFORMATION
	================
	
	The following features were added to Windows NT 4.0 in SP2 to assist in
	detecting and working around duplicate IP addresses:
	
	- The DHCP server has a new configurable option to allow the administrator to
	  specify duplicate address detection. To enable this feature, run the DHCP
	  Administrator, select a DHCP server, and select Server->Properties. There
	  is a new "Conflict Detection Attempts" listbox that allows the server to be
	  configured to attempt to ping each IP address before issuing a lease for it.
	
	  NOTE: This functionality was added to aid in resolving duplicate IP address
	  situations resulting from accidental mis-configurations. This feature was not
	  intended as a mechanism to allow deployment of overlapping scopes and this
	  type of deployment is not supported by Microsoft.
	
	  NOTE: The address conflict detection feature can limit the throughput of the
	  DHCP server. The DHCP server must wait several seconds for each retry to
	  timeout or respond before servicing clients. For improved performance, reduce
	  the number of ping retries in the Server Properties dialog box.
	
	The number of pings is configurable, and after sending each ping the server waits
	two seconds for a reply. The time required for a client to obtain a lease will
	be increased by (the number of pings selected) * 2, so this value should be
	chosen carefully. Normally, a setting of 1 or 2 should be adequate.
	
	If the DHCP server receives a reply to any of the pings, it will mark the IP
	address as a "BAD_ADDRESS" and will attempt to lease the next address in the
	scope. After the offending duplicate address is removed from the network, the
	"BAD_ADDRESS" can be returned to the pool by deleting it from the scope Active
	Leases dialog box.
	
	NOTE: The DHCP server only pings IP addresses that have not been previously
	leased successfully. If a client is being leased an IP address that it already
	had, or is requesting a renewal, the DHCP server will not issue any pings before
	sending the DHCP OFFER or DHCP ACK.
	
	- Windows NT 4.0 SP2 clients now have support for issuing DHCP DECLINE
	  messages. After the client receives a lease from the DHCP server, it will
	  send an ARP for the IP address it has been assigned. If any other client
	  replies to that ARP, the address is already in use. In this case, the client
	  will issue a DHCP DECLINE to the DHCP server. The Windows NT 4.0 SP2 server
	  will flag the IP address as a "BAD_ADDRESS" and the client will go through
	  the lease process again, receiving the next available address in the scope.
	
	Additional query words: dhcp duplicate IP address decline conflict dupe
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
