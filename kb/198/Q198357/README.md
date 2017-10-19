---
layout: page
title: "Q198357: WD97: Box Border Incorrect When Applied to Multiple Paragraphs"
permalink: /kb/198/Q198357/
---

## Q198357: WD97: Box Border Incorrect When Applied to Multiple Paragraphs

	Article: Q198357
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply a box border to two or more paragraphs where the first paragraph
	has a left and right indent and the second paragraph has no indent, the top
	border over the second paragraph is printed and displayed incorrectly.
	
	The part where the top paragraph border touches the border of the second
	paragraph is larger and darker than a normal border.
	
	CAUSE
	=====
	
	A border has been applied twice to the problem area.
	
	WORKAROUND
	==========
	
	Remove the bottom border from the indented paragraph to prevent a double border.
	To do this, follow these steps:
	
	1. Select the top paragraph.
	
	2. On the Format menu, click Borders And Shading.
	
	3. In the Preview box, remove only the bottom border.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about this situation in earlier versions of Word,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q122506 WD: Incomplete Top Paragraph Border Below Indented Paragraph
	
	Additional query words: continuous indents indented multi-indent multiple paragraphs word8 word97
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
