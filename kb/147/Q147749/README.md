---
layout: page
title: "Q147749: BUG: Explicit-Shape Array Elements Not Displayed in Debugger"
permalink: kb/147/Q147749/
---

## Q147749: BUG: Explicit-Shape Array Elements Not Displayed in Debugger

	Article: Q147749
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug an explicit-shape character array in a subroutine and view the
	expanded array elements in the locals, watch, or quickwatch window, only the
	first two array elements contain values; the rest are blank.
	
	RESOLUTION
	==========
	
	You can view the full contents of the array in the memory window. For more
	information on using the memory window, please see the topic "Using the Memory
	Window" in the Microsoft Fortran PowerStation version 4.0 Books Online help
	facility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Build the following sample code in Developer Studio. Begin debugging the program
	by clicking Debug on the Build menu, and then click Step Into. Step into the
	subroutine sub(), and go to the return statement. In either the watch or quick
	watch window, type the explicit-shape array variable name "I" and then expand
	the array elements by clicking the nesting symbol (+).
	
	NOTE: All the array elements contain blank spaces except for the first two.
	
	Sample Code
	-----------
	
	  C Compile options needed: /Zi
	
	        CHARACTER(LEN = 10),DIMENSION(8)::H
	        H = 'AAAAAAAAAA'
	        CALL SUB(H)
	        WRITE(*,*)'Done debugging...'
	        END
	
	        SUBROUTINE SUB(I)
	        CHARACTER(LEN = *),DIMENSION(8)::I
	        I = 'BBBBBBBBBB'
	        RETURN
	        END SUBROUTINE SUB
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
