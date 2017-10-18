---
layout: page
title: "Q72323: PRB: CodeView Label/Function Search Fails for MASM 5.1 Labels"
permalink: kb/072/Q72323/
---

## Q72323: PRB: CodeView Label/Function Search Fails for MASM 5.1 Labels

	Article: Q72323
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb _IK
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use the Label Search or Function Search command in CodeView
	versions 3.0 and later to find PROC labels in applications assembled with
	Microsoft Macro Assembler (MASM) versions 5.1 or 5.1a fails and CodeView
	generates the following message:
	
	  Error - Unknown symbol
	
	CAUSE
	=====
	
	This behavior is expected and reflects the differences in CodeView symbolic
	information in MASM versions 5.1 and 6.0 and the different methods used to
	interpret this information in CodeView versions 2.x and 3.x. CodeView version
	2.2 finds PROC labels that are declared PUBLIC in code assembled with MASM
	versions 5.1 and 5.1a. CodeView versions 3.x and 4.x successfully find PROC
	labels in code assembled with MASM versions 6.0x and 6.1.
	
	MORE INFORMATION
	================
	
	The code example below demonstrates this situation. Assemble the code in MASM
	version 5.1 or 5.1a and load it into CodeView version 3.0 or later. An attempt
	to perform a Label Search or a Function Search for "func" fails and CodeView
	generates one of the messages listed above. However, CodeView 2.2 finds the
	label and displays the relevant code on the screen.
	
	Sample Code
	-----------
	
	  ; Assembler options needed: /Zi
	  ; LINK options needed: /CO
	
	  .MODEL small
	  .STACK
	  .DATA
	  msg     DB "Hello", 13, 10, "$"
	
	  PUBLIC  func            ; required by CodeView 2.2
	
	  .CODE
	  start:  mov ax, SEG msg
	          mov ds, ax
	          call func
	          mov ah, 4Ch
	          int 21h
	
	  func    PROC
	          mov ah, 09h
	          mov dx, OFFSET msg
	  dosint: int 21h
	          ret
	  func    ENDP
	
	  END start
	
	Additional query words: 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb _IK 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Issue type        : kbprb
	
	=============================================================================
	
