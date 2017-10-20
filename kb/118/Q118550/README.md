---
layout: page
title: "Q118550: BUG: READ and WRITE Fail on Unit 64"
permalink: /kb/118/Q118550/
---

## Q118550: BUG: READ and WRITE Fail on Unit 64

{% raw %}

	Article: Q118550
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Both READ and WRITE fail if the file is opened as unit 64. One of the following
	errors is produced at run time: F6201, F6204, or F6600.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the FORTRAN PowerStation for MS-DOS,
	version 1.0a, and the FORTRAN PowerStation 32 for Windows NT, version 1.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When using list directed I/O on unit 64, the following error message is
	produced:
	
	  run time error F6201: WRITE(internal)
	  - list-directed I/O not consistent with OPEN options
	
	With binary I/O, the error message produced is:
	
	  run-time error F6204: READ(internal) - unformatted I/O not consistent with
	  OPEN options
	
	When using formatted I/O, the following error message is produced when writing:
	
	  run-time error F6600: WRITE(internal) - internal file overflow
	
	A formatted READ fails silently without any error message.
	
	Use the following sample code to produce error message F6201 at run time.
	
	Sample Code
	-----------
	
	  c compile options needed: none
	
	        character*10 ch/'1234567890'/ 
	        open(64,file='test.dat')
	        write(64,*) ch
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
