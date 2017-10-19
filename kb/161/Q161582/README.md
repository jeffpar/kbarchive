---
layout: page
title: "Q161582: WD97: AutoCorrect Text Deleted, Partially Visible in Form Field"
permalink: /kb/161/Q161582/
---

## Q161582: WD97: AutoCorrect Text Deleted, Partially Visible in Form Field

	Article: Q161582
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you type AutoCorrect text in a form field in a protected form, you receive
	one of the following symptoms:
	
	- The AutoCorrect text is deleted.
	
	  -or-
	
	- Only the first four characters of the AutoCorrect text are visible.
	
	CAUSE
	=====
	
	The form field is set to unlimited maximum length.
	
	WORKAROUND
	==========
	
	To work around this problem, change the maximum length of the form field to a
	fixed length.
	
	1. On the Tools menu, click Unprotect Document.
	
	2. Right-click the form field and then click Properties on the shortcut menu.
	
	3. In the Text Form Field Options dialog box, set the Maximum Length to a value
	  other than Unlimited.
	
	NOTE: Ensure that the value you set is large enough to contain the text to be
	entered. If the value is too small, then the text typed may be incomplete or
	truncated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	REFERENCES
	==========
	
	For more information about using AutoCorrect, click Contents And Index on the
	Help menu, click the Index tab in Word Help, type the following text
	
	  AutoCorrect
	
	and then double-click the selected text to go to the topic you want. If you are
	unable to find the information you need, ask the Office Assistant.
	
	Additional query words: 8.0 auto correct automatic automatically disappear missing replace space
	
	======================================================================
	Keywords          : kbualink97 kbdta kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
