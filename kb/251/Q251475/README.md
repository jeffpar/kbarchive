---
layout: page
title: "Q251475: XFOR: MAPI Error 80040110 Occurs When Attempting to Run Calcon"
permalink: kb/251/Q251475/
---

## Q251475: XFOR: MAPI Error 80040110 Occurs When Attempting to Run Calcon

	Article: Q251475
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55 exc55sp1
	Last Modified: 20-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect a multiple-server Microsoft Exchange 5.5 site to Lotus Notes
	using the Microsoft Exchange Calendar Connector (Calcon), the Calcon process
	quits when it attempts to do a free/busy query of the Exchange Server side, and
	you may receive the following error message:
	
	  The Calendar Connector cannot receive calendar requests from the Free Busy
	  Information public folder for site /o=Organization/ou=SITENAME on server
	  SERVERNAME due to MAPI error 80040110.
	
	The following event may also be reported in the application event log:
	
	  Event ID: 5013
	  Source: MSExchangeCalCo
	  Type: Error
	  Description:
	  The Calendar Connector cannot receive calendar requests made to the "Schedule+
	  Free Busy Information - /o=Organization/ou=SITENAME" system folder on
	  SERVERNAME due to MAPI error 80040110 and is shutting down.
	
	CAUSE
	=====
	
	If there are multiple servers that are running Exchange Server 5.5 in the same
	site, and if these servers require free/busy updates from Notes, Calcon can quit
	if it attempts to access a server that does not have Exchange Server 5.5 Service
	Pack 2 (SP2) installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, update all servers that need access to this information
	to Exchange Server 5.5 SP2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 5.5.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server 5.5 Service Pack 3 (SP3) is now available. For best
	performance it is recommended that all of the computers that are running
	Exchange 5.5 and the Exchange Connectors that are installed on those computers
	are both running the same service pack.
	
	NOTE: A separate service pack is required for the Exchange Connectors.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q242250 XFOR: Exchange Connectors Require a Separate Service Pack
	  Installation
	
	Additional query words: calendar, calcon, notes servpack 4.6.x r5 domino
	
	======================================================================
	Keywords          : exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
