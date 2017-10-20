---
layout: page
title: "Q197195: Schedule+ Four-Digit Year Entries Require All Four Digits"
permalink: /kb/197/Q197195/
---

## Q197195: Schedule+ Four-Digit Year Entries Require All Four Digits

{% raw %}

	Article: Q197195
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 7.0, 7.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Schedule+, if you type a two-digit date in a four-digit date field, Schedule+
	assumes that the date is in the twentieth century (1900s).
	
	CAUSE
	=====
	
	Schedule+ does not support a two-digit year entry when the short date style is
	set to a four-digit year such as MM/dd/yyyy.
	
	MORE INFORMATION
	================
	
	To Set the Short Date Style
	---------------------------
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. In Control Panel, click Regional Settings, and click the Date tab.
	
	3. Under Short date, click to select the date style from the Short date style
	  list.
	
	4. Click OK to apply the settings.
	
	When the short date style is set to display a 2-digit year, the Schedule+ user
	interface allows only 2-digit entries. All such entries are parsed into 1980
	through 2079. When you set the short date style to display a 4-digit year, the
	user interface allows only 4-digit entries. With this setting, if you type a
	4-digit entry there is no ambiguity. If you type a 2-digit entry with the user
	interface prompting for a 4-digit entry, those 2-digit entries will display as
	00xx, and when the focus changes to another field they display as 19xx.
	
	For example, you set the short date style to MM/dd/yyyy. The Schedule+ user
	interface shows a 4-digit box for years. You type only a 2-digit year, "23"
	(without the quotation marks). In the user interface, you see 0023 because you
	did not supply the other 2 digits. When the focus changes to another field, you
	see that Schedule+ turns the 0023 to 1923. If this is not the year you intended,
	you can change it by typing all 4 digits. All of this is displayed in the user
	interface so that it does not mislead you into thinking the 2-digit entry meant
	something else.
	
	Additional query words: edit box input mask format
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700 kbSchedule700a
	Version           : WINDOWS:7.0,7.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
