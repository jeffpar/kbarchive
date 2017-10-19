---
layout: page
title: "Q172748: WD97: Tab Character Appears as Space in Web Browser"
permalink: /kb/172/Q172748/
---

## Q172748: WD97: Tab Character Appears as Space in Web Browser

	Article: Q172748
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you save a document that contains tabs as HTML, the
	tab characters may appear as a single space if you view the document in a Web
	browser.
	
	CAUSE
	=====
	
	Word converts tabs into the HTML code for tab characters: "&#9;" (without
	the quotation marks). However, most Web browsers display tabs as a single space.
	
	WORKAROUND
	==========
	
	To work around this problem, use a table or indents to layout text, instead of
	tab characters.
	
	MORE INFORMATION
	================
	
	To observe this behavior, create a new document containing the following
	information:
	
	  "1<TAB>fred
	  <TAB><TAB>two tabs" (without the quotation marks)
	
	where <TAB> is the character produced by pressing the TAB key.
	
	Save the document as HTML. Word converts the text to the following HTML code:
	
	  <P>1&#9;fred</P>
	  <P>&#9;&#9;two tabs</P>
	
	NOTE: To view the HTML code, click HTML Source on the View menu.
	
	When viewed in a Web browser, the HTML document may appear as:
	
	  1 fred
	  two tabs
	
	REFERENCES
	==========
	
	For more information about inserting HTML tags, click the Office Assistant, type
	"HTML tags" (without the quotation marks), click Search, and then click "Insert
	HTML markup."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information about working with HTML in Word, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157086 WD97: Limitations of Converting from Word Format to HTML
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
