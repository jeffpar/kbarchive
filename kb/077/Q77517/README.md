---
layout: page
title: "Q77517: Creating the FORTRAN Run-Time DLL and User DLL for OS/2"
permalink: kb/077/Q77517/
---

## Q77517: Creating the FORTRAN Run-Time DLL and User DLL for OS/2

	Article: Q77517
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
	
	This article describes how to create the FORTRAN run-time DLL (dynamic-linked
	library) for OS/2 and how to create a user-written DLL for OS/2.
	
	The following files are referenced in this article:
	
	Filename      Description
	--------      ------------
	
	LLIBFMT.LIB   FORTRAN static, self-contained run-time library for
	             multithread support.
	
	OS2.LIB       Library to support OS/2 calls.
	
	FDLLOBJS.LIB  Object files from FORTRAN run-time library used to
	             create a dynamically linked FORTRAN run-time library.
	
	FDLLOBJS.DEF  Definitions file containing entry points to the FORTRAN
	             run-time library.
	
	FRTEXE.OBJ    Startup code for FORTRAN run-time to be linked with all
	             executables using FORTRAN DLLs.
	
	FRTDLL.OBJ    Startup code for user-written FORTRAN DLL to be linked
	             with all user DLLs.
	
	FRTLIB.OBJ    Startup code for the FORTRAN run-time DLL, to be linked
	             when creating FORTRAN run-time DLL.
	
	* FRTLIB.DLL  Full FORTRAN run-time dynamic-linked library created by
	             the user.
	
	* FRTLIB.LIB  Resulting import library from full FORTRAN run-time
	             library containing all FORTRAN run-time imports to the
	             executable.
	
	DIFFHLP.DEF   Support definitions file to create an import library
	             for a dynamic-linked FORTRAN run-time library.
	
	* Not shipped with FORTRAN, created by the user.
	
	MORE INFORMATION
	================
	
	Creating the FORTRAN Run-Time DLL
	---------------------------------
	
	1. Create a definitions file listing all desired exports to the FORTRAN run-time
	  library. For the full run-time library support, just use the file
	  FDLLOBJS.DEF shipped with FORTRAN 5.1.
	
	2. Create an imports library to correspond to the above definitions file. This
	  can be done by using IMPLIB on the above definitions file. For the full
	  run-time library support, just use the file FDLLOBJS.LIB shipped with FORTRAN
	  5.1.
	
	3. Create the FORTRAN run-time DLL (FRTLIB.DLL) by linking the above imports
	  library with the DLL startup code (FRTLIB.OBJ), and the definitions file
	  created in step 1. The following command line should be used to link the
	  FORTRAN run-time DLL:
	
	  link FRTLIB.OBJ,FRTLIBDLL,,FDLLOBJS.LIB/NOE,FDLLOBJS.DEF
	
	4. Create the corresponding imports library to the FORTRAN run-time DLL
	  (FRTLIB.LIB). This import library will contain references to the run-time
	  external functions needed by the executable. The following command line
	  should be used to create the import library:
	
	  implib FRTLIB.LIB FDLLOBJS.DEF DIFFHLP.DEF
	
	Creating a User-Written DLL to Be Linked to a Main Program
	----------------------------------------------------------
	
	The files referenced below are shipped with Microsoft FORTRAN version 5.10, see
	the packing list for their exact locations.
	
	1. Create a subroutine or function to be added to the user written
	  dynamic-linked library. All functions that are available from the calling
	  program need to have the [loadds] attribute on their definition. The file
	  example for this is called FMTDLL.FOR.
	
	2. Create a definitions file for the DLL containing exports into the DLL. The
	  file example for this is FMTDLL.DEF.
	
	3. Create a main program containing a call to the subroutine or function in the
	  DLL. The program example for this is FMTMAIN.FOR.
	
	4. Create a definitions file for the main program, containing imports to DLL
	  routines. See FMTMAIN.DEF for an example of this file.
	
	5. Produce the main program executable (FMTMAIN.EXE) by linking with the FORTRAN
	  run-time DLL imports library (FRTLIB.LIB), the startup code for all DLL
	  executables (FRTEXE.OBJ), and the main program's definition file
	  (FMTMAIN.DEF). The following command line should used to compile the FORTRAN
	  main program source code:
	
	  fl /MD FMTMAIN.FOR FRTEXE.OBJ FRTLIB.LIB FMTMIN.DEF
	
	6. Create the user-written DLL by linking its subroutines (FMTDLL.FOR) with its
	  definitions file (FMTDLL.DEF), the startup code for all user-written FORTRAN
	  DLLs (FRTDLL.OBJ), and the FORTRAN dynamic-linked run-time library
	  (FRTLIB.LIB). The following command line should be used to compile the
	  FORTRAN DLL source code:
	
	  fl /MD /FeFMTDLL.DLL FMTDLL.FOR FRTDLL.OBJ FRTLIB.LIB FMTDLL.DEF
	
	7. Put all DLLs in a directory within the OS/2 LIBPATH (FMTDLL.DLL, FRTLIB.DLL)
	  and run the executable.
	
	Additional query words: kbinf nofps 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510OS2
	Version           : :5.1
	
	=============================================================================
	
