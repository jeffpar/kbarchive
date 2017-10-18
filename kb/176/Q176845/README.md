---
layout: page
title: "Q176845: WD97: Some Style Formats Not Displayed with Reveal Formatting"
permalink: kb/176/Q176845/
---

## Q176845: WD97: Some Style Formats Not Displayed with Reveal Formatting

	Article: Q176845
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the reveal formatting feature in Word, it does not display some of
	the character style formats you applied to your document. For example, if you
	apply an italic character style to a selection and then manually remove that
	formatting by pressing CTRL+I, the italic character style does not display when
	you reveal formatting, even though it is still applied.
	
	CAUSE
	=====
	
	By design, when you use the reveal formatting feature, Word displays only the
	formats that are currently active for the selection. Word does not display the
	style formats that are not currently active, such as those that have been
	overridden by other formatting. For example, if you apply direct formatting that
	overrides a character style format, Word no longer displays the character style
	format when you reveal formatting.
	
	WORKAROUND
	==========
	
	If you want to see all the style formatting currently applied to a character,
	click Style on the Format menu. You can compare these settings with the formats
	Word displays when you reveal formatting to determine which settings have been
	overridden.
	
	MORE INFORMATION
	================
	
	The Reveal Formatting button (called the Help Tool Command) is not automatically
	displayed when you install Word. To place the Help Tool icon onto a toolbar, do
	the following:
	
	1. On the Tools menu, click Customize. Click the Commands tab.
	
	2. Under Categories, select All Commands.
	
	3. Under Commands, find HelpTool and drag it to a toolbar.
	
	4. Click Close.
	
	For additional information about this situation in earlier versions of Word,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q106255 WD: Some Style Formats Not Displayed When You Reveal Formatting
	
	Additional query words: reveal codes show formats sniffer word8 word97
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
