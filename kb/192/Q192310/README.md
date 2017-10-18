---
layout: page
title: "Q192310: WD97: Formula in Table Is Incorrect When Using Track Changes"
permalink: kb/192/Q192310/
---

## Q192310: WD97: Formula in Table Is Incorrect When Using Track Changes

	Article: Q192310
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbformula kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a function in a table, the results of the function may be incorrect
	if the Track Changes While Editing Feature is enabled.
	
	Functions that can accept references to table cells include AVERAGE(), COUNT(),
	MAX(), MIN(), PRODUCT(), and SUM().
	
	CAUSE
	=====
	
	The function does not correctly interpret numbers marked for deletion. This
	problem occurs when you mark deleted text with strikethrough characters, with
	the pound sign (#), or with a caret (^).
	
	Take, for example, a table with the following values where the value 3 is derived
	by the function { = SUM(A1:A2)}.
	
	  -----
	  | 1 |
	  -----
	  | 2 |
	  -----
	  | 3 |
	  -----
	
	If you change the value in cell A1 to 2 while you have revision marks enabled, as
	in this example
	
	  --------
	  | (1)2 | (parenthesis represent a revision mark in this example)
	  --------
	  |  2   |
	  --------
	  |  3   |
	  --------
	
	the resulting value in the updated formula will be incorrect.
	
	  --------
	  | (1)2 | (parenthesis represent a revision mark in this example)
	  --------
	  |  2   |
	  --------
	  | 14   |
	  --------
	
	NOTE: To update the formula, press SHIFT+F9.
	
	The formula interprets the 1 preceding the 2 as part of the value. That is, the
	formula reads the value as 12; therefore, the sum of the values (12 + 2) is 14.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1 - Accept or Reject the Changes Before You Update Fields
	----------------------------------------------------------------
	
	To accept or reject changes, point to Track Changes on the Tools menu, and then
	click Accept Or Reject Changes.
	
	Method 2 - Hide Tracked Changes Before You Update the Formula
	-------------------------------------------------------------
	
	To hide tracked changes, click Track Changes on the Tools menu, and then click to
	clear the Highlight changes on screen check box.
	
	Additional query words: wrong error formula field code
	
	======================================================================
	Keywords          : kbdta kbformula kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
