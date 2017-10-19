---
layout: page
title: "Q109875: FIX: Improper Debug Stepping in Routines w/ ENTRY Points"
permalink: /kb/109/Q109875/
---

## Q109875: FIX: Improper Debug Stepping in Routines w/ ENTRY Points

	Article: Q109875
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an attempt to step into a subroutine through an entry point, the lines appear
	to be executed out of order. In reality they are not executed out of sequence;
	the sequence of events appear to be this:
	
	1. The first step into the entry point goes to the END statement.
	
	2. The second step goes to the SUBROUTINE statement.
	
	3. The third step goes to the first executable line in the subroutine but
	  doesn't execute it.
	
	4. The fourth step goes to the END statement again.
	
	5. The fifth step goes to the first executable line in the entry point.
	
	From here on the stepping and execution sequence is correct.
	
	CAUSE
	=====
	
	This problem is caused by the compiler putting out improper line number
	information for the entry point.
	
	RESOLUTION
	==========
	
	There is currently no work around for this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. This problem was fixed in FORTRAN PowerStation
	version 4.0.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
