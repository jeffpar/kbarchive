---
layout: page
title: "Q300931: Files That You Can Safely Delete from the ImcData Folder"
permalink: /kb/300/Q300931/
---

## Q300931: Files That You Can Safely Delete from the ImcData Folder

	Article: Q300931
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbExchange
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article identifies the files that you can safely delete to free up some
	disk space in the ImcData\Log folder without affecting the Internet Mail
	Service.
	
	MORE INFORMATION
	================
	
	1. In the Internet Mail Service <Name> Properties dialog box, click
	  Diagnostic Logging.
	
	2. Click NONE in the "SMTP Protocol Logging and Message" list, and then click
	  OK.
	
	3. In Control Panel, under Services, stop the Microsoft Exchange Internet Mail
	  Service.
	
	4. In Windows Explorer, right-click and then delete each of the following files:
	
	  Exchsrvr\ImcData\Log\L*.log
	
	  Exchsrvr\ImcData\In\Archive\*.*
	
	  Exchsrvr\ImcData\Out\Archive\*.*
	
	5. In Control Panel, under Services, restart the Microsoft Exchange Internet
	  Mail Service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbExchange 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
