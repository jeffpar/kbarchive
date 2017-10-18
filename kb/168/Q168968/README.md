---
layout: page
title: "Q168968: WD97: AutoCorrect Entry &quot;wern't&quot; Not Corrected"
permalink: kb/168/Q168968/
---

## Q168968: WD97: AutoCorrect Entry &quot;wern't&quot; Not Corrected

	Article: Q168968
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you type the word "wern't" (without the quotation marks) and then press the
	SPACEBAR, the word is not automatically changed to "weren't."
	
	CAUSE
	=====
	
	Wern't is one of the predefined AutoCorrect entries provided with Microsoft
	Word. This problem does not occur with other entries in the AutoCorrect list
	that contain an apostrophe.
	
	WORKAROUND
	==========
	
	NOTE: Method 1 may not work for all instances of the AutoCorrect entry. If a
	curly apostrophe is not needed, then use Method 2.
	
	Method 1: Turn on Smart Quotes
	------------------------------
	
	1. On the Tools menu, click AutoCorrect.
	
	2. Click the "AutoFormat As You Type" tab.
	
	3. Under "Replace as you type," click to select the "'Straight quotes' with
	  'smart quotes'" check box, and then click OK.
	
	Method 2: Replace the AutoCorrect Entry
	---------------------------------------
	
	1. On the Tools menu, click AutoCorrect.
	
	2. On the AutoCorrect tab, scroll down the AutoCorrect list to find "wern't."
	  Click to select the AutoCorrect entry, and then click Delete.
	
	3. In the Replace box, press the Delete key on the keyboard to remove the entry,
	  and then type "wern't" (without the quotation marks).
	
	4. Press the TAB key to move to the With box, and then type "weren't" (without
	  the quotation marks).
	
	5. Click Add to add the entry back to the AutoCorrect list, and then click OK.
	
	NOTE: When you add the AutoCorrect entry back to the AutoCorrect list, the
	apostrophe will not be a curly (Smart Quote) apostrophe.
	
	For more information about adding entries to the AutoCorrect list, click the
	Office Assistant, type "How do I add to the AutoCorrect list?" (without the
	quotation marks), click Search, click to view "Automatically correct text," and
	then click to view "Add an AutoCorrect entry to correct a typing error."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on the computer, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the AutoCorrect feature, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q159941 WD97: General Information about "Auto" Features in Word 97
	
	  Q135778 Where AutoCorrect Entries and Settings Are Stored
	
	
	Additional query words: 8.0 8.00 acl error incorrect wrong
	
	======================================================================
	Keywords          : kbdta kbproof winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
