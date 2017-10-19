---
layout: page
title: "Q228446: WD97: Styles with Custom Outline Numbering Change Unexpectedly"
permalink: /kb/228/Q228446/
---

## Q228446: WD97: Styles with Custom Outline Numbering Change Unexpectedly

	Article: Q228446
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have documents based on templates with customized Outline Numbering
	styles, the tab or indent settings (or both) may unexpectedly change. This
	problem occurs when you select the "Automatically update document styles" check
	box or open a document that already has this option turned on.
	
	This problem is intermittent and can be difficult to reproduce. The document is
	being incorrectly modified when it is updated from the template using the
	"Automatically update document styles" feature.
	
	The following may occur in the document:
	
	- The space between the number or bullet and the paragraph text changes.
	
	-or-
	
	- The left paragraph indent changes.
	
	-or-
	
	- Both of these can occur.
	
	These changes can occur even though the template's style definitions are still
	correctly defined.
	
	CAUSE
	=====
	
	The "Automatically update document styles" feature has been turned on.
	
	WORKAROUND
	==========
	
	Do not turn on the "Automatically update document styles" feature.
	
	1. On the Tools menu, click Templates and Add-Ins.
	
	2. If the "Automatically update document styles" check box is selected, click to
	  clear the check box.
	
	If your document has already been incorrectly modified because the "Automatically
	update document styles" setting was turned on, you can use one of the following
	procedures to correct the document formatting:
	
	Method 1: Reset the Outline Numbering Scheme in the Document
	
	1. On the Format menu, click Bullets and Numbering.
	
	2. Click the Outline Numbered tab and click OK.
	
	NOTE: You do not need to change or modify the selected numbering scheme.
	Method 2: Use the Organizer to Manually Copy the Style(s) from the Template to
	the Document
	
	For more information about how to copy styles using the organizer, click
	"Contents and Index" on the Help menu, click the Index tab in Contents and Index
	Help, type the following text
	
	  styles, copy
	
	and then double-click the selected text to go to the "Copy styles, AutoText
	entries, toolbars, or macros" topic. If you are unable to find the information
	you need, ask the Office Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about customizing styles to include outline numbering,
	click the Office Assistant, type "modify a style" (without the quotation marks),
	click Search, and then click to view "Modify a style."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: lost loses gone shifts shifted moves moved corrupt corrupted damaged changed changes heading level WD2000 WD97 Word97 tabs indents
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
