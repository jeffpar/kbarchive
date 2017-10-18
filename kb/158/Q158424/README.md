---
layout: page
title: "Q158424: WD97: Some Characters Not Supported in ScreenTips"
permalink: kb/158/Q158424/
---

## Q158424: WD97: Some Characters Not Supported in ScreenTips

	Article: Q158424
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Special characters, such as the "smiley face" symbol or Greek characters, that
	are included as part of a comment, may not appear in the ScreenTip even though
	they are displayed correctly in the comment pane.
	
	NOTE: The ScreenTip appears when you rest the pointer over the comment mark,
	which is shaded with light yellow.
	
	CAUSE
	=====
	
	The font selected for the ToolTip does not support this or similar characters.
	To locate the font selected for the ToolTip, open the Display Properties dialog
	box (Control Panel), and select the Appearance tab.
	
	In Word, the Wingdings font is used to automatically render characters stored as
	AutoCorrect entries when AutoFormat As You Type is turned on. Note that other
	characters typed in other symbol fonts are rendered incorrectly in ScreenTips.
	
	WORKAROUND
	==========
	
	To view all characters in a ScreenTip, avoid using symbol characters and use
	characters supported by non-symbol fonts, such as Arial or Times New Roman.
	
	NOTE: Not all characters that you insert using this workaround will appear
	correctly in the ScreenTip. Some characters will appear correctly, some
	characters will appear similar, and some characters will not appear at all.
	
	To work around this problem, insert the character from the Symbol dialog box. For
	example, the "sad face" character will appear as ":|" in the ScreenTip when you
	use the following steps. (The "smiley face" character is not displayed in the
	ScreenTip when you use this method.)
	
	1. On the Insert menu, click Comment.
	
	2. In the Comment pane, type the text you want.
	
	3. On the Insert menu, click Symbol.
	
	4. In the Font list, select Wingdings, click the "sad face" character, and then
	  click Insert.
	
	For other symbols, such as general punctuation, accented characters, and
	letter-like symbols (for example, the trademark symbol), use the following
	steps:
	
	1. On the Insert menu, click Comment.
	
	2. In the Comment pane, type the text you want.
	
	3. On the Insert menu, click Symbol.
	
	4. In the Font list, select (normal text), click the character you want, and
	  then click Insert.
	
	Additional query words: 8.0 word8 word97 special symbols accent foreign greek alphabet mathematical operators latin letterlike symbolic symbol extended section paragraph chevron em en dash ellipses logical
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
