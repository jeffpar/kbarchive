---
layout: page
title: "Q73746: DOCERR: MASM 6.0 Programmer's Guide Errors: Chapter 7"
permalink: /kb/073/Q73746/
---

## Q73746: DOCERR: MASM 6.0 Programmer's Guide Errors: Chapter 7

{% raw %}

	Article: Q73746
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
	
	The following is a list of documentation additions and corrections for chapter 7
	of the "Microsoft Macro Assembler Programmer's Guide" version 6.0 manual. The
	section and page numbers are listed first, followed by a description of the
	addition or correction.
	
	Section 7.1, Page 167
	---------------------
	
	The first paragraph of this section should read:
	
	  Jumps are the most direct method for changing program control from one
	  location to another. At the processor level, jumps work by changing the value
	  of the IP (Instruction Pointer) for near jumps, and by changing the values of
	  the CS and IP registers for far jumps. The IP register is loaded with the
	  offset of the target address and CS is loaded with the segment of the target
	  address. The many forms of the jump instruction handle jumps based on
	  conditions, flags, and bit settings.
	
	Section 7.1.1.2, Page 169
	-------------------------
	
	The sample line
	
	     jmp ebx     ; FAR32 jump
	
	should read:
	
	     jmp ebx     ; NEAR32 jump
	
	In addition, replace FAR32 with NEAR32 in the sentence before the above line.
	
	Section 7.1.1.2, Page 170
	-------------------------
	
	The example shows the following TYPEDEF statement:
	
	     NPVOID  TYPEDEF NEAR PTR VOID
	
	Note that VOID is not a defined type. It acts as a placeholder and improves
	program readability. In this case, the TYPEDEF is equivalent to:
	
	     NPVOID  TYPEDEF NEAR PTR
	
	Section 7.1.2.2, Page 173
	-------------------------
	
	Table 7.1, on page 173, uses the same character for the number zero and the
	letter "O." This may cause some confusion when reading the table. The "OF"
	indicates the overflow flag and does not represent the hexadecimal number 0F.
	
	Section 7.1.2.6, Page 176
	-------------------------
	
	In the sample code, the line
	
	    .IF  cx = 20
	
	should be:
	
	    .IF  cx == 20
	
	Section 7.2, Page 177
	---------------------
	
	The description of the LOOPE, LOOPZ, LOOPNE, and LOOPNZ states:
	
	  Loops while equal (or not equal). Checks CX and a condition. The loop ends
	  when the condition is true. Set CX to a number out of range if you don't want
	  to control the loop.
	
	It should read:
	
	  Loops while equal (or not equal). Checks CX and a condition (indicated by the
	  zero flag). The loop continues while the condition is met and CX is not zero.
	  Set CX to a number out of range if you don't want the CX count to control the
	  loop.
	
	Section 7.3.2, Page 187
	-----------------------
	
	The sample program contains a line that states:
	
	     mov sp, bp
	
	Because there are no local variables and the SP register is not otherwise
	modified, this line is not needed.
	
	Section 7.3.3.2, Page 191
	-------------------------
	
	This first paragraph states:
	
	  The parameters are separated from the reglist by a comma if there is a list
	  of registers.
	
	According to the BNF grammar shown in Appendix B, the above statement is
	incorrect. The comma is optional and is required only if the parameters are
	placed on the next line.
	
	For example,
	
	     myproc PROC FAR C PUBLIC USES di si, var1:word, arg1:VARARG
	
	is equivalent to:
	
	     myproc PROC FAR C PUBLIC USES di si var1:word, arg1:VARARG
	
	Note in the last case there is no comma following the SI register.
	
	Section 7.3.3.3, Page 193
	-------------------------
	
	The sample program contains the line:
	
	     dec arg1
	
	It should read:
	
	     dec argcount
	
	Section 7.3.6, Page 199
	-----------------------
	
	Page 199 shows two sample lines for declaring prototypes. They are:
	
	     addup  PROTO NEAR C argcount:WORD, arg2:WORD, arg3:WORD
	
	     myproc PROTO FAR  C, argcount:WORD, arg2:VARARG
	
	The last prototype has a comma following the C language specifier while the first
	prototype does not. The documentation fails to mention that the comma is
	optional; therefore, both statements are correct.
	
	Section 7.3.7.5, Page 202 and 203
	---------------------------------
	
	In the first example, the code is missing a few steps. The following is the
	corrected code:
	
	     .CODE
	     mov      bx, pfunc                  ; pfunc is the Function Table
	     mov      si, Num                    ; Num contains 0 or 2
	     INVOKE   FUNCPTR PTR [bx+si], 1, 1  ; Selects proc1 or proc2
	
	The first paragraph on page 203 states:
	
	  You can also use ASSUME to accomplish the same task. The ASSUME statement
	  associates the type PFUNC with the BX register.
	
	It should read:
	
	  You can also use ASSUME to accomplish the same task. In the sample below, the
	  ASSUME statement associates the type FUNCPTR with the BX register.
	
	In the example that follows, add the following line after the ASSUME:
	
	     mov      bx, pFunc
	
	Change the INVOKE line to read:
	
	     INVOKE   [bx+si], 1, 1
	
	Section 7.3.8.2, Page 205
	-------------------------
	
	Page 205 shows the epilogue code when <LOADDS> is specified on a PROC line.
	One line states:
	
	     mov sp,bp
	
	It should read:
	
	     mov sp,bp      ; if localbytes is not 0
	
	Section 7.4.1, Page 209
	-----------------------
	
	The sample code demonstrates how to print a message on the display using a DOS
	interrupt call. It shows the following code:
	
	     .DATA
	     msg BYTE "This writes to the screen",$
	     .CODE
	     mov dx,offset msg
	     mov ah,09h
	     int 21h
	
	It should read:
	
	     .DATA
	     msg BYTE "This writes to the screen$"
	     .CODE
	     mov ax,SEG msg
	     mov ds,ax
	     mov dx,offset msg
	     mov ah,09h
	     int 21h
	
	Section 7.4.2, Page 211
	-----------------------
	
	The last paragraph states:
	
	  To replace the address in the interrupt descriptor table with the address of
	  your procedure, AL needs to be loaded with 04h and AH loaded with 35, the Get
	  Interrupt Vector function. The Set Interrupt Vector function requires 25 in
	  AH.
	
	The numbers 35 and 25 are presented in hexadecimal rather than decimal. They
	should be written as 25h and 35h.
	
	Section 7.4.2, Page 212
	-----------------------
	
	Change the line
	
	     .MODEL LARGE,C,DOS
	
	to:
	
	     .MODEL LARGE,C,OS_DOS
	
	Also, the last sentence on page 212 should read:
	
	  Before your program ends, you should restore the original address by loading
	  DS and DX with the original interrupt address and using the DOS set vector
	  function to store the original address at the correct location.
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
