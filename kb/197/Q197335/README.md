---
layout: page
title: "Q197335: XFOR: NOTES Textured Calendar MSG. do not have EndDateTime"
permalink: /kb/197/Q197335/
---

## Q197335: XFOR: NOTES Textured Calendar MSG. do not have EndDateTime

	Article: Q197335
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a user in Exchange Server sends an invitation that lasts for more than one
	day to a user in Lotus Notes through the Exchange Notes Connector, the received
	notice will show incorrect and incomplete date information. The received message
	will not include the end date, and the time will not indicate whether the end
	time is for the same day or the following day.
	
	For example, if the StartDateTime = 1998/09/28 9:00, EndDateTime = 1998/10/01
	17:00), the textured calendar message would show up as follows:
	
	  CALENDAR ENTRY: INVITATION
	  Description:   This is a description
	  Date:    1998/09/28
	  Time:    09:00 - 17:00 (PST)
	
	Notice that only the Start date shows, and the end date is missing. Also, the end
	time does not indicate whether it is in the same day or in the following day.
	
	CAUSE
	=====
	
	This problem will happen although all servers in the environment are set to the
	same time zone.
	
	WORKAROUND
	==========
	
	The problem affects only the "Textured calendar messages but not the SC2 file.
	The StartDate and EndDate data in the SC2 file are correct and can be imported
	to the Outlook calendar properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
