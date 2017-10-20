---
layout: page
title: "Q149481: PRB: Debugging Past END Statement Puts You in Disassembly Mode"
permalink: /kb/149/Q149481/
---

## Q149481: PRB: Debugging Past END Statement Puts You in Disassembly Mode

{% raw %}

	Article: Q149481
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Debugging source code and stepping past the main program END statement causes
	the debugger to shift into disassembly mode, placing the cursor at the beginning
	of the source code's corresponding assembly code listing.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In previous versions of Microsoft FORTRAN, when you stepped past the main
	program END statement, the debugger generated the message "There is no source
	line debugging information" and stopped the debugger.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build the sample code provided in Developer Studio.
	
	2. Start a debugging session by selecting Debug from the Build menu and then
	  choosing Step Into.
	
	3. Step past the END statement to cause the debugger to shift into disassembly
	  mode and place the cursor at the beginning of the assembly code listing
	  mainCRTStartup() procedure.
	
	Sample Code
	-----------
	
	  C Compile options needed: /Zi
	
	        print *, 'Hello, World!'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
