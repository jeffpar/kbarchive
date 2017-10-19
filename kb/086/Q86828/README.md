---
layout: page
title: "Q86828: BUG: CodeView Breakpoints with Nested Quotes Unrecognized"
permalink: /kb/086/Q86828/
---

## Q86828: BUG: CodeView Breakpoints with Nested Quotes Unrecognized

	Article: Q86828
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft CodeView, command window commands involving nested quotes are not
	recognized correctly. A breakpoint that includes nested quotation marks
	generates the following error:
	
	  CV1001 Error: Invalid Breakpoint Command
	
	For example, the following command should create a breakpoint that executes the
	function func_name when line 12 is reached:
	
	     bp.12,, "?func_name("string")"
	
	Instead, this command generates a CV1001 error.
	
	It is possible to enter this type of illegal breakpoint through the breakpoint
	dialog box. This causes an error message when the CURRENT.STS is read the next
	time CodeView is invoked.
	
	CAUSE
	=====
	
	CodeView incorrectly parses nested quotation marks both from the command line
	and from the [debug-] section of the CURRENT.STS file where breakpoints are
	saved between debugging sessions. This is a limitation of CodeView's command
	syntax.
	
	RESOLUTION
	==========
	
	If you need to set this type of breakpoint, use this workaround. Add a global
	character array, initialized to the string you want to call the function with,
	to the program. For example:
	
	  char param[] = "string";
	
	After recompiling the program, set the breakpoint using the variable as the
	parameter instead of a literal string, as follows:
	
	  bp.12,, "?func_name(param)"
	
	This avoids the nested quotations and results in a breakpoint that can be saved
	between debugging sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 3.0, 3.05,
	3.06, 3.07, 3.11, 3.12, 3.14, 3.5, 4.0, 4.01, 4.05, 4.1 and 4.25. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.05,4.1
	
	=============================================================================
	
