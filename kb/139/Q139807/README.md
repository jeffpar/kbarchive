---
layout: page
title: "Q139807: Daylight Savings Time Change Repeats Continuously"
permalink: /kb/139/Q139807/
---

## Q139807: Daylight Savings Time Change Repeats Continuously

{% raw %}

	Article: Q139807
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the first hour of Daylight Savings Time, Windows 95 seems to update your
	computer's system clock, but instead repeats the following message every hour:
	
	  Windows has updated your clock as a result of Daylight Savings Time.
	  Please verify that your new clock settings are correct.
	
	CAUSE
	=====
	
	The Daylight Savings Time tool changes the time back one hour as it should, but
	does not notify the system that the change has been made. Therefore, the process
	keeps repeating at 2:00 A.M.
	
	RESOLUTION
	==========
	
	When the New Clock Settings message appears, click OK to open Date/Time
	properties. Change the time setting to reflect the current time. If it is
	2:00:00 A.M., set the clock for 2:00:01 A.M.
	
	MORE INFORMATION
	================
	
	This problem occurs only during the first hour of Daylight Savings Time.
	
	
	Windows 95 allows you to change your clock display to match time changes without
	the need to modify your computer's clock using the computer's CMOS settings
	utility. Having Windows 95 report the correct time while allowing the CMOS clock
	to remain consistent enables programs that are designed to use a consistent
	yearly time clock to retain accurate settings.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
