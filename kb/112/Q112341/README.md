---
layout: page
title: "Q112341: FIX: LOC Fails on Double COMPLEX Structure Element"
permalink: /kb/112/Q112341/
---

## Q112341: FIX: LOC Fails on Double COMPLEX Structure Element

	Article: Q112341
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the LOC intrinsic function to return the address of a COMPLEX*16 structure
	variable results in an address of 0 (zero).
	
	RESOLUTION
	==========
	
	Use the LOC function on a different type of field in the structure and then
	calculate the address of the DOUBLE PRECISION COMPLEX field. If necessary,
	create a UNION block to map a different variable type to the double COMPLEX
	element.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for Windows
	NT, version 1.0 and for MS-DOS, versions 1.0 and 1.0a. This problem was
	corrected in FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample illustrates the problem:
	
	Sample Code
	-----------
	
	  c Compile options needed: none
	  c
	        structure /nest/ 
	          double complex tests
	        end structure
	
	        record /nest/ t
	        t.tests=(0.,0.)
	        i = loc(t.tests)
	        print10, 'loc(t.tests)          ', i,i
	  10    format(1x,a,i8,3x,z)
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
