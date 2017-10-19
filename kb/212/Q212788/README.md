---
layout: page
title: "Q212788: XFOR: Connector for cc:Mail Stops, No Errors Appear in Event Log"
permalink: /kb/212/Q212788/
---

## Q212788: XFOR: Connector for cc:Mail Stops, No Errors Appear in Event Log

	Article: Q212788
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus cc:Mail may stop unexpectedly. No
	errors appear in the Windows NT Application Event log, even with maximum logging
	enabled. If you restart the connector, it may start delivering messages again
	for a short period of time, but then stop delivering messages.
	
	CAUSE
	=====
	
	This problem can occur when one or more .und files exist in the
	Exchsrvr\Ccmcdata\Import or Exchsrvr\Ccmcdata\Export folder. These files are
	associated with messages that could not be delivered when they were originally
	sent.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the .und files associated with the undeliverable
	e-mail messages. To do so, follow these steps:
	
	1. Stop the Exchange Connector for Lotus cc:Mail, if it is started.
	
	2. Copy the .und files from the Exchsrvr\Ccmcdata\Import or
	  Exchsrvr\Ccmcdata\Export folder to a different folder, and then delete the
	  .und files in the Exchsrvr\Ccmcdata\Import or Exchsrvr\Ccmcdata\Export
	  folder.
	
	3. Restart the Exchange Connector for Lotus cc:Mail.
	
	The connector should then start delivering messages again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
