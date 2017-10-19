---
layout: page
title: "Q222186: XFOR: Old GroupWise Connector May Delete Users in the GW System"
permalink: /kb/222/Q222186/
---

## Q222186: XFOR: Old GroupWise Connector May Delete Users in the GW System

	Article: Q222186
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain conditions, it may be possible for the Microsoft Exchange
	Connector for Novell GroupWise version 2522.0 to delete users in the GroupWise
	system.
	
	CAUSE
	=====
	
	The directory synchronization process between Exchange Server and GroupWise is
	composed of two pairs of transactions. The order in which these transactions are
	processed is critical. If the transactions are somehow mixed, it is possible for
	the version 2522.0 GroupWise Connector to delete all users in GroupWise. If
	GroupWise returns the transactions in a different order than what is expected by
	the connector, the version 2522.0 connector can send delete transactions into
	GroupWise for GroupWise accounts. The current shipping GroupWise Connector,
	version 2580.0, does not have this problem.
	
	RESOLUTION
	==========
	
	Microsoft has released an updated GroupWise connector (version 2580.0). Please
	ensure that you have implemented this version. The Exchange Connector for Novell
	GroupWise released with Exchange 5.5 SP3 CD provides complete messaging and
	calendar interoperability between Exchange Server and Novell GroupWise. It is
	located in the <Drive>:\Exchconn\Setup\<Platform>\Gwxconn folder,
	where <Platform> is the computer on which you are installing the Connector
	for Novell GroupWise.
	
	STATUS
	======
	
	Microsoft has fixed the problem. A new location for downloading the Web 3
	GroupWise connector is available at:
	
	  http://www.microsoft.com/exchange/downloads/55/GWConnector.asp
	
	MORE INFORMATION
	================
	
	The cc:Mail, Microsoft Mail, Lotus Notes, and SNADS connectors do not appear to
	be affected by this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
