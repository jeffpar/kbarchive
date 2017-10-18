---
layout: page
title: "Q146282: Import Project with Same Name as Existing Project Merges Tasks"
permalink: kb/146/Q146282/
---

## Q146282: Import Project with Same Name as Existing Project Merges Tasks

	Article: Q146282
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you import data into Schedule+ version 7.0, the tasks associated with a
	project that currently exists in the schedule will be merged with those
	associated with the project. If the imported task has the same name as an
	existing task, the information in the task being imported will overwrite the
	existing task information.
	
	CAUSE
	=====
	
	This is by design.
	
	The ObjectID's for the individual objects are not exported to the .SCH file
	during the export process. This eliminates duplication of ObjectID conflicts
	between the two user's appointment books. The New ObjectID's for the Projects or
	Tasks will be assigned when the user's appointment book is imported.
	
	In the case where a duplicate Project or Tasks name is found in the destination
	appointment book, the imported Project or Tasks will assume the ObjectID of the
	existing Project; therefore, it adds the Same_Name_Project/Tasks from the
	exported file as part of the existing Project in the appointment book.
	
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbZNotKeyword3 kbSchedule700Win95
	Version           : WINDOWS:7.0
	
	=============================================================================
	
