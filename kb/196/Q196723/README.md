---
layout: page
title: "Q196723: WD97: SUM Formula Does Not Update Correctly"
permalink: kb/196/Q196723/
---

## Q196723: WD97: SUM Formula Does Not Update Correctly

	Article: Q196723
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield kbformula word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SUM formula field may update incorrectly if text exists in a cell of a row
	or column when using one of the following predefined formula fields:
	
	  =SUM(LEFT)
	  =SUM(RIGHT)
	  =SUM(BELOW)
	  =SUM(ABOVE)
	
	In the following table, the first and second rows update correctly. If the text
	is in a cell immediately adjacent to the formula, the calculation updates
	correctly.
	
	  ---------------------------------------------------------
	  |      1      |      2      |      3      | =SUM(LEFT)  |
	  ---------------------------------------------------------
	  |      1      |      2      |    TEXT     | =SUM(LEFT)  |
	  ---------------------------------------------------------
	  |      1      |    TEXT     |      3      | =SUM(LEFT)  |
	  ---------------------------------------------------------
	
	The third row produces an incorrect result, as shown in the table below.
	
	  ---------------------------------------------------------
	  |      1      |      2      |      3      |      6      |
	  ---------------------------------------------------------
	  |      1      |      2      |     TEXT    |      3      |
	  ---------------------------------------------------------
	  |      1      |    TEXT     |      3      |      3      |
	  ---------------------------------------------------------
	
	CAUSE
	=====
	
	By design, when the SUM function, using one of the predefined arguments (LEFT,
	RIGHT, ABOVE, or BELOW), is interrupted by a text-filled cell in the table, it
	performs the calculation up to that point. When the text-filled cell is
	immediately adjacent to the formula, the SUM function begins looking at the
	figures on the other side of the text.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	Specify a range of cells in your formula, for example:
	
	  {=sum(a1:c1)}
	
	Method 2
	--------
	
	Specify a series of cells in your formula, for example:
	
	  {=sum(a1,b1,c1)}
	
	For more information about referencing cells in a table, click "Contents and
	Index" on the Help menu, click the Index tab in Help, type the following text
	
	  cell references
	
	and then double-click the selected text to go to the "referencing cells in a
	table" topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Additional query words: formula expression incorrect calculate calculation
	
	======================================================================
	Keywords          : kbualink97 kbfield kbformula word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
