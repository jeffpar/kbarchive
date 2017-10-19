---
layout: page
title: "Q199643: XFOR: Tentative Schedule in Outlook Appears as Free in Notes"
permalink: /kb/199/Q199643/
---

## Q199643: XFOR: Tentative Schedule in Outlook Appears as Free in Notes

	Article: Q199643
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	There is an option to tentatively schedule appointments in Outlook. When this
	information is passed through the Calendar Connector to Lotus Notes, it will
	appear as free time. End users in Notes may be confused by this, and it may
	result in conflicts with meeting times and other calendar entries with Exchange
	Server users.
	
	MORE INFORMATION
	================
	
	This is by design because Outlook marks all tentative time slots as free time.
	The Calendar Connector is correctly sending the result of the F/B query back to
	Lotus Notes.
	
	Additional query words: tentative times, outlook
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
