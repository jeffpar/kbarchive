---
layout: page
title: "Q172326: WD97: Spelling Checker Constantly Checks Same Word"
permalink: /kb/172/Q172326/
---

## Q172326: WD97: Spelling Checker Constantly Checks Same Word

{% raw %}

	Article: Q172326
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you check the spelling in a document, the spelling checker may constantly
	recheck the same word.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- You click Change All in the spelling checker dialog box.
	
	- The spelling checker finds more than one instance of a misspelled word.
	
	- The misspelled word is not in the main or custom dictionaries.
	
	WORKAROUND
	==========
	
	Press ESC to stop the spelling checker from constantly rechecking the same
	word.
	
	To prevent this problem from occurring, use any of the following methods:
	
	Method 1: Add the Misspelled Word to the Custom Dictionary
	----------------------------------------------------------
	
	To add the misspelled word to your custom dictionary, either click Add in the
	Spelling and Grammar dialog box, or right-click the misspelled word, and then
	click Add on the shortcut menu.
	
	Method 2: Use Replace to Correct Your Misspelled Word
	-----------------------------------------------------
	
	1. On the Edit menu, click Replace.
	
	2. On the Replace tab, type the misspelled word in the Find what box.
	
	3. Press TAB to the Replace with box.
	
	4. Type your correction to the misspelled word and then click Replace All.
	
	5. When you are prompted with "Word has completed its search of the document and
	  has made <n> replacements," click OK.
	
	  NOTE: <n> is the number of words that were replaced (corrected).
	
	6. Click Close to quit the Find and Replace dialog box.
	
	Method 3: Change Each Misspelled Word Individually
	--------------------------------------------------
	
	1. On the Tools menu, click Spelling and Grammar.
	
	2. When Word selects (flags) a misspelled word, type in the corrected spelling.
	
	3. Click Change All
	
	4. When you are prompted with "You have chosen a word that is not found in the
	  main or custom dictionaries. Do you want to use this word and continue
	  checking?," click No.
	
	  NOTE: The misspelled word is now changed and is still selected.
	
	5. Click Ignore. The spelling checker continues to the next misspelled word.
	
	6. Repeat your changes to the next misspelled word and then click Change.
	
	7. Repeat steps 1-3 until the spelling check is complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about correcting spelling errors, click the Office
	Assistant, type "spelling checking," click Search, and then click to view
	"Correct spelling and grammar."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	REFERENCES
	==========
	
	For more information about the spelling checker, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157478 WD97: What's New in Word 97
	
	  Q164332 WD97: Can't Use the Spelling Check If Text Is Formatted with Certain
	  Fonts
	
	  Q167621 WD97: Invalid Page Fault with Proofing Tools on Network
	
	Additional query words: hang freeze endless continuous loop
	
	======================================================================
	Keywords          : kbdta kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
