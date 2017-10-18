---
layout: page
title: "Q110096: PC WSPlus: DefaultPrivateTask= Does Not Work as Documented"
permalink: kb/110/Q110096/
---

## Q110096: PC WSPlus: DefaultPrivateTask= Does Not Work as Documented

	Article: Q110096
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
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, there is a
	documented option in the Schedule+ "Administrator Guide" (page 29) that explains
	the DefaultPrivateTask= option. The guide states that, by default, this option
	sets all tasks created to private. The guide also states that setting this value
	to zero allows the user to change that default to not private.
	
	These comments in the "Administrator Guide" are both incorrect. By default, tasks
	are created as not private. In addition, setting the DefaultPrivateTask=0 does
	not change this default configuration.
	
	RESOLUTION
	==========
	
	To set the task to private, the user must select the private box upon creation
	of each task.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 1.0 and 1.0a of
	Schedule+ for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
