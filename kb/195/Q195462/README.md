---
layout: page
title: "Q195462: WINS Registration and IP Address Behavior for Microsoft Cluster"
permalink: kb/195/Q195462/
---

## Q195462: WINS Registration and IP Address Behavior for Microsoft Cluster

	Article: Q195462
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details WINS registration and IP address behavior for Microsoft
	Cluster Server.
	
	MORE INFORMATION
	================
	
	During the installation of Microsoft Cluster Server, network names are required
	for each adapter. This "network name" is a label used to differentiate which
	group of adapters should be created on which IP Address. This IP Address then
	inherits the TCP/IP properties of the adapter bound to this network on the
	active node. NetBIOS names are registered based on dependencies for that NetBIOS
	name.
	
	Example:
	
	Criteria: Node X and Node Y both are dual-homed computers with one network
	interface card (NIC) used for client and internal communications and a dedicated
	NIC for internal use only. The client adapters are assigned the network name
	Corpnet. For clarity, only the client side adapters will be discussed in this
	example. Private adapters should not register with WINS.
	
	  Adapter on Node X registers with WINS Server A Adapter on Node Y registers
	  with WINS Server B
	
	IP Address 10.1.1.1 is registered with Microsoft Cluster Server as a virtual IP
	Address NetBIOS Name WOLFPACK depends on 10.1.1.1
	
	Whichever node owns the group that the IP address and network name are in will
	register the NetBIOS Name Wolfpack with the WINS server associated with its IP
	address when the NetBIOS name is brought online. That is, if Node X owns the
	group WOLFPACK on 10.1.1.1, it will register with WINS Server A. If Node Y owns
	the group, it will register on WINS Server B. This could have potential name
	resolution issues. For ease of use, adapters with client side access should
	point to the same WINS servers.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q193890 Recommend WINS Configuration for Microsoft Cluster Server
	
	  Q139985 WINS Client Fails to Reach a Multihomed Server
	
	  Q150737 Setting Primary and Secondary WINS Server Options
	
	  Q185786 Recommended Practices for WINS
	
	Additional query words: kbDSupport kbinfo winnt MSCS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
