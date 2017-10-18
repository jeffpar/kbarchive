---
layout: page
title: "Q60746: PRB: NMAKE Invokes MASM Instead of the C Compiler"
permalink: kb/060/Q60746/
---

## Q60746: PRB: NMAKE Invokes MASM Instead of the C Compiler

	Article: Q60746
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using an NMAKE file in combination with adding /Fa to the compiler options
	within Programmer's WorkBench (PWB) or Visual Workbench, NMAKE will invoke the
	Microsoft Macro Assembler (MASM), if it is in the current search path.
	
	This does not occur the first time you build your application, but it does occur
	the second time, and thereafter, because of the generation of the .ASM created
	by the compiler.
	
	CAUSE
	=====
	
	Files with the .ASM extension have a predefined inference rule within NMAKE to
	invoke MASM. However, the inference rule for .ASM files takes place before the
	rule for files with the .C or .OBJ extension. Therefore, if you have a filename
	with the same base name, but one has an .ASM extension and the other has a .C
	extension (as is the case with the /FA switch), the .ASM file will be assembled
	before the .C file will be compiled. Since the assembly step generates an .OBJ
	file that is newer than the .C file, the .C file is never compiled.
	
	RESOLUTION
	==========
	
	Use the following procedures to work around this behavior:
	
	1. The best workaround is to use /Fa [LSTFILE.EXT] with a filename included as a
	  compiler option, instead of allowing the /Fa option to default to its
	  <filename>.ASM.
	
	  Example: /Fa <filename>.ASC
	
	  In using this method, the .C file will be compiled, instead of the .ASM
	  version being assembled.
	
	2. Use the /Fc compiler option in place of the /Fa option (if you just want to
	  look at an assembly source listing). This produces a .COD file (combined
	  assembly and C source listing).
	
	3. Use the /R switch for the NMAKE invocation to ignore inference rules and
	  macros that are predefined or defined in the TOOLS.INI file.
	
	Additional query words: 1.10 1.20 1.30 1.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	
