---
layout: page
title: "Q26583: DOCERR: @DataSize Misspelled"
permalink: kb/026/Q26583/
---

## Q26583: DOCERR: @DataSize Misspelled

	Article: Q26583
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 91 of the "MS-DOS Macro Assembler User's Guide" shows @DataSize and
	@CodeSize typed as @datasize and @codesize. This information is inconsistent
	with Mixed.inc, which types them as @Datasize and @CodeSize. This process will
	result in an error when interfacing C and MASM using the NOIGNORECASE option.
	
	Both the documentation and Mixed.Inc should show @DataSize and @CodeSize. The
	mistyping only will matter when assembling with the -Ml option to preserve case
	in names.
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	
