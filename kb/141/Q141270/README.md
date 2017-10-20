---
layout: page
title: "Q141270: Day Starts/Ends At Settings Rounded to 30 Minutes"
permalink: /kb/141/Q141270/
---

## Q141270: Day Starts/Ends At Settings Rounded to 30 Minutes

{% raw %}

	Article: Q141270
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
	
	The working day (the hours between Day Starts At and Day Ends At) is limited to
	half-hour values, even though you can set the time to minute precision.
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	Even though users are able to set field values at minute increments, the Day
	Starts At and Day Ends At time will always round down to the closest half hour
	when minutes have been entered.
	
	For example, if you set the Day Starts At time between 9:01 A.M. and 9:29 A.M.,
	it the start time will reset to 9:00 A.M. If you set the Day Starts At time
	between 9:31 AM and 9:59 AM, it will reset the start time to 9:30 A.M. The same
	applies to the Day Ends At setting.
	
	Additional query words: 7.00 tools options set day
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	

{% endraw %}
