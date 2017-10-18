---
layout: page
title: "Q146331: Import Reverts Moved Appointments Back to Original Time"
permalink: kb/146/Q146331/
---

## Q146331: Import Reverts Moved Appointments Back to Original Time

	Article: Q146331
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a Schedule+ 7.0 export file (SC2) against the same schedule the
	export file was created with, the appointments and tasks that have been moved or
	modified since the original export will be reset to the state they where in at
	the time of the export.
	
	CAUSE
	=====
	
	This is by design. This happens because the same object ID is used.
	
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
