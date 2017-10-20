---
layout: page
title: "Q215343: WD97: Outline Numbering Wrong with Special Characters"
permalink: /kb/215/Q215343/
---

## Q215343: WD97: Outline Numbering Wrong with Special Characters

{% raw %}

	Article: Q215343
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outline numbering for headings is incorrect when the text in or near the
	headings contain special characters, such as a trademark symbol (TM). For
	example, a numbered item in a multilevel list arbitrarily restarts at 1:
	
	  1. Chapter 1
	      1.1  more information
	      1.2  Something else 
	
	  2. Chapter 2
	      2.1  more information
	      1.2  This list item restarted incorrectly. It contains a trademark symbol.
	      1.3  This list item should be 2.3.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods, as appropriate.
	
	Method 1: Turn On "Allow Fast Saves"
	------------------------------------
	
	Turn on the "Allow fast saves" option. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Save tab, click the "Allow fast saves" check box.
	
	3. Click OK to close the Options dialog box.
	
	For additional information about the "Allow fast saves" option, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192480 WD97: Frequently Asked Questions About Allow Fast Saves
	
	Method 2: Make a Document Change, Save and Reopen Document
	----------------------------------------------------------
	
	When you notice the problem, make a change to the document at some point before
	the first symbol. This can be as simple as adding and removing a space. Save,
	close, and then reopen the document. This resolves the problem temporarily, but
	it needs to be repeated if you notice the problem recurring.
	
	Method 3: Use Non-Unicode Characters
	------------------------------------
	
	Where possible, substitute non-Unicode versions of the symbols used in the
	document. These are symbols in a non-Unicode font that are equivalent to the
	Unicode ones you already used. You may or may not have an equivalent non-Unicode
	symbol available on your computer.
	
	Unicode symbols are symbols in the extended character sets of Unicode fonts. For
	example, if you click Insert and then click Symbol and select normal text, you
	notice several font subsets, such as "Latin Extended A" and "Letter-like
	symbols." This indicates a Unicode font. The specific subsets that are available
	depends upon the font that you are currently using.
	
	The Symbol font does not have any subsets and therefore is not a Unicode font.
	
	The TM symbol in Arial font is in the "letter-like symbols" subset and is a
	Unicode symbol. The TM symbol in the font "Symbol" is not a Unicode symbol.
	
	For the TM symbol used in the example, you can replace the symbol that was
	inserted by AutoCorrect by deleting it and then replacing it. To replace it,
	click Insert, click Symbol, and then select the symbol in the Symbol font.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	
	Additional query words: unicode numbering
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
