---
layout: page
title: "Q87670: FoxBASE+ Error Messages: I - M"
permalink: /kb/087/Q87670/
---

## Q87670: FoxBASE+ Error Messages: I - M

{% raw %}

	Article: Q87670
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.17
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.17 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article reproduces a partial list of FoxBASE+ error messages, from I to M.
	
	
	MORE INFORMATION
	================
	
	If/else/endif mismatch
	----------------------
	
	An ELSE or ENDIF statement does not have a corresponding IF statement.
	
	Illegal macro name
	------------------
	
	The length of a macro name exceeds the maximum allowed length (10 characters).
	
	Illegal macro substitution
	--------------------------
	
	An application contains a macro substitution that uses a non- character-string
	memory variable.
	
	Illegal seek offset
	-------------------
	
	An error has caused FoxBASE+ to attempt to position before the beginning of a
	file.
	
	Index does not match database
	-----------------------------
	
	The index expression for the current index uses variables which are not contained
	within the current database.
	
	Index expression too big
	------------------------
	
	The index expression for an index exceeds the maximum allowed key length (150
	characters).
	
	Index file is corrupt
	---------------------
	
	A damaged structure within an index file is detected.
	
	Internal consistency error
	--------------------------
	
	An internal FoxBASE+ table has been corrupted.
	
	Invalid argument
	----------------
	
	An argument passed to a function is not of the correct type.
	
	Invalid characters in load file
	-------------------------------
	
	(MS-DOS only) An invalid character has been detected in a LOAD file where a digit
	from 0 to 9 or a character from A to F was expected.
	
	Invalid file descriptor
	-----------------------
	
	Due to an internal error, FoxBASE+ has attempted to read or write with a damaged
	file descriptor.
	
	Invalid key length
	------------------
	
	An invalid index key length has been specified. The length of a key for an index
	must be between 0 and 100 characters.
	
	Invalid load format
	-------------------
	
	(MS-DOS only) A LOAD file contains a line which does not match the standard load
	format.
	
	Key expression too long
	-----------------------
	
	The length of an expression exceeds the maximum index key length (150
	characters).
	
	Key too big
	-----------
	
	The length of an index key exceeds the maximum index key length (100
	characters).
	
	Line too long
	-------------
	
	The length of a text line exceeds the maximum allowed length (254 characters).
	Most likely, a macro substitution expanded the line beyond the limit.
	
	Mismatched case structure
	-------------------------
	
	A CASE, ENDCASE or OTHERWISE statement does not have a corresponding DO CASE
	statement.
	
	Missing (
	---------
	
	A function name is missing a left parenthesis.
	
	Missing )
	---------
	
	A function name is missing a right parenthesis. Either the current line contains
	a left parenthesis which has not been matched or the function contains too many
	arguments which prevents the right parenthesis from being detected.
	
	Missing ,
	---------
	
	FoxBASE+ did not detect a comma when one was expected. This error is usually
	caused through failure to include the proper number of arguments in a call to a
	function.
	
	Missing/invalid terminal config. file
	-------------------------------------
	
	(MS-DOS only) FoxBASE+ cannot find the specified terminal configuration file, or
	the file contains invalid data.
	
	Mixed mode expression
	---------------------
	
	The data type of the expression on the left side of an operator does not match
	the data type of the expression on the right side. An example of this error
	would be to compare a number to a string.
	
	Additional query words: Fox Base plus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE217DOS kbFoxBASESearch
	Version           : MS-DOS:2.17
	
	=============================================================================
	

{% endraw %}
