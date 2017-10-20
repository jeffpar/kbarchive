---
layout: page
title: "Q132685: PC WSPlus: Loss of Description Data After a Carriage Return"
permalink: /kb/132/Q132685/
---

## Q132685: PC WSPlus: Loss of Description Data After a Carriage Return

{% raw %}

	Article: Q132685
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 1.0 and 1.0a of Microsoft Schedule+ for Windows, the data
	in the description field of an appointment on the sender's calendar appears to
	get truncated when it is written to the recipient's calendar.
	
	For example, User A invites User B to a meeting. User A fills in a description of
	"Sales meeting in room 1," and presses the ENTER key to skip to the next
	physical line. Then, User A types "Please bring project updates." User B
	receives the invitation and accepts it. The appointment is written to User B's
	calendar. However, only "Sales meeting in room 1" appears in the description
	field.
	
	CAUSE
	=====
	
	In Microsoft Schedule+, an appointment can be composed of multiple lines
	separated by carriage returns. However, only the data before the first carriage
	return will be the subject of the invite message.
	
	RESOLUTION
	==========
	
	This behavior is by design.
	
	Additional query words: schedule plus 1.00 1.00a control
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
