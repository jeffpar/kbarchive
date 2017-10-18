---
layout: page
title: "Q86084: PC WSPlus: Postoffices Missing in ADMINSCH"
permalink: kb/086/Q86084/
---

## Q86084: PC WSPlus: Postoffices Missing in ADMINSCH

	Article: Q86084
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	The Schedule+ Administration program of Microsoft Schedule+ for Windows
	displays all postoffices it detects as having Schedule+ installed on them.
	It does this by looking in the postoffice address list for a user with the
	alias "adminsch." If a postoffice does not appear in the Add Post Office
	window, then it does not have Schedule+ installed or the new user list has
	not propagated to this postoffice yet.
	
	If the user "adminsch" exists on the other postoffice but the name has not
	propagated, run ADMIN.EXE on the missing postoffice and export the user
	list, then wait for the EXTERNAL program to deliver the new user list.
	Another solution is to wait for the next scheduled directory
	synchronization to occur.
	
	Additional query words: schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
