---
layout: page
title: "Q104861: FORTRAN PowerStation README.TXT: Linker, Library, VWB"
permalink: /kb/104/Q104861/
---

## Q104861: FORTRAN PowerStation README.TXT: Linker, Library, VWB

	Article: Q104861
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is from parts 3, 4, and 5 of the Microsoft FORTRAN
	PowerStation README.TXT file located in the \F32\README directory.
	
	  Part 3: Using the LINK32 Linker
	  Part 4: Using the Run-Time Library
	  Part 5: Using FORTRAN Visual Workbench
	
	MORE INFORMATION
	================
	
	Part 3: Using the LINK32 Linker
	-------------------------------
	
	Notes on Changes in File Formats
	--------------------------------
	
	The FORTRAN PowerStation 1.0 compiler produces 32-bit COFF object
	files. The FORTRAN 5.1 compiler produces 16-bit OMF object files.
	These file formats are not compatible, and therefore you cannot link
	OMF object files with COFF object files.
	
	Debugging Unresolved External References
	----------------------------------------
	
	If the linker reports an unresolved external name, and the routine
	does exist in your code, you should check its parameter list. The
	number following the "@" in the name given in the link error indicates
	the number of bytes in the parameter list of the calling statement.
	Verify that the calling statement and the subprogram declaration agree
	in their number and types of arguments.
	
	Naming the Executable File Produced by LINK32
	---------------------------------------------
	
	In order to use the FL32 command to compile and link in one step and
	to give the resulting executable file a specific name, use the /Fe
	option as in the following command line:
	
	  FL32 TEST.FOR /FeMYTEST
	
	This will result in an executable file called MYTEST.EXE. The command
	line
	
	  FL32 TEST.FOR /link -out:MYTEST.EXE
	
	will result in the following error:
	
	  Fatal error: Cannot open input file -- File not found "test.exe"
	
	This is caused by the binding process failing to find the executable
	with the changed name. If the executable is then run, it will generate
	the error
	
	  This program cannot be run in DOS mode.
	
	because it was not bound. Using the command
	
	  BINDMSF MYTEST.EXE
	
	will correct this problem.
	
	Getting Help from the MS-DOS Command Line
	-----------------------------------------
	
	To get the syntax for LINK32 help, type:
	
	  LINK32 -HELP
	
	To get the syntax for LINK32 LINK options, type:
	
	  LINK32
	
	To get the syntax for LINK32 LIB options, type:
	
	  LINK32 -LIB
	
	To get the syntax for LINK32 DUMP options, type:
	
	  LINK32 -DUMP
	
	Part 4: Using the Run-Time Library
	----------------------------------
	
	Floating-Point Coprocessor Limitation
	-------------------------------------
	
	Some older 80386 systems have 287 coprocessors instead of 387s; some
	floating-point operations will not work correctly in these cases. To
	fix this, you must force use of the floating-point emulator by setting
	the TNT environment variable as follows. At the MS-DOS (or MS-DOS
	session) command line, enter "SET TNT=-FPEM" before running your
	compiled program. To cancel the forced emulation, you can enter "SET
	TNT=-NOFPEM".
	
	Floating-Point Options
	----------------------
	
	Earlier versions of Microsoft FORTRAN had a variety of floating-point
	options:
	
	- Emulator
	- Coprocessor only
	- Alternate math
	
	FORTRAN PowerStation detects the presence of a coprocessor and will
	use it if it is present. Otherwise, it will emulate the floating-point
	coprocessor.
	
	Floating-Point Exceptions and Run-Time Math Exceptions
	------------------------------------------------------
	
	The following table shows the default behavior for floating-point
	exceptions and run-time math exceptions. Entries in the table are:
	
	  0.          A value of zero
	  (value)     The value resulting from the operation
	  1#INF       IEEE infinity
	  1#IND       IEEE NaN (Invalid)
	  M6nnn       Run-time error number M6nnn
	
	When one of the values 0., (value), 1#INF, or 1#IND occurs, the
	program continues to run. When a run-time error (M6nnn) occurs, the
	program stops after reporting the error. The behavior depends on which
	compiler option you specify and whether you use the default run-time
	function MATHERRQQ or replace it.
	
	                            Compiler Option and Resulting
	                             Default Exception Behavior
	
	                                   Compiler Option
	
	                       (none)      /Op       /Ox /Op    /Ox
	Exception               --------------------------------------
	---------
	(FP exceptions)
	invalid                 M6101       M6101     M6101      M6101
	denormalized            (value)     (value)   (value)    (value)
	zerodivide              M6103       M6103     M6103      M6103
	overflow                M6104       M6104     M6104      M6104
	underflow               0.          0.        0.         0.
	inexact                 (value)     (value)   (value)    (value)
	
	(Math exceptions)
	domain                  M6201       M6201     M6201      (undefined)
	singular                M6202       M6202     M6202      (undefined)
	overflow                M6203       M6203     M6203      (undefined)
	total loss of precision M6205       M6205     M6205      (undefined)
	
	This behavior results from the default call of SETCONTROLLFPQQ (done
	by the run-time library when your program starts) that includes the
	exception control flags
	
	  FPCW$DENORMAL + FPCW$UNDERFLOW + FPCW$INEXACT
	
	and the inclusion of the default run-time subroutine MATHERRQQ. (The
	behavior of math exceptions for /Ox is undefined; either an IEEE value
	results or a run-time error occurs.)
	
	If you want behavior consistent with IEEE precision and exception
	handling, compile with /Op and explicitly call SETCONTROLFPQQ with all
	exception control flags:
	
	  FPCW$INVALID + FPCW$DENORMAL + FPCW$ZERODIVIDE +
	  FPCW$OVERFLOW + FPCW$UNDERFLOW + FPCW$INEXACT
	
	In addition, you must link a replacement subroutine MATHERRQQ that
	just returns a successful return code. The next table shows the IEEE
	behavior that results.
	
	                       IEEE Precision and Exception Behavior
	
	                              /Op + Flags + MATHERRQQ
	Exception                      ------------------------
	---------
	(FP exceptions)
	invalid                             1#IND
	denormalized                        (value)
	zerodivide                          1#INF
	overflow                            1#INF
	underflow                           0.
	inexact                             (value)
	
	(Math exceptions)
	domain                              1#IND
	singular                            1#IND
	overflow                            1#INF
	total loss of precision             0.
	
	The sample programs include a program SPECIAL.FOR that illustrates
	tailoring the floating-point environment to be the closest possible to
	IEEE. It calls SETCONTROLFPQQ with the appropriate flags and provides
	a replacement MATHERRQQ.
	
	Part 5: Using FORTRAN Visual Workbench
	--------------------------------------
	
	Fonts used in FORTRAN Visual Workbench
	--------------------------------------
	
	FORTRAN Visual Workbench will only allow screen fonts. Most simulated
	fonts cannot be displayed. Therefore, many boldface fonts are not
	available. All TrueType fonts, bold and italic, can be used.
	Occasionally the caret will be positioned incorrectly for some bold or
	italic non-TrueType fonts. If you select a font and the caret is
	positioned incorrectly, chose a different font.
	
	Programs with Very Long Paths
	-----------------------------
	
	If a program has a very long path, then choosing Execute from the
	Project menu may bring up a message box titled "F32EXEC.PIF," which
	says that the program cannot be found, although the .EXE file was
	created and can be run outside of FORTRAN Visual Workbench.
	
	Time-Out Problems in FORTRAN Visual Workbench
	---------------------------------------------
	
	If you have time-out problems with FORTRAN Visual Workbench, check to
	see if WinExclusive=1 is in the 386enh section of SYSTEM.INI. If this
	is set and Windows has the focus, then Windows gets all the
	timeslices. (Therefore Wintee can't initialize an MS-DOS VM.)
	
	WinExclusive is set from the "Exclusive in Foreground" check box in
	Windows Control Panel, 386Enhanced. For FORTRAN Visual Workbench, the
	box should NOT be checked.
	
	Using Extended Characters in FORTRAN Visual Workbench
	-----------------------------------------------------
	
	Because FORTRAN Visual Workbench runs in Microsoft Windows and
	produces programs that run in MS-DOS, two distinct character sets are
	used: ANSI and OEM. The ANSI set is normally used in Windows; the OEM
	set is used in MS-DOS. Both character sets contain extended characters
	(such as accented letters and line-drawing symbols), but the numerical
	representation of these characters is different. Windows provides a
	special font called Terminal that uses the OEM character set. If you
	use extended characters in your files, you need to know about both.
	
	FORTRAN Visual Workbench is an ANSI editor; it does not convert
	characters to the OEM character set. If you want to see the true OEM
	characters, use the TERMINAL font. If you want to enter OEM
	characters, add a zero to the beginning of the character code. (For
	example, "ALT+0130" produces an accented "e"; typing "ALT+130"
	produces the ANSI character.) No translation is performed when files
	are loaded or saved. The editor displays the character representation
	of what was in the file. When a character is entered, it is translated
	to ANSI and saved as that value. This applies for all characters on
	the keyboard, including an e-accent on an international keyboard and
	an ALT+number entered from the numeric key pad. The only time a
	translation is not done is when an ALT+0+number is entered. When
	looking at a file from MS-DOS, you will get the OEM representation of
	the characters.
	
	Microsoft recommends that you do not use extended characters in
	filenames.
	
	The sample program GRDEMO in the ..\F32\SAMPLES\DEMO directory uses
	extended characters to produce a boxed menu on the screen. The file
	MENU.FOR uses extended characters to draw a box around the menu. The
	line characters display as such only if the font is set to Terminal.
	
	Sample Programs in Book, Help, and Disk
	---------------------------------------
	
	Some of the sample programs on the distribution disks are newer
	versions than those that appear in the "Language Guide."
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
