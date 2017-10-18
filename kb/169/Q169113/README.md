---
layout: page
title: "Q169113: XCON: Using X.400 Connector with TCP/IP in Cluster Environment"
permalink: kb/169/Q169113/
---

## Q169113: XCON: Using X.400 Connector with TCP/IP in Cluster Environment

	Article: Q169113
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange X.400 Connector between two Microsoft
	Exchange Servers and at least one of the servers is a Microsoft Cluster node,
	message flow will not occur if you just list the IP address on the Stack tab of
	the properties page of the X.400 connector in the Microsoft Exchange
	Administrator program.
	
	CAUSE
	=====
	
	When the Microsoft Exchange Message Transfer Agent (MTA) attempts to send a
	message over the X.400 Connector using just an IP address, it will ask the
	Windows NT Server for the local IP address using the INADDR_ANY flag. Windows NT
	will return the local IP address of the active node and not the Cluster's
	virtual IP address which is configured in the Microsoft Exchange Administrator
	program. The following event will be recorded in the Windows NT Event Viewer
	Application Log when this problem occurs:
	
	  Event 9301   MSExchangeMTA     Configuration
	  The message transfer gateway that uses the network address
	  4E434F5354455354 and the transport stack
	  /o=Microsoft/ou=sitename/cn=Configuration/cn=Servers
	  /cn=servername/cn=TCP (mtaname) could not be found. Check the
	  configuration of the mail gateway. [BASE IL TCP/IP DRVR 36 218] (10)
	
	WORKAROUND
	==========
	
	To solve this problem, open the properties page of the X.400 Connector in the
	Microsoft Exchange Administrator program and click the Stack tab. Change the
	stack to use Remote Host Name and change the field to the name of the other
	Microsoft Exchange Server. This will need to be done on both servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: mscs wolfpack tcp
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
