---
layout: page
title: "Q120922: Visual C++ Vers 2.0 README.WRI, Part 6 Internationalization"
permalink: kb/120/Q120922/
---

## Q120922: Visual C++ Vers 2.0 README.WRI, Part 6 Internationalization

	Article: Q120922
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbreadme kbGenInfo kbVC kbArtTypeINF
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 2.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is based on the Visual C++ version 2.0 README.WRI file:
	
	SDK Requirements for National Language Support
	----------------------------------------------
	
	Visual C++ version 2.0 correctly handles all multibyte-character set (MBCS)
	issues, including use of Input Method Editors (IME). However, to enable MBCS
	behavior for the development environment and build tools, you must develop on
	the appropriate MBCS platform, namely, with Windows NT "Daytona" for Japan,
	Korea, Taiwan, or the People's Republic of China. The Windows NT "Daytona" SDK
	and the Open Database Connectivity (ODBC) SDK included with Visual C++ version
	2.0 do not include MBCS-enabled libraries or header files. To use the
	MBCS-enabled versions of these Windows APIs, you must use the Windows NT SDK and
	ODBC libraries and header files for the appropriate country/region.
	
	Help Files With Japanese DBCS Characters
	----------------------------------------
	
	In order to build help files with Visual C++ version 2.0 that contain Japanese
	double-byte (DBCS) characters, you must replace the installed versions of the
	help file components with those found on the CD-ROM disk in the
	\MSVC20\BIN\HELP.JP directory. Replace the following files:
	
	HC30.EXE
	HC31.EXE
	HC31.ERR
	HC.BAT
	
	NOTE: These help compilers, while DBCS-enabled, do not work on .RTF files created
	with Microsoft Word version 6.0.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          : kbreadme kbGenInfo kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:2.0
	
	=============================================================================
	
