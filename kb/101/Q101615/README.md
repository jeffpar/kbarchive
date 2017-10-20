---
layout: page
title: "Q101615: PC WSPlus: Command-Line Parameters for Schedule+ Reminders"
permalink: /kb/101/Q101615/
---

## Q101615: PC WSPlus: Command-Line Parameters for Schedule+ Reminders

{% raw %}

	Article: Q101615
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	Reminders in version 1.0 of Microsoft Schedule+ for Windows are loaded when
	you start Schedule+, or when you start Windows (if the Reminders icon is in
	the Windows Startup group). You can cause Schedule+ Reminders to only
	function when Schedule+ is running or not to function at all.
	
	You can use the following command-line parameters to control this
	functionality:
	
	  /x     Turns off Reminders when you exit out of Schedule+.
	
	  /r     Completely turns off Schedule+ Reminders--you will never be
	         reminded of anything.
	
	Example
	-------
	
	By default, Schedule+ Reminders checks your calendar file every minute.
	Over a Remote Access (RAS) connection line, this can be very time
	consuming. By turning off reminders, Schedule+ should work much faster.
	
	To completely turn off reminders, do the following:
	
	1. Select the Schedule+ icon in Windows Program Manager.
	
	2. From the Program Manager File menu, choose Properties.
	
	3. Modify the Command Line box to read as follows:
	
	  c:\schdplus\schdplus.exe /r
	
	Additional query words: schedule plus 1.00 1.00a bell chime
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
