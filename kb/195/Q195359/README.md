---
layout: page
title: "Q195359: WD97: Footnote Text Displayed, Printed on Top of Footer"
permalink: /kb/195/Q195359/
---

## Q195359: WD97: Footnote Text Displayed, Printed on Top of Footer

{% raw %}

	Article: Q195359
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, footnote text is displayed on top of (overlays) the footer
	text in page layout view and print preview. The footnote text is also printed on
	top of the footer text.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- The footer text exceeds five lines.
	
	  -and-
	
	- The footnote text exceeds five lines.
	
	
	  -and-
	
	- Text follows the footnote reference mark in the body of the document.
	
	  -and-
	
	- A section break is placed after the footnote reference mark.
	
	WORKAROUND
	==========
	
	To prevent the footnote text from overlapping the footer text, use either of the
	following methods:
	
	Method 1:
	
	Open the footnote pane, place the insertion point after the footnote text, and
	press ENTER to add one or more blank lines (paragraphs).
	
	Method 2:
	
	Delete the section break.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem does not occur in Word 2000.
	
	
	Additional query words: 8.0 8.00 overflows overlays over on top overlaps covers covering overlapping
	
	======================================================================
	Keywords          : kbualink97 kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
