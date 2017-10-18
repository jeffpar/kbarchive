---
layout: page
title: "Q104859: FIX: &#36;STORAGE:2 or /4I2 Generates Incorrect Code"
permalink: kb/104/Q104859/
---

## Q104859: FIX: &#36;STORAGE:2 or /4I2 Generates Incorrect Code

	Article: Q104859
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
	
	Using the undocumented compiler option /4I2 or the equivalent undocumented
	metacommand $STORAGE:2 will:
	
	- Miscalculate integer array sizes for DATA statements
	
	- Interpret explicitly declared INTEGER*4 variables as INTEGER*2
	
	RESOLUTION
	==========
	
	The compiler option /4I2 and the metacommand $STORAGE:2 are not intended to be
	used with this compiler. They are not documented for the same reason. However,
	any erroneous behavior may be avoided by replacing every instance of "integer "
	with "integer*2 " and declaring
	
	     implicit integer*2 (i-n)
	
	at the very beginning of each subroutine.
	
	It is necessary to replace every instance of "integer " with "integer*2 " because
	explicit integer declarations are treated as integer*4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS
	version 1.0. This problem has been resolved with FORTRAN PowerStation
	maintenance release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	Sample Code 1
	-------------
	
	  C Compile options needed: none (or comment out line 1 and use: /4I2)
	  $storage:2
	        integer iunit(3)
	        data iunit/100,10,1/ 
	        print*, iunit
	        end
	  C This will generate the following error:
	  C   F2408: IUNIT : DATA : too few constants to initialize item
	
	Sample Code 2
	-------------
	
	  C Compile options needed: none (or comment out line 1 and use: /4I2)
	  $storage:2
	        integer*4 i,j
	        j = 30000
	        i = j*j
	        print*, i,j
	        end
	  C When run, this will give the following wrong result:
	  C   -5888    30000
	  C instead of the following correct result:
	  C   900000000    30000
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
