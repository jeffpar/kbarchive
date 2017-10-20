---
layout: page
title: "Q185156: WD97: Spelling Checker Deletes Tab/Spaces from Paragraph Start"
permalink: /kb/185/Q185156/
---

## Q185156: WD97: Spelling Checker Deletes Tab/Spaces from Paragraph Start

{% raw %}

	Article: Q185156
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you correct a misspelled word in the "Not in Dictionary" box of the
	"Spelling and Grammar" dialog box and then click Change, tabs or spaces that
	were typed at the beginning of the paragraph may be deleted.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, turn on the "Tabs and backspace set left
	indent" option. When you use this option (which is turned on by default), when
	you type a tab at the beginning of a paragraph, the tab is converted to a left
	paragraph indent. When you check the spelling of your document, the indents are
	not deleted.
	
	NOTE: Tabs that are typed at the start of a paragraph before this option is
	turned on will not be affected by this option. Any new tabs typed at the start
	of a paragraph will be changed to a left paragraph indent.
	
	To turn on the "Tabs and backspace set left indent" option, use the following
	steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Edit tab, select the "Tabs and backspace set left indent" check box,
	  and then click OK.
	
	WORKAROUND
	==========
	
	To correct the spelling mistake, use one of the following methods.
	
	Method 1: Use One of the Suggestions
	------------------------------------
	
	In the "Spelling and Grammar" dialog box, select one of the words in the
	Suggestions box, and then click Change.
	
	Method 2: Make the Spelling Correction in the Document
	------------------------------------------------------
	
	With the "Spelling and Grammar" dialog box open, click in your document, correct
	the spelling mistake, and then click Resume to continue to check the spelling of
	your Word document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	Additional query words: remove missing gone omit
	
	======================================================================
	Keywords          : kbdta kbproof word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
