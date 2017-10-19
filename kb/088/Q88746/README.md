---
layout: page
title: "Q88746: Difference Between Macro Substitution and Named Expression"
permalink: /kb/088/Q88746/
---

## Q88746: Difference Between Macro Substitution and Named Expression

	Article: Q88746
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Macro substitution and name expressions are both methods used to place the value
	of a variable in a FoxPro command. The fundamental difference between the two is
	that with name expressions, the value of the variable is substituted before
	execution. With macro substitution, the value is substituted during execution.
	
	MORE INFORMATION
	================
	
	The FoxPro language compiler parses the program and replaces a name expression
	with the value during the first pass; from that point on, only the value, not
	the variable, is used. The FoxPro compiler leaves a macro substitution as a
	reference to the variable that is not resolved until the program is executed.
	
	If you use a name expression and the variable changes during execution, the new
	value of the variable is not used. However, if you use a macro substitution, the
	new value will be substituted.
	
	Additional query words: VFoxWin FoxWin FoxDos
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
