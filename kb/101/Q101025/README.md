---
layout: page
title: "Q101025: How FoxPro Passes Parameters to Subroutines"
permalink: kb/101/Q101025/
---

## Q101025: How FoxPro Passes Parameters to Subroutines

	Article: Q101025
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, FoxPro passes parameters to procedures (subroutines called with a DO
	<subroutine> command) by reference and parameters to functions
	[subroutines called with a =<subroutine>() or ?<subroutine>()
	command] by value. The information below describes how parameters are passed to
	subroutines.
	
	MORE INFORMATION
	================
	
	When parameters are passed by value, a copy of the original variable is made in
	the routine. The variable declared in the subroutine is a different variable
	from the original variable. When control is passed back to the calling program,
	the variables declared in the routine are released and the value of the original
	variable is not changed.
	
	When parameters are passed by reference, a reference to the original variable is
	made in the routine. Any change made to the variable in the subroutine is
	reflected in the calling program.
	
	Passing Parameters to User-Defined Functions
	--------------------------------------------
	
	By default, parameters are passed by value to user-defined functions. In essence,
	any change made to the variables declared as parameters in the subroutine will
	not affect the original variables in the calling program. For example:
	
	     * Main program
	     CLEAR
	     mvar1=1
	     mvar2=2
	     mvar3=ADDIT(mvar1)   && Passing mvar1 as a parameter: by value
	     ?
	     ?"Value of memory variables after the routine is executed"
	     DISP MEMO LIKE m*
	     ?
	     ?"The value of mvar1 is unchanged"
	
	     FUNCTION ADDIT
	     PARAMETER mpar1
	     mpar1=mpar1+1    && Copy of mvar1 is incremented
	     mvar3=mpar1+1     && Variable to be returned to the calling program.
	     ?"Value of memory variables in the routine"
	     DISPLAY MEMORY LIKE m* && mvar1=1 and mpar1=1
	     RETURN mvar3      && Value returned to the calling program mvar3
	
	To pass a parameter by reference to a user-defined function, use the at sign (@)
	before the variable passed. For example:
	
	     mvar3=ADDIT(@mvar1)
	
	To change the default and pass all the parameters by reference, use SET UDFPARMS
	command. For example:
	
	  SET UDFPARMS TO REFERENCE
	
	Passing Parameters to Procedures
	--------------------------------
	
	By default, FoxPro passes parameters by reference to procedures. Any changes made
	to variables in the subroutine will be made to the original variable.
	Additionally, FoxPro hides the original variables passed as parameters in the
	subroutine. For example:
	
	     * Main program
	     CLEAR
	     mvar1=1
	     mvar2=2
	     DO ADDIT WITH mvar1  && Passing mvar1 as a parameter by reference
	     ?
	     ?"Value of memory variables after the routine is executed"
	     DISPLAY MEMORY LIKE m*
	     ?
	     ?"The value of mvar1 is modified"
	
	     PROCEDURE  ADDIT
	     PARAMETER mpar1
	     mpar1=mpar1+1            && Reference to mvar1 is incremented
	     ?"Value of memory variables in the routine"
	     DISPLAY MEMORY LIKE m*   && mvar1=2 and mpar1= @mvar1
	
	To pass a parameter to a procedure by value, use parentheses around the variable.
	For example:
	
	  DO ADDIT WITH (mvar1)
	
	REFERENCES
	==========
	
	"Language Reference," version 2.5, page L3-1012
	
	"Using FoxPro Version 2," Slater and Arnott, pages 613-614, Que, 1992
	
	Additional query words: VFoxWin FoxDos FoxWin 2.x array
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
