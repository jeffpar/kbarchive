---
layout: page
title: "Q77260: Mixed FORTRAN/C with OS/2 DLLs: Example, Restrictions"
permalink: /kb/077/Q77260/
---

## Q77260: Mixed FORTRAN/C with OS/2 DLLs: Example, Restrictions

{% raw %}

	Article: Q77260
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to link an OS/2 DLL (dynamic-link library) that contains both
	FORTRAN and C object code. All OS/2 DLLs must contain code in only one
	language.
	
	From the same FORTRAN main program, it is possible to call a separate FORTRAN DLL
	and a C DLL, but only if the C DLL has the C run-time library statically-linked
	into the C DLL. If the C run-time library is linked-in dynamically, when linking
	the executable with both CRTEXE.OBJ and FRTEXE.OBJ, some "L2025: Multiply
	Defined Symbols" and one "L2029: Unresolved External" result.
	
	From a FORTRAN statically linked executable, it is possible to call a FORTRAN
	DLL, which in turn calls a C DLL. This is possible only if the C DLL has the C
	run-time library statically-linked to the C DLL.
	
	From a FORTRAN statically linked executable, it is not possible to call a C DLL
	that calls a FORTRAN DLL. This will result in a protection violation on entry
	into the FORTRAN DLL. It is also not possible to statically link in the FORTRAN
	run-time library to a FORTRAN DLL because the necessary libraries are not
	available.
	
	Page 151 of the "Microsoft FORTRAN Advanced Topics Manual" for version 5.1 states
	that mixed language programming is not recommended in conjunction with
	multithread programs or dynamic-linked libraries. Any mixed language between
	OS/2 DLLs is not considered a feature of the product, and therefore is not
	generally supported.
	
	MORE INFORMATION
	================
	
	The following project code example calls a FORTRAN DLL, which in turn calls a C
	DLL. Upon returning to the FORTRAN main program, the C DLL is called again.
	
	Description of the Files that Make Up the Project
	-------------------------------------------------
	
	  File           Description
	  ----           -----------
	  CC.CMD         Command file to create C DLL, FORTRAN DLL, and MAIN.EXE
	  MAIN.FOR       Main FORTRAN program
	  MYSUB.FOR      FORTRAN source code for FORTRAN DLL
	  MYFORT.DLL     FORTRAN DLL
	  MYFORT.DEF     Definitions file containing exports for C DLL
	  MYFORT.LIB     Import library resulting from MYC.DEF
	  C.C            C source code for C DLL
	  MYC.DLL        C DLL
	  MYC.DEF        Definitions file containing exports for C DLL
	  MYC.LIB        Import library resulting from MYC.DEF
	  LLIBCDLL.LIB*  Import library for static-linked C run-time library
	  LLIBCE.LIB*    Static C run-time library
	  FRTEXE.OBJ*    Startup code to be linked with (for using FORTRAN DLLs)
	  FRTDLL.OBJ*    Startup code to be linked in all user-written DLLs
	  FRTLIB.DLL     FORTRAN run-time DLL (previously created by the user)
	  FRTLIB.LIB     Imports library corresponding to FORTRAN run-time DLL
	                 (previously created by the user)
	
	* Shipped with either FORTRAN 5.1 or C 6.0. The rest of the files listed above
	are either created by the command file CC.CMD, or are listed below.
	
	Command File and Source Code for the Project
	--------------------------------------------
	
	  MAKEFILE     Makefile to create C DLL, FORTRAN DLL, and MAIN.EXE
	
	  all: myfort.dll myc.dll main.exe
	
	  myfort.lib: myfort.def
	   implib myfort.lib myfort.def
	
	  myc.lib: myc.def
	   implib myc.lib myc.def
	
	  mysub.obj: mysub.for
	   fl /c /Zi /Od /MD mysub.for
	
	  myfort.dll: mysub.obj myc.lib
	   link mysub frtdll,myfort.dll,nul,/co /nod frtlib myc os2,myfort.def
	   copy myfort.dll c:\os2\dll
	
	  c.obj: c.c
	   cl /c /Zi /Od /AL /MD c.c
	
	  myc.dll: c.obj myfort.lib
	   link c,myc.dll,nul,/co /nod llibcdll os2,myc.def
	   copy myc.dll c:\os2\dll
	
	  main.obj: main.for
	   fl /c /Zi /Od /MD main.for
	
	  main.exe: main.obj myfort.lib myc.lib
	    link main frtexe,main,nul,/co /nod frtlib os2 myfort myc;
	
	  MAIN.FOR:   Main FORTRAN program:
	  c---------------------------------
	        interface to subroutine subtest[c]
	        end
	
	        integer*4 ii
	        write(*,*) 'this is from the main program'
	        call dllsub(ii)
	        write(*,*) 'this is after the call ',ii
	        write(*,*) 'calling the c dll'
	        call subtest
	        write(*,*) 'back from the c dll'
	        end
	  c----------------------------------
	
	  MYSUB.FOR:  FORTRAN source code for FORTRAN DLL:
	  c-----------------------------------
	        interface to subroutine subtest [c] ()
	        end
	
	        subroutine dllsub [loadds] (ii)
	        integer*4 ii
	
	        ii = 2.0
	        write(*,*) 'this is from myfort.dll'
	        call subtest()
	        end
	  c------------------------------------
	
	  MYFORT.DEF: Definitions file containing exports for C DLL:
	  ;------------------------------------
	  LIBRARY MYFORT INITINSTANCE
	  DATA MULTIPLE
	  PROTMODE
	  EXPORTS
	     DLLSUB
	  ;------------------------------------
	
	  C.C:        C source code for C DLL.
	  /*-----------------------------------*/ 
	  #include <stdio.h>
	  void _loadds _export subtest()
	
	  {
	    int n,i;
	    n = 6;
	    i = 8;
	
	    printf("\nthis is a test in c\n");
	    printf("\n n is %d  i is %d",n,i);
	   }
	  /*-----------------------------------*/ 
	
	  MYC.DEF:    Definitions file containing exports for C DLL.
	  ;------------------------------------
	  LIBRARY MYC INITINSTANCE
	  DATA MULTIPLE
	  PROTMODE
	  EXPORTS
	        _subtest
	  ;------------------------------------
	
	Additional query words: nofps kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510OS2
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
