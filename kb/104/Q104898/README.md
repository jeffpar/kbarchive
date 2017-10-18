---
layout: page
title: "Q104898: FIX: ICHAR Fails If the Argument Is a Character Function"
permalink: kb/104/Q104898/
---

## Q104898: FIX: ICHAR Fails If the Argument Is a Character Function

	Article: Q104898
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
	
	The intrinsic function ICHAR returns a value outside the valid range of 0-255
	when the argument to ICHAR is a function returning character.
	
	RESOLUTION
	==========
	
	Use a temporary variable to get the return value of the character function, and
	use that temporary variable as the argument of the ICHAR function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0. This problem has been resolved with FORTRAN PowerStation
	maintenance release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	MORE INFORMATION
	================
	
	In the sample code below, both itemp1 and itemp2 should be set to 97. However,
	with FORTRAN PowerStation for MS-DOS, version 1.0, itemp2 is set to 97, but the
	itemp1 is set to some value outside the legal range of ICHAR. Both itemp1 and
	itemp2 are 97 with FORTRAN 5.1 and earlier.
	
	Sample Code
	-----------
	
	  C Compile options needed: NONE
	        character*1 chrfun, ctemp
	        integer itemp1, itemp2
	        ctemp = chrfun('a')
	        itemp1 = ichar(chrfun('a'))
	        itemp2 = ichar(ctemp)
	        print*, itemp1, itemp2
	        end
	
	        character*1 function chrfun(chr)
	        character*1 chr
	        chrfun=chr
	        return
	        end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
