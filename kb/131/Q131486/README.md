---
layout: page
title: "Q131486: No Task Visible for Upcoming Tasks in Schedule+"
permalink: /kb/131/Q131486/
---

## Q131486: No Task Visible for Upcoming Tasks in Schedule+

	Article: Q131486
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
	
	When you enter a task with no end date, the task will not be included in the
	task list if you use the Upcoming filter.
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	Upcoming tasks are those tasks that haven't been started. Active tasks are those
	that have been started, but haven't been finished. Tasks that do not have an end
	date are considered started. Thus, if a task has no end date, it is identified
	as Active; if it does have an end date, it is identified as Upcoming.
	
	Upcoming is not a subset of active for the reasons mentioned above.
	
	
	Additional query words: schedule plus 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
