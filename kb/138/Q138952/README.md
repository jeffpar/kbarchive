---
layout: page
title: "Q138952: FIX: Calling AMEMBERS() w/ Invalid Parameter Creates an Array"
permalink: /kb/138/Q138952/
---

## Q138952: FIX: Calling AMEMBERS() w/ Invalid Parameter Creates an Array

	Article: Q138952
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passing an invalid argument to the AMEMBERS() function causes an error "Variable
	<<VariableName>> is Not Found," returns no value, and creates a
	single-element array with a Logical value of False.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following code in the Command window:
	
	     Release All
	     ? AMEMBERS( laMbrs, oTest )
	     Discard the "Variable 'oTest' is Not Found" error dialog that comes up
	     Disp Memo Like *
	
	Notice that a single-element array is created even though the object name (oTest)
	is invalid.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
