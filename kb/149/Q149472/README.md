---
layout: page
title: "Q149472: PRB: FOR3852 Error Function RESULT and [] Attribute Specifier"
permalink: kb/149/Q149472/
---

## Q149472: PRB: FOR3852 Error Function RESULT and [] Attribute Specifier

	Article: Q149472
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a source file that contains a function that uses the "[]" attribute
	specifier with the Fortran 90 function RESULT return type option causes the
	following compiler syntax error:
	
	  error FOR3852: syntax error detected between ) and RESULT
	
	CAUSE
	=====
	
	The function RESULT return type option is a feature of Fortran 90 and is not
	supported with the "[]" attribute specifier.
	
	RESOLUTION
	==========
	
	If you are using the function RESULT return type option, declare the function's
	attributes using the !ms$attributes metacommand.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  !! Compile options needed: none
	
	        program attrib
	        write(*,*) newx()
	        end
	
	        function newx[C] () result(x)  ! FOR3852: syntax error
	     integer x
	     x = 39
	        end
	
	Sample Code to Work Around Problem
	----------------------------------
	
	  ! Compile options needed: none
	
	        program attrib
	        print *, newx()
	        end
	
	        function newx() result(x)
	     !ms$attributes C :: newx
	     integer x
	     x = 39
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
