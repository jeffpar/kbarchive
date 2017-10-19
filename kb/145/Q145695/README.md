---
layout: page
title: "Q145695: PRB: Error Converting String to Numeric Value e When Using &quot;%&quot;"
permalink: /kb/145/Q145695/
---

## Q145695: PRB: Error Converting String to Numeric Value e When Using &quot;%&quot;

	Article: Q145695
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When converting a string that represents a percentage with the percent (%)
	character, you receive the following error:
	
	  Run-time error '13':
	  Type Mismatch
	
	You may receive this error using the CDbl, CSng, CCur, or CDec conversion
	functions.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start a new project in Visual Basic.
	
	2. In the Debug Window (or Immediate Window), type the following and press the
	  ENTER key:
	
	  ?CDbl("12.00%")
	
	3. You receive the run-time error "Type Mismatch".
	
	4. To correctly convert "12.00%" to a numeric representation, type the following
	  in the Debug Window and press the ENTER key:
	
	  ?CDbl(Format("12.00%", "0.00"))
	
	5. You should receive the results 0.12 as expected.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	
