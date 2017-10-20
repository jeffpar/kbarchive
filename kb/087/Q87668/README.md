---
layout: page
title: "Q87668: FoxBASE+ Error Messages: A - E"
permalink: /kb/087/Q87668/
---

## Q87668: FoxBASE+ Error Messages: A - E

{% raw %}

	Article: Q87668
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.17
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.17 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article reproduces a partial list of FoxBASE+ error messages, from A to E.
	
	
	MORE INFORMATION
	================
	
	Attempt to use more than 256 names
	----------------------------------
	
	As a program was being opened, the 256 variable names limit was exceeded. To
	correct this, divide the program into smaller modules.
	
	Available only under DOS 2.00 +
	-------------------------------
	
	(MS-DOS only) The QUIT TO command is not supported under the version of MS-DOS
	being used.
	
	Bad report specification
	------------------------
	
	A report description contains an error. An example would be an invalid field
	reference or variable.
	
	Beyond string
	-------------
	
	An attempt was made to access characters beyond the last character in the memory
	variable or database field.
	
	Cannot create file
	------------------
	
	The operating system has returned an error to FoxBASE+ indicating that the new
	file cannot be created. The inability to create a new file is usually the result
	of a full disk or directory, entry of an invalid filename, or not having the
	proper rights to a directory.
	
	Cannot open file
	----------------
	
	The operating system has returned an error to FoxBASE+ indicating that the file
	cannot be opened. The inability to open a file is usually the result of
	attempting to open a file which does not exist or is marked read-only, entry of
	an invalid filename, or not having the proper rights needed to access the file.
	
	Checksum error
	--------------
	
	(MS-DOS only) The file accessed by the LOAD command contains a line which has an
	incorrect checksum.
	
	Database in use is not indexed
	------------------------------
	
	An index for the database was not selected when an UPDATE command, using the
	RANDOM option, was encountered.
	
	Database record is trashed
	--------------------------
	
	A numeric field in the current record contains invalid characters.
	
	Division by 0
	-------------
	
	An attempt was made to divide by zero.
	
	Do nesting too deep
	-------------------
	
	The maximum DO program nesting of 15 levels has been exceeded.
	
	Endtext without text
	--------------------
	
	An ENDTEXT statement is missing a corresponding TEXT statement.
	
	Additional query words: Fox Base plus error message
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE217DOS kbFoxBASESearch
	Version           : MS-DOS:2.17
	
	=============================================================================
	

{% endraw %}
