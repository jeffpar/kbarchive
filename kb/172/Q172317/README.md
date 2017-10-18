---
layout: page
title: "Q172317: WD97: Automatic Numbered List Doesn't Work If Text Contains Tabs"
permalink: kb/172/Q172317/
---

## Q172317: WD97: Automatic Numbered List Doesn't Work If Text Contains Tabs

	Article: Q172317
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbnumberingkbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you type a number followed by some text that contains a tab, Microsoft Word
	will not automatically number the next paragraph when you press ENTER.
	
	CAUSE
	=====
	
	This functionality is by design. When you type text followed by a tab, Microsoft
	Word is unsure about what the intention of the item is. Tabs do not typically
	fall inside the text of a numbered list. Therefore, when tabs occur in the text
	of a numbered list, the automatic numbering feature is turned off.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Type the first numbered paragraph without the tab. After the second paragraph
	  has been automatically numbered, go back and insert the tab in the first
	  numbered paragraph.
	
	  -or-
	
	- Type all the information in the list, and then apply the numbering format as
	  follows:
	
	  1. Select the entire list of items.
	
	  2. On the Format menu, click Bullets And Numbering, and then select the
	     Numbered tab.
	
	  3. Select the style that you want, and then press OK.
	
	  NOTE: You may also apply numbering by selecting the items in the list, and
	  then clicking the numbering button on the formatting toolbar.
	
	MORE INFORMATION
	================
	
	To activate the automatic numbered lists feature, type a number followed by some
	text, and then press ENTER. This causes Microsoft Word to automatically number
	the next paragraph with the next number.
	
	This behavior does not occur in Microsoft Word 7.x.
	
	REFERENCES
	==========
	
	For additional information about autoformat features of Word, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q159941 WD97: General Information about "Auto" Features in Word 97
	
	  Q165301 WD97: Auto Numbering Changes by One After You Press ENTER
	
	  Q159943 WD97: General Information About Bullets and Numbering
	
	For more information about "automatic numbered lists," click the Office
	Assistant, type "automatic numbered lists," click Search, and then click one of
	the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbnumbering kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
