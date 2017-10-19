---
layout: page
title: "Q103626: PC WSPlus: Libraries Do Not Function When Offline"
permalink: /kb/103/Q103626/
---

## Q103626: PC WSPlus: Libraries Do Not Function When Offline

	Article: Q103626
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Schedule+ Libraries for version 1.0 of Microsoft Schedule+ for Windows
	allows you to create custom applications for use with Schedule+ while working
	online only. The Schedule+ Libraries do not function properly when running
	Schedule+ from the local calendar file.
	
	CAUSE
	=====
	
	This is by design.
	
	RESOLUTION
	==========
	
	The SPLUSBeginSession() function specifically looks for a pre-established MAPI
	handle representing an existing session with the messaging system itself.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
