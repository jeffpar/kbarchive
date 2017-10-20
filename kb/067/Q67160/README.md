---
layout: page
title: "Q67160: PRB: CXX0004: Syntax Error Can Be Caused by a Leading Zero"
permalink: /kb/067/Q67160/
---

## Q67160: PRB: CXX0004: Syntax Error Can Be Caused by a Leading Zero

{% raw %}

	Article: Q67160
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to enter a value in CodeView fails and CodeView generates an error
	message. CodeView versions 4.0x, 4.1, and 4.25 generates one of the following
	messages:
	
	  CXX0004: Error: syntax error
	
	  -or-
	
	  CAN0004: Error: syntax error
	
	  -or-
	
	  CXX0013: Error: missing operator
	
	  -or-
	
	  CAN0013: Error: missing operator
	
	CodeView versions 3.x generate the following message:
	
	  CV1017: syntax error
	
	CAUSE
	=====
	
	The value has a leading zero and contains an "8" or a "9". CodeView treats a
	value that begins with a zero as an octal value. The error occurs when the value
	is not a legal octal value.
	
	RESOLUTION
	==========
	
	Remove any leading zeros from a decimal number. To enter a decimal number
	without regard to the current input radix, prefix the number with "0n" (without
	the quotation marks). To enter a hexadecimal number, prefix the number with "0x"
	(without the quotation marks).
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
