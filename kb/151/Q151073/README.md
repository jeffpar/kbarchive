---
layout: page
title: "Q151073: Frequently Asked Questions for Fortran PowerStation 32"
permalink: kb/151/Q151073/
---

## Q151073: Frequently Asked Questions for Fortran PowerStation 32

	Article: Q151073
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbCompiler kbFL32 kbFortranPS kbLangFortrankbfaq
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation 32 for Windows NT and Windows 95, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of Frequently Asked Questions (FAQs) about Microsoft
	Fortran PowerStation.
	
	MORE INFORMATION
	================
	
	Q. Can I install Fortran PowerStation on a network?
	
	A. Yes, you can. Instructions for installing and administering Fortran
	PowerStation on a network are located in the file \FPSSETUP\NETWORK.BAT. Network
	installation is only possible with the Fortran PowerStation CD.
	
	Q. When I uninstall the product using the Remove All option, why does the
	FPSSetup directory remain in the Fortran PowerStation program group in Windows
	NT 3.51?
	
	A. Uninstall does not remove the FPSSetup directory on Windows NT 3.51. This is
	the way the setup works. The SETUP.EXE file itself is deleted properly, but not
	the \FPSSETUP directory.
	
	Q. Can I create a change or create a new project type based on an existing
	project?
	
	A. If you have a project of one type, such as a console application, and you want
	to change it to another type, such as QuickWin, you must start over. The same
	applies if you have a project that you want to use as the basis for another
	similar project of a different type.
	
	Q. How do the keywords get colored in Microsoft Developer Studio?
	
	A. By design, the keywords are colored without any knowledge of context.
	Microsoft Developer Studio has no compiler parser. For example, if you have a
	variable with the name "end", it will be colored because there is a valid
	statement with the same name.
	
	Q. Is syntax code coloring available for user-defined types?
	
	A. No, the code coloring is not available for user-defined data types.
	
	Q. Can I save the Watch or Variables windows in the debugger?
	
	A. In the past you were able to save the various windows that the debugger used
	as files. You can no longer do this with the Watch and Variables windows.
	However, you can copy the content to the Clipboard and paste it in a file.
	
	Q. How can I debug assumed-size arrays?
	
	A. When you display an assumed-size array, it expands to display the first
	element of the left-most index. If, for example, you have an array A(3), you
	only see A(1) in the array expansion in the Watch, Quickwatch, and Variables
	windows. If, on the other hand, you have a multidimensional array such as
	A(2,2,2) when it is expanded, you see A(1,1,1), A(2,1,1), A(1,2,1), A(2,2,1).
	Assumed-size arrays have many restrictions on them in source code. If you want
	to look at the rest of the array, you need to use the Memory window.
	
	Q. If you have a DO loop and set a breakpoint on the DO line, the breakpoint only
	stops the first time through when debugging. For example, if I said DO N=1,100,
	I would expect to stop on the line 100 times, yet I only stop there once. Why
	does this occur?
	
	A. A debug source line consists of zero or more assembly lines. When you set a
	breakpoint on a source line, a breakpoint is set on the first instruction in a
	group of assembly instructions. A simple DO loop consists of about a dozen
	assembly lines. The first half sets up the variables and the last half
	decrements the variables and checks for loop termination. When you set a
	breakpoint on the source line, you are actually setting a breakpoint on the
	initialization code. If you step through this in disassembly mode you can follow
	what is happening. If you want to set a breakpoint that stops at each loop
	iteration, you can do one of the following:
	
	- Set the breakpoint on the first source line inside the DO loop.
	
	- or -
	
	- Select Disassembly from the View menu after the debugger has been started,
	  and set the breakpoint on the loop code.
	
	Q. If the exception for floating divide-by-zero is set at "Stop if not handled"
	in the Debug\Exceptions menu, the debugger does not stop even if divide-by-zero
	is not handled. It does stop if "Stop always" is selected. Why?
	
	A. The floating point divide-by-zero, and, in general, all floating point errors,
	are handled by the system with the response of terminating whatever is causing
	the error unless told otherwise. The debugger stops only if "Stop always" is
	selected in Debug\Exceptions menu. This behavior is by design.
	
	Q. If I type the name of a common block into the Watch window, I get an "Invalid
	debug info" error. If I put slashes (/) around it, I get a syntax error. Why?
	
	A. This is a known problem. You can watch common block local variables in the
	Variables window. Common block variables that are not local cannot be watched.
	
	Q. When I try to use PRINT * within InitialMenu, I get an error message. For
	example: "An application error has occurred and an application error log is
	being generated. Exception: access violation (0xc0000005), Address: 0x004100d8"
	is returned and the program crashes.
	
	        INCLUDE 'FLIB.FI'
	        INCLUDE 'FLIB.FD'
	        PRINT*, 'Test'
	        END
	
	        LOGICAL*4 FUNCTION InitialMenu
	        INCLUDE 'FLIB.FD'
	        print*, 'Test'
	        InitialMenu = .TRUE.
	        END
	
	A. The problem is that the connection between QuickWin and the I/O system isn't
	there yet. Writing to an external file does work. InitialMenu should not attempt
	to alter any QuickWin windows through I/O, graphics routines, OPENs, and
	others.
	
	Q. Can an erroneous mouse callback interface be flagged?
	
	A. No. The compiler cannot detect errors caused by mismatches in the number or
	types of the arguments to callback routines.
	
	Q. Does the PEEKCHARQQ work in standard graphics or in a QuickWin application?
	
	A. No. This is a known limitation. PEEKCHARQQ does not work in standard graphics
	or in QuickWin applications.
	
	Q. GETGTEXTEXTENT sometimes returns values greater than I expect. Why?
	
	A. When the argument to GETGTEXTEXTENT is a variable, any trailing spaces are
	included in the calculation.
	
	Q. Is there a run-time function that returns a size of a type? Some of the Win32
	API's need this information.
	
	A. No. But you can get the information using the LOC function, as follows:
	
	        type mytype
	           integer a
	           real b
	        end type
	        type (mytype) dummyarray(2)
	        integer size
	        size= loc(dummyarray(2)) - loc(dummyarray(1))
	        print*, size
	
	Q. Why does the following code compile and execute under Fortran PowerStation 1.0
	but generates a compiler error message when compiled with Fortran PowerStation
	4.0?
	
	The error occurs when a function is declared with a varname*length, but a regular
	variable is okay when it is declared that way.
	
	        INTEGER I*4   !This is okay
	        END
	
	        INTEGER FUNCTION X()*4   !This causes a compilation error
	        END
	
	A. This is a known problem in Fortran PowerStation version 4.0. Avoid the
	varname*length expression with the function declaration.
	
	Q. Why does the RETURN statement cause a compiler error in a main Avoid program?
	
	The following code compiles cleanly under Fortran PowerStation 1.0 but generates
	a compilation error under PowerStation 4.0. This error occurs because of the use
	of the RETURN statement in the main program.
	
	       i=1
	       RETURN   !This line produces a compilation error
	       END
	
	A. This is a known problem in Fortran PowerStation 4.0. To avoid the "Avoid the
	error" message, remove the RETURN statement from the main Avoid program.
	
	Q. Can I reference a program unit that contains a BLOCK DATA statement with an
	EXTERNAL statement? For example:
	
	        block data MyFunc
	        common /g/ i
	        data i /1/ 
	        end
	
	A. Fortran does not generate an external for the block data name for the previous
	example "_MyFunc" in the .obj file. This feature might be useful when sharing
	the DLL data. See the Readme section in Books Online for more information.
	
	Q. I have a directory drive with a name that is just one letter long and the
	Command fl32 /? doesn't work. Why?
	
	A. If you have a single-letter directory on your drive, then the fl32 driver
	program picks it up and thinks that it is a flag. For example:
	
	  Command line warning D2009: unrecognized flag /F ignored.
	  Command line warning D2009: unrecognized flag /L ignored.
	  Command line error D2003: missing source filename
	
	If you have a root directory with a name that is one character long, then "fl32
	/?" gives you an error like those above instead of giving you the Help page. Use
	"fl32 -?" as a workaround.
	
	Q. How can I get help regarding Windows API's?
	
	A. If you are using the CD-ROM version of Fortran PowerStation 4.0, you can gain
	access to Help for Windows API's by selecting Open Information Title from the
	Help menu in Microsoft Developer Studio, and then choosing the Win32 Software
	Development Kit title. You can also click the InfoViewer toolbar in Microsoft
	Developer Studio to open this title.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbsetup kbCompiler kbFL32 kbFortranPS kbLangFortran kbfaq
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32400NT
	Version           : :4.0
	
	=============================================================================
	
