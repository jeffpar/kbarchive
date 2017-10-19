---
layout: page
title: "Q258095: XFOR: Configuring the 5.5 Cal. Conn. to Use Exchange 2000 Router"
permalink: /kb/258/Q258095/
---

## Q258095: XFOR: Configuring the 5.5 Cal. Conn. to Use Exchange 2000 Router

	Article: Q258095
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article explains how to set up the Microsoft Exchange Calendar Connector
	Service on a Microsoft Exchange Server 5.5 computer to use the router for the
	Microsoft Exchange Novell GroupWise Connector that resides on a Microsoft
	Exchange 2000 server.
	
	The GroupWise Connector, which is included with Exchange 2000, supports meeting
	requests. This means that GroupWise, and Exchange 2000 users can send meeting
	requests to each other over the GroupWise Connector. However, Exchange 2000 does
	not include, or support the Calendar Connector. The Calendar Connector is an
	additional component that works in tandem with the GroupWise Connector to add
	support for free-and-busy lookups between GroupWise, and Exchange users. This
	means that although Exchange 2000 supports meeting requests, it does not support
	free-and-busy lookups.
	
	To work around the lack of Exchange 2000 support for the Calendar Connector, keep
	an Exchange Server 5.5 computer in your organization that has Calendar Connector
	installed. Calendar Connector depends on the GroupWise Connector router service
	to route free-and-busy messages between Exchange, and GroupWise. Usually, an
	Exchange Server 5.5 computer with the Calendar Connector configured must also
	have the GroupWise Connector configured. It is now possible to use the GroupWise
	Connector of an Exchange 2000 server to route free-and-busy messages for a
	Calendar Connector that is installed on an Exchange Server 5.5 computer, thereby
	eliminating the need to install the GroupWise Connector on the Exchange Server
	5.5 computer. The only GroupWise Connector component that you must install on
	the Exchange Server 5.5 computer is the Novell GroupWise E-Mail Address
	Generator. You can install this component by using the GroupWise Connector Setup
	program, without having to fully install the GroupWise Connector.
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This following instructions are based on the assumption that:
	
	- The Calendar Connector, and the GroupWise Connector are currently installed,
	  and working on the Exchange Server 5.5 computer.
	
	- You are using these instructions to disable the GroupWise Connector on the
	  Exchange Server 5.5 computer.
	
	- You continue to use the Calendar Connector on the Exchange Server 5.5
	  computer, which now uses a GroupWise Connector that is properly configured on
	  an Exchange 2000 server.
	
	To use the Calendar Connector Service that is installed on Exchange Server 5.5
	with the GroupWise Connector that is installed on Exchange 2000, you must edit
	the registry on the Exchange Server 5.5 computer.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCalCon\Parameters
	
	3. On the Edit menu, click Add Value, and then type "GWISECAL.0001.API_IN
	  Directory" (without the quotation marks) in the Value Name field. Set the
	  Data Type field to REG_SZ, and then click OK. In the String field, type:
	
	  \\<Exchange2000ServerName>\gwrouter\togwise
	
	4. Again, in Regedt32.exe, in the same key, on the Edit menu, point to Add
	  Value, and then type "GWISECAL.0001.API_OUT Directory" (without the quotation
	  marks) in the Value Name field. Set the Data Type field to REG_SZ, and then
	  click OK. In the String field, type:
	
	  \\<Exchange2000ServerName>\gwrouter\freebusy
	
	  NOTE: In steps 3 and 4, be sure to replace <Exchange2000ServerName> with
	  the actual name of the Exchange 2000 server that is running the GroupWise
	  Connector.
	
	5. Quit Registry Editor.
	
	6. On the Exchange 2000 server that is running the GroupWise Connector, create a
	  network share, type "Gwrouter" (without the quotation marks) for the name,
	  and have it point to the Exchsrvr\Conndata\Gwrouter folder of the Exchange
	  2000 server. Give the Calendar Connector Service account on the Exchange
	  Server 5.5 computer full control of this share.
	
	7. Start the connector services on both servers. Ensure that:
	
	   - The Connector for Novell GroupWise on the Exchange 2000 server is started.
	
	   - The GroupWise Connector on the Exchange Server 5.5 computer is disabled.
	
	   - The Calendar Connector Service on the Exchange Server 5.5 connector is
	     started.
	
	After you add the two registry keys, the Calendar Connector routes, and receives
	free-and-busy requests by means of the Exchange 2000 Gwrouter share, rather than
	by means of its own local Gwrouter queues.
	
	
	Additional query words: gwrouter.exe gwrouter CalCon freebusy togwise
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Component         : S+_F/B_GTW
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP2 kbExchange550SP3
	Version           : :5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	
