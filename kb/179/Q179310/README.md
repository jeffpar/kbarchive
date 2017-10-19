---
layout: page
title: "Q179310: WD97: Word May Error/Quit During Grammar Check of Long Sentence"
permalink: /kb/179/Q179310/
---

## Q179310: WD97: Word May Error/Quit During Grammar Check of Long Sentence

	Article: Q179310
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfile kbdta kbproofkbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under extremely rare circumstances, when you type a long, complex sentence, Word
	may unexpectedly quit and you will not be prompted to save any open documents,
	or you may receive one of the following error messages:
	
	  Winword caused an Invalid Page Fault in module MSGREN32.dll at
	  <address>
	
	-or-
	
	  There was an unexpected error in the grammar checker. Word cannot complete
	  the grammar check.
	
	CAUSE
	=====
	
	This problem occurs when the grammar checker attempts to evaluate a long,
	complex sentence that includes several conjunctions such as "or" and "and" along
	with at least one preposition such as "of," "to," "by," or "from."
	
	
	WORKAROUND
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	NOTE: The Microsoft Office 97 SR-2 Patch requires that you first install SR-1.
	
	
	Working Around This Problem If You Are Unable to Obtain SR-2
	------------------------------------------------------------
	
	To temporarily work around this problem, disable the grammar checker in Word. To
	do this, follow these steps:
	
	1. On the Tools menu, click Options, and select the Spelling & Grammar tab.
	
	2. Click to clear the Check Grammar As You Type and Check Grammar With Spelling
	  check boxes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: landlord hang crash bomb lock up freeze legal law pleading brief lawyer tenant ipf
	
	======================================================================
	Keywords          : kbfile kbdta kbproof kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
