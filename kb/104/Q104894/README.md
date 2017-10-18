---
layout: page
title: "Q104894: FIX: VERIFY Doesn't Check Last Character in String"
permalink: kb/104/Q104894/
---

## Q104894: FIX: VERIFY Doesn't Check Last Character in String

	Article: Q104894
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
	
	The intrinsic function VERIFY doesn't compare the last character of the
	character string with the character set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0. This problem has been resolved with FORTRAN PowerStation
	maintenance release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" from
	\F32\BIN directory will show version 2.8 for FORTRAN PowerStation version 1.0,
	and it will show version 1.0f for the maintenance release version 1.0a.
	
	MORE INFORMATION
	================
	
	The intrinsic function VERIFY compares the characters of one string with another
	string.
	
	     VERIFY (charstr, charset [,log])
	
	Each character of charstr is compared with the charset. VERIFY returns the
	position of the first character in charstr that it could not find in charset. If
	log is true, characters are taken from charstr in reverse.
	
	The sample code fails if compiled with FORTRAN PowerStation, but will pass with
	FORTRAN 5.1 and 5.0. Versions of FORTRAN before 5.0 do not have the VERIFY
	function.
	
	Sample Code
	-----------
	
	  C No compiler options required
	        i = verify('ba','b')
	        if (i.eq.2) then
	          print*, 'verify correct:   ',i
	        else
	          print*, 'verify incorrect: ',i
	        end if
	        end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
