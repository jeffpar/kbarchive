---
layout: page
title: "Q89132: How to Run a Program from Within a QuickWin Program"
permalink: kb/089/Q89132/
---

## Q89132: How to Run a Program from Within a QuickWin Program

	Article: Q89132
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN for Windows, version 5.1 
	-------------------------------------------------------------------------------
	
	Microsoft FORTRAN version 5.1 QuickWin programs can spawn other
	programs while running under Windows by using the Windows API function
	WinExec(). The spawned programs can be MS-DOS- or Windows-based
	applications.
	
	Because Windows is a multitasking system, the spawning program may
	terminate before the spawned programs finish their task. It is
	possible to wait for termination of a spawned process by using the
	GetModuleUsage() Windows API function.
	
	WinExec() can also be used to emulate the system() function by
	spawning MS-DOS COMMAND.COM. It is recommended to use a program
	information file (PIF) when spawning any MS-DOS executable such as
	COMMAND.COM.
	
	MORE INFORMATION
	================
	
	WinExec() returns an integer value greater than 32 if successful. If
	unsuccessful, it returns of the following codes:
	
	   0 - The system was out of memory, or the executable file was
	      corrupt, or relocations were invalid.
	  2 - The file was not found.
	  3 - The path was not found.
	  5 - An attempt was made to dynamically link to a task, or
	      there was a sharing or network protection error.
	  6 - The library required separate data segments for each task.
	 10 - The Windows version was incorrect.
	 11 - The executable file was invalid. It was either not a
	      Windows-based application or there was an error in the .EXE
	      image.
	 12 - The application was designed for OS/2.
	 13 - The application was designed for MS-DOS 4.0.
	 14 - The type of executable file was unknown.
	 15 - An attempt was made to load a real-mode application
	      (developed for an earlier version of Windows).
	 16 - An attempt was made to load a second instance of an
	      executable file containing multiple data segments that
	      were not marked "read-only."
	 17 - Attempt in large-frame EMS mode to load a second instance
	      of an application that links to certain non-shareable
	      DLLs already in use.
	 18 - Attempt in real mode to load an application marked for
	      protected mode only.
	
	Under Windows 3.1 the WinExec() function may also return the following codes:
	
	  8 - There was insufficient memory to start the application.
	 19 - An attempt was made to load a compressed executable file.
	      The file must be expanded before it can be loaded.
	 20 - The DLL file was invalid. One of the DLLs required to run
	      this application was corrupt.
	 21 - The application requires Microsoft Windows 32-bit
	      extensions.
	
	Also note that under Windows, 3.1 the return codes 17 and 18 have been
	eliminated.
	
	WinExec() may be unsuccessful if the QuickWin program tries to run an MS-DOS
	application directly. If the file to be run is a non-Windows file, you should
	create a program information file (PIF) to run it. For information about PIFs
	and how to create them, see the "Microsoft Windows User's Guide" for version
	3.1.
	
	The syntax of WinExec() is as follows:
	
	         INTERFACE TO INTEGER*2 FUNCTION WinExec [PASCAL]
	        + (lpCmdLine, nCmdShow)
	         CHARACTER*1 lpCmdLine [REFERENCE]
	         INTEGER*2   nCmdShow  [VALUE]
	         END
	
	The first argument, lpCmdLine, is the command line required to run the file. This
	must be a NULL terminated string, which may also contain command-line arguments
	for the program. If a path is not specified, WinExec() will look in the
	following directories: the working directory of the calling program, the WINDOWS
	directory, and finally in the WINDOWS\SYSTEM directory. If the program is a
	non-Windows .EXE, the PIF indicates the directory where it is located.
	
	The second argument, nCmdShow, indicates the initial state of the application's
	main window when it is created. This parameter can be one of the following
	numbers:
	
	  1   Start the application in a normal size window.
	  2   Start the application minimized. Show an icon at the
	      bottom of the screen.
	  3   Start the application in a maximized window.
	  4   Start the application but set the focus back to the
	      calling program.
	  7   Start the application minimized and set the focus back
	      to the calling program.
	
	If the nCmdShow option is set so that the spawned MS-DOS process does not retain
	the focus, it is imperative to create a PIF for the process that allows
	background processing. Otherwise, the MS-DOS process will start then suspend its
	processing, and the main program will also be suspended indefinitely waiting for
	the MS-DOS process to terminate.
	
	GetModuleUsage() returns the reference count of the module if the function is
	successful, and a zero if no instances of the module are found.
	
	The syntax of GetModuleUsage() is as follows
	
	        INTERFACE TO INTEGER*2 FUNCTION GetModuleUsage [PASCAL]
	       +  (hinst)
	        INTEGER*2 hinst [value]
	        END
	
	where hinst identifies the module or an instance of the module.
	
	Sample Code 1
	-------------
	
	The following code demonstrates how to use the WinExec() and GetModuleUsage()
	APIs from within a FORTRAN program. This code should be compiled and linked as a
	QuickWin Windows program. Note that the compiler option /MW0 is recommended to
	avoid having to access the YIELDQQ subroutine as a function.
	
	The program first executes a simple QuickWin program, then it calls COMMAND.COM
	to redirect a directory listing into a file. Finally, it calls a FORTRAN MS-DOS
	application.
	
	  MAINPROG.FOR
	
	        INTERFACE TO INTEGER*2 FUNCTION WinExec [PASCAL]
	       +  (lpCmdLine, nCmdShow)
	        CHARACTER*1 lpCmdLine [REFERENCE]
	        INTEGER*2   nCmdShow  [VALUE]
	        END
	
	        INTERFACE TO INTEGER*2 FUNCTION GetModuleUsage [PASCAL]
	       +  (hinst)
	        INTEGER*2 hinst [value]
	        END
	
	        INTERFACE TO INTEGER*2 FUNCTION WinExecPause
	       +  (progname, style)
	        CHARACTER*(*) progname      !C string
	        INTEGER*2 style
	        END
	
	        PROGRAM Sample_WINEXEC_API
	
	        integer*2 WinExecPause, ihandle
	        character*20 progname
	
	        progname = 'subprog1'c
	        ihandle = WinExecPause(progname, 1)  ! Start in normal mode
	
	        !Emulate DOS's system call.
	        !Use the dosprmpt PIF file.
	        ihandle = WinExecPause('dosprmpt.pif /c dir>dir.dat'C, 1)
	
	        progname = 'subprog2'c
	        ihandle = WinExecPause(progname, 1)
	        print*, 'Main Program terminated'
	
	        end               !End of Main()
	
	  C WinExecPause is a wrapper function for the WinExec function.
	
	        integer*2 function WinExecPause(progname, style)
	        character*(*) progname      !C string
	        integer*2 style
	        integer*2 WinExec, GetModuleUsage
	
	        WinExecPause = WinExec(progname, style)
	        if (WinExecPause .LE. 32) then
	            print *, 'Unable to run ',progname
	            return
	        endif
	
	        do while (GetModuleUsage(WinExecPause)) ! Wait
	            call YIELDQQ()
	        end do
	
	        end        !End of WinExecPause
	
	Sample Code 2
	-------------
	
	The following is the code for SUBPROG1.FOR, a small QuickWin program that will be
	spawned from the main QuickWin program:
	
	  SUBPROG1.FOR
	
	        PRINT *, 'Inside Exe 1 Program...hit ENTER to continue.'
	        READ (*, *)
	        END
	
	Sample Code 3
	-------------
	
	Here is the code for SUBPROG2.FOR, a small MS-DOS program spawned from the main
	QuickWin program:
	
	  SUBPROG2.FOR
	        PRINT *, 'Inside Exe 2 Program...hit ENTER to continue.'
	        READ (*, *)
	        END
	
	Project Makefile
	----------------
	
	  # Note that the file FL.DEF from the FORTRAN\BINB directory
	  # will have to be copied into the same directory as the
	  # source code.
	
	  ALL : MainProg.EXE SubProg1.EXE SubProg2.EXE
	
	  MainProg.EXE : MainProg.OBJ
	      Link MainProg.OBJ, , NUL, /NOD LLIBFEW, FL.DEF
	
	  SubProg1.EXE : SubProg1.OBJ
	      Link SubProg1.OBJ, , NUL, /NOD LLIBFEW, FL.DEF
	
	  SubProg2.EXE : SubProg2.OBJ
	      Link SubProg2.OBJ;
	
	  MainProg.OBJ : MainProg.FOR
	      FL /MW0 /c MainProg.FOR
	
	  SubProg1.OBJ : SubProg1.FOR
	      FL /MW /c SubProg1.FOR
	
	  SubProg2.OBJ : SubProg2.FOR
	      FL /c SubProg2.FOR
	
	Additional query words: kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbFORTRAN510QuickWin
	Version           : :5.1
	
	=============================================================================
	
