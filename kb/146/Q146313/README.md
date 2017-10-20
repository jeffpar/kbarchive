---
layout: page
title: "Q146313: Only Last Expired Reminder Is Received on Recurring Appts."
permalink: /kb/146/Q146313/
---

## Q146313: Only Last Expired Reminder Is Received on Recurring Appts.

{% raw %}

	Article: Q146313
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a recurring daily appointment with the reminder set for one (1)
	day beforehand, and the system date is suddenly advanced, you will only receive
	the reminder for the present day and the following day.
	
	
	CAUSE
	=====
	
	This feature is by design.
	
	This feature is a result of the optimization performed by the reminders code;
	this code caches the next alarm date. If the ring alarm table changes, it rings
	the first alarm. However, if an unknown is sent, only the cached alarm and the
	next alarm will occur; all others will be deleted.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
