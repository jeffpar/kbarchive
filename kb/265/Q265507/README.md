---
layout: page
title: "Q265507: WD97: Picture's Object Anchor Moves Outside Table"
permalink: kb/265/Q265507/
---

## Q265507: WD97: Picture's Object Anchor Moves Outside Table

	Article: Q265507
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Word document that was created in a later version of Microsoft
	Word and that contains a picture anchored inside a Word table, the object anchor
	is moved outside the table, and the picture may change position.
	
	
	CAUSE
	=====
	
	This functionality is by design in Microsoft Word 97 for Windows. Object anchors
	cannot be placed inside a Word table cell. Instead, object anchors are always
	placed to the left of a Word table.
	
	This functionality is changed in Microsoft Word 2000 and later. Object anchors in
	Word 2000 can be placed within a table cell but are not retained when your Word
	document is opened in an earlier version of Microsoft Word.
	
	WORKAROUND
	==========
	
	To prevent this problem when your Word document is opened in an earlier version
	of Microsoft Word, use one of the following methods.
	
	Method 1: Change the Picture to "In Line with Text"
	---------------------------------------------------
	
	NOTE: Microsoft Word inserts a picture as "In line with text" by default.
	
	To change your picture to the "In line with text" wrapping style, follow these
	steps:
	
	1. In the Word 2000 document, click to select the picture.
	
	2. On the Format menu, click Picture.
	
	3. In the Format Picture dialog box, click to select the Layout tab.
	
	4. Under "Wrapping style", click to select "In line with text", and then click
	  OK.
	
	Method 2: Move the Object Anchor Outside the Table
	--------------------------------------------------
	
	To move the picture's object anchor, follow these steps:
	
	1. In the Word 2000 document, click to select the picture.
	
	2. If you do not see the object anchor (it looks like a ship anchor), follow
	  these steps:
	
	  a. On the Tools menu, click Options.
	
	  b. On the View tab, click to select the "Object anchors" check box, and then
	     click OK.
	
	     NOTE: The "Object anchors" option is listed in the "Print and Web Layout
	     options" section of the View tab.
	
	3. Click and hold the mouse pointer on the object anchor. Then drag the anchor
	  outside the table.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q167738 WD97: General Information About Floating Objects
	
	Additional query words: clipart clip gallery
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
