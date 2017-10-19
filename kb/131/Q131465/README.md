---
layout: page
title: "Q131465: PRB: Cannot Use LOCAL Variables as Arrays"
permalink: /kb/131/Q131465/
---

## Q131465: PRB: Cannot Use LOCAL Variables as Arrays

	Article: Q131465
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
	
	Once a variable is declared as LOCAL, it cannot be used as an array. For
	example, if the AFIELDS() function is used as follows, the error " <var>
	is not an array" is displayed. However, if the PRIVATE keyword is used instead
	of LOCAL, no error is generated. This is because PRIVATE does not declare
	variables.
	
	     LOCAL aFields1
	     PRIVATE aFields2
	     USE SYS(2004)+"\SAMPLES\DATA\CUSTOMER"
	     n = AFIELDS(aFields1)
	     n = AFIELDS(aFields2)
	
	CAUSE
	=====
	
	The error "<var> is not an array" occurs bacause the variable has been
	declared as a non array variable.
	
	The PRIVATE and LOCAL commands perform different tasks. The PRIVATE command hides
	memory variables. However, it does not create them. In the example shown above,
	the AFIELDS() function created the array variable aFields(2), not the PRIVATE
	command.
	
	On the other hand, the LOCAL command, like the PUBLIC command, creates memory
	variables and defines a scope for them. The LOCAL command is new to Visual
	FoxPro. It creates memory variables and array memory variables that can be used
	and modified only within the procedure or function in which they are created.
	They cannot be accessed by higher or lower level programs.
	
	For more information about the LOCAL command, search for LOCAL in the Visual
	FoxPro Help menu.
	
	RESOLUTION
	==========
	
	Use LOCAL ARRAY to declare an array memory variable. For example:
	
	     LOCAL ARRAY aTest(3,2)
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
