---
layout: page
title: "Q179087: WD97: Selected Word Not Checked for Spelling First"
permalink: /kb/179/Q179087/
---

## Q179087: WD97: Selected Word Not Checked for Spelling First

	Article: Q179087
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a word to check its spelling and you run the spelling checker,
	Word selects and checks the spelling of a different word.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- The Check grammar with spelling setting is selected on the Spelling and
	  Grammar tab of the Options dialog box (click Options on the Tools menu).
	
	  -and-
	
	- The sentence in which the selected word occurs contains more than one
	  misspelled word.
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, turn off the Check grammar with spelling
	setting. To do this, follow these steps:
	
	1. On the Tools menu, click Options, and then click the Spelling and Grammar
	  tab.
	
	2. Under Grammar, clear the Check grammar with spelling check box.
	
	3. Click OK.
	
	MORE INFORMATION
	================
	
	If there is a single misspelled word in the sentence, the spelling check is
	performed correctly. However, if there is another misspelled word in the same
	sentence prior to the word that you selected to be checked, Word selects the
	first misspelled word in the sentence. Word then checks any other misspelled
	words in the same sentence. After Word completes the spelling check of the
	sentence, a dialog box with the following message appears:
	
	  Word finished checking the selection. Do you want to continue checking the
	  remainder of the document?
	
	Click Yes if you want to check the rest of the document; click No if you do not
	want to continue checking the document.
	
	For additional information about spelling and grammar issues, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q87857 WD: Spelling and Grammar Checkers Do Not Flag Single Letters
	
	  Q89646 WD: Error Msg: Text Formatted with No Proofing Was Skipped
	
	  Q167655 WD97: Frequently Asked Questions About the Grammar Checker
	
	  Q43844 WD: Spelling Checker Ignores Words in Uppercase Letters
	
	Additional query words:
	
	======================================================================
	Keywords          : kbproof 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
