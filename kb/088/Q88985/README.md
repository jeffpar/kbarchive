---
layout: page
title: "Q88985: Converting a Numeric Value to a String"
permalink: /kb/088/Q88985/
---

## Q88985: Converting a Numeric Value to a String

	Article: Q88985
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
	
	When FoxBASE+ converts a numeric value to a string, the numeric is automatically
	left padded to a length of 10 characters.
	
	For example, if a program contains the following code
	
	     x = 455
	     ? STR(x), LTRIM(STR(x))
	
	it returns the following values: " 455", "455".
	
	To string numeric values with decimals, include the length of the entire number
	and the number of decimal places desired to display. The following are examples
	of using the STR() function with numbers that include decimals:
	
	     x = 234.98
	     ? STR(x,10,2), LTRIM(STR(x,10,2))
	
	The program returns the following values: " 234.98","234.98".
	
	When doing string comparisons, it is important to make sure the values being
	compared are in the same format. If the above values are compared, they will not
	be equal. For example:
	
	     x=12
	     ? STR(x)=LTRIM(STR(x))     && returns .F.
	
	MORE INFORMATION
	================
	
	STR(<expN1>[,<expN2>[,<expN3>]]) - Changes a numeric value to a
	                                  string
	
	     <expN1> - Numeric expression to convert to a character
	     <expN2> - Length of the string to return (optional)
	     <expN3> - Number of decimal places to use (optional)
	LTRIM(<expC>) - Removes all spaces from the left side of a string
	
	  <expC> - Character expression
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	
