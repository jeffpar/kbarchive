---
layout: page
title: "Q185506: WD97: Numbering Reset When Frame Is Anchored to Paragraph"
permalink: kb/185/Q185506/
---

## Q185506: WD97: Numbering Reset When Frame Is Anchored to Paragraph

	Article: Q185506
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a document that was created in an earlier version of Word,
	numbered lists may not appear the way you expect them to. If the numbered list
	in the original document contains a framed object, the line on which the framed
	object appears will be renumbered to one, as in the following example. If the
	original list looks like this
	
	 1. Cat
	 2. Dog
	 3. <Framed Object>
	 4. Bird
	
	it will be converted to resemble this when you open it in Word 97:
	
	 1. Cat
	 2. Dog
	 1. <Framed Object>
	 2. Bird
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
