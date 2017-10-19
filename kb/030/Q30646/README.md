---
layout: page
title: "Q30646: Cannot Create .COM Files in C Compiler"
permalink: /kb/030/Q30646/
---

## Q30646: Cannot Create .COM Files in C Compiler

	Article: Q30646
	Product(s): See article
	Version(s): 3.00 4.00 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 16-JUN-1988
	
	The Microsoft C Compiler Versions 3.00, 4.00, 5.00, and 5.10 do not
	support the creation of .COM programs. This is because the smallest
	memory model that can be created is Small Model, which has one Code
	segment and one Data segment, while .COM programs can only have one
	segment.
	
	   .EXE files are converted to .COM files using the MS-DOS utility
	EXE2BIN (see your MS-DOS manual and/or Page 51 of Ray Duncan's
	"Advanced MS-DOS"). The .COM programs cannot contain more than one
	declared segment; however, the Microsoft C compiler creates segments
	named _DATA, _TEXT, CONST, _BSS, etc.
	   There are no compiler options to create a "Tiny model" program.
	For this reason, most .COM programs are written in assembler.
	   One way to use the C Compiler in creating .COM programs is to
	compile with the /Fa option to create an assembly listing. The .ASM
	file(s) can then be modified so it only uses one segment.
