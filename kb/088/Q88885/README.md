---
layout: page
title: "Q88885: INFO: Using the IIF Function in FoxBASE+ or FoxPro"
permalink: /kb/088/Q88885/
---

## Q88885: INFO: Using the IIF Function in FoxBASE+ or FoxPro

{% raw %}

	Article: Q88885
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.0,1.01,1.02,1.21,2.0,2.1,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	- Microsoft FoxPro for MS-DOS, versions 1.0, 1.01, 1.02, 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IIF (Immediate If) function returns one of two expressions, depending on the
	value of a logical expression. When IIF evaluates a logical expression, if the
	logical expression evaluates to a logical true value (.T.), IIF returns the
	value of the first expression. If the logical expression evaluates to a logical
	false value (.F.), IIF returns the value of the second expression.
	
	MORE INFORMATION
	================
	
	The IIF function can be used in place of the IF ... ENDIF structure for simple
	conditional expressions. This function is especially useful in CREATE REPORT or
	CREATE LABEL commands to conditionally specify field contents. In a FoxBASE+ or
	FoxPro report or label, the IIF
	
	  function is the only conditional statement allowed. The IIF function
	
	also executes considerably faster than the equivalent IF ... ENDIF statements.
	
	Examples
	--------
	
	  STORE 10 TO Num
	  Char = IIF(Num > 9, STR(Num, 2), STR(Num, 1))
	  ? Char
	
	* This code returns 10.
	
	  Store 9 to Num
	  Char = IIF(Num>9, STR(Num, 2), STR(Num, 1))
	  ? Char
	
	* This code returns 9.
	
	Additional query words: VFoxWin FoxWin FoxDos 1.00 2.50 2.50a 2.50b 2.60 2.60a 1.x 2.x
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:1.0,1.01,1.02,1.21,2.0,2.1,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
