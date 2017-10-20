---
layout: page
title: "Q65472: INFO: Predefined Identifiers in Microsoft C and C++"
permalink: /kb/065/Q65472/
---

## Q65472: INFO: Predefined Identifiers in Microsoft C and C++

{% raw %}

	Article: Q65472
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below is from the Microsoft C Compiler versions 6.0, 6.0a, and
	6.0ax; C/C++ version 7.0; Visual C++ 1.0 and 1.5 for Windows; and Visual C++ 1.0
	for Windows NT online Help.
	
	The following information can be accessed in C 6.0 and C/C++ 7.0 from the help on
	CL.EXE by seeking help on the text "cl" using either the F1 key from the
	Programmer's WorkBench (PWB) or by typing "qh cl" from the MS-DOS or OS/2
	command lines. From the "CL Contents" help screen, select Preprocessor Options,
	then Predefined Identifiers.
	
	This information can be accessed in Visual C++ for Windows and Visual C++, 32-bit
	Edition, by searching on _MSC_VER in the Microsoft C/C++ Language Help.
	
	
	MORE INFORMATION
	================
	
	The compiler automatically defines identifiers useful in writing portable
	programs. You can use these identifiers to compile code sections conditionally.
	These identifiers are always defined unless otherwise stated.
	
	Microsoft Specific
	------------------
	
	(NOTE: These macros are supported by both the 16-bit and 32-bit compilers.)
	
	  Macro               Specifies
	  ------------------------------------------------------------------
	
	  _CHAR_UNSIGNED      Default char type is unsigned. Macro defined
	                      when /J is specified.
	  M_I86,  _M_I86      Always defined. Identifies target machine as a
	                      member of the 8086 family.
	  _MSC_VER            Microsoft C version; currently defined as 800.
	
	The following symbol was added in C/C++ 7.0:
	
	  Macro               Specifies
	  --------------------------------------------------------------------
	
	  __cplusplus         Macro defined when compiling a C++ program. (This
	                      macro is not defined for the C compiler.)
	
	16-Bit Specific
	---------------
	
	  Macro               Specifies
	  -------------------------------------------------------------------
	
	  MSDOS, _MSDOS       Always defined. Identifies target operating system
	                      as MS-DOS.
	  M_I86mM, _M_I86mM   Always defined. Member of the I86 processor family.
	                      Memory model type:
	                      m = T   Tiny
	                      S   Small (default)
	                      C   Compact model
	                      M   Medium model
	                      L   Large model
	                      H   Huge model
	                      Macros defined by /AT, /AS, /AC, /AM, /AL, and /AH
	                      respectively.
	  M_I8086, _M_I8086   8088 or 8086 processor; default or defined when /G0
	                      is specified.
	  M_I286, _M_I286     80286 processor. Macro defined when /G1 or /G2 is
	                      specified.
	  NO_EXT_KEYS         Disables Microsoft-specific language extensions
	                      and extended keywords; defined only with /Za
	                      option.
	
	  _QC                 Supported for compatibility with Microsoft C version
	                      6.0. The _FAST macro (or /f) is the default and is
	                      the recommended alternative.
	
	The following symbols were added in C/C++ 7.0:
	
	  Macro               Specifies
	  -------------------------------------------------------------------
	
	  _DLL                Code for run-time library as a dynamic-link library.
	                      Defined when /MD is specified.
	  _FAST               Fast-Compile. Macro defined when /f is specified
	                      Supersedes _QC, which is still supported but not
	                      recommended. Using /Od causes CL to compile your
	                      program with /f. The /f option compiles source files
	                      without any default optimizations.
	  __STDC__            Full conformance with the ANSI C standard. Defined
	                      the integer constant 1 only if the /Za command-line
	                      option is given; otherwise is undefined.
	  _PCODE              Defined for sections of code that are compiled as
	                      p-code. Macro defined when /Oq is enabled.
	  _WINDLL             Windows protected-mode dynamic-link library is
	                      selected with /GD.
	  _WINDOWS            Windows protected-mode is selected with /GA, /Gw,
	                      /GW, /Mq, or /GD.
	
	32-Bit Specific
	---------------
	
	The following symbols were added in Visual C++, 32-bit Edition, version 1.0:
	
	  Macro               Specifies
	  -----               ---------
	
	  _DLL                Defined when Multithreaded using DLL (/MD or /MDd)
	                      is specified.
	
	  _M_IX86             Defined as 300 for the 80386 processor (/G3 option),
	                      as 400 for the 80486 (/G4) processor, as 500
	                      for the Pentium processor (/G5), and as 600 for 
	                      Pentium Pro and Pentium II processors (/G6).
	
	  _MT                 Defined when Multithreaded (/MD, /MDd, /MT, or /MTd)
	
	  _WIN32              Defined for WIN32 applications. Always defined.
	                      Microsoft specific.
	
	The following symbols were added in Visual C++, 32-bit Edition, version 4.0:
	
	  Macro               Specifies
	  -----               ---------
	
	  _CPPRTTI            Defined for code compiled with Enable Run-Time Type
	                      Information (/GR).
	
	  _CPPUNWIND          Defined for code compiled with Enable Exception
	                      Handling (/GX).
	
	The _MSC_VER macro will have one of the following values depending upon the
	particular Microsoft compiler:
	
	  Compiler                           _MSC_VER value
	  --------                           --------------
	  C Compiler version 6.0                  600
	  C/C++ compiler version 7.0              700
	  Visual C++, Windows, version 1.0        800
	  Visual C++, 32-bit, version 1.0         800
	  Visual C++, Windows, version 2.0        900
	  Visual C++, 32-bit, version 2.x         900
	  Visual C++, 32-bit, version 4.0         1000
	  Visual C++, 32-bit, version 5.0         1100
	  Visual C++, 32-bit, version 6.0         1200
	
	NOTE: If a predefined identifier has two forms, with and without an underscore,
	the command-line driver defines both if you specify the /Ze option (compile for
	Microsoft extensions). It defines only the leading underscore form if you
	specify the /Za option (compile for ANSI compatibility).
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
