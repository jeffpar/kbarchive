---
layout: page
title: "Q50862: DOCERR: @MakeFil Macro Spelling on MASM 5.1 CodeView Tutorial"
permalink: kb/050/Q50862/
---

## Q50862: DOCERR: @MakeFil Macro Spelling on MASM 5.1 CodeView Tutorial

	Article: Q50862
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the file MACRO.DOC on the "Microsoft CodeView for MS-DOS with Tutorial" disk
	for Microsoft Macro Assembler Version 5.10, there is a documentation error that
	incorrectly calls the macro @MakeFil.
	
	The macro is defined in the DOS.INC include file, also on the MS-DOS CodeView
	disk. In the DOS.INC include file, the @MakeFil macro has been labeled as
	@MakFil, not @MakeFil.
	
	To use this macro correctly, either change the DOS.INC include file macro label
	to @MakeFil, or call the macro as @MakFil.
	
	Additional query words: 5.10 MAKEFILE
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	
