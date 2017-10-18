---
layout: page
title: "Q149158: BUG: Compiler Options /W0 and /WX Fail When Used with /4Ys"
permalink: kb/149/Q149158/
---

## Q149158: BUG: Compiler Options /W0 and /WX Fail When Used with /4Ys

	Article: Q149158
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the /W0 or /WX compiler option with the /4Ys compiler option fails. The
	/4Ys compiler switch enables strict Fortran 90 conformance and causes a warning
	message to be generated for every source line that contains an obsolescent
	FORTRAN 77 feature. The /W0 compiler option causes suppression of all
	compilation warning messages, but when it is used with the /4Ys, compiler option
	warning messages are displayed normally for every non-conforming Fortran 90
	source line. Additionally, the /WX compiler option interprets all warnings as
	errors, which halts the compilation process, but when it is used with /4Ys,
	warnings are not interpreted as compilation errors nor is the build process
	stopped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Consult the Microsoft Fortran PowerStation 4.0 for Windows 95 and Windows NT
	Programmers Guide, appendix B, for further information and explanations
	regarding all Microsoft extension and Fortran 90 feature changes.
	
	Using the /4Ys compiler option and attempting to use any of the following
	obsolescent FORTRAN 77 features in your source code will cause a warning message
	to be generated:
	
	- Using the ASSIGN statement
	
	- GO TO (assigned)
	
	- IF (arithmetic)
	
	- PAUSE
	
	- Alternate return
	
	- Assigned FORMAT specifiers
	
	- Real and Double precision DO control variables
	
	- Shared DO loop termination
	
	- Terminating DO loops with statements other than END DO or CONTINUE
	
	- Branch to END IF from outside IF block
	
	- Hollerith (H) edit descriptor
	
	REFERENCES
	==========
	
	FORTRAN 90 HANDBOOK, Adams, Brainerd, Martin, Smith, Wagener, McGraw-Hill Book
	Company, 1992.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
