---
layout: page
title: "Q72701: Writing Macro Functions and Using the EXITM Directive"
permalink: /kb/072/Q72701/
---

## Q72701: Writing Macro Functions and Using the EXITM Directive

	Article: Q72701
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Beginning with the Microsoft Macro Assembler (MASM) version 6.0, a macro can be
	written that will return either a text or numeric value. This is called a "Macro
	Function" and is implemented with the EXITM directive.
	
	In MASM versions earlier than 6.0, the EXITM directive was used to exit a macro
	immediately. There were no arguments or parameters. With versions 6.0 and later,
	the EXITM directive takes an optional argument that specifies the return value.
	This argument must be either text, a text equate name, or the result of another
	macro function. In addition, the EXITM directive must be at the end of a macro
	block if it is to be used to return a value.
	
	MORE INFORMATION
	================
	
	The two examples below illustrate a couple of ways to use a macro function. In
	the first example, a macro function is used to concatenate a text string to
	create unique labels for a procedure definition. The example code is followed by
	an extract from the list file showing the concatenated names for the
	procedures.
	
	The second example illustrates how a numeric value may be returned by using the
	expansion operator (%). This example is followed by a preprocessor listing
	showing the resultant code.
	
	Sample Code 1
	-------------
	
	  ; Assemble options needed: /c /Fl
	
	          .model small
	
	  prefix  TEXTEQU <mycode_>
	
	  paste   MACRO   arg1,arg2       ;Macro function that concatenates
	          EXITM   <arg1&&arg2>    ;  strings arg1 and arg2
	  ENDM
	
	  n_proc  MACRO new_name          ;Macro that calls the paste
	          paste   (%prefix,&new_name) PROC ;  macro function.
	          paste   (%prefix,&new_name) ENDP ; The % expansion operator
	  ENDM                            ;  evaluates the expression
	                                  ;  associated with prefix.
	          .code
	
	          n_proc   fun_1
	          n_proc   fun_2
	
	          END
	
	  =================== EXTRACT FROM LIST FILE =========================
	
	  Macros:
	         N a m e         Type
	
	  n_proc .............   Proc
	  paste  .............   Func
	
	  Procedures,  parameters and locals:
	         N a m e            Type    Value   Attr
	
	  mycode_fun_1 ..........  P Near   0000    _TEXT  Length= 0000 Public
	  mycode_fun_2 ..........  P Near   0000    _TEXT  Length= 0000 Public
	
	  ====================================================================
	
	Sample Code 2
	-------------
	
	  ; Assemble options needed: /c /EP
	
	           .model small
	
	  get_rate MACRO val              ; macro function that accepts a
	           LOCAL thin             ;   value and returns the results of
	           thin TEXTEQU <val*300> ;   an expression.
	           EXITM %thin
	  ENDM
	
	  baudrate MACRO
	           FOR b_rate, <1, 4, 8>     ; Equivalent to IRP with MASM 5.1a.
	              BYTE b_rate
	              WORD get_rate(b_rate)  ; Call to Macro Function.
	           ENDM
	  ENDM
	
	           .code
	
	           baudrate
	
	           END
	
	  ====================== PREPROCESSOR LISTING =========================
	
	     .model small
	
	     .code
	           BYTE 1
	        ??0000 TEXTEQU <1*300>  ; An expression
	           WORD 300             ; Call to Macro Function
	           BYTE 4
	        ??0001 TEXTEQU <4*300>  ; An expression
	           WORD 1200            ; Call to Macro Function
	           BYTE 8
	        ??0002 TEXTEQU <8*300>  ; An expression
	           WORD 2400            ; Call to Macro Function
	     end
	  =====================================================================
	
	Additional query words: kbinf 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
