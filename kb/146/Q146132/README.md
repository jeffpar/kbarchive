---
layout: page
title: "Q146132: Meeting Wizard: Resource Displayed in Where Field"
permalink: /kb/146/Q146132/
---

## Q146132: Meeting Wizard: Resource Displayed in Where Field

	Article: Q146132
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Meeting Wizard to reserve a resource, or a conference room and
	a resource, this information is displayed in the "Where:" field of the meeting
	request message itself.
	
	
	MORE INFORMATION
	================
	
	The mail code is independent of the Meeting Wizard. The mail UI code follows
	some simple rules for what to do with the "where" label (it is only a label and
	has no other meaning). If "Where:" is empty, the code scans the recipient list
	to search for a resource. The first one it finds, it puts in the where box; this
	only occurs if the "Where:" field is empty.
	
	The problem arises because there is no distinction between "Resources" and
	"Locations." They are merged into the BCC well from the Appointment Wizard. They
	are only different in the context of display within the appointment wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 7.0 of Microsoft
	Schedule+. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 mtg wiz
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : :7.0
	
	=============================================================================
	
