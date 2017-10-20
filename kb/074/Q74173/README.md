---
layout: page
title: "Q74173: DOCERR: MASM 6.0 Programmer's Guide Errors: Chapters 7-10"
permalink: /kb/074/Q74173/
---

## Q74173: DOCERR: MASM 6.0 Programmer's Guide Errors: Chapters 7-10

{% raw %}

	Article: Q74173
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
	
	The following is a list of documentation additions and corrections for Chapters
	7 through 10 of the "Microsoft Macro Assembler Programmer's Guide" for version
	6.0. The section and page numbers are listed first, followed by a description of
	the addition or correction.
	
	Section 7.1.2.3, Page 174
	-------------------------
	
	The note in the margin states:
	
	  "pairs of operands cannot be both registers or both memory locations."
	
	This is incorrect. The TEST instruction is able to take two registers as
	operands.
	
	Section 7.2.1, Page 178
	-----------------------
	
	The summary of the action for the ".REPEAT,.UNTILCXZ" directive is incorrect. It
	specifies this directive will compare a label to an expression. However, this is
	not the case. The correct description is as follows:
	
	  The .UNTILCXZ directive can be used with expression1 == expression2 or
	  expression1 != expression2 to generate a LOOPE or LOOPNE instruction. The
	  .UNTILCXZ directive also decrements CX and exits the loop if CX = 0. If
	  <condition> is omitted, the .UNTILCXZ directive generates a LOOP
	  instruction.
	
	Section 7.2.1, Page 182
	-----------------------
	
	Line number eight of the sample program is incorrect. It should be:
	
	     .CONTINUE  .IF (al < '0') || (al > '9')
	
	Section 7.3.3.2, Page 191
	-------------------------
	
	The syntax description for parameters has a "single" closing square bracket
	rather than a "double" closing square bracket. It must have a "double" closing
	square bracket.
	
	Section 7.3.3.2, Page 192
	-------------------------
	
	The last sentence of the third paragraph should end with the following:
	
	  "...--the first MOV gets the address of the parameter, and the second MOV
	  gets the parameter."
	
	Section 7.3.4, Page 195
	-----------------------
	
	The fourth portion of the diagram in this page does not show where SP is located.
	This is misleading. SP should be shown at the same location as BP-2.
	
	Section 7.3.8.2, Page 206
	-------------------------
	
	The first sentence on this page is incorrect. It should read:
	
	  "Therefore parmbytes is not always equal to the bytes occupied by the
	  parameters."
	
	Section 8.2.1, Page 217
	-----------------------
	
	Midway through the second paragraph the sentence should read:
	
	  Multiple /I options can be used to specify that multiple *directories* be
	  searched in the order they appear on the command line.
	
	Section 8.2.2.1, Page 219
	-------------------------
	
	In figure 8.1, there are three files and MOD2.ASM contains the following line:
	
	     mov ax, array[12]
	
	This line should be changed to:
	
	     mov al, array[12]
	
	Also, the last sentence in this section states:
	
	  You can also use EXTERNDEF to make code labels global.
	
	This means EXTERNDEF can make code labels global between files so that another
	module can access that label. However, the code label must have global scope
	within the file where it is defined. For example:
	
	File 1
	------
	
	        EXTERNDEF codelabel:near
	        .model small
	        .code
	
	     firstproc    proc
	     codelabel::  mov ax,1
	     firstproc    endp
	
	File 2
	------
	
	        EXTERNDEF codelabel:near
	        .model small
	        .code
	
	     secondproc   proc
	                  jmp codelabel
	     secondproc   endp
	
	In the first file, it is important that the label codelabel is defined with two
	colons (::). With the OPTION SCOPED turned on by default, the double colon
	allows the variable to be seen globally in the first file. The EXTERNDEF
	statement makes codelabel public so that it can be seen by file 2.
	
	Section 8.3.1, Page 224
	-----------------------
	
	In figure 8.3, the file MOD2.ASM should read:
	
	     .model small, pascal
	     EXTERN Var:BYTE, BuildTable:NEAR
	
	     .code
	        .
	        .
	        .
	        mov   al,Var
	        call  BuildTable
	        .
	        .
	        .
	
	Section 8.4.2, Page 226
	-----------------------
	
	Change the example line of code from
	
	     EXTERN init(dummy)
	
	to the following:
	
	     EXTERN init(dummy):PROC
	
	Section 9.3.2, Page 239
	-----------------------
	
	Page 239 states that the following line should work:
	
	     work MACRO arg:=%07h
	
	This is incorrect. The line above will produce a syntax error when trying to
	assemble. It was not implemented in MASM 6.0.
	
	Section 9.4.3, Page 245
	-----------------------
	
	In the sample at the bottom of page 245, the following line should be change
	from
	
	     FOR  arg, arglist
	
	to the following:
	
	     %FOR arg, arglist
	
	Section 9.5, Page 249
	---------------------
	
	The first sentence on this page should read:
	
	  The string in the SUBSTR syntax, as well as in the syntax for the other
	  string directives and predefined functions, can be any textItem where
	  textItem can be text enclosed in angle brackets (<>), the name of a
	  text macro, or a constant expression preceded by a percent sign (%) such as
	  %constExpr or %(constExpr).
	
	Section 9.5, Page 249
	---------------------
	
	The first paragraph in the description for SIZESTR states:
	
	  Although the length is always a positive number, it is assigned as a string
	  of digits in the current radix rather than as a numeric value.
	
	The above statement is incorrect. The SIZESTR directive assigns a number to a
	variable like a numeric equate. For example
	
	     stringsize SIZESTR <hello>
	
	makes stringsize a numeric equate, setting it equal to 5.
	
	Section 9.5, Page 250
	---------------------
	
	Change the following
	
	     RestoreRegs MACRO
	        LOCAL regs
	        %FOR reg,regpushed
	     pop reg
	        ENDM
	     ENDM
	
	to the following:
	
	     RestoreRegs MACRO
	        LOCAL regs
	        %FOR regs,regpushed        ; reg s/b regs...
	     pop regs                      ; "   "   "   "
	        ENDM
	     ENDM
	
	Section 9.7.2, Page 257
	-----------------------
	
	The Macro Assembler 6.0 README.DOC has the following correction for the table on
	the top of page 257:
	
	  Option     Description
	  ------     -----------
	
	  ASSUMES    Saves segment register information
	  LISTING    Saves listing and CREF information
	  CPU        Saves current CPU and processor
	  RADIX      Saves current default radix
	  ALL        All of the above
	
	Section 10.3.1.5, Page 268
	--------------------------
	
	The following is the example shown in section 10.3.1.5:
	
	     project.exe:*.obj
	         LINK $*.obj;
	
	The documentation states that this description block links all files having the
	.OBJ extension in the current directory. This should be written as:
	
	     project.exe:*.obj
	       LINK $**;
	
	Section A.1.4, Page 555
	-----------------------
	
	The list of new directives at the bottom of this page is missing the directive
	.ENDIF.
	
	Section A.2.3, Page 583
	-----------------------
	
	There is a comma missing from the encoding example at the bottom of the page. The
	line should be:
	
	  "MASM 6.0 uses this encoding instead: rm16/32,imm8."
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
