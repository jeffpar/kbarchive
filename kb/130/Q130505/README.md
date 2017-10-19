---
layout: page
title: "Q130505: INFO: Programming in Reports w/ Band Expressions on Entry/Exit"
permalink: /kb/130/Q130505/
---

## Q130505: INFO: Programming in Reports w/ Band Expressions on Entry/Exit

	Article: Q130505
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro version 2.x, programmatic manipulation within a report is accomplished
	by placing a user-defined function (UDF) within an expression of a field object.
	The proper execution of the code, in many cases, depends on where the field
	object resides on the report because report expressions are evaluated from left
	to right and top to bottom.
	
	Visual FoxPro includes "band expressions" that are called On Entry and On Exit.
	These expressions can be found for each report band. The expressions are
	evaluated once per band on each page of the report. Band Expressions eliminate
	the need for careful placement of field objects to control when the code is
	executed. By double-clicking a report band, you can access the the On Entry and
	On Exit expressions. This article shows by example how to use band expressions.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following example demonstrates what happens when you place code in the On
	Entry expression:
	
	1. Issue the command SET DEFAULT TO SYS(2004)+"\SAMPLES\DATA"
	
	2. Use the Customer table.
	
	3. In the Command window, issue this command:
	
	     CREATE REPORT BANDTEST.
	
	4. Populate the report by doing a Quick Report.
	
	5. Double-click the Detail band and enter BandTest() in the On Entry field. In
	  the Expression Builder, do not attempt to verify this expression.
	
	6. Create a new program containing the following code, and name it BANDTEST.PRG:
	
	     Wait Window "Record Number: " + Alltrim(Str(RecNo()))
	
	7. Preview the report by right-clicking the report and choosing Preview.
	
	Notice that the code is excuted before entering the Detail band and before any
	data from the Detail band is displayed. If this code was placed in the On Exit
	expression, it would have executed on leaving the Detail band.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
