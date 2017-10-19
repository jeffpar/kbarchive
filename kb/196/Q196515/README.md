---
layout: page
title: "Q196515: WD97: Unusual or Unexpected Line Spacing Between Paragraphs"
permalink: /kb/196/Q196515/
---

## Q196515: WD97: Unusual or Unexpected Line Spacing Between Paragraphs

	Article: Q196515
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Case 1
	------
	
	Large spaces appear between paragraphs, so that the first line of text appears at
	the top of the page, and the last line of text is at the bottom of the page.
	
	Case 2
	------
	
	A large white space appears at the top of the page, and the text adjusts itself
	on the page beginning at the center of the page.
	
	CAUSE
	=====
	
	Case 1
	------
	
	Vertical alignment is set to Justified. By design, Word evenly places the text
	between the top and bottom margins of the page. In other words, the first line
	of text on a page appears at the top margin, and the last line of text appears
	at the bottom margin.
	
	Case 2
	------
	
	Vertical alignment is set to Centered. By design, Word centers the text between
	the top and bottom margins. In other words, a single line of text appears in the
	center of the page. As you add more lines of text, all text is centered between
	the top and bottom margins.
	
	WORKAROUND
	==========
	
	Remove the Justified or Centered vertical alignment. To do this, follow these
	steps:
	
	1. On the File menu, click Page Setup.
	
	2. Select the Layout tab.
	
	3. In the "Vertical alignment" list, select Top.
	
	4. In the "Apply to" list, select "Whole document".
	
	5. Click OK.
	
	Additional query words: gaps break format vertical vertically verticle white space spacing spread out justify justified centered
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
