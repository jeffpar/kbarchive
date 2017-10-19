---
layout: page
title: "Q106730: BUG: F6103 Reading &quot;0.&quot; into COMPLEX Number"
permalink: /kb/106/Q106730/
---

## Q106730: BUG: F6103 Reading &quot;0.&quot; into COMPLEX Number

	Article: Q106730
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to READ "0." into a COMPLEX variable produces the following error:
	
	  run-time error F6103: READ(file_name)
	  - invalid real
	
	This error occurs with standard- or list-directed formats on internal and
	external files.
	
	Inputs of 0, 0.0, and .0 as well as all other numbers ending in a decimal point
	can be correctly read into COMPLEX variables.
	
	RESOLUTION
	==========
	
	Input 0 (zero) rather than 0. when reading complex values using formatted I/O.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following program demonstrates that with PowerStation, imputing 0, 0.0, or
	1. does not produce any errors, but imputing 0. produces the F6103 invalid real
	error. The output when compiled with PowerStation is:
	
	  In: 1.,1.     Out:           (1.000000,1.000000), error #:     0
	  In: 1.,0.     Out:           (1.000000,1.000000), error #:  6103
	  In: 0.,1.     Out:           (1.000000,1.000000), error #:  6103
	  In: 0.0,0.0   Out:   (0.000000E+00,0.000000E+00), error #:     0
	  In: 0,0       Out:   (0.000000E+00,0.000000E+00), error #:     0
	
	Sample Code #1
	--------------
	
	  Compile options: none
	
	        COMPLEX*8 c1
	        INTEGER*4 Lerr
	        character*7 s(5)
	        data s/'1.,1.', '1.,0.', '0.,1.', '0.0,0.0', '0,0'/ 
	
	        do 1 i=1,5
	          READ  (s(i), '(2F6.0)', IOSTAT=Lerr) c1
	          WRITE (*,*) ' In: '//s(i)//'   Out:',c1,', error #:',Lerr
	   1    continue
	        END
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	
