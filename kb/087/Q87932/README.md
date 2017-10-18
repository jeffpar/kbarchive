---
layout: page
title: "Q87932: DOCERR: ALIAS Directive Undocumented in MASM 6.0"
permalink: kb/087/Q87932/
---

## Q87932: DOCERR: ALIAS Directive Undocumented in MASM 6.0

	Article: Q87932
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the online Help and on page 618 of the "Microsoft Macro Assembler
	Programmer's Guide" for MASM versions 6.0, 6.0a, and 6.0b, the ALIAS keyword is
	listed as a word that is reserved for future use. While the feature was actually
	implemented in the assembler, it was not documented as such.
	
	The ALIAS directive was not documented because Microsoft recommends using LINK
	5.3 or later and LIB 3.2 or later when producing .EXEs, .DLLs, or library
	modules that use this directive. These utilities did not ship until Microsoft
	C/C++ 7.0; therefore, because the tools were not available at the time that MASM
	6.0 shipped, the directive was not documented.
	
	MORE INFORMATION
	================
	
	This feature is useful to map names used in one version of a product to names
	used in another version of that product when they have changed. The library
	OLDNAMES.LIB that ships with Microsoft C/C++ version 7.0 was created to map C
	6.0 names to C/C++ 7.0 names and uses this technology.
	
	The syntax for the ALIAS directive is as follows
	
	  ALIAS <alias> = <actual-name>
	
	where the angle brackets are required, alias is the alternate or alias name, and
	actual-name is the actual name of the function or procedure. Note that the new
	utilities, LINK 5.3 and LIB 3.2, should be used.
	
	Additional query words: 6.00 6.00a 6.00b s_c
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
