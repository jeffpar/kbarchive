---
layout: page
title: "Q44923: MASM Calling C Making MASM Main Routine"
permalink: /kb/044/Q44923/
---

## Q44923: MASM Calling C Making MASM Main Routine

{% raw %}

	Article: Q44923
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 30-AUG-1989
	
	You can make a program that starts with MASM and calls C. This method
	of programming is not recommended because starting with MASM will
	mean that the C start-up code will not be executed, which may cause
	future problems calling some of the C library functions. Run-time
	error messages may be affected as well as routines that use system
	symbols.
	
	The following is an example of the macro-assembler main routine
	which calls a C routine.
	
	        .MODEL LARGE,C
	        .CODE
	        EXTRN CSUB
	MAIN    PROC           ; Must call main (_main without ,C)
	        PUSH     AX             ; Push argument on stack
	        PUSH     BX             ; Push another argument
	        CALL     CSUB   ; Call C subroutine
	        ADD   SP,4      ; Fix-up stack after C subroutine
	MAIN ENDP
	        END            ; Do not specify starting location

{% endraw %}
