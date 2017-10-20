---
layout: page
title: "Q152663: Monthly View Print Out Will Not Wrap Appointment Text"
permalink: /kb/152/Q152663/
---

## Q152663: Monthly View Print Out Will Not Wrap Appointment Text

{% raw %}

	Article: Q152663
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
	
	When you print details in the monthly view with Microsoft Schedule+ version
	7.0a, the text does not wrap around to a new line. The appointment will be
	truncated with "...".
	
	This behavior is by design. There is no way to make the text wrap.
	
	WORKAROUND
	==========
	
	If you change the font size associated with the stySmallApptText attribute for
	small, medium, and large in the normal.fmt file located in the Microsoft
	Exchange client directory, more characters can be printed in the allocated
	space.
	
	For example, line #33 in the normal.fmt file is:
	
	  stySmallApptText,,      "Arial",SWISS,6,8,10......
	
	Change it to:
	
	  stySmallApptText,,      "Arial",SWISS,4,6,8.....
	
	This will increase the number of characters that can be seen when you print a
	monthly view for each of the associated font sizes.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
