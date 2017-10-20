---
layout: page
title: "Q118396: PRB: putchar Fails in C Code Called from FORTRAN Application"
permalink: /kb/118/Q118396/
---

## Q118396: PRB: putchar Fails in C Code Called from FORTRAN Application

{% raw %}

	Article: Q118396
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPS
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a mixed-language program, compiling the FORTRAN code using the /MD option
	prevents the C Run Time function "putchar" from operating.
	
	For Fortran PowerStation 4.0, the following warning message is generated:
	
	  LINK: warning LNK4098: defaultlib "LIBC" conflicts with use of other libs;
	  use /NODEFAULTLIB:library
	
	CAUSE
	=====
	
	This behavior is by design. You cannot safely mix objects built for different
	program execution models. In this case, putchar('c') is a macro that expands to
	putc(c,stdout) and stdout is defined differently in MSVCRT.LIB than it is in the
	statically linked libraries.
	
	RESOLUTION
	==========
	
	To work around this problem, either
	
	- Use the /MD option on the C code as well.
	
	-or-  - Compile the Fortran code using /MT instead of using /MD.
	
	MORE INFORMATION
	================
	
	To generate the problem, compile the C code using Visual C++ 32-bit Edition and
	compile the FORTRAN program using option /MD. Include the C object module on the
	compile line so that it is passed to the linker. The command lines used are as
	follows:
	
	     CL -c C_SAMPLE.C
	     FL32 -MD F_SAMPLE.FOR C_SAMPLE.OBJ
	
	Run the sample code. It fails to display the letter "c" after "in the dll".
	
	The program will run without error if the FORTRAN program is compiled using the
	/MT option instead of the /MD option.
	
	Sample Code: FORTRAN
	--------------------
	
	  C Compile options needed: /MD
	
	        INTERFACE TO SUBROUTINE csub [C,ALIAS:'_csub']()
	        END
	        WRITE(*,*) 'In the main'
	        CALL csub()
	        END
	
	Sample Code: C
	--------------
	
	
	   
	      #include <stdio.h>
	     #include <string.h>
	
	     #define DLLexport _declspec(dllexport)
	
	     DLLexport void csub();
	     void csub()
	     {
	        printf("\nIn the dll\n");
	        putchar('c');
	     }
	
	Additional query words: visualc 1.00 4.00
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	

{% endraw %}
