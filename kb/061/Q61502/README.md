---
layout: page
title: "Q61502: .MODEL with a Language Makes Procedure Names PUBLIC"
permalink: /kb/061/Q61502/
---

## Q61502: .MODEL with a Language Makes Procedure Names PUBLIC

{% raw %}

	Article: Q61502
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the .MODEL directive including a language, the Microsoft Macro
	Assembler version 5.1 and later automatically make all procedure names PUBLIC.
	This is a feature of the assembler. This information can be found on Page 34 in
	the "High-Level-Language Support" section of the "Microsoft Macro Assembler"
	version 5.1 update manual.
	
	There is no option that will make the procedures PRIVATE.
	
	MORE INFORMATION
	================
	
	The following is an example using the C language specifier with the MODEL
	directive. Note that myadd will be PUBLIC.
	
	Sample Code:
	------------
	
	  ; Assemble options needed: none
	
	           .MODEL MEDIUM, C
	
	           .CODE
	  myadd    PROC arg1:WORD, arg2:WORD
	
	           MOV   ax, arg1
	           ADD   ax, arg2
	
	           RET
	
	  myadd    ENDP
	           END
	
	Additional query words: 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.1,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
