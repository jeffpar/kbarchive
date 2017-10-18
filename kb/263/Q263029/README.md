---
layout: page
title: "Q263029: XCON: Internet Mail Service Setup Does Not Work on Windows 2000"
permalink: kb/263/Q263029/
---

## Q263029: XCON: Internet Mail Service Setup Does Not Work on Windows 2000

	Article: Q263029
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 02-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install the Exchange Server 5.5 Internet Mail Service on a
	computer that is running Windows 2000 Server that is a cluster server, the Setup
	Wizard may stop responding when it attempts to start services and the following
	error message may be displayed:
	
	  Overlapped I/O operation is in progress.
	
	  ID no: 0xc00203e5
	
	The following event is also logged in the application event log:
	
	  EventID 4058
	
	  Category: Intialization/Termination
	
	
	CAUSE
	=====
	
	This issue can occur if the cluster server does not have the Domain Name System
	(DNS) portion of the Transmission Control Protocol/Internet Protocol (TCP/IP)
	stack set up correctly and does not have A records for the cluster servers in
	the local DNS. The DNS is on Microsoft Windows NT Server version 4.0, which does
	not support automatic registration of DNS entries.
	
	RESOLUTION
	==========
	
	To resolve this issue, determine the host (A) records that should be listed for
	the Exchange Cluster.
	
	1. From the Cluster Administrator, open the Exchange Group.
	
	2. Record the IP address and the network name of the Exchange service.
	
	3. Record the IP address and the network Name of the Cluster server.
	
	NOTE: The Exchange network name and IP, and the Cluster network name and IP
	should be different.
	
	On the Cluster server itself, set up the DNS tab in the TCP/IP stack properties
	to search the local DNS before searching the Internet service provider's DNS:
	
	1. Right-click My Network Places, and then click Properties.
	
	2. Right-click Local Area Connection, and then click Properties.
	
	3. Click Internet Protocol (TCP/IP), click Properties, and then click Advanced.
	
	4. Click the DNS tab.
	
	5. Under "DNS server addresses, in order of use", arrange the list so that the
	  DNS server on the local network is used before the DNS server on the
	  Internet.
	
	6. Within the Local Network DNS, add Host (A) records for:
	
	   - Exchange Name and IP Address
	
	   - Cluster Name and IP Address
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Component         : IMC IMS Cluster
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5 SP3
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
