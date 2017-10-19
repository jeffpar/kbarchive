---
layout: page
title: "Q165603: WD97: Borders.Count Returns Five on a Selected Paragraph"
permalink: /kb/165/Q165603/
---

## Q165603: WD97: Borders.Count Returns Five on a Selected Paragraph

	Article: Q165603
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications Borders.Count command on a
	selected paragraph, the value returned is five instead of an expected value of
	four.
	
	CAUSE
	=====
	
	By design, Borders.Count returns five because paragraph borders have an inside
	horizontal border which you can set and/or retrieve even though it may not
	visible. If you insert another paragraph, the inside border may or may not
	become visible, depending on your setting.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
