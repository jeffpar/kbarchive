---
layout: page
title: "Q216246: Secondary Time Zone Off by One Hour in Danish Schedule+ 7.5 Clie"
permalink: /kb/216/Q216246/
---

## Q216246: Secondary Time Zone Off by One Hour in Danish Schedule+ 7.5 Clie

{% raw %}

	Article: Q216246
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.5, Danish version 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Appointments between the last Sunday in September and the last Sunday in October
	may appear one hour off from the expected time. This occurs in specific time
	zones that have changed the transition dates for entering and leaving Daylight
	Savings Time.
	
	The same symptoms can occur during the period from the first Sunday in March to
	the last Sunday in March.
	
	CAUSE
	=====
	
	Schedule+ uses an internal table to store transition times for each individual
	time zone. When a governing body decides to change transition dates, the tables
	no longer agree with the dates observed in the time zone.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	+-----------------------------------------+
	| File name   | Version        | Language | 
	+-----------------------------------------+
	| Msspc32.dll | 7.05.1461.0068 | Danish   | 
	+-----------------------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Danish version of Microsoft
	Schedule+ version 7.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHLangDanish kbScheduleSearch kbSchedule750
	Version           : WINDOWS:7.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
