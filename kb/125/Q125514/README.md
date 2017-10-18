---
layout: page
title: "Q125514: TCP/IP-32 Client Cannot Obtain DHCP Lease"
permalink: kb/125/Q125514/
---

## Q125514: TCP/IP-32 Client Cannot Obtain DHCP Lease

	Article: Q125514
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5; :3.11a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11a 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Microsoft Windows for Workgroups client using Microsoft TCP/IP-32 Dynamic Host
	Configuration Protocol (DHCP) on the same network segment as a Microsoft Windows
	NT 3.5 DHCP Server may not be able to obtain an IP address lease if the DHCP
	server is incorrectly configured.
	
	MORE INFORMATION
	================
	
	If the DHCP server is assigned a Class B IP address, it must also have its DHCP
	scope configured for Class B addresses or it will not respond with an offer
	message when it receives a discover message from a DHCP client.
	
	Example
	-------
	
	A DHCP server is assigned a Class B IP address. However, it is configured to
	lease DHCP clients Class C IP addresses, that is, its DHCP scope is configured
	as Class C. Because the DHCP client is on the same segment, its discover message
	is not routed and thus the giaddr field is not modified by an RFC 1542 compliant
	router. Noticing that the giaddr field has not been modified, the server assumes
	the client is on the same subnet and uses its own IP information (IP address and
	subnet mask) for its DHCP offer message.
	
	Additional query words: prodtcp32 prodtcp 3.11 wfw wfwg TCP/IP fail
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311a
	Version           : WINDOWS:3.11; winnt:3.5; :3.11a
	
	=============================================================================
	
