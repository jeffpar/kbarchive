---
layout: page
title: "Q130435: Internal Task Ordering with Timex Data Link Watch"
permalink: kb/130/Q130435/
---

## Q130435: Internal Task Ordering with Timex Data Link Watch

	Article: Q130435
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you export tasks from Microsoft Schedule+ to the Timex Data Link watch,
	task priorities 1 through 9 have a higher priority than task priorities A
	through Z.
	
	For example:
	
	If you export only those tasks with a priority greater than or equal to C, tasks
	1 through 9, as well as A through C, will be exported to the watch.
	
	1. Create three tasks with differing priorities, say 2, C, and D.
	
	2. On the File menu, choose Export. Then choose Timex Watch.
	
	3. Clear all the boxes except Tasks, then choose Next.
	
	4. Select Tasks with a priority greater than or equal to C.
	
	5. Click Finish.
	
	The result is that two tasks with priorities of 2 and C will be exported.
	
	MORE INFORMATION
	================
	
	The Timex Data Link watch is manufactured by Timex, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: schedule plus 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
