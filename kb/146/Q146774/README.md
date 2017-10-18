---
layout: page
title: "Q146774: XCLN: New Profile &amp; SCD File Resets Default Access Permission"
permalink: kb/146/Q146774/
---

## Q146774: XCLN: New Profile &amp; SCD File Resets Default Access Permission

	Article: Q146774
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0a,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 95, 7.0a 
	- Microsoft Schedule+ for Windows NT, version 7.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Schedule+ version 7.0 for Windows, when an existing Schedule+ user
	creates a new Schedule+ local file(SCD) and this file is then synchronized
	against an existing server schedule, the Default Access Permission will be reset
	to NONE. It is necessary to manually reset the Default Access Permission on the
	schedule. Access permissions set for individual users will be retained.
	
	This behavior is by design.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbZNotKeyword3 kbSchedule700a kbSchedule700aNT
	Version           : WINDOWS:7.0a,95
	
	=============================================================================
	
