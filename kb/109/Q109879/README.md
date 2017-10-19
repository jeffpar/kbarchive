---
layout: page
title: "Q109879: BUG: Inline Comment with &quot;!&quot; Can Act Like a C String"
permalink: /kb/109/Q109879/
---

## Q109879: BUG: Inline Comment with &quot;!&quot; Can Act Like a C String

	Article: Q109879
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program containing "!" (to denote an inline comment) directly following a
	string constant interprets the "!" as the letter "C" and appends a null
	character to the string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 version 1.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	String values in the C language are terminated with null characters. This type
	of string is specified in Microsoft FORTRAN by using a standard string constant
	followed by the character C. The code sample below shows how unwanted null
	characters are appended to string constants with "!" directly following.
	
	Sample Code
	-----------
	
	          OPEN (1, FILE='TEST')
	        WRITE(1, '(A)') 'Normal string'      ! This is a normal FORTRAN
	  c     string
	        WRITE(1, '(A)') 'Normal C string'C   ! The C following the string
	  c     constants indicates a C string
	        WRITE(1, '(A)')  'Extra null char'!  ! The "!" treats this
	  c     string as a C string
	        CLOSE (1)
	        END
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
