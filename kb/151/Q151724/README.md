---
layout: page
title: "Q151724: Meeting Created by Delegate Shows Manager as Organizer"
permalink: /kb/151/Q151724/
---

## Q151724: Meeting Created by Delegate Shows Manager as Organizer

{% raw %}

	Article: Q151724
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a delegate on a manager's Appointment Book creates a meeting, the meeting
	will show the delegate as the Organizer; however, the Edit Appointment dialog
	box will show the manager.
	
	
	CAUSE
	=====
	
	This is by design.
	
	The person who has the original appointment on his or her schedule is the owner,
	not the person who sent the mail. The delegate is acting on behalf of the
	manager as a "virtual manager."
	
	MORE INFORMATION
	================
	
	No one invited is aware that the appointment was organized by the delegate. On
	the original invitation sent by the delegate is the following:
	
	  Sending on behalf of USERX.
	
	where userx is the manager.
	
	However, this is not sent to the invitees. The meeting responses are received by
	the delegate only and contain the following:
	
	  Received on behalf of USERX.
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
