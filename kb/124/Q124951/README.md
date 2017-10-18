---
layout: page
title: "Q124951: BUG: F2374: Incorrect Reference of the Error in BLOCK DATA"
permalink: kb/124/Q124951/
---

## Q124951: BUG: F2374: Incorrect Reference of the Error in BLOCK DATA

	Article: Q124951
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to multiply initialize a data, in a BLOCK DATA program unit causes
	the compiler to issue the F2374 error message below in the wrong location.
	
	  error F2374: 'symbol' redefinition; multiple initialization
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed above. We are
	researching this bug and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem. The error F2374 is reported on the
	end statement of the first routine in the file, rather than the block data where
	the error occurred. This is true regardless of the relative positions or other
	intervening routines.
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	
	         subroutine y()
	         write(*,*) 'cat'
	         end
	
	         block data initerr
	         common /errz/ nerr
	         data  nerr /0/, nerr /1/ 
	         end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
