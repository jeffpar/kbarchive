---
layout: page
title: "Q116484: PC WSPlus: AM/PM Missing in Day Start/End Times"
permalink: /kb/116/Q116484/
---

## Q116484: PC WSPlus: AM/PM Missing in Day Start/End Times

	Article: Q116484
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, the AM or PM or
	both may be changed or missing from the Day Starts At and Day Ends At times
	under the General Options command on the Options menu.
	
	CAUSE
	=====
	
	Schedule+ gets its time formats from the Windows Control Panel setting for time
	formats. (In the Control Panel window, choose the International icon. Choose the
	Change button in the Time Format window.) In the International - Time Format
	dialog box, there is a text box next to each of the 12 and 24 hour time formats.
	These boxes set the words or symbols that follow time settings.
	
	By default, there is an AM in the text box next to the 12 hour time format and a
	PM in the text box next to the 24 hour time format. If one or both of these
	values is changed or removed, the Schedule+ setting will be changed accordingly.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps.
	
	1. Run Control Panel.
	
	2. Choose the International icon.
	
	3. Click the Change button in the Time Format window.
	
	4. Make sure there is an AM in the box next to the 12 hour time format and a PM
	  in the 24 hour time format. If these values do not appear, place these values
	  in the respective boxes. These values are case sensitive and will display
	  exactly as typed in the Schedule+ General Options window.
	
	NOTE: You can type up to seven characters in each of the change window text
	boxes, so if you see any additional characters after the times on the calendar
	screen or in the General Options window, check the Control Panel International -
	Time Format settings.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
