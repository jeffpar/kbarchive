---
layout: page
title: "Q178407: WD97: Punctuation May Cause Word to Constantly Check Same Word"
permalink: kb/178/Q178407/
---

## Q178407: WD97: Punctuation May Cause Word to Constantly Check Same Word

	Article: Q178407
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add punctuation to the end of a word that is not contained in either
	the main or custom dictionaries and then click Change All, the spelling checker
	will enter an infinite loop while spell checking the same word.
	
	NOTE: To stop the infinite loop of the spelling checker, press ESC.
	
	CAUSE
	=====
	
	The added punctuation is not considered part of the word, so when the spelling
	checker rechecks the misspelled word, which it does after you make a change, it
	finds the same word and adds more punctuation. The spelling checker then checks
	the word again, and so on.
	
	RESOLUTION
	==========
	
	To correct this problem, do not add punctuation to a misspelled word in the "Not
	In Dictionary" area of the Spelling and Grammar dialog box.
	
	WORKAROUND
	==========
	
	To avoid this behavior, use the Replace function in Word to search for instances
	of the word without punctuation and replace the word with the punctuation. To do
	this, follow these steps:
	
	1. On the Edit menu, click Replace.
	
	2. In the Find What box, type the text you want to search for.
	
	3. In the Replace with box, type the replacement text.
	
	4. Click Replace All.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: hang endless
	
	======================================================================
	Keywords          : kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
