---
layout: page
title: "Q133490: Resolving Duplicate IP Address Conflicts on a DHCP Network"
permalink: /kb/133/Q133490/
---

## Q133490: Resolving Duplicate IP Address Conflicts on a DHCP Network

	Article: Q133490
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,3.11,3.11a,3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	If a static IP address is defined for a network device, for example, a
	printer, and you install a DHCP server, duplicate IP address conflicts may
	occur between the network device and a DHCP client computer (running
	Windows for Workgroups or Windows NT). The conflict also occurs if you
	manually define static IP addresses to network devices and computers during
	a network link failure to a DHCP server and then the link is reestablished.
	
	To resolve this conflict:
	
	- Convert the network device with the static IP address to a DHCP client.
	
	  -or-
	
	- On the DHCP server, exclude the static IP address from the DHCP scope.
	
	To exclude the static IP address from the DHCP scope:
	
	1. Turn off the DHCP client computer in conflict with the network device that
	  has the static IP address.
	
	2. On the DHCP server, exclude the static IP address from the scope of the DHCP
	  IP address range.
	
	3. Restart the DHCP client computer.
	
	NOTE: If the conflict persists for a Windows for Workgroups 3.11 client
	computer, delete the DHCP.BIN file in the Windows directory before you
	start Windows for Workgroups.
	
	Additional query words: 3.11 wfw wfwg wgao prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbNetworkClient300DOS kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.0,3.11,3.11a,3.11b,3.5,3.51
	
	=============================================================================
	
