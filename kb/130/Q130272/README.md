---
layout: page
title: "Q130272: PRB: SourceSafe Appears to Use the Incorrect Date/Time"
permalink: kb/130/Q130272/
---

## Q130272: PRB: SourceSafe Appears to Use the Incorrect Date/Time

	Article: Q130272
	Product(s): Microsoft SourceSafe
	Version(s): 3.10 4.00 5.00 | 3.10 4.00 5.00
	Operating System(s): 
	Keyword(s): kbSSafe
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, SourceSafe appears to place an incorrect date/time stamp on a
	file after a GET, UPDATE, or CHECKOUT.
	
	CAUSE
	=====
	
	This is a system-defined option that may be set accordingly.
	
	RESOLUTION
	==========
	
	SourceSafe has three methods of placing a date/time stamp on a file. By default,
	SourceSafe places the current system date/time stamp on the files. This may be
	confusing or ill-suited for some users, because the time on the files does not
	give a good representation of the recent file history.
	
	SourceSafe provides the user with the ability to place a different date/time
	stamp on the file if needed. The following is a listing of the date/time options
	and how they affect SourceSafe:
	
	  SetTime = Current (default)
	            Places the current system time on SourceSafe files.
	
	  SetTime = Mod (modification date)
	            Places the file's modification date on each SourceSafe file.
	
	  SetTime = Update
	            Places the date/time that the file was updated in the
	            SourceSafe database.
	
	Both Mod and Update allow the user to see the age of a file at a glance. These
	times may be preferred by some customers because they are a better
	representation of when the file was last modified by a SourceSafe user.
	
	These settings may be set on a global basis in the SRCSAFE.INI file or may be set
	from within the SourceSafe GUI by selecting SETUP, COMMAND SETTINGS, and
	selecting the SET FILE TIME option. In Visual SourceSafe version 4.0, use the
	Tools, Options menu item, select the Local Files Tab, and Set Date/Time on Local
	Files.
	
	REFERENCES
	==========
	
	For more information, please see page 70 of the User's Guide or page 23 of the
	Reference Guide.
	
	Additional query words: 4.00 5.00
	
	======================================================================
	Keywords          : kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310NT
	Version           : 3.10 4.00 5.00 | 3.10 4.00 5.00
	Issue type        : kbprb
	
	=============================================================================
	
