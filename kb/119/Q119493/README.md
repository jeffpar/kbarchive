---
layout: page
title: "Q119493: NetBIOS over TCP/IP Name Resolution and WINS"
permalink: kb/119/Q119493/
---

## Q119493: NetBIOS over TCP/IP Name Resolution and WINS

	Article: Q119493
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.50 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NetBIOS over TCP/IP is the network component that performs computer name to IP
	address mapping, name resolution (NETBT.SYS in Windows NT and VNBT.VXD in
	Windows for Worgroups and Windows 95). There are currently four NetBIOS over
	TCP/IP name resolution methods: b-node, p-node, m-node and h-node.
	
	MORE INFORMATION
	================
	
	B-Node
	------
	
	When using b-node, broadcasts are used for both name registration and name
	resolution. On a TCP/IP network, if the IP router is not configured to forward
	the name registration and name query broadcasts, systems on different subnets
	will not be able to see each other since they will not receive the broadcasts.
	B-node name resolution is not the best option on larger networks because its
	reliance on broadcasts can load the network with broadcasts.
	
	Microsoft Modified B-Node
	-------------------------
	
	The TCP/IP used in Microsoft Windows NT uses a modified version of b-node name
	resolution. Microsoft modified b-node name resolution works in the following
	manner:
	
	- The workstation first checks the LMHOSTS cache and, if it finds the NetBIOS
	  name, returns the IP address.
	
	- Next, the workstation tries broadcasting to resolve the name (this works in
	  the same manner as b-node resolution) and, if the destination system is
	  active, it returns its IP address.
	
	- Finally, the workstation (if it is a Windows NT system) will check the
	  LMHOSTS file in the \<winnt_root>\system32\drivers\etc directory
	
	P-Node (or Point to Point Node)
	-------------------------------
	
	When using p-node name resolution, broadcasts are NOT used for name registration
	or name resolution. Instead, all systems register themselves with a NetBIOS Name
	Server (NBNS) upon start up. The NBNS is responsible for mapping computer names
	to IP addresses and making sure that no duplicate names are registered on the
	network. All systems must know the IP address of the NBNS, which is equivalent
	to a WINS Server. If the systems are not configured with the correct IP address
	for the NBNS, p-node name resolution will not work.
	
	The p-node name resolution method uses directed User Datagram Protocol (UDP)
	datagrams and TCP sessions for its communication to and from the NBNS.
	
	The main drawback of p-node name resolution is that if the NBNS cannot be
	accessed, there will be no way to resolve names and thus no way to access other
	systems on the network.
	
	M-Node (or Mixed Node)
	----------------------
	
	M-node uses a combination of b-node and p-node for name resolution. This method
	first uses b-node and then p-node, which in theory should increase local area
	network (LAN) performance. M-Node has the advantage over p-node in that if the
	NBNS is unavailable, systems on the local subnet can still be accessed through
	b-node resolution.
	
	M-node is typically not the best choice for larger networks because it uses
	b-node and thus results in broadcasts. However, when you have a large network
	that consists of smaller subnetworks connected via slow Wide Area Network (WAN)
	links, M-node is a preferred method since it will reduce the amount of
	communication across the slow links.
	
	
	H-Node (or Hybrid node)
	-----------------------
	
	H-node name resolution, which is currently in RFC draft form, also uses both
	b-node and p-node, however it only uses b-node as a last resort. When configured
	to use h-node, a system will always first try to use p-node and then use b-node
	ONLY if p-node fails. In addition, a system can be configured to use the LMHOSTS
	file after p-node fails and before trying b-node.
	
	H-node resolution does not require successful p-node registration for a system to
	initialize, however the system will use strictly b-node until p-node
	registration succeeds. If the NBNS is unavailable and the system resorts to
	using b-node resolution, it will continue to attempt to contact the NBNS so that
	it can return to using p-node if the NBNS becomes available.
	
	How WINS Works
	--------------
	
	By default, when a system is configured to use WINS for its name resolution, it
	adheres to h-node for name registration. For name resolution, it will also
	adhere to h-node but with a few differences. It will:
	
	- Check to see if it is the local machine name.
	
	- Check its cache of remote names. Any name that is resolved is placed in a
	  cache where it will remain for 10 minutes.
	
	- Try the WINS Server.
	
	- Try broadcasting.
	
	- Check the LMHOSTS file, if the system is configured to use the LMHOSTS file.
	
	- Try the HOSTS file and then a DNS, if so configured.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : 3.50 4.00
	
	=============================================================================
	
