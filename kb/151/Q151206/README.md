---
layout: page
title: "Q151206: Err Msg: ...Problem w/ Mail System. Messages Could Not Be Read"
permalink: /kb/151/Q151206/
---

## Q151206: Err Msg: ...Problem w/ Mail System. Messages Could Not Be Read

{% raw %}

	Article: Q151206
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,3.2,3.2a,3.5,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 7.0 
	- Microsoft Mail for Windows, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Schedule+ version 1.0, and you try to view a meeting request sent
	from Schedule+ version 7.0, you may get the following error message:
	
	  There is a problem with the mail system. Messages could not be read.
	
	In addition, if you use version 3.x of Mail for Windows, you may get the
	following error message when you try to open the meeting request in the Inbox:
	
	  STOP: The message could not be opened.
	
	CAUSE
	=====
	
	The above errors will occur if the Microsoft Exchange Mail Connector Maximize MS
	Mail 3.x Compatibility option is cleared (not selected).
	
	RESOLUTION
	==========
	
	1. Start the Microsoft Exchange Administration program.
	
	2. Open the Microsoft Mail Connector object.
	
	3. On the Interchange tab, select the Maximize MS Mail 3.x Compatibility check
	  box.
	
	4. Click the Apply button and the OK button.
	
	5. Click Services in the Control Panel.
	
	6. Stop the Microsoft Exchange Message Transfer Agent service.
	
	7. Start the service.
	
	Additional query words: 1.00 7.00 3.20 3.20a 3.50 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbSchedule100 kbMail350 kbMail320 kbMail320a
	Version           : WINDOWS:1.0,3.2,3.2a,3.5,7.0
	
	=============================================================================
	

{% endraw %}
