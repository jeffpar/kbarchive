---
layout: page
title: "Q94184: PC WSPlus: Locating a Specific User's Online Calendar File"
permalink: /kb/094/Q94184/
---

## Q94184: PC WSPlus: Locating a Specific User's Online Calendar File

{% raw %}

	Article: Q94184
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	For security reasons, users' online calendar files for version 1.0 and 1.0a
	of Microsoft Schedule+ for Windows are not named with each user's name. To
	locate a specific user's online calendar file (for example, if the file is
	damaged), use the MVCAL utility by typing the following command:
	
	  mvcal <username> -d<drive letter> -p<password>
	
	This utility finds the calendar file for the user name specified and
	renames it <username>.BAD. The -d option specifies the postoffice drive and
	the -p option specifies the Schedule+ administrator's password.
	
	After the calendar file is renamed, a new file will be created the next
	time the user signs in.
	
	MORE INFORMATION
	================
	
	The MVCAL utility is included with Application Note WA0641, "Database
	Maintenance Utilities." You can have this Application Note mailed or faxed to
	you by contacting Microsoft Product Support Services.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
