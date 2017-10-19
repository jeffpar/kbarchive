---
layout: page
title: "Q74169: PRB: L4001 Warning May Be Caused by Using Incorrect Linker"
permalink: /kb/074/Q74169/
---

## Q74169: PRB: L4001 Warning May Be Caused by Using Incorrect Linker

	Article: Q74169
	Product(s): Microsoft Programming Utilities
	Version(s): 6.0,6.0a,6.0b,6.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	- Microsoft LINK for OS/2 
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the process of linking an application, Microsoft LINK generates the
	following message:
	
	  warning L4001: frame-relative fix-up,
	
	  frame ignored near xxx in segment yyy
	
	In most cases, LINK ignores the initial frame and performs a far address
	calculation.
	
	CAUSE
	=====
	
	This error can occur incorrectly when the incorrect linker is used. For example,
	the error occurs if an assembly module is assembled with USE32 segments in
	Microsoft Macro Assembler (MASM) and LINK version 5.x attempts to create the
	.EXE file. The same error occurs if MASM version 6.0, 6.0a, 6.0b, or 6.1 creates
	code for the FLAT memory model.
	
	RESOLUTION
	==========
	
	The resolution depends on the target operating system. When Windows NT is the
	target, use the CVTOMF utility provided with the Windows NT Software Development
	Kit (SDK) to convert the generated object file from OMF format to COFF format.
	Then use the LINK utility provided with the Windows NT SDK to build the
	application. If OS/2 version 2.0 is the target, use LINK386 from the IBM OS/2
	2.0 development kit.
	
	MORE INFORMATION
	================
	
	The following code sample demonstrates both the error message discussed above
	and the methods to avoid it. Assemble the code below with MASM version 6.0,
	6.0a, 6.0b, or 6.1. To reproduce the error message above, link with a
	segmented-executable linker, such as LINK version 5.x. To create a correct
	executable file, link the code with LINK386 from IBM.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c
	  ;     Link options needed: Link with LINK 5.x to see errors
	  ;                          Link with LINK386 for correct results
	
	  INCLUDELIB DOSCALLS.LIB ; OS/2 systems call library
	
	  .386
	  .MODEL flat, syscall
	
	  Dos32Write PROTO NEAR32 syscall,
	      hf:WORD, pvBuf:NEAR32, cbBuf:WORD, pcbBytesWritten:NEAR32
	
	  Dos32Exit PROTO NEAR32 syscall,
	      fTerminate:WORD, ulExitCode:WORD
	
	  .STACK 4096
	
	  .DATA
	
	  msg DB "Hello, world.", 13, 10
	  written DW 0
	
	  .CODE
	  _start:
	      INVOKE  Dos32Write,        ; OS/2 system call
	          1,                     ; File handle for screen
	          NEAR32 PTR msg,        ; Address of string
	          LENGTHOF msg,          ; Length of string
	          NEAR32 PTR written     ; Bytes written
	
	      INVOKE  Dos32Exit,         ; OS/2 system call
	          0,                     ; Terminate all treads
	          0                      ; Result code for parent process
	
	  END _start
	
	Additional query words: 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 6.00 6.00a 6.00b 6.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbMASMsearch kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbMASM600 kbMASM610 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1
	
	=============================================================================
	
