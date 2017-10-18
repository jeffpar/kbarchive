---
layout: page
title: "Q118322: PC WSPlus: New Users in Group Cannot Access .CAL File"
permalink: kb/118/Q118322/
---

## Q118322: PC WSPlus: New Users in Group Cannot Access .CAL File

	Article: Q118322
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Schedule+ for Windows allows you to set access to calendar files for
	individuals and groups. If you define a group as having access to your calendar
	file and you subsequently add new users to that group, the new users will not be
	able to access your calendar file.
	
	CAUSE
	=====
	
	When you add a group as having access to your calendar file, Schedule+ resolves
	that group to the individual names contained within that group. Therefore, any
	users added to the group after that will not have access to your calendar file.
	
	RESOLUTION
	==========
	
	To assign access privileges to new users, either add the entire group again or
	add each group member as you would normally do.
	
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	
