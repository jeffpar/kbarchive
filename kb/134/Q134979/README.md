---
layout: page
title: "Q134979: PRB: Last Line in a Method Doesn't Update Variables in Debug"
permalink: /kb/134/Q134979/
---

## Q134979: PRB: Last Line in a Method Doesn't Update Variables in Debug

	Article: Q134979
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the last line of any form method is a variable assignment, the debug window
	doesn't refresh the variable assignment value.
	
	STATUS
	======
	
	This behavior is by design. This is expected behavior because all local
	variables are destroyed right after the method scope is lost.
	
	RESOLUTION
	==========
	
	Create a form property that has the same variable name.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Place the following code in the Init procedure of the form:
	
	     WAIT WINDOW "Variable assignment" NOWAIT
	     nMyVeriable=12
	
	3. Save the form as MyForm.scx.
	
	4. Open the debug window, and place the nMyVeriable variable in the left side of
	  the debug window.
	
	5. Type the following in the Command window:
	
	     DO FORM MyForm.SCX
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
