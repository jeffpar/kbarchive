---
layout: page
title: "Q247770: XADM: DS Does Not Start After Error 1507 with Event ID 1002"
permalink: kb/247/Q247770/
---

## Q247770: XADM: DS Does Not Start After Error 1507 with Event ID 1002

	Article: Q247770
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer after receiving an error message from Microsoft
	Exchange Server 5.5 and then try to start the Directory service (DS), Event
	Viewer records the following event:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description: The Microsoft Exchange Server database, EDB, could not be
	  initialized and returned error -1507. Unrecoverable error. The directory
	  cannot continue.
	
	CAUSE
	=====
	
	This behavior can occur when the Directory database (Dir.edb) structure is
	damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the Directory database (Dir.edb) from a tape
	backup.
	
	NOTE: If you do not have a valid backup of the Directory database (Dir.edb), you
	can restore the file through full disaster recovery of Exchange Server.
	
	MORE INFORMATION
	================
	
	For more information about disaster preparedness and recovery, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q184186 XADM: Recovering Exchange from a Corrupted Directory
	
	  Q183266 XADM: How to Restore an Offline Backup of the Directory Service and
	  Information Store
	
	  Q177635 XADM: How to Set Up a Disaster Recovery Server for Dir.edb
	
	The "Disaster and Recovery Planning" white paper discusses topics related to
	disaster recovery of an Exchange Server. This document contains useful
	information for anyone who administers an Exchange Server. You can find the
	white paper at:
	
	  http://www.microsoft.com/exchange/techinfo/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
