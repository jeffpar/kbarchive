---
layout: page
title: "Q290426: PRB: Round() Function Does Not Accept Negative Parameters"
permalink: /kb/290/Q290426/
---

## Q290426: PRB: Round() Function Does Not Accept Negative Parameters

	Article: Q290426
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbMDAC kbGrpDSVBDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a negative number for the second parameter of the Round function, the
	function returns the following error message:
	
	  Runtime Error 5: Invalid procedure call or argument.
	
	CAUSE
	=====
	
	The Round function does not accept negative numbers for the second parameter.
	The second parameter indicates the number of decimal places that should be
	returned. By design, the expression service calls Visual Basic for Applications
	(VBA) to evaluate Round.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a project in Visual Basic 6.0.
	
	2. Paste the following code into the Immediate window:
	
	  Debug.Print Round(2.45, 1) 'returns 2.4.
	  Debug.Print Round(2.45, -1) 'returns the error
	
	3. Press ENTER after each line to see the evaluation of the function. The second
	  line, which contains the negative number, returns the above-mentioned error
	  message.
	
	Additional query words: run-time
	
	======================================================================
	Keywords          : kbDatabase kbJET kbMDAC kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbVB600SP5
	Version           : :6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
