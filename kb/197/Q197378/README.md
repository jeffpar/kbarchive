---
layout: page
title: "Q197378: XCON: MTA Generates 9301 Events on Incoming Connections"
permalink: kb/197/Q197378/
---

## Q197378: XCON: MTA Generates 9301 Events on Incoming Connections

	Article: Q197378
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55sp1
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may generate Event ID 9301 when
	receiving an incoming connection from a multihomed server.
	
	CAUSE
	=====
	
	By default, the MTA allows the transport to make the selection of the virtual
	server IP address for an outgoing connection. The transport uses all of the
	available virtual server IP addresses. The Exchange Server MTA that is being
	contacted can only have one IP address or one server name defined on the Stack
	property page for each X.400 Connector object. Any incoming connections from an
	X.400 MTA with an IP address or server name that is not configured on the Stack
	property page for any locally installed connectors causes an Event ID 9301, and
	the connection will not work.
	
	The Event ID 9301 occurs in the event log of the receiving server approximately
	half of the times that a connection is attempted from a multihomed server where
	two virtual server IP addresses are available.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2431.0
	  Dcprods.cat    5.5.2431.0
	  Ems_rid.dll    5.5.2431.0
	  Emsmta.exe     5.5.2431.0
	  Info4log.cfg   5.5.2431.0
	  Infodlog.cfg   5.5.2431.0
	  Infollog.cfg   5.5.2431.0
	  Infotlog.cfg   5.5.2431.0
	  Mtacheck.exe   5.5.2431.0
	  Mtamsg.dll     5.5.2431.0
	  P2.xv2         5.5.2431.0
	  X400om.dll     5.5.2431.0
	  X400omv1.dll   5.5.2431.0
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1. This problem was first corrected in Exchange Server
	5.5 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Exchange Server 5.5 Service Pack 2 allows you to define which virtual IP address
	to use for outbound X.400 connections on multihomed servers. To implement this
	feature, perform the following procedures on the multihomed Exchange Server
	computers that are involved.
	
	First, you must identify the Relative Distinguished Name (RDN) of the X.400
	Connector to implement the necessary registry modifications on the server:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Double-click Site, double-click Configuration, double-click Connectors, and
	  then in the right pane, click the X.400 Connector.
	
	3. On the File menu, click Raw Properties to open the X.400 Connector raw
	  properties.
	
	4. In the Object Attribute column, click Obj-Dist-Name, and in the Attribute
	  Value box, scroll to the right until you locate the last "\cn=" value. This
	  is the RDN that you use to create the registry key name.
	
	  For example, for an X.400 Connector object named "TCP to MTA B," the value for
	  the Obj-Dist-Name object attribute is displayed similar to the following:
	
	  /o=<Organization>/ou=<Site>/cn=<Configuration>/cn=<Connection>s/cn=TCP
	  to MTA B
	
	  In this example, the RDN value is "TCP to MTA B."
	
	Using the above example of RDN is "TCP to MTA B," create a registry key name by
	using the RDN of "TCP to MTA B" as follows:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Start Registry Editor.
	
	  b. Find the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	  c. On the Edit menu, click Add Key, and add the following registry key value,
	     with no entry for class:
	
	  TCP to MTA B
	
	5. Under the new registry key name, on the Edit menu, click Add Value, and
	  create a new key value with a class of REG_SZ called Stack IP Address
	  Override. This must be configured under the registry key named after the Link
	  RDN. If you continue to use the example RDN, this definition appears as:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\TCP
	  to MTA B\Stack IP Address Override
	
	  The string value (REG_SZ) of the defined key is the IP address that the MTA
	  uses when it creates outgoing connections, and is configured in standard dot
	  notation, for example: 1.23.45.67. This IP address is used as the From IP
	  address when sending outbound connections, and therefore allows only one
	  particular IP address on the multi-homed host to be used for the given
	  connector.
	
	  After you make these changes on the multihomed server, you must restart the
	  Exchange MTA Service for the modifications to take effect.
	
	6. You must then configure the connector that receives inbound connections from
	  the multihomed server to use this address.
	
	Note that the above changes are required only for X.400 connections that are
	outbound from the multihomed server. The MTA on the multihomed server still
	listens with the bind set to any incoming socket, so inbound connections to
	either IP address on the multihomed server are recognized and no modifications
	are required for inbound connections.
	
	For additional information on troubleshooting occurrences of Event ID 9301, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q189345 XCON: MTA Logs Event 9301 Though X.400 Connector Is Identified
	
	  Q193380 XCON: Mail Does Not Flow over X.400 Connector; Event 9301 Logged
	
	  Q169113 XCON: Using an X.400 Connector with TCP/IP in a Cluster Environment
	
	  Q234962 XCON: Certain Builds of the MTA Do Not Generate 9301 Event ID
	
	
	
	
	Additional query words: 9202
	
	======================================================================
	Keywords          : exc55sp2fix exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
