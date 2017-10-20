---
layout: page
title: "Q240756: XCLN: Exmerge Loses Free/Busy Info for Existing Appointments"
permalink: /kb/240/Q240756/
---

## Q240756: XCLN: Exmerge Loses Free/Busy Info for Existing Appointments

{% raw %}

	Article: Q240756
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 02-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Exmerge to export or import a mailbox, it may lose the current free
	and busy information for existing appointments. All new appointments show the
	free and busy time correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, you need to log on to the mailbox with a Microsoft
	Outlook client by using the /cleanfreebusy switch. This re-establishes all free
	and busy information for appointments listed in the mailbox calendar.
	
	WORKAROUND
	==========
	
	To work around this issue, after you run Exmerge to import the data:
	
	1. Create an Outlook profile for the mailbox.
	
	2. At a command prompt, change to the directory where Outlook.exe file is
	  located, and type: outlook.exe /cleanfreebusy.
	
	3. Log on to the mailbox as you normally would, and confirm that the free and
	  busy information is correctly displayed by attempting to schedule a meeting
	  at a date and time that already has an existing appointment in the calendar.
	  When you view Attendee Availability, the time is shown as busy instead of
	  free.
	
	MORE INFORMATION
	================
	
	For additional information about command-line switches for Outlook, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q197180 OL2000: Additional Command-Line Switches
	
	After the mailbox has been imported via Exmerge, the free/busy data for those
	users will need to be rebuilt. Use one of the following methods to complete
	this:
	
	1. The users whose mailboxes were exmerged should login to their mailbox, and
	  make a change to their calendar. This will recreate the free/busy data.
	
	  -or-
	
	2. Send an appointment to the exmerged users, which will also recreate the
	  free/busy data.
	
	
	Additional query words: free busy server
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange550SP1 kbExchange550SP2
	Version           : :5.5,5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
