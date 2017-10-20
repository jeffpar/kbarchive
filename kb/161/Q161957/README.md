---
layout: page
title: "Q161957: WD97: Word Stops When You Resume Spelling Check (Error in Field)"
permalink: /kb/161/Q161957/
---

## Q161957: WD97: Word Stops When You Resume Spelling Check (Error in Field)

{% raw %}

	Article: Q161957
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Spelling Checker, if you right-click a misspelled word, click
	Spelling on the shortcut menu, and then click Resume in the Spelling dialog box,
	the following error message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	If you click Details, the following error message appears:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0317:304928al
	
	  -or-
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:30494213
	
	NOTE: For these errors to occur, the "Check Spelling As You Type" option must be
	selected, the Spelling dialog box must be displayed on the screen, and in some
	cases, field codes must be displayed.
	
	
	CAUSE
	=====
	
	The spelling error is contained in a field, and there is no separation between
	the field and text.
	
	For example: Name-{Quote "Typee your name here" \* MergeFormat}
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Type a space between the text and the field code.
	
	  -or-
	
	- Correct the misspelling in the field code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	To View Field Codes in Word
	---------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the View tab, click the Field Codes check box to select it, and click
	  OK.
	
	To Turn On "Check Spelling As You Type"
	---------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the Spelling And Grammar tab.
	
	3. Select the "Check Spelling As You Type" option, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
