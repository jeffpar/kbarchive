---
layout: page
title: "Q251107: XCON: MTA Can Now Set Reply To Address for the X.400 Connector"
permalink: /kb/251/Q251107/
---

## Q251107: XCON: MTA Can Now Set Reply To Address for the X.400 Connector

	Article: Q251107
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55 kbExchange550SP4Fea
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	A new feature exists in the Microsoft Exchange Server Message Transfer Agent
	(MTA) that allows the MTA to select the reply address. The MTA can select the
	appropriate X.400 Reply To address for messages that are sent through a
	particular X.400 Connector by originators who have multiple X.400 proxy
	addresses. This capability is now available in versions of Microsoft Exchange
	Server version 5.5 later than Service Pack 3.
	
	This feature requires that you create a registry key for each X.400 Connector.
	You must create this registry key with the name of the X.400 Connector. In
	addition, you must create a new string value named Site Proxy Override under the
	registry key for each of the X.400 Connectors. The Site Proxy Override registry
	value must contain the X.400 proxy address format that you want to use to set
	the reply address for all of the messages that are sent through the connector.
	The Site Proxy Override value must consist of a string in the following format:
	
	  c=xx;a=xx;p=xx
	
	For additional information about the latest service pack for Exchange Server 5.5,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q191014 XGEN: How to Obtain the latest the latest Exchange Server 5.5 Service
	  Pack
	
	MORE INFORMATION
	================
	
	To enable this feature in a multi-X.400 proxy site, implement registry keys and
	values on the bridgehead server by using the steps outlined in the following
	example. In this example, the following conditions exist:
	
	- All of the users in a site have two X.400 proxy addresses that have differing
	  administrative management domains (ADMDs):
	
	  c=US;a=xx;p=ExchangeOrg
	  c=US;a=yy;p=ExchangeOrg
	
	- There are two X.400 Connectors configured on the bridgehead server for this
	  site. Each X.400 Connector is configured to connect to a different X.400
	  service provider. One connector is configured to connect to ADMD xx and the
	  other connector is configured to connect to ADMD yy. The two X.400 Connectors
	  are named the following on the bridgehead server:
	
	  X.400 Connector to xx
	  X.400 Connector to yy
	
	- You want the MTA to select the reply to proxy address so that all of the
	  messages that go through the X.400 Connector to xx have a reply address in
	  the following form:
	
	  c=US;a=xx;p=ExchangeOrg
	
	Likewise, you want the reply address for the originator of messages that pass
	through the X.400 Connector to yy to use the following proxy form:
	
	  c=US;a=yy;p=ExchangeOrg.
	
	You need to create two different registry keys on this bridgehead server:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) on the bridgehead server.
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	3. On the Edit menu, click Add Key.
	
	4. In the first Key Name box, type the name of one of the X.400 connectors. For
	  this example, type "X.400 Connector to xx" (without the quotation marks).
	  Click OK.
	
	5. In the left pane, click the new registry key so that it is selected.
	
	6. On the Edit menu, click Add Value.
	
	7. Type the X.400 proxy format that you want to use for this X.400 Connector.
	  For this example, type "c=US;a=xx;p=ExchangeOrg" (without the quotation
	  marks). Click OK, and then click OK again.
	
	8. Repeat steps 2 through 7 to configure the settings for the other X.400
	  Connectors on the bridgehead server.
	
	9. Quit Registry Editor.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA exc55 kbExchange550SP4Fea 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
