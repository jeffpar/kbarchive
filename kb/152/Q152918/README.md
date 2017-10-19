---
layout: page
title: "Q152918: XCON: MTA: Mail Delivery Slow and Disk Space Consumed"
permalink: /kb/152/Q152918/
---

## Q152918: XCON: MTA: Mail Delivery Slow and Disk Space Consumed

	Article: Q152918
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Message Transfer Agent (MTA) operations become very slow and
	mail delivery appears to stop. The following Event might be written to the
	Applications event log:
	
	  Event ID: 9411
	  Source:   MSExchangeMTA
	  Type:     Error
	  Category: Field Engineering
	  Description:
	  The MTA is terminating because the disk where MTADATA is located has
	  less than 10 MB of space, or an error occurred while trying to check for
	  free space on the disk. If disk space is low, free up some disk space
	  and restart the MTA. NT Error code returned: 0(non-zero indicates an
	  error while checking for free space)[BASE IL TIMER 3](16)
	
	CAUSE
	=====
	
	The Microsoft Exchange Server can experience a problem in which the MTADATA
	directory begins to fill with numerous files. The files appear to be normal .DAT
	files except for their sizes. The file sizes become progressively larger and can
	reach sizes greater than 20 megabytes. If this goes unnoticed, the files will
	fill the available disk space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	The MTACHECK utility will eliminate these erroneous files and allow the MTA to
	return to normal operation. Instructions for this utility are included in the
	Microsoft Exchange Server Administrator's Guide, chapter 17. For additional
	information about this utility, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q148284 XCON: When and How to use the MTACHECK utility
	
	Additional query words: spurious linear growth looping messages
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
