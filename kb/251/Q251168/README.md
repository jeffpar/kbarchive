---
layout: page
title: "Q251168: XCLN: Meeting Request Generates NDR for a Recipient Not Invited"
permalink: /kb/251/Q251168/
---

## Q251168: XCLN: Meeting Request Generates NDR for a Recipient Not Invited

	Article: Q251168
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a meeting request, you may receive a non-delivery report (NDR) for
	a recipient who was not invited to the meeting that is similar to the
	following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:Test Message
	  Sent:2/22/2000 3:40 PM
	
	  The following recipient(s) could not be reached:
	
	  NDR on 2/22/2000 3:40 PM
	  The message was undeliverable because the recipient postal address was not
	  known at this address.
	
	CAUSE
	=====
	
	This problem can occur if the recipient of the meeting request has a damaged
	delegate rule or is using a delegate rule that points to a mailbox that has been
	deleted. For additional information about NDRs from attendees not listed in an
	appointment, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q156525 Sched+ User Gets NDR from Attendee not Listed in Appointment
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the delegate permissions:
	
	1. On the Tools menu, click Options.
	
	2. Click the Delegates tab.
	
	3. Click the entry for the user who is no longer in the global address list, and
	  then click Remove.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	When you set up delegate permissions, Outlook creates a hidden rule in the Inbox
	that automatically forwards meeting requests to the delegate. When the delegate
	mailbox is removed from the global address list, the delegate rule is not
	automatically updated.
	
	
	Additional query words: OL2000 OL98 OL97 GAL 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000; :
	Issue type        : kbprb
	
	=============================================================================
	
