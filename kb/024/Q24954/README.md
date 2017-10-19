---
layout: page
title: "Q24954: Producing .com Files With MASM"
permalink: /kb/024/Q24954/
---

## Q24954: Producing .com Files With MASM

	Article: Q24954
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,1.27,3.0x,4.0,5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 1.27, 3.0x, 4.0, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Macro Assembler packages prior to version 6.0 cannot produce .com
	files without an additional utility. One such utility is EXE2BIN, which is
	included with MS-DOS. It can convert .EXE files which have only one segment and
	an origin of 100h to .COM files. For more information on this utility, refer to
	your DOS manuals or contact the company which supplied your version of MS-DOS.
	
	MORE INFORMATION
	================
	
	MASM version 6.0 is the first version of the assembler to support the tiny
	model. Use the following steps the produce a .com file in MASM 6.0.
	
	1. Use .model tiny. Declare logical segments using the simplified segment
	  directives or full segment declarations.
	
	  -or-
	
	  Do not use the .model directive and assemble with /AT. Use full segment
	  declarations.
	
	2. Make sure that the first statement in the the code segment is ORG 100h.
	
	3. Build the .com file.
	
	  Compiling and linking in one step: If .model tiny was used, no options are
	  needed. The linker will automatically receive the /TINY switch, the file
	  extension on the file produced will be .com, and the executable is indeed a
	  .com file.
	
	  -or-
	
	  Performing a separate link: Specify the /TINY option on the link command line.
	  The linker will issue the following harmless warning
	
	  L4045: name of output file is 'filename'
	
	  where 'filename' will have a .com extension.
	
	Additional query words: kbinf 1.25 1.27 3.0x 4.00 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM125 kbMASM127 kbMASM30xSearch kbMASM400 kbMASM500
	Version           : :1.25,1.27,3.0x,4.0,5.0,5.1
	
	=============================================================================
	
