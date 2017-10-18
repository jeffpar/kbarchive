---
layout: page
title: "Q102949: PRB: DOSXNT: Fatal Error DX1070"
permalink: kb/102/Q102949/
---

## Q102949: PRB: DOSXNT: Fatal Error DX1070

	Article: Q102949
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.0a,1.5,6.1,6.10a,6.11
	Operating System(s): 
	Keyword(s): kbCompiler kbLangFortran kbprb
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.5 
	- Microsoft Visual C++, version 1.0 
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.10a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft DOSXNT MS-DOS-extended C/C++ compiler, FORTRAN compiler, Macro
	Assembler, or other utility generates the following error:
	
	  DOSXNT : fatal error DX1070: The GODOSXNT.EXE stub attached to this program
	  is out of date.
	
	With the exception of Microsoft Visual C++ 32-bit Edition, the product
	documentation does not provide any additional information regarding the cause of
	this error.
	
	CAUSE
	=====
	
	The version of DOSXNT that is found does not match the executable being invoked.
	This problem often occurs when Microsoft development tools with different
	versions of DOSXNT have been installed in the same directory.
	
	RESOLUTION
	==========
	
	To ensure that all MS-DOS-extended tools run successfully, it is recommended
	that you install each language product in a separate directory and that you
	leave each version of DOSXNT.EXE in the subdirectory that contains the tools it
	supports. This allows each MS-DOS-extended tool to locate the appropriate
	version of DOSXNT.EXE.
	
	MORE INFORMATION
	================
	
	Several Microsoft language products provide 32-bit MS-DOS-extended tools that
	use the Microsoft DOSXNT MS-DOS Extender. The version of DOSXNT used by
	Microsoft Visual C++ version 1.0, Microsoft PowerStation version 1.0 and 1.0a,
	and Microsoft MASM version 6.1a are not compatible with the version used by
	Microsoft MASM version 6.1.
	
	NOTE: DOSXNT.EXE is no longer included in the following Microsoft products:
	
	- Fortran PowerStation 32 for NT, versions 2.0 and above.
	
	- Visual C++, 32-bit Edition, version 2.x and above.
	
	Additional query words: 1.00 1.00a 1.50 6.10 6.10a 6.11 DOSXNT
	
	======================================================================
	Keywords          : kbCompiler kbLangFortran kbprb 
	Technology        : kbVCsearch kbMASMsearch kbAudDeveloper kbFortranSearch kbvc150 kbvc100 kbZNotKeyword3 kbMASM610 kbMASM611 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,1.5,6.1,6.10a,6.11
	Issue type        : kbprb
	
	=============================================================================
	
