---
layout: page
title: "Q140645: WD97: Grammar Checker Runs Continuously (Screen Flickers)"
permalink: kb/140/Q140645/
---

## Q140645: WD97: Grammar Checker Runs Continuously (Screen Flickers)

	Article: Q140645
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion kbproof WordCon word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type in an international version of Microsoft Word 97, the screen
	flickers and CPU usage is at or near 100 percent.
	
	CAUSE
	=====
	
	The Check Grammar As You Type option is turned on. When Word encounters certain
	groups of characters, the Grammar Checker does not stop and continues processing
	the document; this continuous processing causes screen flickering and heavy CPU
	usage.
	
	
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	To temporarily work around the screen flicker and heavy CPU usage problem, turn
	off the Check Grammar As You Type option. To do this, follow these steps:
	
	1. On the Tools menu, click Options, and then click the Spelling & Grammar
	  tab.
	
	2. Under Grammar, click to clear the Check Grammar As You Type check box.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	This problem was corrected in Microsoft Word 2000.
	
	Additional query words: shimmer spellchecker spelling tool proofing
	
	======================================================================
	Keywords          : kbdta kbconversion kbproof WordCon word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
