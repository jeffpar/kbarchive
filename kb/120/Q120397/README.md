---
layout: page
title: "Q120397: Use atof or atoi Functions to Convert from Char Strings"
permalink: /kb/120/Q120397/
---

## Q120397: Use atof or atoi Functions to Convert from Char Strings

{% raw %}

	Article: Q120397
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft FORTRAN PowerStation does not permit list-directed I/O for internal
	files. As a result, you may find it difficult to convert character strings to
	numeric values unless you know the exact format of the string. However, the atoi
	and atof functions included in the LIBC.LIB library can accomplish the
	translation.
	
	MORE INFORMATION
	================
	
	To use the atof and atoi functions, you must create interfaces to the functions,
	and declare the types of the functions.
	
	The LIBC.LIB library containing the atof and atoi functions, is linked by default
	when building FORTRAN programs in PowerStation, so no special options are
	required.
	
	The atof function expects the character string to be in the following form:
	
	  [whitespace] [sign] [digits] [.digits] [ {d | D | e | E }[sign]digits]
	
	Use some caution and error checking when employing these functions. If the atof
	or atoi function cannot convert the string format, it returns zero (0.0 or 0) as
	the error condition. You should consult the C run-time library reference for
	complete information on these functions.
	
	FORTRAN does not null terminate strings, so the functions may incorrectly
	translate a string that contains digits up to the end. To be safe, insert a null
	character in the last position of the string. For example, the following command
	null terminates the string "a":
	
	        CHARACTER*10 a
	        a(10:10) = char(0)
	
	Sample Code
	-----------
	
	Compiler options needed: none
	
	  C Interface to the atof function which is in the LIBC library
	
	        INTERFACE to REAL*8 FUNCTION atof[C](a)
	        CHARACTER*(*) a[reference]
	        END
	  C Interface to the atoi function which is in the LIBC library
	
	        INTERFACE to INTEGER FUNCTION atoi[C](a)
	        CHARACTER*(*) a[reference]
	        END
	        REAL*8  x
	        REAL*8  atof !prevents error F2236: ATOF : length redefined
	        INTEGER i
	        INTEGER atoi !prevents error F2201: ATOI : type redefined
	        CHARACTER*30 a
	        PRINT *, "Type a numeric value"
	        READ '(A)', a
	        a(30:30) = char(0)
	        x = atof(a)
	        i = atoi(a)
	        PRINT *, '"',a,'"', x, i
	        END
	
	Additional query words: kbinf 1.00 1.00a 4.00 VAX porting port
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	

{% endraw %}
