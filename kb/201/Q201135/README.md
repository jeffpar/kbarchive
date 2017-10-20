---
layout: page
title: "Q201135: XFOR: GroupWise Notes Migrate as All Day Event to Outlook 98"
permalink: /kb/201/Q201135/
---

## Q201135: XFOR: GroupWise Notes Migrate as All Day Event to Outlook 98

{% raw %}

	Article: Q201135
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Exchange Server users who are recently migrated from GroupWise try to
	schedule an appointment or meeting, they receive an error message stating that
	this appointment conflicts with another appointment. When you check their
	Calendar in Outlook 98, you find some events that are taking all day. These
	events are their GroupWise notes that were incorrectly migrated to Exchange
	Server.
	
	CAUSE
	=====
	
	GroupWise notes have no direct equivalent in Outlook. In GroupWise, notes are
	Calendar entries that users can generate to remind themselves of certain events,
	similar to tasks. In Outlook, notes do not reflect any entries in the Calendar,
	and thus GroupWise notes do not map directly to Outlook notes.
	
	All GroupWise notes (those that have been accepted and show up as Calendar
	entries) are migrated to Exchange Server as an all day event for each note.
	These events conflict with any new appointment or meeting for that day.
	Consequently, the user receives the error message mentioned above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook 98.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
