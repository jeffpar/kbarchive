---
layout: page
title: "Q149747: PRB: Debugger Cannot Evaluate Out of Scope Named Constants"
permalink: kb/149/Q149747/
---

## Q149747: PRB: Debugger Cannot Evaluate Out of Scope Named Constants

	Article: Q149747
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The debugger's watch window cannot evaluate expressions that contain named
	constants that have gone out of scope. Attempting to use a variable evaluation
	expression containing a locally undefined named constant in one of the watch
	windows causes the message "EE2347: Undefined variable" to be returned in the
	corresponding value field.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The scope context operator allows you to view information about module variables
	that have gone out of scope. However, using the scope context operator in this
	manner does not apply to named constants. You cannot use the scope context
	operator to evaluate named constants.
	
	Steps to Illustrate Behavior
	----------------------------
	
	1. Build the sample code provided in Developer Studio.
	
	2. After successfully building the sample code, start a debugging session by
	  selecting Debug from the Build menu and then choosing Step Into.
	
	3. Step into the module subroutine MODULE_PROC. In a watch window, type:
	
	  " MY_MODULE::MODULE_PROC::Y" (without the quotation marks)
	
	  The number 9.00000 is correctly displayed for the named constant Y.
	
	4. Step into the internal module subroutine INTERNAL_PROC to the assignment
	  statement of variable N. Note that the watch expression created in Step 3 is
	  no longer valid because it references the named constant Y which is out of
	  scope.
	
	5. In the subroutine INTERNAL_PROC, evaluate the variables H and N and the named
	  constant Y. In a watch window, do the following:
	
	  To evaluate H using the scope context operator, type:
	
	  " {MY_MODULE::MODULE_PROC::INTERNAL_PROC}H" (without the quotation marks)
	
	  To evaluate N using the scope context operator, type:
	
	  " {MY_MODULE::MODULE_PROC::INTERNAL_PROC}N" (without the quotation marks)
	
	  Evaluation of Y will fail when out of scope or when using the scope context
	  operator.
	
	  Using the scope context operator, type:
	
	  " {MY_MODULE::MODULE_PROC::INTERNAL_PROC}Y" (without the quotation marks)
	
	  -or-
	
	  Without the scope context operator, type:
	
	  " MY_MODULE::MODULE_PROC::INTERNAL_PROC::Y" (without the quotation marks)
	
	NOTE: "EE2347: Undefined variable" is generated for the named constant Y. The
	value of the named constant Y can only be viewed while control is in the
	MODULE_PROC subroutine.
	
	Sample Code
	-----------
	
	  ! Compile options needed: /Zi
	        MODULE MY_MODULE
	          INTEGER H
	        CONTAINS
	          SUBROUTINE MODULE_PROC
	            PARAMETER(Y=9.0)
	            CALL INTERNAL_PROC
	          CONTAINS
	              SUBROUTINE INTERNAL_PROC
	                INTEGER N
	                N = Y + H
	              END SUBROUTINE INTERNAL_PROC
	          END SUBROUTINE MODULE_PROC
	        END MODULE MY_MODULE
	
	        PROGRAM TEST
	          USE MY_MODULE
	          CALL MODULE_PROC
	        END PROGRAM TEST
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
