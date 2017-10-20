---
layout: page
title: "Q30363: DOCERR: procedure Pprog(); Should Be procedure Pprog;"
permalink: /kb/030/Q30363/
---

## Q30363: DOCERR: procedure Pprog(); Should Be procedure Pprog;

{% raw %}

	Article: Q30363
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two errors in the Pascal program on Page 64 of the Microsoft Macro
	Assembler version 5.0 and 5.1 "Mixed-Language Programming Guide." The line
	containing the following statement:
	
	     procedure Pprog();
	
	should be changed to read as follows (i.e., remove the parentheses):
	
	     procedure Pprog;
	
	In addition, the above line should be moved so that it is directly above the
	following line:
	
	     var a,b:integer;
	
	If this line is not moved, the program will generate errors when it is compiled.
	
	Additional query words: 5.0a 5.00 5.00a 5.1a 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	

{% endraw %}
