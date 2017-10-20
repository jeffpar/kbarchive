---
layout: page
title: "Q201436: XFOR: After Notes Migration, Calendar Entries Cannot Be Modified"
permalink: /kb/201/Q201436/
---

## Q201436: XFOR: After Notes Migration, Calendar Entries Cannot Be Modified

{% raw %}

	Article: Q201436
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Lotus Notes meeting owners who are migrated to Microsoft Exchange Server can no
	longer modify the Attendee invitation list for meetings sent before the
	migration.
	
	CAUSE
	=====
	
	The Notes Migration wizard incorrectly sets the Appointment Owner attribute for
	these migrated meetings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Server
	5.5 Migration wizard. This problem was first corrected in Microsoft Exchange
	Server 5.5 Service Pack 2.
	
	MORE INFORMATION
	================
	
	If a meeting owner is the same as the calendar owner, the Notes Migration wizard
	does not set the meeting owner properties. Outlook and Schedule+ assume by
	default that the calendar owner is the meeting owner. This allows all meetings
	to be modified by the user after the migration from Lotus Notes.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
