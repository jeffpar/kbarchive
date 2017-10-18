---
layout: page
title: "Q49495: FIX: F1001: ctypes.c When FORTRAN Program Contains &#36;NOLOOPOPT"
permalink: kb/049/Q49495/
---

## Q49495: FIX: F1001: ctypes.c When FORTRAN Program Contains &#36;NOLOOPOPT

	Article: Q49495
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 5.0, 5.1 
	- Microsoft FORTRAN Compiler for MS-DOS, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and the compiler generates one of the
	following messages. For FORTRAN version 5.0:
	
	  fatal error F1001: Internal Compiler Error
	  (compiler file '@(#)ctypes.c:1.11', line 1657)
	
	For FORTRAN version 5.1:
	
	  fatal error F1001: Internal Compiler Error
	  (compiler file '@(#)ctypes.c:1.12', line 1655)
	
	CAUSE
	=====
	
	The application source code contains the $NOLOOPOPT metacommand.
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following two steps:
	
	- Modify the source code to remove the $NOLOOPOPT metacommand.
	
	- Specify the /Od compiler option switch to suppress the optimization.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN versions 5.0 and 5.1 for
	MS-DOS and OS/2. This problem was corrected in FORTRAN PowerStation.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem.
	
	Sample Code
	-----------
	
	  C Compile options needed: None
	  $NOLOOPOPT
	        END
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN500DOS kbFORTRAN500OS2 kbFORTRAN510OS2
	Version           : :5.0,5.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
