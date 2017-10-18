---
layout: page
title: "Q173889: XADM: Determining if Exchange Server Enterprise or Standard Edit"
permalink: kb/173/Q173889/
---

## Q173889: XADM: Determining if Exchange Server Enterprise or Standard Edit

	Article: Q173889
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no distinction in the user interface between Exchange Server Standard
	and Exchange Server Enterprise editions.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	To distinguish between Exchange Server Standard and Exchange Server Enterprise,
	check the Windows NT Event Viewer application event log upon startup.
	
	The following event is logged when the information store starts on an Enterprise
	edition Exchange Server computer:
	
	  Event Id: 1217
	  Source: MSExchangeIS
	  Type: Information
	  Category: General
	  Description: "Information store with unlimited capacity started"
	
	The Standard edition logs the following event:
	
	  Event ID 1216
	  Source: MSExchangeIS Private
	  Type: Information
	  Category: General
	  Description: Information store with limited storage capacity enabled.
	
	Additional query words: standard vs enterprise
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
