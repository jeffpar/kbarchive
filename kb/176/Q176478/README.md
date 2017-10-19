---
layout: page
title: "Q176478: WD97: TimeOut Argument Ignored by Some Dialog Boxes"
permalink: /kb/176/Q176478/
---

## Q176478: WD97: TimeOut Argument Ignored by Some Dialog Boxes

	Article: Q176478
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the TimeOut argument of the Display or Show methods for built-in
	Word dialog boxes, some built-in dialog boxes do not respond to the value set
	for the TimeOut argument.
	
	CAUSE
	=====
	
	By design, the following dialog boxes do not respond to the TimeOut argument.
	
	  Built-In Dialog Box            Related VBA Dialog Constant
	  ----------------------------------------------------------
	
	  File                           wdDialogFileNew
	
	  Tools Customize                wdDialogToolsCustomize
	
	  Tools Customize Menus          wdDialogToolsCustomizeMenus
	
	  Find In Field                  wdDialogMailMergeFindRecord
	
	  Manage Fields                  wdDialogToolsManageFields
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about the Display method, from the Visual Basic Editor,
	click the Office Assistant, type "Display" (without the quotation marks), click
	Search, and then click to view "Display Method."
	
	For more information about the Show method, from the Visual Basic Editor, click
	the Office Assistant, type "Show" (without the quotation marks), click Search,
	and then click to view "Show Method (Word 97)."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
