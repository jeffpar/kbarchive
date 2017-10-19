---
layout: page
title: "Q198358: WD97: Converted Document with Numbered List Restarts Numbering"
permalink: /kb/198/Q198358/
---

## Q198358: WD97: Converted Document with Numbered List Restarts Numbering

	Article: Q198358
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbnumbering kbframe kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open (convert) a document that contains a table or object within a
	numbered list, the numbered list may restart numbering after the object, as in
	the following example:
	
	  1. Apples
	  2. Oranges
	  3. Pears
	  < table or object>
	  1. Pineapples
	  2. Guavas
	  3. Mangos
	
	CAUSE
	=====
	
	When the converted document was created in an earlier version of Word, the
	document contained a framed table or object within the numbered list.
	
	When the document is opened in Word 97 or later, the frame is converted as
	follows:
	
	- If your document contains a framed table, the framed table is retained.
	
	  -or-
	
	- If your document contains a framed picture, the picture is converted to a
	  "float over text" picture.
	
	The list is renumbered where the anchor of the framed table or "float over text"
	picture is located.
	
	To view the anchor in your document, click Options on the Tools menu. On the View
	tab, click to select the Object Anchors and All check boxes, and then click OK.
	
	NOTE: The Object Anchors check box is located under the Show label, and the All
	check box is located under the Nonprinting characters label on the View tab.
	
	WORKAROUND
	==========
	
	1. Place your insertion point in the paragraph that restarts the numbering in
	  the numbered list.
	
	2. On the Format menu, click Bullets And Numbering.
	
	3. In the Numbering Gallery, click to select the numbering style you want, and
	  then click Customize.
	
	4. Change Start At to the number that the numbered list should continue at, and
	  then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbnumbering kbframe kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
