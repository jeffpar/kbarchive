---
layout: page
title: "Q131549: INFO: Use Place-Holder Commas in Calls with Missing Parameters"
permalink: /kb/131/Q131549/
---

## Q131549: INFO: Use Place-Holder Commas in Calls with Missing Parameters

	Article: Q131549
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 29-DEC-1999
	
	3.00
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to pass parameters to functions, procedures,
	or methods by using place-holder commas for empty values that will take a
	default value. When you pass nothing, the function receives false (.F.) as the
	value for that argument.
	
	This Visual FoxPro behavior is different from the behavior of FoxPro version 2.6.
	In FoxPro version 2.6, you could pass fewer arguments than total number of
	parameters only if the blank arguments came after the valid (full) arguments.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro version 3.0, you can pass fewer arguments than are requested by
	a function, method, or procedure by using place-holder commas when you call it.
	
	Code Sample
	-----------
	
	To demonstrate passing blank parameters, copy the following code into a program
	file called FOXTEST.PRG and run it:
	
	  *** BEGINNING OF SAMPLE CODE ***
	
	  *****************************************************************
	  *                         FOXTEST.PRG                           *
	  *   Demonstrates How Visual FoxPro Allows Passing Blank Values  *
	  *         For Parameters Anywhere In the Parameter List         *
	  *                                                               *
	  *****************************************************************
	
	  SomeDate = mydate(3,4,95) && Pass values for all parameters
	  WAIT WINDOW SomeDate
	
	  SomeDate = mydate(4,,94) && Pass blank values for 2nd parameter
	  WAIT WINDOW SomeDate
	
	  SomeDate = mydate(,4,)   && Pass blank values for 1st and 3rd
	  WAIT WINDOW SomeDate     && parameters
	
	  SomeDate = mydate(,,94)  && Pass blank values for 1st and 2nd
	  WAIT WINDOW SomeDate     && parameters
	
	  SomeDate = mydate(4,,)   && Pass blank values for 2nd and 3rd
	  WAIT WINDOW SomeDate     && parameters (This is the only way FoxPro
	
	  && 2.x allowed blank values to be passed, && at the end of
	  the parameter list only.)
	
	  PROCEDURE MyDate
	  PARAMETERS Month,Day,Year
	
	  * Give each variable a default value for the missing parameters.
	
	  DO CASE
	
	  CASE TYPE("Day")="L" lcday="01" CASE TYPE("Day")="N" lcday=ALLTRIM(STR(DAY))
	
	  ENDCASE
	
	  DO CASE
	
	  CASE TYPE("Year")="L" lcyear="95" CASE TYPE("Year")="N"
	  lcyear=ALLTRIM(STR(Year))
	
	  ENDCASE
	
	  DO CASE
	
	  CASE TYPE("Month")="L" lcmonth="01" CASE TYPE("Month")="N"
	  lcmonth=ALLTRIM(STR(Month))
	
	  ENDCASE
	
	  RETURN lcmonth+"/"+lcday+"/"+lcyear
	
	  *** End Of Sample Code ***
	
	REFERENCES
	==========
	
	For more information about passing parameters in a parameter list, refer to the
	Visual FoxPro Help file, "Parameters Command" topic.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
