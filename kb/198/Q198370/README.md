---
layout: page
title: "Q198370: WD97: Find/Replace with Wildcard Finds All Punctuation"
permalink: kb/198/Q198370/
---

## Q198370: WD97: Find/Replace with Wildcard Finds All Punctuation

	Article: Q198370
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use wildcards to find punctuation at the end of a word, Word finds
	every instance of that punctuation.
	
	WORKAROUND
	==========
	
	Method 1: Finding Punctuation at the End of a Word or Number
	------------------------------------------------------------
	
	To find the punctuation that exists at the end of a word or number (for example,
	This is a test: or 19: ) and is followed by a space, follow these steps:
	
	1. On the Edit menu, click Find or Replace.
	
	  NOTE: If you see More, click it.
	
	2. Select the Use Wildcards check box.
	
	3. Click No Formatting, if available; otherwise, go to step 4.
	
	4. Click Special and choose "End of Word >" (without the quotation marks).
	
	5. In the Find What box, after the > type the punctuation you want to find
	  and press the spacebar. The Find What box should now resemble the following:
	
	  >:space
	
	6. Click Find Next.
	
	Method 2: Finding Punctuation That Separates Words or Numbers
	-------------------------------------------------------------
	
	To find punctuation that exists separating words or numbers (for example,
	test:test or 19:91), follow these steps:
	
	1. On the Edit menu, click Find or Replace.
	
	  NOTE: If you see More, click it.
	
	2. Select the Use Wildcards check box.
	
	3. Click No Formatting, if available; otherwise, go to step 4.
	
	4. Click Special and choose "End of Word >."
	
	5. In the Find What box, after the > type in the punctuation being searched
	  for. Then click Special again, and select "Beginning of Word <". The Find
	  What box should now resemble the following:
	
	  >:<
	
	6. Click Find Next.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about the find and replace function, click the Office
	Assistant, type "find and replace", click Search, and then click "Find and
	replace".
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information about this situation in earlier versions of Word,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q157461 WD: Find/Replace <End Of Word> Malfunctions with Punctuation
	
	Additional query words: editfind editreplace
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
