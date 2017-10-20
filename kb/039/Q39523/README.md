---
layout: page
title: "Q39523: How to Declare Externals in MASM"
permalink: /kb/039/Q39523/
---

## Q39523: How to Declare Externals in MASM

{% raw %}

	Article: Q39523
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are the rules for declaring externals in MASM:
	
	1. NEAR code labels must be declared in the code segment from which they are
	  accessed.
	
	2. Although FAR code labels can be declared anywhere in the source code, it is
	  recommended they be declared outside of any segments. You may declare them at
	  the top of your program after the .MODEL directive.
	
	3. Any external data in the DGROUP data segment, must be declared in the segment
	  in which it is defined. You may need to create a dummy data segment for the
	  external declaration.
	
	4. Data items declared in .FARDATA segment, that need to be referenced as
	  externals, should be declared out of any segments. Otherwise, fixup-overflow
	  errors may occur during linking. Note: This conflicts with the rules
	  indicated on Page 162 of "Microsoft Macro Assembler Programmer's Guide" for
	  Versions 5.x.
	
	Additional query words: kbinf 5.00 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM600b
	Version           : :5.0,5.1,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
