---
layout: page
title: "Q68072: .MODEL Directive Language Parameter Doesn't Preserve Case"
permalink: /kb/068/Q68072/
---

## Q68072: .MODEL Directive Language Parameter Doesn't Preserve Case

	Article: Q68072
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The .MODEL directive can be followed by a language parameter that determines
	naming, calling, and returning conventions that are used by the specified
	language. The example below demonstrates the syntax.
	
	Although the language type determines the naming convention, it does not
	determine the case of any names used. For example if the statement ".MODEL
	SMALL, C" is used, case sensitivity of names is not preserved, even though C
	preserves case by default. However, an underscore is added in front of any
	names. Similarly, if the statement ".MODEL SMALL, PASCAL" is used in a program,
	all names are not forced to uppercase (the default for Pascal).
	
	To ensure proper case sensitivity, use the command line option /MX (preserves
	case in public and external names), /MU (converts names to uppercase), or /ML
	(preserves case in names).
	
	Sample Code
	-----------
	
	     .model small,c ; <--- Language specifier
	     .code
	
	     myproc proc
	            ret
	     end
	
	Additional query words: 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	
	=============================================================================
	
