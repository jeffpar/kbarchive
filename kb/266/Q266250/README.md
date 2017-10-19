---
layout: page
title: "Q266250: XFOR: Internet Mail Service on Cluster Uses Node IP Address"
permalink: /kb/266/Q266250/
---

## Q266250: XFOR: Internet Mail Service on Cluster Uses Node IP Address

	Article: Q266250
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Exchange Server 5.5 Internet Mail Service is installed and configured
	on either a Microsoft Windows 2000 or a Microsoft Windows NT 4.0 cluster,
	Internet Mail Service uses the physical node Internet Protocol (IP) address
	instead of the Exchange-based server's virtual IP address.
	
	MORE INFORMATION
	================
	
	You can use protocol logging and a network trace to determine what occurs when a
	node makes an outbound connection. The protocol log reports that the connection
	is coming from the cluster IP, but the network trace reports that the connection
	is using the IP address that is bound to the network adaptor on the node. This
	behavior can be an issue if a firewall has been implemented. If all IP addresses
	except for the cluster IP are blocked, traffic from the nodes is stopped, and
	the Exchange-based server is not able to send and receive mail.
	
	The Exchange 5.5 Internet Mail Service does not use cluster APIs. Socket programs
	can only use the virtual address when the socket programs are rewritten with
	cluster APIs, which are able to reference the virtual IP addresses that can be
	used.
	
	This behavior does not occur in Exchange 2000 Server because the architecture has
	been modified.
	
	For additional information, refer to the Cluster.doc file in the
	Docs\Word_docs\Clustering folder that is located on the Microsoft Exchange
	Server 5.5 CD-ROM.
	
	Additional query words: cluster IMS node virtual
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Component         : IMS ServerClustering
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
