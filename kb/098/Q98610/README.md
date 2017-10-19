---
layout: page
title: "Q98610: PC WSPlus: Err Msg: SCHDIST.EXE -br00:01:00 Terminated..."
permalink: /kb/098/Q98610/
---

## Q98610: PC WSPlus: Err Msg: SCHDIST.EXE -br00:01:00 Terminated...

	Article: Q98610
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SCHDIST.EXE from Microsoft Schedule+ for Windows as an idle process
	of DISPATCH.EXE from version 3.0 or 3.2 of Microsoft Mail for PC Networks, as
	outlined in the Schedule+ "Administrator's Guide," SCHDIST.EXE stops running and
	an error message appears.
	
	After you create the batch file and run DISPATCH.EXE with the
	-i"<batchfile>" option (where <batchfile> is the name of the batch
	file), the batch file stops and the following error message appears:
	
	  schdist.exe -br00:01:00 terminated with exit code 1
	
	DISPATCH.EXE cannot find the batch file referenced in the -i parameter.
	
	RESOLUTION
	==========
	
	Store the batch file in the same directory where DISPATCH.EXE and SCHDIST.EXE
	are stored, or fully qualify the path to the batch file in the -i parameter. For
	example:
	
	    dispatch -dmn -i"f:\sch.bat"
	
	Additional query words: schedule plus 1.00 3.00 3.20 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
