---
layout: page
title: "Q88986: INKEY(0) Function Determines Key CHR Value"
permalink: /kb/088/Q88986/
---

## Q88986: INKEY(0) Function Determines Key CHR Value

	Article: Q88986
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:1.21,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The INKEY(0) function determines the corresponding CHR() value for a key press.
	When the INKEY(0) function returns a negative value, a function key was pressed.
	Use care when passing the value from INKEY(0) to the CHR() function.
	
	The character trapped by INKEY(0) is not echoed to the console when a key is
	pressed.
	
	Format
	------
	
	<expN>=INKEY(0)
	
	Example
	-------
	
	  . ? INKEY(0) && Get the next key press and print ASCII value -3
	  && The F4 function key was pressed (ASCII - 76)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	
