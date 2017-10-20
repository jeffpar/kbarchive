---
layout: page
title: "Q117796: PRB: Incorrect Debug Information in 32-bit Object Module"
permalink: /kb/117/Q117796/
---

## Q117796: PRB: Incorrect Debug Information in 32-bit Object Module

{% raw %}

	Article: Q117796
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you step through assembly source code with a debugger, instructions do not
	seem to execute properly. Switching to mixed assembly and source shows the
	source code does not match up with the disassembled code.
	
	CAUSE
	=====
	
	When you debug a Windows NT application containing an Object Module Format (OMF)
	object module created with Microsoft Macro Assembler (MASM), version 6.1, the
	source line number debug information is incorrect when converted to Common
	Object File Format (COFF) by a 32-bit linker (such as the linker shipped with
	Microsoft Visual C++, 32-bit edition). This results in lines in the source file
	being incorrectly associated with points in the executable file.
	
	RESOLUTION
	==========
	
	Assemble the assembly source file using the /coff switch, which will cause MASM
	to generate a COFF object module.
	
	MORE INFORMATION
	================
	
	COFF is the preferred object file format for Windows NT, and you should always
	use the /coff switch when assembling source files for use in the Windows NT
	operating system.
	
	Additional query words: 6.10a 6.11 6.11a
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
