---
layout: page
title: "Q153758: XCON: Dynamic RAS Error Msg: An Interface Error Has Occured"
permalink: /kb/153/Q153758/
---

## Q153758: XCON: Dynamic RAS Error Msg: An Interface Error Has Occured

{% raw %}

	Article: Q153758
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Dynamic RAS Connector between two Microsoft Exchange Servers
	where Server A dials Server B to transfer mail and Server A disconnects after
	20-30 seconds, the Windows NT Event Log might show the following event:
	
	  An interface error has occurred. An MtaBindBack over RPC has failed. Locality
	  Table (LTAB) index: 5, NT/MTA error code: 1723. [BASE IL INCOMING RPC 190
	  507] (14).
	
	The same connection might be successful if Server B dials Server A.
	
	CAUSE
	=====
	
	Either the Override Account Information on the RAS Connector override tab is
	incorrect or Windows NT Service Pack 4 has not been properly installed. The
	latter might occur if protocols and components were added to the Windows NT 3.51
	server after Service Pack 4 was installed.
	
	RESOLUTION
	==========
	
	Either correct the Override Account Information or reinstall Windows NT 3.51
	Service Pack 4.
	
	NOTE: Service Pack 4 should be installed on the Microsoft Exchange Server that is
	not accepting the connection.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q130069 SERVICES.EXE Fails With Access Violation and Returns RPC Busy...
	
	  Q126401 Err Msg: "Not Enough Server Storage is Available to Process..."
	
	Additional query words: 4.00 RAS 1723 MTA NT
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
