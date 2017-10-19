---
layout: page
title: "Q199203: XFOR:Problems Rescheduling Meetings Between Exchange and Notes"
permalink: /kb/199/Q199203/
---

## Q199203: XFOR:Problems Rescheduling Meetings Between Exchange and Notes

	Article: Q199203
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Notes Connector (Web Drop 2) does not currently send rescheduled
	meeting requests from Exchange Server to Lotus Notes properly. This results in
	an error in the Notes client.
	
	CAUSE
	=====
	
	This is because of a conflict with duplicate meeting IDs in Notes. Although
	meetings can be rescheduled in Outlook, the changes are not correctly propagated
	to Notes, resulting in a matching ID error at each Notes recipient.
	
	RESOLUTION
	==========
	
	The Notes Connector will be redesigned to take this conflict into account.
	
	STATUS
	======
	
	Microsoft confirms this to be a problem in Microsoft Exchange Server version
	5.5.
	
	Additional query words: reschedule, meetings, error, matching ID
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending kbnofix
	
	=============================================================================
	
