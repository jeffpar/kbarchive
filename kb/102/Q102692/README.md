---
layout: page
title: "Q102692: FIX: FP Emulator Converts REAL to INTEGER Incorrectly"
permalink: kb/102/Q102692/
---

## Q102692: FIX: FP Emulator Converts REAL to INTEGER Incorrectly

	Article: Q102692
	Product(s): Microsoft Fortran Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application developed in Microsoft FORTRAN PowerStation runs on a
	computer that does not have a math coprocessor installed, the code may convert a
	REAL variable or expression to an INTEGER variable incorrectly, resulting in
	incorrect results.
	
	CAUSE
	=====
	
	When an application immediately converts the results of a REAL calculation to an
	INTEGER value, the code does not remove the results from the coprocessor
	emulator stack. The numeric conversion routine __ftol (float to long) uses this
	extended coprocessor-stack-based value instead of the truncated contents stored
	in the variable. The __ftol function incorrectly rounds down the
	extended-precision result.
	
	RESOLUTION
	==========
	
	To work around this problem, use the NINT (round to nearest integer) intrinsic
	function to explicitly convert the expression or variable to an INTEGER.
	
	The /Ox optimization compiler option switch may resolve this error. Among other
	optimizations, the /Ox switch calculates constant expressions at compile time.
	These calculations may correctly convert the REAL number to an INTEGER while the
	run-time calculation produces the incorrectly rounded result.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PowerStation versions 1.0 and
	1.0a for MS-DOS. This problem has been resolved with FORTRAN PowerStation
	maintenance release version 1.0a for MS-DOS.
	
	FORTRAN Powerstation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" from the
	\f32\BIN directory will show version 2.8 for FORTRAN Powerstation version 1.0,
	and it will show 1.0f for the maintenance release version 1.0a.
	
	MORE INFORMATION
	================
	
	The FORTRAN PowerStation floating-point emulator is a virtual dynamic- link
	library (DLL) in the Phar Lap MS-DOS extender. To duplicate this problem on a
	computer with a math coprocessor installed, type the following at the MS-DOS
	command prompt:
	
	  SET TNT=-FPEM
	
	This statement causes the MS-DOS extender to ignore the math coprocessor and use
	the emulator code for all math operations.
	
	The following code example prints the word "Failed" when it runs with the
	floating-point emulator:
	
	Sample Code 1
	-------------
	
	C Compiler options needed: none
	
	     x =  3.0
	     z = -3. ** x
	     i =  z
	     if (i .ne. -27) then
	       print *, 'Failed'
	     else
	       print *, 'OK'
	     end if
	     end
	
	The following code example demonstrates using the NINT intrinsic function to
	avoid this error. This code prints the word "OK" even when a math coprocessor is
	not available.
	
	Sample Code 2
	-------------
	
	C Compiler options needed: none
	
	        x =  3.0
	        z = -3. ** x
	        i =  nint(z)
	        if (i .ne. -27) then
	          print *, 'Failed'
	        else
	          print *, 'OK'
	        end if
	        end
	
	Additional query words: 1.00 Phar Lap DOSXMSF.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
