---
layout: page
title: "Q99662: PC WSPlus: Access Privileges Are Unavailable When Offline"
permalink: /kb/099/Q99662/
---

## Q99662: PC WSPlus: Access Privileges Are Unavailable When Offline

{% raw %}

	Article: Q99662
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ability to set access privileges is unavailable (grayed) when you use
	version 1.0 of Microsoft Schedule+ for Windows offline.
	
	(To determine if Schedule+ is offline, select the File Menu. If Work Online is an
	option, then Schedule+ is currently working offline.)
	
	CAUSE
	=====
	
	This is by design. The ability to set access privileges requires a connection to
	the CAL subdirectory of the Mail postoffice (usually in MAILDATA).
	
	Schedule+ requires a connection to the mail server when setting privileges (and
	group scheduling) and will not be available without a valid connection.
	
	Additional query words: schedule plus 1.00 1.00a sched+ scheduler dimmed ghosted light grey
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
