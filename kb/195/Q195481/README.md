---
layout: page
title: "Q195481: WD97: Excel Object Range Name Changes Format After Paste Link"
permalink: kb/195/Q195481/
---

## Q195481: WD97: Excel Object Range Name Changes Format After Paste Link

	Article: Q195481
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you paste link a Microsoft Excel object into a Word document, the range
	name changes to a cell reference (CxRx) format.
	
	CAUSE
	=====
	
	This problem occurs when you select the range in Excel and use the Copy Picture
	command (hold SHIFT and then on the Edit menu, click Copy Picture).
	
	WORKAROUND
	==========
	
	To work around this problem, use the Copy command instead of the Copy Picture
	command in Excel.
	
	NOTE: The disadvantage to using this method is that an embedded chart is not
	copied as part of the link. An embedded chart is available only when you use the
	Copy Picture command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed
	above.
	
	Additional query words: row column format
	
	======================================================================
	Keywords          : kbdta winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
