---
layout: page
title: "Q148286: XCON: How To Install and Configure the Dynamic RAS Connector"
permalink: /kb/148/Q148286/
---

## Q148286: XCON: How To Install and Configure the Dynamic RAS Connector

{% raw %}

	Article: Q148286
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the steps required to configure the Microsoft Exchange
	Server Dynamic Remote Access Service (RAS) Connector.
	
	You can use the Dynamic RAS Connector when you don't have a permanent connection
	between Microsoft Exchange Sites but you can connect using the Windows NT Remote
	Access Service.
	
	MORE INFORMATION
	================
	
	The advantages and disadvantages of using the Dynamic RAS Connector are as
	follows:
	
	Advantages:
	
	- You can control when connections are made.
	
	- It works over asynchronous, non-permanent connections.
	
	- It supports asynchronous and ISDN connections.
	
	Disadvantages:
	
	- Data transfer is dependent on the speed of the modem.
	
	- Bottlenecks may occur because all message traffic must go through one
	  bridgehead server on each site unless you configure multiple bridgehead
	  servers in the site.
	
	Before you set up a Dynamic RAS Connector:
	
	1. Windows NT RAS software must be installed and working properly on both
	  Microsoft Exchange Server computers.
	
	2. You must know the name of the Microsoft Exchange Server in the remote Site.
	
	3. Each Microsoft Exchange Server computer must have a RAS phone book entry for
	  the remote server.
	
	To setup a Dynamic RAS Connector:
	
	1. In the Microsoft Exchange Administrator program, create a RAS Message
	  Transfer Agent (MTA) Transport stack by clicking File, New Other, and MTA
	  Transport Stack. The default name for the transport stack is "RAS
	  (servername)".
	
	2. Also in the Microsoft Exchange Administrator program, from the File menu,
	  choose New Other, and select Dynamic RAS Connector. This will bring up the
	  RAS Connector Properties page.
	
	The following are the minimum configuration tasks required to put a Dynamic RAS
	Connector in service. Additional configuration may be required in order to get a
	RAS Connector working properly:
	
	1. In the Microsoft Exchange Administrator program, open the RAS Connector
	  Properties page and on the General tab, specify the remote server name and
	  the correct RAS Phone Book entry.
	
	2. Also in the Microsoft Exchange Administrator program, specify an address on
	  the Address tab of the RAS Connector Properties page or specify a site using
	  the Connected Sites tab.
	
	For more detailed configuration procedures, see the Microsoft Exchange Server
	Administrator's Guide. For additional information, please see the Readme.wri
	file on the Microsoft Exchange Server CD. Microsoft Exchange Server
	Administrator's Guide, pp.172-178
	
	Microsoft Exchange Server Concepts and Planning Guide, p.103
	
	Additional query words: exfaqcon
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
