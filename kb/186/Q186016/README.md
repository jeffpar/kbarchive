---
layout: page
title: "Q186016: WD97: Spelling Checker Constantly Rechecks Words in All Caps"
permalink: /kb/186/Q186016/
---

## Q186016: WD97: Spelling Checker Constantly Rechecks Words in All Caps

{% raw %}

	Article: Q186016
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you check the spelling in a document with words formatted with the All Caps
	attribute, the spelling checker may constantly recheck the same word.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- The correctly spelled word contains at least two capital letters (TimeLab for
	  example), and is in the custom dictionary.
	
	  -and-
	
	- The misspelled word is formatted with the All Caps effect. (On the Format
	  menu, click Font, and then click to select the All Caps check box.)
	
	  -and-
	
	- You click Change All in the Spelling And Grammar (spelling checker) dialog
	  box.
	
	WORKAROUND
	==========
	
	To work around this problem, press ESC to stop the spelling checker from
	constantly rechecking the same word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information on similar problems, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q172326 WD97: Spelling Checker Constantly Checks Same Word
	
	  Q178407 WD97: Punctuation May Cause Word to Constantly Check Same Word
	
	  Q184035 WD97: Case Change in Spelling Checker Causes Constant Recheck
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
