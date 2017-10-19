---
layout: page
title: "Q162118: WD97: Closing Document Window Does Not Close VB Editor"
permalink: /kb/162/Q162118/
---

## Q162118: WD97: Closing Document Window Does Not Close VB Editor

	Article: Q162118
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming kbdta word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	SYMPTOMS
	========
	
	When there are no documents open, the Visual Basic Editor remains open.
	
	CAUSE
	=====
	
	All documents and templates contain at least one Visual Basic for Applications
	project including the global template, Normal. Because the global Normal
	template is open as long as Word is running, the Visual Basic Editor will remain
	open when there are no documents open.
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbprogramming kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
