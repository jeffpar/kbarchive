---
layout: page
title: "Q142214: FIX: RELEASE Releases All Local Variables with Identical Names"
permalink: /kb/142/Q142214/
---

## Q142214: FIX: RELEASE Releases All Local Variables with Identical Names

	Article: Q142214
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
	
	When the RELEASE <memvar> command is called to release a LOCAL variable,
	all variables that have that same name are also released. For example, a local
	variable that is declared in a higher level procedure and is not visible in the
	current routine is released when the RELEASE <memvar> command is issued.
	
	WORKAROUND
	==========
	
	Because local variables are out of scope as soon as you call another program,
	you can avoid using the RELEASE command to explicitly release a local variable.
	
	You can also use the RELEASE ALL command instead of RELEASE <memvar>. For
	example, instead of using this:
	
	     RELEASE lcMychar
	
	use this:
	
	     RELEASE ALL LIKE lcMychar
	
	The RELEASE ALL command does not release local variables that have been declared
	in other procedures or functions, even if they have the same name as a local
	variable in the current procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	To reproduce the problem, copy the following sample code into a program file, and
	run it:
	
	     LOCAL lcNewVar
	     lcNewVar="one"
	     =Changeit()
	     ?lcNewVar  && This command returns the error "Variable not Found"
	     RETURN .T.
	
	     PROCEDURE Changeit
	     LOCAL lcNewVar
	     lcNewVar="two"
	     DISPLAY MEMO LIKE lc*
	     RELEASE lcNewVar
	     * Comment the line above and uncomment the following line
	     * RELEASE ALL LIKE lcNewVar
	     DISPLAY MEMO LIKE lc*
	     RETURN .T.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
