---
layout: page
title: "Q118432: BUG: Block-Data Subprograms Are Not Global Symbols"
permalink: /kb/118/Q118432/
---

## Q118432: BUG: Block-Data Subprograms Are Not Global Symbols

{% raw %}

	Article: Q118432
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
	
	When an object module containing only a block-data subprogram is placed in a
	library and that library is used to link to an executable file, the block-data
	subprogram is not linked to the executable file: no data initialization is
	performed.
	
	According to the ANSI specification for FORTRAN 77, it is possible for a program
	to include a block-data module by making an external reference to the block-data
	subprogram.
	
	CAUSE
	=====
	
	The linker links modules from a library only when the modules each contain a
	global symbol that matches an external reference to a procedure. Because a
	block-data module contains no global procedure names, the linker cannot be made
	to link the block-data module to the executable file.
	
	RESOLUTION
	==========
	
	In order to work around the problem, do one of the following:
	
	- Place the block-data subprogram definition in the same module as a non-
	  block-data subprogram definition. When an external reference is made to the
	  non-block-data subprogram, the entire module (including the block- data
	  subprogram) is then linked to the executable file.
	
	-or-
	
	- Do not put the block data module into a library; instead, link the block-data
	  module explicitly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the FORTRAN PowerStation for MS-
	DOS, versions 1.0 and 1.0a, and the FORTRAN PowerStation 32 for Windows NT,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem and both workarounds, perform the following steps:
	
	1. Create a static library from "Sample Code 2," below.
	
	2. Build a program using "Sample Code 1," below, and the library you built in
	  step 1. The build fails with an unresolved external error for "block_data".
	
	3. Create a second static library from "Sample Code 3," below (workaround number
	  1)
	
	4. Build a program using "Sample Code 1" and the library you built in step 3.
	  When run, this program correctly prints "3.1415".
	
	5. In "Sample Code 1," comment out the line containing the call to "block_data".
	
	6. Build a program using the new "Sample Code 1" and the library you built in
	  step 1. When run, this program incorrectly prints "0.00000".
	
	7. Build a program using the new "Sample Code 1" and the object module from
	  "Sample Code 2" (workaround number 2). When run, this program correctly
	  prints "3.1415".
	
	Sample Code 1
	-------------
	
	  c compile options needed: none
	
	        common /block_com/ y
	        print *,y
	  C The following statement causes an external reference to "block_data",
	  C even though the call will never be made. A block-data subprogram will
	  C automatically execute before the first statement in a program if it is
	  C in the executable file.
	        if (.false.) call block_data()
	        end
	
	Sample Code 3
	-------------
	
	  c compile options needed: none
	
	        block data block_data
	        common /block_com/ x
	        data x /3.1415/ 
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
