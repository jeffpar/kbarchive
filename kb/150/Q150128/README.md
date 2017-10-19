---
layout: page
title: "Q150128: BUG: MATHERRQQ() Complex Result Variable Not Used"
permalink: /kb/150/Q150128/
---

## Q150128: BUG: MATHERRQQ() Complex Result Variable Not Used

	Article: Q150128
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MATHERRQQ() run-time subroutine to handle complex number math
	errors and you input a return value into either the C8RES or the C16RES function
	result variables, members of the MTH$E_INFO data structure, the value is not
	returned to the calling function that created the math error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Build and run the sample code listed below. The program prompts you for the
	desired function result when the complex math error is encountered. When you
	type in a value for the desired function result, the value is not returned to
	clog().
	
	Sample Code
	-----------
	
	  ! Compile options needed: /MT
	
	        PROGRAM COMPLX
	        COMPLEX(4) c1, c2 /(0.0, 0.0)/ 
	        c1 = clog(c2)
	
	        WRITE(*, *) c1
	        END PROGRAM COMPLX
	
	        SUBROUTINE MATHERRQQ( name, length, info, retcode)
	        USE MSFLIB
	        INTEGER(2) length, retcode
	        CHARACTER(length) name
	        RECORD /MTH$E_INFO/ info
	        PRINT *, "Entered MATHERRQQ"
	        PRINT *, "Failing function is: ", name
	        PRINT *, "Error type is: ", info.errcode
	        IF((info.ftype==TY$CMPLX8).OR.(info.ftype==TY$CMPLX16)) THEN
	          PRINT *, "Type: COMPLEX"
	          PRINT *, "Enter the desired function result: "
	          READ(*,*) info.c16res
	          retcode = 1
	        END IF
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
