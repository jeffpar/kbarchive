---
layout: page
title: "Q142577: Reply to All Will Not Include Resources Attendees"
permalink: kb/142/Q142577/
---

## Q142577: Reply to All Will Not Include Resources Attendees

	Article: Q142577
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Schedule+, version 7.0, if you use Reply to All in
	response to a scheduled appointment it will not include the Resources
	attendee(s).
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	When creating appointments there are three types of attendees you can invite:
	Required, Optional, and Resources. An invitation to a scheduled meeting is
	addressed to (To) the Required attendees, Carbon Copied (Cc) to the Optional
	attendees, and Blind carbon copied (Bcc) to the Resources attendees. As with
	regular messages, a Reply to All will not include Bcc recipients (resources)
	included on the original message.
	
	Steps To Reproduce:
	
	1. Create an appointment while logged in as <User1>.
	
	2. Invite at least 1 attendee for each of the following fields: Required,
	  Optional, and Resources.
	
	3. Send the appointment request.
	
	4. Log on as Required attendee or Optional attendee.
	
	5. Open the appointment request.
	
	6. Choose Compose, Reply to All.
	
	7. Send the appointment request.
	
	Result: If you logged on as the Required attendee, the message is addressed To
	<User1> and Cc'ed to the Optional attendee. If you logged on as the
	Optional attendee, the message is addressed To <User1> and the Required
	attendee. In either case, the Resources attendee is not included as a recipient
	of the Reply to All message.
	
	Additional query words: schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
