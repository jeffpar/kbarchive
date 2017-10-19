---
layout: page
title: "Q193533: XFOR: Date/Time Stamps Not Preserved on Migrated Notes Messages"
permalink: /kb/193/Q193533/
---

## Q193533: XFOR: Date/Time Stamps Not Preserved on Migrated Notes Messages

	Article: Q193533
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When migrating users from a Lotus Notes or Domino Server, you may notice that
	the date and time stamps are not preserved on some messages.
	
	CAUSE
	=====
	
	This will often occur with messages that are in the Drafts folder when the user
	is migrated.
	
	During migration, if the PostedDate or DeliveredDate attributes are not defined
	on a note in the user's Notes mail database, then the received date in Exchange
	Server defaults to the time and date of migration. This is true for any note
	that hasn't been posted or delivered, including:
	
	  Appointments
	  Reminders
	  Anniversaries
	  Events
	  Tasks
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
