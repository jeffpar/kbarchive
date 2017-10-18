---
layout: page
title: "Q130807: BUG: READ w/ Numeric Literal Subscript Causes Access Violation"
permalink: kb/130/Q130807/
---

## Q130807: BUG: READ w/ Numeric Literal Subscript Causes Access Violation

	Article: Q130807
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exporting an array in a COMMON block from a dynamic-link library (DLL) and
	attempting to read a member of the array by using a numeric literal as a
	subscript in the READ statement may generate an access violation.
	
	RESOLUTION
	==========
	
	Here are two ways to work around this problem:
	
	- Use INTEGER variables instead of numeric literals as subscripts when
	  accessing COMMON arrays.
	
	-or-
	
	- Read exported COMMON data into local allocatable arrays. Then assign these
	  arrays to the arrays in the exported COMMON block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This error occurs only with READ statements. It does not occur with WRITE
	statements or when reading COMMON variables.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  C  The code for the DLL
	  C  Compile options needed: /LD
	  C
	         COMMON /TheBlock[DLLEXPORT]/ CommonBlockIntegerArray(3)
	         INTEGER*4 CommonBlockIntegerArray
	            CommonBlockIntegerArray(1) = 1
	            CommonBlockIntegerArray(2) = 2
	            CommonBlockIntegerArray(3) = 3
	         END
	  C
	  C  The code for the EXE.
	  C  Compile options needed: none
	  C  Linker options needed: include the import library for the DLL
	  C
	  C  Define the common block for sharing.
	  C
	        COMMON /TheBlock[DLLIMPORT]/ CommonBlockIntegerArray(3)
	        INTEGER*4 CommonBlockIntegerArray
	  C
	  C  Some local variables.
	  C
	        INTEGER*4 intTemp
	        CHARACTER*3 someText
	  C
	  C  The main program.
	  C
	        someText = '11'
	        intTemp = 1
	  C
	  C  If the subscript is an integer variable, there is no problem.
	  C
	        READ (someText, '(A3)') CommonBlockIntegerArray(intTemp)
	  C
	  C  The array subscript is a numeric literal, an access violation occurs.
	  C
	        READ (someText, '(A3)') CommonBlockIntegerArray(1)
	        END
	
	REFERENCES
	==========
	
	For information on a related problem, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q112010 BUG: Access Violation on READ of Exported COMMON Array
	
	Additional query words: 1.00 Dr. Watson imported
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
