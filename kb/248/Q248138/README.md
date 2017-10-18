---
layout: page
title: "Q248138: XADM: Applying Exchange 5.5 SP to a Clustered Exchange Server"
permalink: kb/248/Q248138/
---

## Q248138: XADM: Applying Exchange 5.5 SP to a Clustered Exchange Server

	Article: Q248138
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the procedure to successfully install an Exchange Server
	version 5.5 service pack on a computer running clustering services.
	
	MORE INFORMATION
	================
	
	To install an Exchange Server version 5.5 service pack on a computer running
	clustering services:
	
	1. Install the service pack on the primary (active) node by using the Update.exe
	  program from the Exchange Server 5.5 service pack CD-ROM.
	
	  IMPORTANT: Do not failover (move) the Exchange Server group to the secondary
	  node.
	
	2. Install the service pack on the secondary node by using the Update.exe
	  program from the Exchange Server 5.5 service pack CD-ROM.
	
	NOTE: If you update an earlier version of Exchange Server on clustered computers,
	the installation program stops the Exchange Server services. When the update
	installation is finished, the installation program restarts the services. This
	causes an interruption for users, because they cannot connect to the server
	during this time.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
