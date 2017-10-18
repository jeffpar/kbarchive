---
layout: page
title: "Q168339: WD97: Invalid Page Fault Promoting/Demoting Heading"
permalink: kb/168/Q168339/
---

## Q168339: WD97: Invalid Page Fault Promoting/Demoting Heading

	Article: Q168339
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In outline or master document view, when you hold down the ALT key and drag a
	heading level with the mouse to promote or demote the heading level, the
	following error message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, the following error message is displayed:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:301ef3a9.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	MORE INFORMATION
	================
	
	When you use the ALT key while dragging a heading level, you can promote or
	demote a single paragraph without affecting the lower level paragraphs under it.
	When you drag a heading level without using the ALT key, you can equally promote
	or demote the selected paragraph and all paragraphs under it.
	
	REFERENCES
	==========
	
	For more information about keyboard shortcuts, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q157935 WD97: Keyboard Shortcuts for Word 97
	
	For more information about keyboard shortcuts in Microsoft Word 97, click the
	Office Assistant, type "keyboard shortcuts," click Search, and then click
	"shortcut keys."
	
	NOTE: If the Office Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Word Help is not installed on your computer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00 gpf general protection hang ipf
	
	======================================================================
	Keywords          : kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
