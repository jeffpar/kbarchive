---
layout: page
title: "Q197202: WD97: Paragraph Numbering Causes Slow Scrolling"
permalink: kb/197/Q197202/
---

## Q197202: WD97: Paragraph Numbering Causes Slow Scrolling

	Article: Q197202
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Large documents that contain a contiguous range of paragraphs that are formatted
	with any type of paragraph numbering, scroll slowly in Word. Line numbering also
	affects the speed of scrolling through the document; however, the impact is not
	as great as with paragraph numbering.
	
	CAUSE
	=====
	
	Because Word automatically updates numbers in a list, Word begins its count at
	the first number in the list and continues to the number that appears at the top
	or bottom of the screen, depending on the direction you are scrolling. The rate
	of speed at which the scrolling becomes slower varies with each system; however,
	contiguous ranges of approximately 100 numbered paragraphs generally mark the
	point at which the speed begins to gradually slow down.
	
	This problem occurs with paragraphs formatted by clicking Bullets And Numbering
	on the Format menu as well as the Numbering button on the Toolbar, regardless of
	the numbering type (that is, multi-level, Arabic numbers, Roman numerals, or
	alphabetic formats).
	
	WORKAROUND
	==========
	
	If the numbering is not contiguous or is interrupted, scrolling speed returns
	until approximately 100 numbered paragraphs appear, at which time the scrolling
	speed begins to gradually slow down. To interrupt numbering, click Stop
	Numbering on the shortcut menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: format number scroll scrolling slow
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
