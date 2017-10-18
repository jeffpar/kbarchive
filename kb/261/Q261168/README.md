---
layout: page
title: "Q261168: WD97: Clicking Page Number in TOC Opens Web Toolbar"
permalink: kb/261/Q261168/
---

## Q261168: WD97: Clicking Page Number in TOC Opens Web Toolbar

	Article: Q261168
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the page number in a table of contents in a Word document, the
	Web toolbar may be displayed.
	
	NOTE: When you move the mouse pointer over a page number in a table of contents,
	the mouse pointer changes to a hand.
	
	
	CAUSE
	=====
	
	The page numbers in a table of contents are actually a HYPERLINK field similar
	to the following:
	
	  {HYPERLINK \l "_Toc481556296"}
	
	When Word detects a hyperlink, either an internal document hyperlink field or a
	Web hyperlink field, Word displays the Web toolbar automatically.
	
	MORE INFORMATION
	================
	
	To hide the Web toolbar, point to Toolbars on the View menu, and then click
	Web.
	
	A hyperlink is a "hot spot" that allows you to jump to another location. The
	location can be another file on your hard disk or company's network (such as a
	Microsoft Word document or a Microsoft Excel worksheet), an Internet address
	(such as http://www.microsoft.com), or a location such as a bookmark or slide.
	
	The field includes display text, which is often blue and underlined, that you
	click to jump to the specified location.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
