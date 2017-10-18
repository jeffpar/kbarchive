---
layout: page
title: "Q133104: FORTRAN PowerStation 32 MIXLANG.TXT"
permalink: kb/133/Q133104/
---

## Q133104: FORTRAN PowerStation 32 MIXLANG.TXT

	Article: Q133104
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangC kbLangFortran kbVC
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is from the Microsoft FORTRAN PowerStation 32
	MIXLANG.TXT file located in the \FPSNT\README directory.
	
	This file has three parts:
	
	   Part      Contents
	   ----      --------
	     1       Building C projects
	     2       Building FORTRAN projects
	     3       Using DLLs with Mixed Languages
	
	MORE INFORMATION
	================
	
	Part 1: Building C Projects 
	---------------------------
	
	You can build C projects using FORTRAN code in the C++ Visual Workbench. Compile
	your FORTRAN code one of the following ways:
	
	1. Using the FL32 command on the command line.
	
	2. Compiling within FORTRAN Visual Workbench.
	
	3. Using a makefile in C++ Visual Workbench.
	
	Use the FORTRAN compiler option /c to suppress linking.
	
	Include your FORTRAN object (.OBJ) and static library (.LIB) files by listing
	them in the Files in Project box on the Project menu.
	
	Run-time libraries must support the FORTRAN code integrated into the C project.
	You can access the correct versions through the following steps:
	
	1. From the Options menu, choose Directories. In the Library Files Path box,
	  insert as the first item the directory path containing the FORTRAN versions
	  of the C run-time libraries. This assures that the correct versions of
	  libc.lib, libcmt.lib, and msvcrt.lib will be loaded by the linker. The
	  typical item list should begin with c:\fpsnt\lib;... .
	
	2. From the Options menu, choose Project. In the new menu, choose Linker
	  Options. Under Category Setting: Input, in the Object\Library Modules box,
	  type libf.lib and console.lib.
	
	  If you are using the Win32 System Development Kit, make certain that directory
	  MSTOOLS\BIN from the Win32 SDK does not appear before MSVCNT\BIN or FPSNT\BIN
	  in the executables directory path; otherwise LINK32 from SDK will be
	  inappropriately picked up instead of LINK.
	
	Part 2: Building FORTRAN Projects 
	---------------------------------
	
	Passing Strings to C
	--------------------
	
	The following sample code illustrates passing strings from FORTRAN to C and back
	using the C convention and using _stdcall. In the first case, the string is
	terminated in FORTRAN with the C terminator (\n). In the second case, a standard
	FORTRAN string is passed, and the C program must allow for the hidden length
	integer at the end of the string. You can copy this code to the Clipboard and
	paste it into your files.
	
	  CC    FSTR_F.FOR    FORTRAN MAIN PROGRAM
	  CC
	        INTERFACE TO SUBROUTINE Ucase1 [C,ALIAS:'_Ucase1'] (text)
	        CHARACTER*(*) text
	        END
	        INTERFACE TO SUBROUTINE Ucase2 [ALIAS:'_Ucase2@8'] (text)
	        CHARACTER*(*) text
	        END
	
	        CHARACTER*40 string1,string2
	        DATA string1 /'This is a null-terminated string.'C/ 
	        DATA string2 /'This is a standard Fortran string.'/ 
	
	        WRITE (*, *) string1
	        CALL Ucase1 (string1)
	        WRITE (*, *) string1
	
	        WRITE (*, *) string2
	        CALL Ucase2 (string2)
	        WRITE (*, *) string2
	
	        END
	
	  //    FSTR_C.C    C Subprograms       Make strings uppercase
	  // 
	  #include <ctype.h>
	
	  void Ucase1( char *string )
	  {
	      char *ptr;
	
	      for (ptr = string; *ptr; ptr++)
	          *ptr = toupper( *ptr );
	  }
	
	  void __stdcall Ucase2( char *string, int length )
	  {
	      char *ptr;
	
	      for (ptr = string; *ptr; ptr++)
	          *ptr = toupper( *ptr );
	  }
	
	Part 3: Using DLLs with Mixed Languages 
	---------------------------------------
	
	The following programs are examples of mixed C and FORTRAN programs using DLLs
	where the main program is in one language and the DLL is in the other. The
	examples communicate data between the main program and the DLL through a common
	data structure (a FORTRAN common block and a C structure).
	
	Redirecting the output of a mixed-language DLL program can produce unexpected
	results due to the different I/O buffering performed by the C and FORTRAN
	run-time libraries.
	
	These samples can be copied to the Clipboard and pasted into a file to use as
	examples and templates for this type of program.
	
	Case 1. A FORTRAN Main Program calls a C DLL
	--------------------------------------------
	
	  CC    FORTRAN MAIN PROGRAM
	  CC
	        INTERFACE TO SUBROUTINE csub [C,ALIAS:'_csub']()
	        END
	
	        INTEGER i
	        REAL x
	        CHARACTER*4 s
	        COMMON /BRIDGE[dllimport]/ i, x, s
	        i = 1
	        x = 2.5
	        s = 'fail'
	        WRITE(*,'(5X,A)')       'before calling dll '
	        WRITE(*,'(5X,A,I5)')    'i = ', i
	        WRITE(*,'(5X,A,F4.2)')  'x = ', x
	        WRITE(*,'(5X,A,A)')     's = ', s
	        CALL csub()
	        WRITE(*,'(5X,A)')       'after calling dll '
	        WRITE(*,'(5X,A,I5)')    'i = ', i
	        WRITE(*,'(5X,A,F4.2)')  'x = ', x
	        WRITE(*,'(5X,A,A)')     's = ', s
	        END
	
	  //    C DLL Subprogram
	  // 
	  #include <stdio.h>
	  #include <string.h>
	  #define DLLexport _declspec(dllexport)
	
	  DLLexport void csub();
	
	  DLLexport struct {
	     int i;
	     float x;
	     char s[4];
	  } BRIDGE;
	
	  void csub()
	  {
	     BRIDGE.i = BRIDGE.i + 1;
	     BRIDGE.x = BRIDGE.x + 1.5F;
	     strcpy(BRIDGE.s, "pass");
	     printf("\n\n%s\n%s%d\n%s%f\n%s%s\n",
	           "in the dll",
	           "i = ", BRIDGE.i,
	           "x = ", BRIDGE.x,
	           "s = ", BRIDGE.s);
	  }
	
	  Output redirected to a file:
	
	  Before calling dll:
	  i =     1
	  x = 2.50
	  s = fail
	
	  After calling dll:
	  i =     2
	  x = 4.00
	  s = pass
	
	  Output in the dll:
	  i = 2
	  x = 4.000000
	  s = pass
	
	Case 2. A C Main Program calls a FORTRAN DLL
	--------------------------------------------
	
	  //    C Main Program
	  // 
	  #include <stdio.h>
	  #include <string.h>
	  #define DLLimport _declspec(dllimport)
	
	  extern void _stdcall FSUB ();
	
	  extern DLLimport struct {
	     int i;
	     float x;
	     char s[4];
	  } BRIDGE;
	
	  void main(){
	     BRIDGE.i = 1;
	     BRIDGE.x = 2.5F;
	     strcpy(BRIDGE.s, "fail");
	     printf("\n\n%s\n%s%d\n%s%f\n%s%s\n",
	           "before calling dll", "i = ", BRIDGE.i,
	           "x = ", BRIDGE.x,
	           "s = ", BRIDGE.s);
	     FSUB();
	     printf("\n\n%s\n%s%d\n%s%f\n%s%s\n",
	           "before calling dll", "i = ", BRIDGE.i,
	           "x = ", BRIDGE.x,
	           "s = ", BRIDGE.s);
	  }
	
	  CC    FORTRAN DLL SUBROUTINE
	  CC
	        SUBROUTINE FSUB[dllexport]()
	        COMMON /BRIDGE[dllexport]/ i, x, s
	        INTEGER i
	        REAL x
	        CHARACTER*4 s
	        i = i + 1
	        x = x + 1.5
	        s = 'pass'
	        WRITE(*,*)
	        WRITE(*,'(5X,A)')       'in the dll '
	        WRITE(*,'(5X,A,I5)')    'i = ', i
	        WRITE(*,'(5X,A,F4.2)')  'x = ', x
	        WRITE(*,'(5X,A,A)')     's = ', s
	        END
	
	  Output redirected to a file:
	
	  In the dll:
	  i =     2
	  x = 4.00
	  s = pass
	
	  Before calling dll:
	  i = 1
	  x = 2.500000
	  s = fail
	
	  After calling dll:
	  i = 2
	  x = 4.000000
	  s = pass
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangC kbLangFortran kbVC 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
