---
layout: page
title: "Q196878: WD97: AutoCorrect Doesn't Replace with Mixed Case"
permalink: /kb/196/Q196878/
---

## Q196878: WD97: AutoCorrect Doesn't Replace with Mixed Case

{% raw %}

	Article: Q196878
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbproof word97
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	AutoCorrect does not correct your text automatically when you press the
	SPACEBAR.
	
	This behavior can occur when either of the following conditions is true:
	
	- You created the Replace text in AutoCorrect using mixed case (for example,
	  AbCdEf) and in your document you type all lowercase (abcdef), all uppercase
	  (ABCDEF), or a combination of mixed case letters that does not exactly match
	  the case of the AutoCorrect text (abcDef).
	
	  -or-
	
	- You created the Replace text in AutoCorrect using all uppercase (for example,
	  ABCDEF) and in your document you type text that is not all uppercase (abcdef
	  or Abcdef).
	
	CAUSE
	=====
	
	By design of Microsoft Word, when you create an AutoCorrect entry using mixed
	case or all uppercase, AutoCorrect recognizes the entry only when you type the
	mixed case or uppercase text exactly as it is entered in AutoCorrect.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1
	--------
	
	Create all your AutoCorrect entries as lowercase. This will give you three ways
	(lowercase, uppercase, initial capped) to enter the text that AutoCorrect will
	recognize and automatically correct.
	
	Method 2
	--------
	
	If the entry contains mixed case, type the word in the correct case as displayed
	in the AutoCorrect dialog box.
	
	MORE INFORMATION
	================
	
	When you create an AutoCorrect entry with all lowercase text, AutoCorrect
	corrects the entry automatically when you press the SPACEBAR regardless of
	whether the text is typed in all lowercase, all uppercase, or with the first
	letter capitalized.
	
	Additional query words: case auto correct capital all caps lower upper mixed sensitive 8.0
	
	======================================================================
	Keywords          : kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
