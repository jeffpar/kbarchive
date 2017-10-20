---
layout: page
title: "Q128170: PC WSPlus: MVCAL Fails If USERNAME.BAD Exists in CAL Directory"
permalink: /kb/128/Q128170/
---

## Q128170: PC WSPlus: MVCAL Fails If USERNAME.BAD Exists in CAL Directory

{% raw %}

	Article: Q128170
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the file USERNAME.BAD already exists in the postoffice CAL directory,
	MVCAL.EXE will fail with the following error:
	
	  MVCAL: Cannot rename m:cal\XXXXXXXX.cal to m:cal\username.bad
	
	For example, if you run the following command from the postoffice CAL directory
	to create a 0 byte file:
	
	     ren > username.cal
	
	Then, you run the following command:
	
	     MVCAL.EXE USERNAME -dM -ppassword
	
	The above error will result.
	
	CAUSE
	=====
	
	When MVCAL.EXE is run, it renames the postoffice copy of the calendar file from
	XXXXXXXX.CAL to USERNAME.BAD; where XXXXXXXX.CAL is the user's unique
	hexadecimal identification file name, and USERNAME.BAD is the user's alias
	filename.
	
	RESOLUTION
	==========
	
	If you delete or rename the USERNAME.BAD file, MVCAL.EXE will be able to rename
	the file. For example from the M:\CAL directory, where M: is the postoffice
	drive letter type:
	
	  ren username.bad username.bak
	
	Run the MVCAL command again.
	
	MORE INFORMATION
	================
	
	MVCAL.EXE is an executable file that is used to rename the postoffice copy of
	the calendar file (.CAL) so that Microsoft Schedule+ can create a new calendar
	file. This is useful if a calendar file becomes corrupt, or if an administrator
	is trying to find the postoffice copy of the calendar file.
	
	MVCAL.EXE is available in the Application Note WA0641 "Database Maintenance
	Utilities." To obtain this Application Note, contact Microsoft Product Support
	Services.
	
	
	Additional query words: schedule plus 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
