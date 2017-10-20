---
layout: page
title: "Q146170: XCLN: Err Msg: Schedule+ Cannot Find or Run Application"
permalink: /kb/146/Q146170/
---

## Q146170: XCLN: Err Msg: Schedule+ Cannot Find or Run Application

{% raw %}

	Article: Q146170
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows 95, version 7.0a 
	- Microsoft Schedule+ for Windows NT, version 7.0a 
	- Microsoft Schedule+ for Windows, version 7.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Schedule+ 7.0 for Windows 3.x and Windows 95, might report the
	following error message when you attempt to launch the Import or Export filters
	for Other Systems:
	
	  Schedule+ cannot find or run application:
	  <drive>\<path>\ilxlate 1
	
	where <drive>\<path> is the location of Ilxate.exe.
	
	The error message when running on Microsoft Windows NT 3.51 will be:
	
	  Cannot Run 16-bit Windows program
	  Cannot start more than one copy of the specified program
	
	MORE INFORMATION
	================
	
	The error messages will be displayed if Ilxate.exe is running and you select
	Other Systems from the Import (or Export) command on the File menu in Microsoft
	Schedule+.
	
	RESOLUTION
	==========
	
	Stop Ilxate.exe and then Import (or Export) again from within Microsoft
	Schedule+.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbZNotKeyword3 kbSchedule700a kbSchedule700aNT kbSchedule700aWin95
	Version           : WINDOWS:7.0a
	
	=============================================================================
	

{% endraw %}
