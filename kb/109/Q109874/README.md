---
layout: page
title: "Q109874: FIX: Constants Out of Range Not Found by /4Yb"
permalink: kb/109/Q109874/
---

## Q109874: FIX: Constants Out of Range Not Found by /4Yb

	Article: Q109874
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program that contains a simple arithmetic expression including constant out of
	range may produce incorrect results. Using the -4Yb compiler option does not
	give a run-time error on constants that are out of range even though it should.
	
	CAUSE
	=====
	
	The constant folding algorithm (arithmetic performed at compile time) generates
	0 (zero) for the variable out of range.
	
	RESOLUTION
	==========
	
	Avoid using a simple constant expression that might be out of range. Use the
	temporary variable for the intermediate results and then use this variable in
	the expression. Compile the program with -4Yb and the appropriate run-time error
	will be generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for NT, version 1.0 and FORTRAN Powerstation for MS-DOS version 1.0 and 1.0a.
	This is not a problem in Microsoft FORTRAN for MS-DOS, version 5.1, or FORTRAN
	PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code #1
	--------------
	
	  c Compile options required: -4Yb does not affect the behavior
	  c The following code reproduces the problem.
	
	         i=2**50
	         write (*,*) i
	         end
	
	Sample Code #2
	--------------
	
	  c Compile options required: -4Yb
	  c The following code solves the problem and generates the following
	  c run-time error: run-time  F6099: $DEBUG
	  c            -INTEGER arithmetic overflow
	
	         j=50
	         i=2**j
	         write (*,*) i
	         end
	
	Additional query words: 1.00 runtime run time
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
