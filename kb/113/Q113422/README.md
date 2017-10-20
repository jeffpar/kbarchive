---
layout: page
title: "Q113422: BUG: Incorrect Formatting of Macro Comment Listings"
permalink: /kb/113/Q113422/
---

## Q113422: BUG: Incorrect Formatting of Macro Comment Listings

{% raw %}

	Article: Q113422
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a macro contains a comment, the listing file may be incorrectly formatted.
	As a result, the comment is printed at the margin rather than being correctly
	indented. The example given below illustrates this problem.
	
	CAUSE
	=====
	
	The Microsoft Macro Assembler (MASM) is failing to add the linefeed character
	(0Ah) after the carriage return (0Dh).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	The code sample below generates the following listing (partial):
	
	                               mymacro MACRO aparm
	
	; a test macro
	
	                               ENDM
	
	
	
	                               END
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl
	   
	  mymacro MACRO aparm
	  ;; a test macro
	  ENDM
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
