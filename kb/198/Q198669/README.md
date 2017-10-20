---
layout: page
title: "Q198669: SMS: Status Message Viewer Shows Conflicting Statistics"
permalink: /kb/198/Q198669/
---

## Q198669: SMS: Status Message Viewer Shows Conflicting Statistics

{% raw %}

	Article: Q198669
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbMMC kbsms200 kbStatSum
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Discovery Data Manager and the status message viewer show conflicting
	statistics. For example, Discovery Data Manager shows 350 errors, 0 Warnings, 35
	Informational messages "Since Installation", 14 errors, 0 Warnings, 19
	Informational messages "Since 8:00 AM" and yet the status message viewer shows
	no messages.
	
	If you are viewing the summary data with a Display Interval that is large, such
	as Since Site Installation or Since 1st of the Month (and it currently is the
	30th), the messages could have already been automatically deleted from the
	database. The status filter rules specify which message should be stored in the
	database and how long they should be kept there. The SQL Monitor deletes the
	status messages that have aged beyond their specified lifetime. Even though the
	message has been deleted, the summary is not affected.
	
	MORE INFORMATION
	================
	
	The administrator, or another user who has appropriate permissions, can delete
	the status messages from the database manually using the Status Message Viewer
	or by right-clicking on the Status Message Query and selecting Delete Messages.
	When you delete the messages, the summary is not affected.
	
	If you are viewing the Component Status for a child site, it is possible that the
	summary was replicated to the parent site (the site you are currently on) before
	the status messages were replicated. By default, the summaries replicate at
	Medium priority and the status messages replicate at Low priority. The status
	filter rules configure what status messages are replicated and at what priority
	they replicate.
	
	You can configure the status filter rules to not store the status message in the
	database, but still forward them to the summarizers. In this case, the
	summarizers will still produce the summaries, but the status messages will not
	be available. This configuration might actually be useful to administrators as
	well as dangerous to them.
	
	If you are viewing statistics near the beginning of a new period like viewing at
	7 a.m. the "Since 8:00:00 AM" display interval, you will be viewing statistics
	that are as old as 23 hours.
	
	The component summarizer counts all incoming server status messages sent to it
	through the Status Manager according to the set of status filter rules. The
	incoming status messages are received by the Status Manager and evaluated to
	determine what it needs to do with them. Normally, Status Manager writes them to
	the status message tables in the database, and then forwards a copy of each to
	the component status summarizer.
	
	The status messages in the database are cleared after they have been in there a
	set amount of time. The status counts in the component summarizer are never
	cleared. This will always show the total number of messages received at a site.
	Users with administrative rights can reset the message totals for Errors,
	Warnings, and Information.
	
	Additional query words: prodsms smsstat
	
	======================================================================
	Keywords          : kbMMC kbsms200 kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
