---
layout: page
title: "Q94677: Cannot Start Applications from Command Line with WFWG"
permalink: /kb/094/Q94677/
---

## Q94677: Cannot Start Applications from Command Line with WFWG

	Article: Q94677
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows-based application cannot be started from the MS-DOS command prompt
	when starting Windows for Workgroups unless it is on the MS-DOS search path in
	the AUTOEXEC.BAT file. The application cannot be started even if the current
	directory is the directory in which the application resides. For example, typing
	"WIN APP.EXE" (without the quotation marks) at the MS-DOS command prompt does
	not load Windows for Workgroups and then automatically run APP.EXE.
	
	Entering a fully qualified path for the program may not correct the problem if
	the program requires additional libraries to run. In this case, the only
	workaround to this problem is to add the program's directory location to the
	MS-DOS search path in the AUTOEXEC.BAT file.
	
	This problem does not occur with Windows 3.1.
	
	A notable exception to this problem is Microsoft Excel. It can be launched from
	it's own subdirectory even when it is not on the MS-DOS search path.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 running run
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
