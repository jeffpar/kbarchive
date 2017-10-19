---
layout: page
title: "Q105934: FORTRAN PowerStation ERRORS.TXT"
permalink: /kb/105/Q105934/
---

## Q105934: FORTRAN PowerStation ERRORS.TXT

	Article: Q105934
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
	
	The following is an extract of the ERRORS.TXT file located in the \F32\README\
	directory of the Microsoft FORTRAN PowerStation installation.
	
	  Part 1    Compiler Error Messages
	  Part 2    LINK32 Error Messages
	  Part 3    LINK32 Warning Messages
	  Part 4    MS-DOS Extender Error Messages
	  Part 5    Floating-point Exception Error Messages
	  Part 6    Low Level Math Error Messages
	  Part 7    Run-time Library Error Messages
	
	MORE INFORMATION
	================
	
	Part 1: Compiler Error Messages
	-------------------------------
	
	F2202   subprogram: defined with different number of arguments
	-----
	The specified ENTRY, FUNCTION or SUBROUTINE statement was defined or used
	earlier in the program with a different number of arguments, or a Hollerith
	constant was used as an argument.
	
	F2625   subprogram: too many actual arguments
	-----
	The number of actual and formal arguments for the given subprogram did not
	match. This may also occur when passing CHARACTER arguments to a subprogram
	that is defined to receive non-character arguments. Passing CHARACTER
	arguments causes additional information to be passed which will cause too
	many actual arguments to be passed if the formal arguments are not declared
	to be of type CHARACTER.
	
	This practice is legal only when the C and VARYING attributes are specified
	for the subprogram.
	
	Part 2: LINK32 Error Messages
	-----------------------------
	
	LNK2120 number Undefined Externals
	-------
	The given number of external identifiers could not be resolved.
	This error is preceded by LINK32 warning LNK4516, once for each identifier.
	
	LNK2123 Can't convert object to Windows NT format
	-------
	A non-COFF object file could not be converted to COFF.
	
	This error is preceded by either LNK2199, which gives a specific CVTOMF
	error, or LNK4599, which gives a specific CVTOMF warning.
	
	LNK2126 Unknown switch name
	-------
	The specified name is not a valid LINK32 option. The LINK32 options are as
	follows:
	
	/DEBUG:{NONE|FULL}
	NONE Do not include debugging information.
	FULL Include all debugging information.
	
	/DEBUGTYPE:CV
	Create CodeView4-format debugging information.
	
	/FORCE
	Create executable file despite unresolved externals.
	
	/MAP[:filename]
	Create a map file, and optionally name it.
	
	/OUT:filename
	Specify a name for the executable file.
	
	/STACK:[reserve][,commit]
	Specify total (reserve) and allocated (commit) stack size.
	
	/VERSION:major[.minor]
	Write a version number in the executable-file header.
	
	LNK2131 No library file specified
	-------
	You ran LINK32 -LIB and specified /EXTRACT or /REMOVE, but you did not
	specify the name of a library (.LIB file).
	
	LNK2199 CVTOMF error : message
	-------
	A non-COFF object file could not be converted to COFF. The message gives
	the reason for the CVTOMF error. This error is followed by LNK2123.
	
	Other LINK32 Error Messages
	---------------------------
	LNK2102 Out of memory
	LNK2103 File filename not found
	LNK2104 Can't open file filename
	LNK2105 Can't close file filename
	LNK2106 Can't seek file to offset
	LNK2107 Can't read file at offset
	LNK2108 Can't write file at offset
	LNK2109 Can't remove file filename
	LNK2110 Can't rename file filename
	LNK2113 Not a valid object
	LNK2117 Syntax error in switch name
	LNK2122 string is an invalid keyword
	LNK2127 Library is corrupt
	LNK2129 WeakExtern identifier missing aux symbol
	LNK2130 Linker miscalc (base relocations off by number)
	LNK2133 Size mismatch for symbol identifier
	
	Part 3: LINK32 Warning Messages
	-------------------------------
	
	LNK4505 No modules extracted from libraryname
	-------
	You specified libraryname in the LINK32 -LINK command, but no references
	from that library were used by your program.
	
	LNK4514 Member module not found
	-------
	You ran LINK32 -LIB and specified /EXTRACT or /REMOVE, but the module was
	not in the library.
	
	LNK4516 identifier is undefined
	-------
	One of the following may be a cause:
	
	- The program or subprogram called a subprogram in different source files
	 with different numbers of arguments.
	
	- The program passed a character variable to a subprogram that expects a
	 noncharacter type, or vice versa. FORTRAN PowerStation passes a hidden
	 argument that contains the length of a string.
	
	LNK4527 CVPACK error
	-------
	An error occurred during conversion of the debugging information. The
	program will run but will not be able to be debugged. This error is
	preceded by a CVPACK error.
	
	LNK4599 CVTOMF warning : message
	-------
	A problem occurred during conversion of a non-COFF object file to COFF. The
	message gives the reason for the CVTOMF warning. The resulting executable
	file may not run.
	
	Other LINK32 Warning Messages
	-----------------------------
	
	LNK4501 No object files specified
	LNK4503 No linker member found
	LNK4504 Bad object - fixup not aligned
	LNK4506 symbol multiply defined, defined in objectfile
	LNK4507 Bad object - fixup to far
	LNK4508 Bad object - relocationtype is an unknown relocation address
	LNK4509 Bad object - unmatched PAIR relocation - ignored
	LNK4510 Invalid version number argument
	LNK4511 Unknown subsystem argument
	LNK4512 Found argument, expected i386, M68K, or mips
	LNK4513 Image size is imagesize, KEY specified maxsize max
	LNK4515 commitsize commit size larger than reserve, set to number
	LNK4518 Can't apply gp relative fixup, gp not defined
	LNK4519 Bad object - incorrect string table end - fixed
	LNK4520 Based data overlaps code. Base code @ address
	LNK4521 Based code overlaps data. Base data @ address
	LNK4522 Found multiple matches for symbol
	LNK4523 Base adjusted from offset to offset (next 64K multiple)
	LNK4525 nodefaultlib switch in directive section in filename
	LNK4526 library out of date
	LNK4528 Obsolete switch -name ignored
	LNK4529 bad object file (reloc to comdat "symbol")
	LNK4530 Invalid file offset offset specified for section
	LNK4532 "symbol" has a conflicting type in objectfile
	LNK4533 converting object from OMF to COFF
	LNK4534 Using default output filename filename
	
	Part 4: DOSXMSF MS-DOS Extender Error Messages
	----------------------------------------------
	Note: Some of these errors can also be generated by the DOSXNT MS-DOS
	Extender.
	
	DX1010 DOS-Extended applications nested too deeply
	------
	One of the following may be a cause:
	
	- The nesting limit was exceeded. A protected-mode application can
	 spawn a real-mode application, and a real-mode application can spawn
	 a protected-mode application, up to the limit of 5 of each kind of
	 application.
	- The application contains an infinite loop.
	- The executable was bound with an obsolete extender. Either relink or
	 run BINDMSF.EXE.
	
	DX1020 unhandled exception: exceptionname
	------
	A problem exists in the MS-DOS-extended program. Additional information is
	displayed after this error message.
	
	Causes of this error include the following:
	
	-  Accessing memory beyond the range of a string or array.
	-  Passing a value argument to a subprogram that expects a reference
	  argument, or vice versa.
	-  Accessing an array that was not allocated.
	-  Using the LOC function in an invalid way.
	
	If a Microsoft tool generated this error, note the circumstances of the
	error and notify Microsoft Corporation by following the instructions in
	the "Microsoft Support Services" section in one of your manuals.
	
	DX1040 dllname: cannot load DLL; MS-DOS error number number
	------
	The MS-DOS extender cannot load the given DLL, due to an operating-system
	error. The error is indicated by the given error code. Probably either
	DEBUG.DLL or DOSXMSF.EXE is corrupt.
	
	DX1070 stubname stub is out of date
	------
	The program you are attempting to run is not compatible with the version of
	DOSXNT.EXE available to the program.
	
	The program is a 32-bit MS-DOS-extended application. A compatible version
	of the Microsoft DOSXNT MS-DOS Extender (DOSXNT.EXE) must exist in the same
	directory or in a directory specified in the PATH environment variable.
	
	One way this error can result is when Microsoft MASM 6.1 is installed in
	the same directory as another language product. Either reinstall in
	separate directories or update from this version of MASM.
	
	DX1140 DOSXNT.386 driver required to run with Windows
	------
	For an MS-DOS-extended program that uses DOSXNT to run with the Microsoft
	Windows operating system, the driver called DOSXNT.386 must be specified in
	the [386Enh] section of SYSTEM.INI as follows:
	
	DEVICE=path\DOSXNT.386
	
	where path is the directory that contains the DOSXNT.386 file.
	
	DX1180 cannot load program : reason
	------
	The MS-DOS extender could not load the MS-DOS-extended program for the
	given reason. The reason can be one of the following:
	
	- access denied to file
	 Change the access rights for the file.
	
	- invalid or corrupted .EXE file
	 Note the circumstances of the error and notify Microsoft Corporation by
	 following the instructions in the "Microsoft Support Services" section in
	 one of your manuals.
	
	- out of memory
	 Remove some TSRs or add more memory.
	
	- too many open files
	 Either close some files or increase the number of file handles specified
	 in the FILES= statement in CONFIG.SYS.
	
	DX1230 extendername initialization failed
	------
	Either DOSXMSF or DOSXNT could not intialize, probably due to insufficient
	memory.
	
	DX1240 DPMICodeAlloc: could not allocate DPMI resize segment - retcode
	------ = number
	There is insufficient memory for the MS-DOS extender to run.
	
	DX1430 cannot load program : DLL not found
	------
	Probably DEBUG.DLL is not in a directory specified in the PATH environment
	variable.
	
	Other DOSXMSF DOS Extender Error Messages
	-----------------------------------------
	DX1060 cannot start program; real-mode multitasking not supported
	DX1130 OS/2 support not available in this release
	DX1150 out of ProtCall() stacks; use -NPCALLSTACKS
	DX1160 too many nested calls between real and protected modes
	DX1170 cannot load filename at hexaddress: no fixups
	DX1210 cannot load program : unknown error code number
	DX1310 command line error : command too long "command"
	DX1370 cannot load program : too many open files
	DX1380 cannot load program : access denied to file
	DX1390 cannot load program : out of memory
	DX1400 cannot load program : invalid drive
	DX1420 cannot load program : invalid or corrupted .EXE file
	DX1440 cannot load program : DLL attach routine failed
	DX2000 DOS error number: message
	DX2010 invalid pointer passed to free or realloc : hexaddress
	DX2020 error closing extendername handle number
	DX2030 error freeing environment
	DX2040 error freeing process memory
	
	Other DOSXMSF Errors
	--------------------
	The MS-DOS Extender may generate a system error (DX5nnn) in certain rare
	situations. If a DX5nnn error occurs, note the circumstances of the error
	and notify Microsoft Corporation by following the instructions in the
	"Microsoft Support Services" section in one of your manuals.
	
	Part 5: Floating-point Exception Error Messages
	-----------------------------------------------
	
	M6101 invalid
	-----
	An invalid operation occurred. This error usually occurs when operating on
	a NAN (not a number) or infinity.
	
	M6102 denormal
	-----
	A very small floating-point number was generated which may no longer be
	valid due to loss of significance. Normally, calculations proceed on
	denormals. To get this error message you must call SETCONTROLFPQQ without
	the FPCW$DENORMAL flag.
	
	M6103 divide by 0
	-----
	A floating-point operation attempted to divide by zero.
	
	M6104 overflow
	-----
	An overflow occurred in a floating-point operation.
	
	M6105 underflow
	-----
	An underflow occurred in a floating-point operation. Normally,
	calculations proceed with the underflowed value set to 0.0. To get
	this error message you must call SETCONTROLFPQQ without the
	FPCW$UNDERFLOW flag.
	
	M6106 inexact
	-----
	A floating-point operation occurred where the result was not representable
	as an exact floating-point number. Normally, calculations proceed when an
	inexact value results, because almost any floating-point operation can
	produce an inexact result; the actual result is the rounded or truncated
	result as determined by the current rounding mode. To get this error
	message you must call SETCONTROLFPQQ without the FPCW$INEXACT flag.
	
	Part 6: Low Level Math Error Messages
	-------------------------------------
	
	M6108 square root
	-----
	The operand in a square-root operation was negative.
	(Note: The FORTRAN intrinsic function SQRT does not generate this message;
	instead, SQRT generates the DOMAIN error M6201. You can get this error only
	if you use the fsqrt instruction in an assembly-languge procedure.
	
	M6110 stack overflow
	-----
	A floating-point expression caused a stack overflow on the math coprocessor
	or the emulator.
	
	M6111 stack underflow
	-----
	A floating-point operation resulted in a stack underflow on the math
	coprocessor or the emulator.
	
	M6201 function : DOMAIN error
	-----
	An argument to the given function was outside the domain of legal input
	values for that function. For example, the following expression causes
	this error: SQRT(-1.0)
	
	This error calls the matherr() function with the function name, its
	arguments, and the error type. You can rewrite matherr() to override
	this behavior.
	
	M6202 function : SING error
	-----
	An argument to the given function was a singularity value for this
	function. The function is not defined for that argument. For example, the
	following expression causes this error: LOG10 (0.0)
	
	This error calls the matherr() function with the function name, its
	arguments, and the error type. You can rewrite matherr() to override
	this behavior.
	
	M6203 function : OVERFLOW error
	-----
	The given function result was too large to be represented.
	This error calls the matherr() function with the function name, its
	arguments, and the error type. You can rewrite matherr() to override
	this behavior.
	
	M6205 function : TLOSS error
	-----
	A total loss of significance (precision) occurred.
	This error calls the matherr() function with the function name, its
	arguments, and the error type. You can rewrite matherr() to override
	this behavior.
	
	Part 7: Run-time Library Error Messages
	---------------------------------------
	
	F6421 file read-only or locked against writing
	-----
	The program tried to transfer data to a file that was opened in read-only
	mode or locked against writing. The error message may indicate a CLOSE
	error when the fault is actually coming from WRITE. This is because the
	error is not discovered until the program tries to write buffered data when
	it closes the file.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
