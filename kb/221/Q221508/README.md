---
layout: page
title: "Q221508: OL&#92;Exch Mac Client Hangs Wrkstn While Attempting to Find Server"
permalink: /kb/221/Q221508/
---

## Q221508: OL&#92;Exch Mac Client Hangs Wrkstn While Attempting to Find Server

	Article: Q221508
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Outlook for PowerMacintosh, Exchange Server edition client is running
	on a Macintosh computer, the system may periodically stop responding (hang).
	
	CAUSE
	=====
	
	The Exchange client (in this case Outlook) initiates a poll for new messages
	(this occurs approximately every 70 seconds). The above behavior is caused when
	the client is waiting for, and does not receive, a response from the Exchange
	Server computer.
	
	
	STATUS
	======
	
	This is a limitation of the Apple, Inc. transport APIs. Microsoft is
	cooperatively working with Apple to create a solution to work around these
	limitations.
	
	MORE INFORMATION
	================
	
	Outlook for PowerMacintosh and all other Exchange/Outlook clients use
	synchronous calls to communicate with the Exchange server. When the Macintosh
	client polls the server for new messages and the net/server is "down" or very
	busy, the EcDoRPC call the client initiates will be blocked and "lock" the
	operating system. When the net/server is "back on line" or not as busy, the call
	will complete and normal operation of the operating system will continue. The
	current implementation includes a timeout method, that depends on the Apple Inc,
	provided API. Limitations in the API cause the timeout not to work as designed.
	
	Additional query words: Outlook MAC client hangs.
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac kbOutlook810Mac
	Version           : :8.0,8.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
