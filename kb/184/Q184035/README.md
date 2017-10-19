---
layout: page
title: "Q184035: WD97: Case Change in Spelling Checker Causes Constant Recheck"
permalink: /kb/184/Q184035/
---

## Q184035: WD97: Case Change in Spelling Checker Causes Constant Recheck

	Article: Q184035
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
	
	If you spell check a document with the spelling option "Ignore words in
	UPPERCASE" turned off, when you change the case of a word that is repeated in
	the document and you click Change All, the spelling checker will constantly
	recheck the same word.
	
	NOTE: Press ESC to stop the spelling checker from constantly rechecking the same
	word.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- On the Spelling And Grammar tab (click Options on the Tools menu), you have
	  turned off the "Ignore words in UPPERCASE" option.
	
	  -and-
	
	- The misspelled word is not in the main and custom dictionaries.
	
	  -and-
	
	- The spelling checker finds more than one instance of the misspelled word.
	
	  -and-
	
	- You click Change All in the Spelling and Grammar dialog box.
	
	  -and-
	
	- You changed the case of the misspelled word in the Not In Dictionary box in
	  the Spelling And Grammar dialog box.
	
	WORKAROUND
	==========
	
	Use one of the following methods to correct the case of your misspelled word:
	
	Method 1: Select the "Ignore Words in UPPERCASE" option
	-------------------------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. On the Spelling And Grammar tab, click to select the "Ignore words in
	  UPPERCASE" check box and then click OK.
	
	3. On the Tools menu, click Spelling and Grammar.
	
	Method 2: Change the Case of each Misspelled Word Individually
	--------------------------------------------------------------
	
	1. On the Tools menu, click Spelling And Grammar.
	
	2. When the spelling checker selects (flags) a misspelled word, type in the
	  corrected spelling.
	
	3. When you are prompted "You have chosen a word that is not found in the main
	  or custom dictionaries. Do you want to use this word and continue checking,"
	  click No.
	
	  NOTE: The misspelled word is now changed and is still selected.
	
	4. Click Ignore. The spelling check continues to the next misspelled word.
	
	5. Repeat your changes to the next misspelled word and then click Change.
	
	6. Repeat steps 2 through 5 until the spell check is complete.
	
	Method 3: Use Replace to Change the Case of each Misspelled Word
	----------------------------------------------------------------
	
	1. On the Edit menu, click Replace, and then click the Replace tab.
	
	2. In the Find What box, type the misspelled word.
	
	3. In the Replace With box, type your correction to the misspelled word and then
	  click Replace All.
	
	4. When you receive a message indicating that Word has completed its search and
	  replaced the misspelled words, click OK.
	
	5. Click Close.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172326 WD97: Spelling Checker Constantly Checks Same Word
	
	  Q178407 WD97: Punctuation May Cause Word to Constantly Check Same Word
	
	Additional query words: stop respond responding broken breaks die loop continuously continuous
	
	======================================================================
	Keywords          : kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
