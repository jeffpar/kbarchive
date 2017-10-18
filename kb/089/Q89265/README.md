---
layout: page
title: "Q89265: Combining Picture Clauses and Functions"
permalink: kb/089/Q89265/
---

## Q89265: Combining Picture Clauses and Functions

	Article: Q89265
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following example demonstrates how to combine a conversion to upper case
	letters with scrolling:
	
	     @3,3 GET x PICTURE "@!S20"
	
	The following example left justifies a numeric value:
	
	     @3,3 GET x PICTURE "@B$$$,$$$.99"
	
	The following example demonstrates using a conditional picture clause:
	
	     STORE '@!S20' TO y
	     @3,3 GET x PICTURE y
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	
