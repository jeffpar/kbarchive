---
layout: page
title: "Q163059: WD97: Some Fonts Are Not Available in Word"
permalink: /kb/163/Q163059/
---

## Q163059: WD97: Some Fonts Are Not Available in Word

{% raw %}

	Article: Q163059
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbualink97kbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	For a Microsoft Word 2002 version of this article, see Q291354.
	
	SUMMARY
	=======
	
	The following TrueType fonts, available in earlier versions of Word for Windows,
	are no longer available in Word 97. This functionality is by design.
	
	- Arial CE
	- Arial Cyr
	- Arial Greek
	- Bookshelf Symbol 1
	- Bookshelf Symbol 2
	- Courier New CE
	- Courier New Cyr
	- Courier Greek
	- MS LineDraw
	- Times New Roman CE
	- Times New Roman Cyr
	- Times New Roman Greek
	
	The following vector fonts available in earlier versions of Word for Windows are
	no longer available in Word 97. This functionality is by design.
	
	- Modern
	- Roman
	- Script
	
	Screen fonts are not available in Microsoft Word 97 for Windows or earlier
	versions of Word for Windows. Screen fonts may include:
	
	- Fixedsys
	- MS Sans Serif
	- MS Serif
	- Small Fonts
	- System
	- Terminal
	
	MORE INFORMATION
	================
	
	MS LineDraw
	-----------
	
	The MS LineDraw font is identified as a symbol font. Therefore, Word 97 will
	interpret text typed in the MS LineDraw font as a series of symbols and many of
	formatting and proofing features of Word will ignore the text.
	
	Courier New contains the exact same character set as MS LineDraw. Existing
	documents formatted with the MS LineDraw font will be mapped to Courier New when
	opened in Word 97.
	
	To access the line drawing characters that used to be available in MS LineDraw,
	click Symbol on the Insert menu, change the font to (normal text), and change
	the Subset to Box Drawing.
	
	Bookshelf Symbol
	----------------
	
	Bookshelf Symbol 1 and Bookshelf Symbol 2 fonts are not proper symbol fonts.
	Because Word 97 supports Unicode, these fonts are unusable in Word 97. In many
	cases, if a converted document contains these fonts, you will get "empty"
	characters, represented by a square box.
	
	International Fonts
	-------------------
	
	International font sets that are available in Word 7.0 are not automatically
	available in Word 97. Word 97 makes available only the fonts that are determined
	by the language and keyboard setting in Windows 95.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q159341 Word 97: International Fonts Don't Appear in Font List
	
	Vector Fonts
	------------
	
	Vector fonts use an older font technology and the quality of the printed output
	is very poor. Because of the poor printed quality, these fonts were removed from
	the font drop-down box in Microsoft Word 97.
	
	Examples of this type of font are the Roman, Modern, and Script. They are mostly
	used by Plotter printers under Microsoft Windows 3.x.
	
	Screen Fonts
	------------
	
	Microsoft Word is designed to produce WYSIWYG (What you see is what you get)
	output. In order to attain that goal, the text that is displayed on the screen
	must be able to be printed. If the text is formatted with a screen font, then a
	font substitution must occur when the document is printed because screen fonts
	are for display only and cannot be printed.
	
	Performing a font substitution when printing may produce non-WYSIWYG output. For
	this reason, screen fonts are not available in the font drop-down box.
	
	You can still force Word to use a screen font to display the text by typing in
	the name of the font, exactly as it is named in Windows, into the font drop-down
	box and pressing ENTER.
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbprint kbualink97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
