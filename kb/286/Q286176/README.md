---
layout: page
title: "Q286176: XFOR: Unable to Complete Free and Busy Queries After SP4 Upgrade"
permalink: kb/286/Q286176/
---

## Q286176: XFOR: Unable to Complete Free and Busy Queries After SP4 Upgrade

	Article: Q286176
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade the Calendar Connector to Exchange Server 5.5 Service Pack 4
	(SP4), free and busy queries from Lotus Notes to Exchange Server fail. However,
	free and busy queries from Exchange Server to Exchange Server, Exchange Server
	to Notes, and Notes to Notes continue to work.
	
	CAUSE
	=====
	
	This issue can occur if the Excalcon task that is running on the Lotus Notes or
	Domino server is out-of-date. The new Calendar Connector that is included in
	Exchange Server SP4 assumes that the Exchange Server SP4 version of the Excalcon
	task is running on the Lotus Notes or Domino server.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. On the Lotus Notes or Domino server, type the following command at the server
	  console to stop the Excalcon task:
	
	  "tell excalcon quit" (without the quotation marks)
	
	2. On the Exchange Server computer that is running the Calendar Connector
	  service, open the Exchsrvr\Connect\Calcon folder, and then copy the new
	  Excalcon.exe file (that was provided during the Exchange Server SP4 upgrade)
	  to the target Lotus Notes or Domino server to replace the previous
	  Excalcon.exe file.
	
	3. On the Lotus Notes or Domino server, type the following command at the server
	  console to start the Excalcon task:
	
	  "tell excalcon start" (without the quotation marks)
	
	After you issue a few free and busy queries from Notes to Exchange Server, the
	schedule information is populated.
	
	Additional query words: freebusy excalcon calcon free/busy notes/domino
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
