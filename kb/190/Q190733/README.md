---
layout: page
title: "Q190733: WD97: Opening Word Document in Text Editor Displays Deleted Text"
permalink: /kb/190/Q190733/
---

## Q190733: WD97: Opening Word Document in Text Editor Displays Deleted Text

	Article: Q190733
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
	
	If you open a Word for Windows document in a text editor such as Windows
	Notepad, the file may contain text that was previously deleted.
	
	CAUSE
	=====
	
	This behavior is by design in Microsoft Word when you save a document with the
	Allow Fast Saves option selected. Word records only the changes to the document
	and appends them to the end of the file. This means your document still contains
	the deleted text, even though it does not appear on the screen. Word removes
	deleted text from your document only when you perform a full save. (To display
	the Allow Fast Saves option, click Options on the Tools menu, and click the Save
	tab.)
	
	WORKAROUND
	==========
	
	Use either of the following methods if you do not want a document to contain
	deleted text.
	
	Method 1: Disable Allow Fast Saves
	----------------------------------
	
	To prevent a document from containing deleted text that someone could view with a
	text editor, disable the Allow Fast Saves option and perform a full save. To do
	this, follow these steps:
	
	1. On the Tools menu, click Options, and click the Save tab.
	
	2. Click to clear the Allow Fast Saves check box.
	
	3. Save your document.
	
	When you do this, Word incorporates all the changes into your document and
	removes deleted text.
	
	Method 2: Copy and Paste into a New Document
	--------------------------------------------
	
	This method allows you to continue to use the Fast Save feature. To use this
	method, follow these steps:
	
	1. When all final revisions are completed, select the entire document and click
	  Copy on the Edit menu.
	
	2. Start a new document and click Paste on the Edit menu to copy the original
	  document into a new document.
	
	The new document will be free of previous editing changes (deleted text).
	
	MORE INFORMATION
	================
	
	Word always performs a full save when the Allow Fast Saves option is turned off.
	In addition, even with the Allow Fast Saves option turned on, Word periodically
	performs a full save of your document.
	
	The Allow Fast Saves option provides greater operating speed while working in
	Word. It requires less time to append changes (fast save) than to incorporate
	them in your document (full save).
	
	
	
	Additional query words: fastsave safety confidential
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
