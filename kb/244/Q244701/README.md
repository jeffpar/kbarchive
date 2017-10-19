---
layout: page
title: "Q244701: XADM: How to Install Internet Mail Service Connector on Cluster"
permalink: /kb/244/Q244701/
---

## Q244701: XADM: How to Install Internet Mail Service Connector on Cluster

	Article: Q244701
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install the Internet Mail Service connector on an Exchange Server computer
	that is running on a Microsoft Cluster Server:
	
	1. Make sure that Exchange Server has been installed on both nodes of a
	  Microsoft Cluster Server and that the Exchange Group can be moved to either
	  node.
	
	2. Start Exchange Server Administrator program.
	
	3. On the File menu, click New Other, and then click Internet Mail Service.
	
	4. Finish the wizard with all the necessary information.
	
	5. After the wizard is finished and the connector is installed, start the
	  Cluster Administrator program to make sure that the Internet Mail Service is
	  online.
	
	6. DO NOT MOVE or "failover" the Exchange Group from the active to the inactive
	  node.
	
	7. Insert the Exchange Server 5.5 Enterprise CD into the CD-ROM drive of the
	  inactive node.
	
	8. Click Microsoft Exchange 5.5.
	
	9. Click Set up Server and Components.
	
	10. Click Update Node.
	
	Additional query words: IMS Setup
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
