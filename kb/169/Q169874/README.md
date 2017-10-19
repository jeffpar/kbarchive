---
layout: page
title: "Q169874: WD97: Hyperlink Nested Inside Other Hyperlink After Drag &amp; Drop"
permalink: /kb/169/Q169874/
---

## Q169874: WD97: Hyperlink Nested Inside Other Hyperlink After Drag &amp; Drop

	Article: Q169874
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a drag and drop operation to create a hyperlink in a Word 97
	document that already contains a hyperlink, the new hyperlink may be nested
	inside the existing hyperlink.
	
	NOTE: This behavior occurs when you use a drag and drop operation and you create
	a hyperlink to another file, such as a Microsoft Excel 97 file, or another
	hyperlink within the same document.
	
	CAUSE
	=====
	
	The insertion point was inside an existing hyperlink field when you clicked
	Create Hyperlink Here on the shortcut menu that appeared when you completed the
	drag and drop operation.
	
	WORKAROUND
	==========
	
	Move the insertion point so that it is not positioned inside an existing
	hyperlink field before you create the new hyperlink.
	
	MORE INFORMATION
	================
	
	Both hyperlinks will work correctly whether or not they are nested. However,
	when one hyperlink is nested inside another, it is difficult to determine which
	hyperlink to click.
	
	For more information about hyperlinks, click the Office Assistant, type
	"hyperlink" (without the quotation marks), click Search, and then click "create
	hyperlinks."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbusage kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
