---
layout: page
title: "Q143168: Routing IP Packets to Network Adapter Rather than RAS"
permalink: /kb/143/Q143168/
---

## Q143168: Routing IP Packets to Network Adapter Rather than RAS

	Article: Q143168
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Pages 419 to 421 of the Windows NT Networking Guide in the Windows NT 3.5
	Resource Kit explain how you can configure the Windows NT Remote Access Service
	(RAS) using the TCP/IP protocol to perform as a simple router.
	
	The routing is between the RAS connection and the network adapter in your local
	area network (LAN). However, if the following conditions are met, all network
	packets are sent over the RAS connection:
	
	- Your RAS connection and network adapter are using two different subnetwork
	  addresses in the same network.
	
	- You select Use Default Gateway On Remote Network check box for Windows NT
	  RAS.
	
	This article explains how you can direct network packets to the network adapter.
	
	MORE INFORMATION
	================
	
	To send packets to your network adapter, do the following in the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\RasMan\PPP\IPCP
	
	2. From the Edit menu, select Add Value.
	
	3. Enter the following:
	
	  Value Name: PriorityBasedOnSubNetwork
	  Data Type: REG_DWORD
	  String: 1 (Enable)
	
	4. Click OK and quit the Registry Editor.
	
	5. At a command prompt type:
	
	  "net stop remoteaccess" (without the quotation marks)
	
	6. At a command prompt type:
	
	  "net start remoteaccess" (without the quotation marks)
	
	EXAMPLE
	-------
	
	If your network adapter address is 10.1.1.1 and your RAS connection uses the
	address 10.2.1.1 and your subnet mask is 255.255.0.0, the network packets is
	forwarded to 10.2.1.1. The addresses 10.1.0.0 and 10.2.0.0 are two different
	subnetworks in the Class A 10.0.0.0 network. If you do not enable the
	PriorityBasedOnSubNetwork parameter, the following entries appear in your route
	table (assuming that you have selected the Use Default Gateway on Remote Network
	check box in RAS):
	
	Network Address      Netmask     Gateway Address   Interface  Metric
	---------------      -------     ---------------   ---------  ------
	    0.0.0.0          0.0.0.0        10.2.1.1        10.2.1.1     1
	   10.0.0.0        255.0.0.0        10.2.1.1        10.2.1.1     1
	   10.1.0.0       255.255.0.0       10.1.1.1        10.1.1.1     2 *
	   10.1.0.0       255.255.0.0       10.2.1.1        10.2.1.1     1 *
	   10.1.1.1      255.255.255.255   127.0.0.1       127.0.0.1     1
	   10.2.1.1      255.255.255.255   127.0.0.1       127.0.0.1     1
	10.255.255.255   255.255.255.255    10.1.1.1        10.1.1.1     1
	  127.0.0.0        255.0.0.0       127.0.0.1       127.0.0.1     1
	  224.0.0.0        224.0.0.0        10.2.1.1        10.2.1.1     1
	  224.0.0.0        224.0.0.0        10.1.1.1        10.1.1.1     1
	255.255.255.255  255.255.255.255    10.1.1.1        10.1.1.1     1
	
	Due to the two entries above (noted with *), all packets are sent over the RAS
	connection with the address 10.2.1.1. If you enable PriorityBasedOnSubNetwork,
	the following entry is removed from the route table:
	
	Network Address      Netmask      Gateway Address  Interface  Metric
	---------------    -----------    ---------------  ---------  ------
	   10.1.0.0       255.255.0.0      10.2.1.1        10.2.1.1     1
	
	If you have additional subnetworks in the 10.0.0.0 network and you want the
	packets to reach the correct subnetwork, add static routes to the route table.
	You can also use the Multi-Protocol Router (MPR) software available in the
	Windows NT 3.51 Service Pack 2. For additional information about adding static
	routes to the route table in Windows NT, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q140859 TCP/IP Routing Basics for Windows NT
	
	Additional query words: prodnt TCPIP lose packets connectivity
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
