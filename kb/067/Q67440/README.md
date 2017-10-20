---
layout: page
title: "Q67440: Tracing into a Macro When Debugging Assembly Programs"
permalink: /kb/067/Q67440/
---

## Q67440: Tracing into a Macro When Debugging Assembly Programs

{% raw %}

	Article: Q67440
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
	
	When you use a macro in an assembly-language routine and you are debugging, you
	cannot trace into the macro definition as you can with a procedure. The debugger
	simply executes the macro call (steps over it) as if it were a single
	instruction.
	
	This behavior is by design. There is no symbolic information generated to allow
	the debugger to step into the macro. If you are using CodeView, you can switch
	to assembler mode (not source mode) and single step through the code. However,
	if you are using Microsoft Quick Assembler, you will have to expand the macro
	before assembly if you want to step through the code.
	
	Note: There is a CodeView update for Quick Assembler version 2.51 owners. Call
	Microsoft Sales and Service at (800) 426-9400 for more information.
	
	Additional query words: S_QUICKASM S_CODEVIEW 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.1,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
