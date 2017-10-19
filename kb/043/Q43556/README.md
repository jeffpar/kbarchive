---
layout: page
title: "Q43556: Use /Zi to Compile Commands Invoked with &quot;?&quot; Command"
permalink: /kb/043/Q43556/
---

## Q43556: Use /Zi to Compile Commands Invoked with &quot;?&quot; Command

	Article: Q43556
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	Invoking C functions in CodeView using the "?" command works as
	expected as long as the function is contained in a module that was
	compiled with /Zi for the CodeView information. However, an attempt to
	directly call a function in the C run-time library or in the Windows
	application programming interface (API), CodeView returns the error
	message "syntax error" or "symbol 'xxxx' not found."
	
	The reason for the error message is that the module containing the
	library function is not compiled with the CodeView option /Zi. The
	error message does not depend on the fact that the function is in the
	library and not in your application. If you use the "?" command to
	attempt to call a user-defined function in a module that is compiled
	without including CodeView information, CodeView returns the same
	error message.
	
	The "?" command is formally referred to in the CodeView Utilities menu
	as the Display Expression command.
	
	Additional query words: kbinf 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
