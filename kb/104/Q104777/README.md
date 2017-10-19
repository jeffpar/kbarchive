---
layout: page
title: "Q104777: FIX: No F6099 with /4I2 and /4Yb on Integer Overflow"
permalink: /kb/104/Q104777/
---

## Q104777: FIX: No F6099 with /4I2 and /4Yb on Integer Overflow

	Article: Q104777
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0,4.01,4.1,5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, versions 4.0, 4.01, 4.1, 5.0, 5.1 
	- Microsoft FORTRAN compiler for OS/2, versions 4.1, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs compiled with the $STORAGE:2 metacommand, the /4I2 option and $DEBUG
	metacommand, or the /4Yb option, with integer variables taking values beyond
	their full 16-bit range (-32,768 to 32,767), may not generate the following
	error:
	
	  Run-Time Error F6099: $DEBUG
	  INTEGER overflow
	
	CAUSE
	=====
	
	The $STORAGE:2 metacommand, /4I2 option and $DEBUG metacommand, or the /4Yb
	option does not cause the compiler to generate additional code that will lead to
	a jump to the overflow routine for integer values that are out of range. This
	incorrect code generation is due to the common subexpression elimination
	optimization.
	
	RESOLUTION
	==========
	
	To correctly generate this error message for integer values that are out of the
	integer*2 (16-bit) range, compile with the /Od switch to disable optimization.
	Optimization may be partially turned back on with the optimization switches:
	/Os, /Ot, and /Ol (which do not enable common subexpression elimination /Oc).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN versions 4.0, 4.01, 4.1,
	5.0, and 5.1. This problem was corrected in FORTRAN PowerStation, version 1.0.
	
	MORE INFORMATION
	================
	
	The following code does generate the F6099 error if compiled with the partial
	optimization of /Odlt, but will not generate the error if complied with either
	the default full optimization "/Ox" or common subexpression elimination "/Odc":
	
	Sample Code
	-----------
	
	  $debug
	  $storage:2
	
	        integer*2 i,j,k
	
	        i=10
	        j=4000
	        k=i*j
	        end
	
	Additional query words: 4.00 4.01 4.10 5.00 5.10 buglist4.00 buglist4.01 buglist4.10 buglist5.00 buglist5.10 fixlist1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN400DOS kbFORTRAN401DOS kbFORTRAN500DOS kbFORTRAN410DOS kbFORTRAN500OS2 kbFORTRAN510OS2 kbFORTRAN410OS2
	Version           : :4.0,4.01,4.1,5.0,5.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
