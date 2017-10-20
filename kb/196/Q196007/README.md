---
layout: page
title: "Q196007: WD97: TOC or Index Starts with No Number for Heading 1 Style"
permalink: /kb/196/Q196007/
---

## Q196007: WD97: TOC or Index Starts with No Number for Heading 1 Style

{% raw %}

	Article: Q196007
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Case 1
	------
	
	The index or table of contents in your master document begins with no number for
	heading 1 style paragraphs.
	
	Case 2
	------
	
	The index or table of contents does not include chapter numbering.
	
	CAUSE
	=====
	
	Case 1
	------
	
	You specified chapter numbering in the subdocuments but not in the master
	document.
	
	Case 2
	------
	
	You specified chapter numbering in the master document but not in the
	subdocuments.
	
	WORKAROUND
	==========
	
	To work around these problems, generate a table of contents or index that
	includes the chapter number and begins with Chapter 1 instead of Chapter 0. To
	do this, follow these steps:
	
	1. In each of your subdocuments, number the headings. Use the Outline Numbering
	  tab (click the Bullets and Numbering command on the Format menu).
	
	2. Format the page numbers in each subdocument to include chapter numbers. (To
	  locate the Chapter Numbers option, click Page Numbers on the Insert menu, and
	  then click Format.)
	
	3. In the master document, turn on Heading Numbering.
	
	Additional query words: zero null nil none chapter numbers numbering table contents index TOC 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
