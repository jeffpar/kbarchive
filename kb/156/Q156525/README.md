---
layout: page
title: "Q156525: Sched+ User Gets NDR from Attendee not Listed in Appointment"
permalink: /kb/156/Q156525/
---

## Q156525: Sched+ User Gets NDR from Attendee not Listed in Appointment

	Article: Q156525
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:4.0,5.0,8.0,8.5,9.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.0, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 2000, version 9.0, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 97, version 8.0, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 2000, version 9.0, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Schedule+ to create an appointment and invite others, you
	might receive a Microsoft Exchange non-delivery report (NDR). The NDR states
	that a recipient could not be reached even though that recipient was not listed
	as an attendee.
	
	CAUSE
	=====
	
	One of the invited attendees is configured to have a delegate and has specified
	that all meeting requests be sent to that delegate. If the delegate's mailbox
	has been deleted, an NDR will be sent to the meeting originator.
	
	This behavior is by design because the meeting request is being sent to a mailbox
	that no longer exists.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 7.00 XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0,8.5,9.0
	Issue type        : kbprb
	
	=============================================================================
	
