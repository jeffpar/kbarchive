---
layout: page
title: "Q297882: PRB: Behavior of Format Function Changes from VB 5.0 to VB 6.0"
permalink: kb/297/Q297882/
---

## Q297882: PRB: Behavior of Format Function Changes from VB 5.0 to VB 6.0

	Article: Q297882
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbString kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Format function produces different results after you migrate a Visual Basic
	application from version 5.0 to version 6.0.
	
	CAUSE
	=====
	
	This problem can occur if you do not specify enough placeholders. The number of
	placeholder characters must equal the number of characters in the string that
	you are trying to format. In this case, the Format function must make
	assumptions about how to fill in the remaining characters.
	
	For example, suppose that you want to format the string "Microsoft", so you make
	the following call to the Format function:
	
	  Format("Microsoft","@-@")
	
	Because you have not supplied enough at signs (@), the Format function must
	decide from which end it must start to fill in the remaining characters. The
	output differs depending on which end the function starts, which differs between
	Visual Basic versions 5.0 and 6.0.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, always supply the correct number of placeholder
	characters. If you use the preceding example, change the call to the Format
	function as follows:
	
	  Format("Microsoft","@-@@@@@@@@")
	
	MORE INFORMATION
	================
	
	Suppose that you make the following call to the Format function:
	
	  Format("Microsoft","@-@")
	
	In Visual Basic 5.0, the placeholders are filled in from right to left, and the
	following output is returned:
	
	  Microsoft-t
	
	However, this behavior changes in Visual Basic 6.0. In Visual Basic 6.0, the
	placeholders are filled in from left to right. As a result, the following output
	is returned:
	
	  M-icrosoft
	
	Additional query words: vba
	
	======================================================================
	Keywords          : kbString kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
