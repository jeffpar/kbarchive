---
layout: page
title: "Q198125: WD97: Hyperlink Is Lost When Link Dragged from Word to Excel"
permalink: /kb/198/Q198125/
---

## Q198125: WD97: Hyperlink Is Lost When Link Dragged from Word to Excel

	Article: Q198125
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you drag a hyperlink from a Word document to a Microsoft Excel workbook,
	the hyperlink is lost.
	
	CAUSE
	=====
	
	By design, Word uses Rich-Text Format (RTF) when you drag or copy text. Because
	Excel does not accept RTF-formatted text, the hyperlinks are lost and you see
	only the text.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Copy Hyperlink command to copy the
	hyperlink from Word. In Excel, use the Paste Hyperlink command. To do this,
	follow these steps:
	
	1. In Word, right-click the hyperlink.
	
	2. On the shortcut menu, point to Hyperlink, and then click Copy Hyperlink.
	
	3. In Excel, click the cell where you want to paste the hyperlink.
	
	4. On the Edit menu, click Paste Hyperlink.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
