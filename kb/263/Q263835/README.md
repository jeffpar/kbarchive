---
layout: page
title: "Q263835: XCON: MTA Stops (Event ID 9411), Free Disk Space More Than 10 MB"
permalink: /kb/263/Q263835/
---

## Q263835: XCON: MTA Stops (Event ID 9411), Free Disk Space More Than 10 MB

	Article: Q263835
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) service stops responding and
	reports Event ID 9411 in the application event log:
	
	  Event 9411
	  The MTA is terminating because the disk where MTADATA is located has less than
	  10 MB of space, or an error occurred while trying to check for free space on
	  the disk. If disk space is low, free up some disk space and restart the MTA.
	
	When you check the amount of free hard disk space, it far exceeds the 10
	megabytes (MB) of space that the MTA requires to function properly.
	
	CAUSE
	=====
	
	The page file, Mtadata, is located on a disk that has little remaining free
	space but the amount of free disk space is being reported as more than 10 MB.
	
	RESOLUTION
	==========
	
	Move the page file to a drive with a larger quantity of free space.
	
	MORE INFORMATION
	================
	
	For additional information about MTA errors, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q173458 XCON: Event ID 9406 Occurs When Memory or Free Disk Space is Low
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : MTA
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
