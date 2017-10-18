---
layout: page
title: "Q86381: PC WSPlus: Err Msg: XXXXXXXX.CAL Is Not a Valid Local..."
permalink: kb/086/Q86381/
---

## Q86381: PC WSPlus: Err Msg: XXXXXXXX.CAL Is Not a Valid Local...

	Article: Q86381
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can move a Schedule+ local file to a network drive; however, when you try to
	start Schedule+, the following error message is displayed:
	
	  <Drive>:\>path>\XXXXXXXX.CAL is not a valid local schedule file.
	  Is it okay to delete it?
	
	If the drive is not mapped to any server, choosing OK for the above message
	displays the following message:
	
	  The local schedule file could not be created
	
	CAUSE
	=====
	
	The network drive must be available when Schedule+ is started off line. This
	error occurs if the drive is not available, or if that server is mapped to
	another drive letter.
	
	MORE INFORMATION
	================
	
	The Schedule+ local file can be moved to any drive for easy transportation to
	another computer for home or portable use. When you start up Schedule+ off line,
	Schedule+ looks in the SCHDPLUS.INI file to find the path to the local calendar
	file. If the file is damaged, missing, or hidden, Schedule+ cannot start until a
	new file is created in the same location.
	
	Additional query words: 1.00 offline schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
