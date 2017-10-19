---
layout: page
title: "Q187507: WD97: Saving a Document as HTML Causes Table Formatting Changes"
permalink: /kb/187/Q187507/
---

## Q187507: WD97: Saving a Document as HTML Causes Table Formatting Changes

	Article: Q187507
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Word document, when you select a bordered table, copy and paste it several
	times throughout the document, save it in HTML format, and then view it in a Web
	browser, the table formatting will be different and some text within the table
	will disappear.
	
	CAUSE
	=====
	
	The HTML converter, Html32.cnv, does not properly convert bordered tables that
	have been copied from one part of a Word document to another part of the
	document prior to saving it in HTML format. Further, the HTML conversion from a
	Word document will not include the text of the cells in the tables that were
	copied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Word 2000.
	
	
	
	
	Additional query words: conversion
	
	======================================================================
	Keywords          : kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
