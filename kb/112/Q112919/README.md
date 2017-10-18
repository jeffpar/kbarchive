---
layout: page
title: "Q112919: PC WSPlus: Errors Importing Data Files"
permalink: kb/112/Q112919/
---

## Q112919: PC WSPlus: Errors Importing Data Files

	Article: Q112919
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	If a particular import data file is consistently causing errors or problems
	when importing, the data file may be corrupted. Two common error messages
	caused by corrupted data files are:
	
	  There was a problem importing the file.
	  Some items may not have been added.
	
	  -or-
	
	  There was a problem importing the file (near line XXX).
	  Some items may not have been added.
	
	You also may also experience a general protection (GP) fault when importing
	a file.
	
	In some cases, it may be possible to salvage all or at least most of the
	data file information depending on the level of file damage.
	
	There are generally three ways to avoid this error and import your data
	successfully:
	
	1. Re-create the import file from scratch by using the original application and
	  importing the file again.
	
	2. Re-create the import file from a different format:
	
	  a. From the original application, save the data file in a different format
	     (if the application allows for this). For example, WordPerfect Office
	     version 3.0 allows the file to be saved in the version 2.0 format.
	
	  b. Save the file back into the original format. For example, save the
	     Wordperfect Office version 2.0 file back as version 3.0. This usually
	     strips out any invalid information such as corrupted ASCII values.
	
	  c. Import the file again.
	
	3. Remove some appointments from the import file:
	
	  a. Back up the import data file.
	
	  b. From the original application, delete some appointments or other
	     information from the file.
	
	  c. Import the file again.
	
	  d. Repeat this process until the file is successfully imported.
	
	Additional query words: schedule plus 1.00 1.00a damaged bad win WP sharp wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
