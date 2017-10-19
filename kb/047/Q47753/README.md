---
layout: page
title: "Q47753: List of Run-Time Error Numbers and Messages for QuickBasic"
permalink: /kb/047/Q47753/
---

## Q47753: List of Run-Time Error Numbers and Messages for QuickBasic

	Article: Q47753
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.00,1.01,1.02,2.00,2.01,3.00,4.00,4.00b,4.50; :6.0,6.0b,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft QuickHelp for MS-DOS, versions 1.00, 1.01, 1.02, 2.00, 2.01, 3.00, 4.00, 4.00b, 4.50 
	- Microsoft BASIC Compiler, versions 6.0, 6.0b, on platform(s):
	   - the operating system: MS-DOS 
	- Microsoft Basic Professional Development System for MS-DOS and OS/2, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a complete list of run-time errors and their corresponding
	numbers (returned by the ERR function). These errors can be trapped with the ON
	ERROR GOTO statement.
	
	This information applies to Microsoft QuickBasic Versions 1.00, 1.01, 1.02, 2.00,
	2.01, 3.00, 4.00, 4.00b, and 4.50 for MS-DOS, to Microsoft Basic Compiler
	Versions 6.00 and 6.00b for MS-DOS and MS OS/2, and to Microsoft Basic PDS
	Version 7.00 for MS-DOS and MS OS/2.
	
	MORE INFORMATION
	================
	
	Error                              Error
	  Code   Description                 Code   Description
	  -----  -----------                 -----  -----------
	
	   1*    NEXT without FOR            37*    Argument-count mismatch
	   2*    SYNTAX error                38*    Array not defined
	   3     RETURN without GOSUB        39**   CASE ELSE expected
	   4     Out of DATA                 40     Variable required
	   5     Illegal function call       50     Field Overflow
	   6     Overflow                    51     Internal Error
	   7     Out of memory               52     Bad file name or number
	   8     Label not defined           53     File not found
	   9     Subscript out of range      54     Bad file mode
	  10     Duplicate definition        55     File already open
	  11     Division by zero            56     FIELD statement active
	  12*    Illegal in direct mode      57     Device I/O error
	  13*    Type mismatch               58     File already exists
	  14     Out of string space         59     Bad record length
	  16*    String formula too complex  61     Disk Full
	  17*    Cannot continue             62     Input past end-of-file
	  18     Function not defined        63     Bad record number
	  19     No RESUME                   64     Bad file name
	  20     RESUME without error        67     Too many files
	  24     Device timeout              68     Device Unavailable
	  25     Device Fault                69     Communications-buffer overflow
	  26*    FOR without NEXT            70     Permission denied
	  27     Out of paper                71     Disk not ready
	  29*    WHILE without WEND          72     Disk-media error
	  30*    WEND without WHILE          73     Advanced feature unavailable
	  33*    Duplicate LABEL             74     Rename across disks
	  35*    Subprogram not defined      75     Path/file access error
	                                     76     Path not found
	
	  *   Denotes errors that usually occur at COMPILE TIME, but may
	      occur and be trapped during RUN TIME under special circumstances
	
	  **  Denotes that the error number was removed in Basic PDS 7.00
	
	The following errors appear in Microsoft Basic PDS Version 7.00 only:
	
	  80     Feature removed
	  81     Invalid name
	  82     Table not found
	  83     Index not found
	  84     Invalid column
	  85     No current record
	  86     Duplicate value for unique index
	  87     Invalid operation on null index
	  88     Database needs repair
	
	The following undefined error numbers produce an "Unprintable error" message if
	they are not trapped with the ON ERROR GOTO statement:
	
	  15, 21, 22, 23, 28, 31, 32, 34, 41-49, 60, 65, 66, 77, and upwards
	
	For Microsoft Basic PDS 7.00, the numbers that generate the "Unprintable error"
	message are as follows:
	
	  15 ,21, 22, 23, 28, 31, 32, 34, 39, 41-49, 60, 65, 66, 77-79, 89 and upwards
	
	For a more detailed explanation of the above errors, please consult your language
	reference manual for Basic or QuickBasic, or your "Microsoft QuickBasic 4.5:
	Programming in Basic" manual for Version 4.50, Appendix I, or the QB Advisor
	on-line Help system for QuickBasic Version 4.50, or your "Microsoft Basic 7.0:
	Language Reference" manual for Basic PDS 7.00, Appendix D, or the Microsoft
	Advisor on-line Help system for Basic PDS Version 7.00.
	
	You can invoke any error in the QB.EXE or QBX.EXE environment with the ERROR
	statement. In QB.EXE 4.50 or QBX.EXE 7.00, the ERROR statement displays the
	error message with the choice to receive Help on the error. Choosing Help gives
	a brief explanation and some key points to consider when tracking down the cause
	of the error.
	
	
	Additional query words: QuickBas BasicCom
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBASICSearch kbQBASICSearch kbQuickHelpSearch
	Version           : MS-DOS:1.00,1.01,1.02,2.00,2.01,3.00,4.00,4.00b,4.50; :6.0,6.0b,7.0
	
	=============================================================================
	
