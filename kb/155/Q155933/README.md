---
layout: page
title: "Q155933: BUG: Setting Grid's MousePointer Property to 14 Causes Error"
permalink: /kb/155/Q155933/
---

## Q155933: BUG: Setting Grid's MousePointer Property to 14 Causes Error

	Article: Q155933
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbusage kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the MousePointer property of a Grid object to 14-Arrow, Visual
	FoxPro produces the following error message:
	
	  Expression evaluated to an illegal value.
	
	WORKAROUND
	==========
	
	Rather than changing the MousePointer property of the Grid object to 14- Arrow,
	choose 1-Arrow. The properties are the same, but 1-Arrow does not produce an
	error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and add a Grid object to it.
	
	2. Click the MousePointer property of the Grid object and change it to 14-Arrow.
	  The error message "Expression evaluated to an illegal value" appears.
	
	3. Change the MousePointer property to 1-Arrow. The error does not occur.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbusage kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
