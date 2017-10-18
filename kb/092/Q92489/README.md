---
layout: page
title: "Q92489: FIX: CodeView Quick Watch of Variable Name Gives CAN0017 Error"
permalink: kb/092/Q92489/
---

## Q92489: FIX: CodeView Quick Watch of Variable Name Gives CAN0017 Error

	Article: Q92489
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01 
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 4.0 and 4.01 of Microsoft CodeView, requesting a Quick Watch on a
	variable that includes one or more underscore characters in its name fails with
	one of the following error messages:
	
	  CAN0017 Error: symbol not found
	
	  CXX0017 Error: symbol not found
	
	This happens with either the SHIFT+F9 key combination or by selecting Quick Watch
	from the Data menu. This problem also occurs with other keystrokes that require
	CodeView to parse a string (containing underscore characters) at the current
	cursor location, such as F1 and Ctrl-W (Add Watch).
	
	RESOLUTION
	==========
	
	To avoid this behavior, select the entire variable name before requesting a
	Quick Watch. Another technique is to request a Quick Watch with the "??
	<variable name>" command in the Command window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.02. This problem was corrected in CodeView version 4.05.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView400 kbCodeView401
	Version           : :4.0,4.01
	Solution Type     : kbfix
	
	=============================================================================
	
