---
layout: page
title: "Q105932: FIX: String Concatenation May Cause Memory Errors"
permalink: kb/105/Q105932/
---

## Q105932: FIX: String Concatenation May Cause Memory Errors

	Article: Q105932
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Character string concatenations that involve the automatic creation of temporary
	variables may cause the following memory related run-time problems:
	
	- Very slow execution of the application
	
	- F6700
	
	- DX2010
	
	RESOLUTION
	==========
	
	This memory loss can be avoided by assigning the concatenated strings to a
	temporary character string variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version
	1.0. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" from
	\F32\BIN directory will show version 2.8 for FORTRAN PowerStation version 1.0,
	and it will show version 1.0f for the maintenance release version 1.0a.
	
	MORE INFORMATION
	================
	
	The following two sample programs demonstrate a memory loss due to string
	concatenation in the argument list. In both of the following examples, using a
	temporary variable for the concatenated strings avoids the memory leak.
	
	Sample Code 1
	-------------
	
	  C Compile options needed: none
	        character*40 c1,c2
	        c1 = 'abcd'
	        c2 = 'efgh'
	        k = 0
	        do i=1,500000
	          if(c1//c2 .eq. 'Never') k = k + 1
	        end do
	        end
	
	The code above will run very slowly, and eventually generate:
	
	  run-time error F6700
	  - heap space limit exceeded
	
	Sample Code 2
	-------------
	
	  C Compile options needed: none
	        character fmtout*20,label(1,3)*(9)
	        double precision value
	        data (label(1,j),j=1,3)/' Label',' Output',' Test'/ 
	        data value/3.14159/ 
	        fmtout='f10.3'
	        write(6,'(3a,''='','//fmtout//')')(label(1,j),j=1,3),value
	        end
	
	The above code on execution will generate:
	
	  DOSXMSF : error DX2010: invalid pointer passed to free or realloc :
	  0005F0F8h.
	  DOSXMSF : error DX2010: invalid pointer passed to free or realloc :
	  0005F0F8h.
	  Label Output Test = 3.142
	
	The code does run to completion because this type of DOS-extender error is not
	fatal.
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
