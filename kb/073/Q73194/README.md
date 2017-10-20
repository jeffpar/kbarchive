---
layout: page
title: "Q73194: H2INC Does Not Initialize Variables During Conversion"
permalink: /kb/073/Q73194/
---

## Q73194: H2INC Does Not Initialize Variables During Conversion

{% raw %}

	Article: Q73194
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 1.0 
	- Microsoft Macro Assembler for MS-DOS version 6.0, running under OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C to MASM Include File Translator (H2INC) can be used to convert C
	header files to MASM include files. In most cases, it will convert all C data
	types and structures into their MASM equivalent. However, H2INC will not convert
	initialized C variables to initialized MASM variables.
	
	MORE INFORMATION
	================
	
	Page 441 of the "Microsoft Macro Assembler Programmer's Guide" states that H2INC
	will not translate static variables, but does not mention that initialized
	variables are not translated either. When a variable is initialized in a C
	header file, H2INC translates it to an external MASM declaration, rather than
	creating a MASM declaration with the initial value.
	
	For example, a C header file of the form
	
	     char a = 'a';
	     int  b = 100;
	     .
	     .
	     .
	
	is converted to a MASM include file of the form:
	
	  EXTERNDEF     a:SBYTE
	  EXTERNDEF     b:SWORD
	     .
	     .
	     .
	
	This is expected behavior for H2INC.
	
	Additional query words: kbinf 6.00 6.00a 6.00b 6.10 1.00 1.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbZNotKeyword3 kbMASM600DOS kbMASM100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
