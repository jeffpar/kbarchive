---
layout: page
title: "Q87671: FoxBASE+ Error Messages: N - Z"
permalink: /kb/087/Q87671/
---

## Q87671: FoxBASE+ Error Messages: N - Z

{% raw %}

	Article: Q87671
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
	
	This article reproduces a partial list of FoxBASE+ error messages, from N to Z.
	
	
	MORE INFORMATION
	================
	
	No database in use
	------------------
	
	A database was not in use at the time FoxBASE+ attempted to execute a database
	command.
	
	Non-numeric expression
	----------------------
	
	An attempt was made to use the SUM command on a non-numeric field.
	
	Not an object file
	------------------
	
	An attempt was made to load a compiled FoxBASE+ program which does not have a
	proper header. Most likely, the name of a source program has the FOX or FMX
	extension both of which are reserved for compiled programs.
	
	Operator/operand type mismatch
	------------------------------
	
	An arithmetic, string, or logical operator or function is being used with an
	invalid data type. For example, this error occurs when an application attempts
	to add two logical values.
	
	Out of disk
	-----------
	
	The operating system has returned an error to FoxBASE+ indicating that there is
	no room on the disk to contain the data from the latest WRITE command.
	
	Picture error in GET statement
	------------------------------
	
	The "picture" clause within an @ SAY ... GET statement contains a picture that is
	incompatible with the value to be formatted. This error can occur because the
	picture is in error or because the value to be formatted does not match the
	picture.
	
	Program too large
	-----------------
	
	The program which FoxBASE+ is attempting to load does not fit into memory. Given
	that FoxBASE+ has enough memory, the largest program which can be loaded is 64K.
	This limit is reduced if FoxBASE+ is run in a memory area that is too small. To
	correct this situation, reconfigure your machine to make additional memory
	available to FoxBASE+.
	
	"Quit to" failed
	----------------
	
	The operating system has returned an error to FoxBASE+ indicating that it cannot
	execute a QUIT TO command. Most often, this error is the result of the inability
	to find the shell program to execute, or insufficient free memory to load the
	shell program into memory.
	
	Record is already in use
	------------------------
	
	(Multi-user only) The record which you are attempting to modify is locked by
	another user.
	
	Record is in use "\:" Cannot write
	----------------------------------
	
	(Multi-user only) The record which you are attempting to access is locked by
	another user. This error only appears if the Ignore option is selected under the
	default lock level (SET LOCK TO 0).
	
	Record not in index
	-------------------
	
	A key field of the database in use has been modified either with the NOUPDATE
	option or without the index having been active. To correct this error, use the
	REINDEX command to rebuild indexes for the database file.
	
	Record number range error
	-------------------------
	
	The record number which you are attempting to access is larger than the number of
	records in the current database.
	
	Record too long
	---------------
	
	While attempting to create a database file, the length of the data portion of the
	record exceed the maximum allowed length (1000 bytes). The length of the data
	portion of a record is equal to the sum of the lengths of the individual
	fields.
	
	Recursive macro definition
	--------------------------
	
	A statement exceeds the maximum number of allowed macro substitutions (256 for
	each statement). The most likely cause of this error is that a macro directly or
	indirectly refers to itself.
	
	Stack overflow - expression too complex
	---------------------------------------
	
	While attempting to evaluate an expression in the current statement, the stack
	evaluator caused the stack to overflow. To correct this error, simplify the
	expression or divide it into smaller segments.
	
	String memory area overflow
	---------------------------
	
	The combined length of all string memory variables exceeds the space available
	(2048 bytes).
	
	Structure nesting too deep
	--------------------------
	
	The manner in which commands are nested in an application exceeds the maximum
	number of structured programming command nesting levels (24).
	
	Syntax error
	------------
	
	A syntactically incorrect command has been issued. A syntax error may be caused
	by a misspelled command or variable name, or through the use of a clause that is
	not valid in the current context.
	
	Too many fields for read
	------------------------
	
	More GET statements are pending than the maximum that can be executed with one
	READ statement (64).
	
	Too many files open
	-------------------
	
	FoxBASE+ has attempted to open more that its internal limit of 16 files.
	
	Too many indices
	----------------
	
	An attempt has been made to open more than the maximum number of allowed indices
	(7).
	
	Too many memory variables
	-------------------------
	
	An attempt has been made to create more than the maximum number of memory
	variables (128).
	
	Too many PICTURE characters specified
	-------------------------------------
	
	The total number of characters in all PICTURE clauses for pending GET statements
	exceeds the 2064 character limit.
	
	Variable cannot be found
	------------------------
	
	The variable selected in the FIELD clause of a CHANGE, TOTAL, or UPDATE command
	is not in the active database.
	
	Variable must be in selected database
	-------------------------------------
	
	The variable specified in a REPLACE command is not in the currently selected
	database.
	
	While nesting error
	-------------------
	
	An ENDWHILE statement does not have a corresponding DO WHILE statement.
	
	Additional query words: Fox Base plus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE217DOS kbFoxBASESearch
	Version           : MS-DOS:2.17
	
	=============================================================================
	

{% endraw %}
