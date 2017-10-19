---
layout: page
title: "Q47781: QCL Default Compile Options"
permalink: /kb/047/Q47781/
---

## Q47781: QCL Default Compile Options

	Article: Q47781
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickASM | mspl13_c
	Last Modified: 10-OCT-1989
	
	The QuickC defaults when compiling at the command line with QCL are as
	follows:
	
	   /AS      - small memory model
	   /F2048   - stack size of 2K
	   /FPi     - inline 8087/80287 instructions
	   /G0      - 8086/8088 instruction set
	   /Gt32767 - data size threshold (compact, large, huge models only)
	   /Ot      - optimize for speed
	   /W1      - warning level
	   /Ze      - enable Microsoft extensions
	
	To view the full list of command-line compiler options, type the
	following at the DOS prompt:
	
	   QCL /help
	
	You can find detailed information about all the compiler options in
	the "Microsoft QuickC Tool Kit," Chapter 4, QCL command reference.
