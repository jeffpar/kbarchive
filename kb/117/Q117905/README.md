---
layout: page
title: "Q117905: BUG: F1001 on a Structure Declaration with Arrays"
permalink: /kb/117/Q117905/
---

## Q117905: BUG: F1001 on a Structure Declaration with Arrays

{% raw %}

	Article: Q117905
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
	
	Using the /Zi option to compile a program that has a structure declaration
	containing medium-sized arrays can generate the following error message when
	running on the FORTRAN PowerStation for MS-DOS, version 1.0a, or the FORTRAN
	PowerStation 32 for Windows NT, version 1.0:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)p2symtab.c:1.89', line 1601)
	
	With the FORTRAN PowerStation for MS-DOS, version 1.0, the error message reads as
	follows:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)p2symtab.c:1.89', line 1390)
	
	CAUSE
	=====
	
	This problem is caused by using the /Zi option when compiling some code that
	contains structures. Whether the problem occurs depends on the size of the
	elements of the structure, the order of the elements, and the names of the
	elements.
	
	RESOLUTION
	==========
	
	The error is dependent on the /Zi option and the size, order, and names of the
	array elements. Therefore, there are two possible resolutions:
	
	- Do not use the /Zi option.
	
	-or-
	
	- Rearrange the order of the elements in the structure: putting the largest
	  elements last often seems to prevent the F1001 error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the FORTRAN PowerStation for MS-
	DOS, versions 1.0 and 1.0a, and the FORTRAN PowerStation 32 for Windows NT,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem, compile the following sample code. To suppress the
	internal compiler error, do any one of the following:
	
	- Do not use /Zi.
	
	-or-
	
	- Change the name of the variable GV to just G.
	
	-or-
	
	- Reduce the size of the arrays.
	
	-or-
	
	- Move the line "real*8 gv(1)" before "real*8 a(8,513)".
	
	Sample Code
	-----------
	
	  c compile options needed: /Zi
	
	     structure /struct/ 
	        real*8 a(8,513)
	        real*8 gv(1)
	     end structure
	     record /struct/ s
	     end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
