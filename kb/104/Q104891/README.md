---
layout: page
title: "Q104891: FIX: F1001 &quot;@(#)fltreg.c:1.31&quot; When Compiling with /Ox"
permalink: /kb/104/Q104891/
---

## Q104891: FIX: F1001 &quot;@(#)fltreg.c:1.31&quot; When Compiling with /Ox

	Article: Q104891
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A complex series of expressions may generate the Internal Compiler Error F1001
	in file "@(#)fltreg.c:1.31" when compiled with full optimization (/Ox).
	
	RESOLUTION
	==========
	
	Adding the compiler switch /Op for floating-point consistency may avoid this
	error message. Removing the compiler switch /Ox may also resolve this problem.
	Breaking down the complex expressions using temporary variables is also a
	recommended solution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0. This problem has been resolved with FORTRAN powerstation
	maintenance release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from maintenance release
	version 1.0a by invoking the linker. Typing "Link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	Powerstation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	MORE INFORMATION
	================
	
	Some code compiled with the /Ox switch may generate the following error
	message:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  compiler file '@(#)fltreg.c:1.31', line 4792
	
	Depending on the contents of the file being compiled, the line could also be
	2634.
	
	To duplicate this error message, compile the following code with only the /Ox
	option. This sample produces the line 4792 message.
	
	To resolve the problem, add the /Op option or remove the /Ox option. Also, almost
	any simplification or restructuring of the equations will remove the error. For
	example, uncomment the "temp =" line.
	
	This code compiles without any error with Microsoft FORTRAN 5.1 or earlier.
	
	Sample Code
	-----------
	
	  C Compiler options required: /Ox and not /Op
	        DIMENSION BN(30)
	        COMMON ALPA, DN, THT, NP1, K, BN
	  c      temp = ALPA**((DN+1.0D0)*THT)
	        SR=ALPA**(DN*THT)+BN(NP1)*0.5D0*ALPA**((DN+1.0D0)*THT)
	        UTH=DSIN(THT)-BN(NP1)*0.5D0/ALPA**((DN+1.0D0)*THT)
	        URB=ALPA**DCOS(DN*THT)*(DN-1.0D0)
	        SRK2=(1.0D0)**ALPA**(K-1)
	        UTHK2=(-1.0D0)**ALPA**K
	        END
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
