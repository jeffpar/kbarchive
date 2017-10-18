---
layout: page
title: "Q152908: XCLN: Error Accessing Disk Exporting to Timex Datalink on NT"
permalink: kb/152/Q152908/
---

## Q152908: XCLN: Error Accessing Disk Exporting to Timex Datalink on NT

	Article: Q152908
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	- Microsoft Schedule+ for Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempting to export to the Timex Datalink Watch from Microsoft
	Schedule+ for Windows NT version 7.0a, the following error might occur:
	
	  There was a problem exporting the data. A problem occurred while accessing
	  the disk.
	
	CAUSE
	=====
	
	This error occurs when Microsoft Schedule+ attempts to access outdated versions
	of the following files in the WINNT\System32 directory:
	
	  Datazap.dll
	  Datzap16.dll
	  Datzap32.dll
	
	RESOLUTION
	==========
	
	Rename the following files in the WINNT\System32 directory:
	
	  Datazap.dll
	  Datzap16.dll
	  Datzap32.dll
	
	Microsoft Schedule+ will then access the correct files from the WINNT\System
	directory and the error will no longer be reported.
	
	Additional query words: 7.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbScheduleSearch kbZNotKeyword3 kbExchange400SP1 kbExchange400SP2
	Version           : WINDOWS:; winnt:4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
