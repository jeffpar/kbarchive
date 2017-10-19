---
layout: page
title: "Q73084: Differences Between GW-BASIC and QBasic"
permalink: /kb/073/Q73084/
---

## Q73084: Differences Between GW-BASIC and QBasic

	Article: Q73084
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the improvements in QBasic over GW-BASIC and some of the
	major differences between the two.
	
	MORE INFORMATION
	================
	
	QBasic is a subset of QuickBasic version 4.5. The QBasic online help feature
	contains complete articles explaining version differences between
	BASICA/GW-BASIC and QBasic, unsupported keywords, and converting BASICA programs
	for use under QBasic.
	
	QBasic provides a "Windows-like" environment supporting the use of a mouse. A
	menu bar across the top of the screen contains pull-down menu selections.
	
	QBasic provides a split screen. The upper portion of the screen is called the
	view window and is for program code; at the bottom of the screen, an "immediate"
	window allows testing of a programming instruction prior to including it in a
	program.
	
	With QBasic, you don't need to use line numbers. However, line numbers are
	supported. Also, QBasic now supports line "labels." These labels are not
	required on every line, however, but can be used to direct program flow. As a
	result, QBasic has no RENUM command such as that of GW-BASIC. For example:
	
	  Line label "Bob:" or line number "10" are both valid.
	
	QBasic includes friendly, extensive online help. For more information about using
	QBasic, press ENTER immediately after starting QBasic or press F1 any time while
	running QBasic. If you are using a mouse, point to the Help menu option on the
	right side of the menu bar (on the top right of the displayed screen).
	
	You can cut and paste examples of program code from the online help screen and
	place them directly into the view window for execution.
	
	QBasic uses IEEE floating point math, the industry standard. GW-BASIC uses the
	MBF math format. For more information on IEEE vs. Microsoft Binary Format, query
	on the following words:
	
	  Tutorial and IEEE and MBF
	
	
	QBasic is a subset of QuickBasic 4.5. QuickBasic 4.0 and later will support a
	math co-processor, however, QBasic does not.
	
	QBasic uses P-code, which stands for "pseudo code," so called because it's very
	similar to compiled code, but it's not completely compiled. P-code retains just
	enough information -- the crucial last bits that real machine code loses -- for
	listing it on the screen in source code format and for any modifications you
	decide to make. Yet, because it looks almost like the output of a compiler, it
	runs almost as fast as you would expect an executable file to run. Consequently,
	you get all the advantages of using an interpreter with virtually no speed
	penalty and little size penalty.
	
	QBasic supports additional variable types: User-Defined Types, Fixed-Length
	Strings, and Long Integers.
	
	User-Defined Types
	------------------
	
	                        Use the type
	  If the variable is:    declaration character:
	  -------------------    ----------------------
	
	  String                 $
	  Integer
	     Regular             %
	     Long                &
	  Floating Point
	     Single-precision    !
	     Double-precision    #
	
	Fixed-Length Strings
	--------------------
	
	A regular integer variable can store any whole number from -32768 through
	
	1. Use "%" to declare regular integers.
	
	  Example: integer% = 10
	
	To declare a fixed-length string, add a string variable name and a string length
	to the DIM statement, as follows
	
	     DIM strName AS STRING * n
	
	where strName is the name of the fixed-length string and n is the string length.
	
	Long Integers
	-------------
	
	A long integer variable can represent a whole number from -2,147,483,648 through
	2,147,483,647. Use "&" to declare long integers.
	
	  Example: employees& = 15000000
	
	Single-precision floating-point variables can represent a number up to seven
	digits in length. The decimal point can be anywhere within those digits. Use "!"
	to declare single-precision floating-point variables.
	
	  Example: speed!= 33.33333
	
	Double-precision floating-point variables can represent a number up to 15 digits
	in length. The decimal point can be anywhere within those digits. Use "#" to
	declare double-precision floating point variables.
	
	  Example: pi# = 3.141592654
	
	QBasic allows 64K memory for code per subroutine and 64K for data. Arrays,
	fixed-length strings, and user-defined types get 64K each. There is 64K of
	memory available for CODE per SUBroutine and 64K of memory for DATA. You can
	also have far arrays of numerics, fixed-length strings, and user- defined types
	of up to 64K each.
	
	QBasic allows error/event trapping:
	
	           "ON ERROR GOSUB.../ON KEY(n) GOTO..."
	
	          Example:
	                          CALL mysub
	                          END
	
	                          errhandler:
	                                  PRINT "You had an error!"
	                                  PRINT "Error" ERR
	                          RESUME NEXT
	
	                          SUB mysub
	
	                          ON ERROR GOTO errhandler
	                          ERROR 62
	
	                          END SUB
	
	QBasic allows variable/value parameter passing. SUB/END SUB and UNCTION/END
	FUNCTION. QBasic provides a way to share arguments with a limited number of
	subprograms rather than with the entire program. This method is called passing
	arguments.
	
	          Syntax:
	                  SUB globalname[parameterlist][STATIC]
	                          [statements]
	                  [EXIT SUB]
	                          [statements]
	                  FUNCTION name [parameterlist][STATIC]
	                          [statements]
	                  name = expression
	
	                          [statements]
	                  END FUNCTION
	                  END SUB
	
	File Conversion from GW-BASIC to QBasic
	---------------------------------------
	
	To use a GW-BASIC program in QBasic, you must first save the file in an ASCII
	text format.
	
	  Example: SAVE: "PROGNAME.BAS",A.
	
	Converting a GW-BASIC Program to QBasic
	---------------------------------------
	
	Use REMLINE.BAS included with MS-DOS for QBasic to remove line numbers from
	GW-BASIC programs. For more information, see the documentation provided at the
	beginning of REMLINE.BAS by opening the file in QBasic.
	
	To load GW-BASIC programs to QBasic, you must use the command "QBasic /MBF" when
	starting QBasic from the DOS prompt.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
