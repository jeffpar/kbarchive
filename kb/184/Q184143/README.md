---
layout: page
title: "Q184143: WD97: Some Characters Missing/Cut Off When Displayed on Screen"
permalink: /kb/184/Q184143/
---

## Q184143: WD97: Some Characters Missing/Cut Off When Displayed on Screen

	Article: Q184143
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view your document in Word, some characters may either be missing or
	the top (bottom) of some characters may be cut off.
	
	This problem may affect the following types of characters:
	
	- Underscores.
	
	- Underlines.
	
	- Characters with an ascender.
	
	- Characters with a descender.
	
	- International characters that contain an umlaut, acute accent, grave accent,
	  circumflex, or tilde.
	
	- Objects that are inline with the text of your document. For example, a
	  picture that is not inserted in a frame or text box.
	
	NOTE: This problem does not affect printing; that is, underscores, underlines,
	and characters with an ascender, descender, or International characters print
	correctly even though they may not be displayed correctly.
	
	CAUSE
	=====
	
	The problem may have one of the causes as described in the following cases:
	
	Case 1
	------
	
	The line spacing of your text may be set to an exact height. When you set the
	line spacing to Exactly and select a measurement that is equal to or less than
	the height of the font, underscore and underline characters may not be displayed
	and characters that have an ascender, descender, or an umlaut may be cutoff. For
	example, if you set line spacing to Exactly 9- point for a 10-point font,
	underscore and underline characters may be cutoff.
	
	NOTE: This problem may occur differently with different fonts.
	
	Case 2
	------
	
	The printer driver may incorrectly substitute screen fonts at certain view
	percentages. You can changing the printer driver to notice an immediate
	difference, depending on the view you are using.
	
	Case 3
	------
	
	The zoom that the document is set to may cause characters to have the top or
	bottom portions of the screen font cut off. You can adjust the zoom from 75% to
	100% in most cases to correct this visually.
	
	RESOLUTION
	==========
	
	This problem is a display only problem. Use one or more of the following methods
	appropriate for your situation:
	
	Method 1: Change the Document Zoom Setting
	------------------------------------------
	
	When you change the zoom percentage, Word may allow you to view the full height
	of your text by using the following steps:
	
	1. On the View menu, click Zoom.
	
	2. Do one of the following:
	
	   - Under Zoom To, change to a larger setting. For example, change to 200
	     percent and then click OK.
	
	  -or-
	
	   - Under Percent, change the percentage to a larger setting. For example,
	     change the Percentage to 120 percent.
	
	Method 2: Change the Document View
	----------------------------------
	
	When you change the view of your document to either Outline or Master Document
	view, Word will show the full height of your text. To change the view of your
	document, click either Outline or Master Document on the View menu.
	
	NOTE: This problem occurs in both Normal and Page Layout view. When you view your
	document in either Outline or Master Document view, paragraph formatting is
	ignored.
	
	Method 3: Change the Line Spacing
	---------------------------------
	
	1. With your text selected, click Paragraph on the Format menu.
	
	2. Do one or both of the following:
	
	   - On the Indents And Spacing tab, change the Line Spacing setting to
	     something other than Exactly. For example, change the Line Spacing setting
	     to Single.
	
	  -or-
	
	   - Change the At setting to a setting slightly larger than the font point
	     size you are using in your document. For example, if your font point size
	     is 10-point, then change the At setting to 11-point.
	
	Method 4: Change the Font or Point Size
	---------------------------------------
	
	1. With your text selected, click Font on the Format menu.
	
	2. On the Font tab, do one or both of the following:
	
	   - Change the Font setting to a different font.
	
	  -or-
	
	   - Change the Size setting to a smaller size than what you have your line
	     spacing set to. For example, if you have your line spacing set to Exactly
	     12-point, then change the font size to 11-point.
	
	MORE INFORMATION
	================
	
	Line spacing determines the amount of vertical space between lines of text. Word
	uses single line spacing by default. The line spacing you select will affect all
	lines of text in the selected paragraph or the paragraph that contains the
	insertion point.
	
	  This option     Results in
	  ------------------------------------------------------------------------
	  Single          Line spacing for each line that accommodates the largest
	                  font in that line, plus a small amount of extra space.
	                  The amount of extra space varies depending on the font
	                  used.
	
	  1.5 Lines       Line spacing for each line that is one-and-one-half
	                  times that of single line spacing. For example, if
	                  10-point text is spaced at 1.5 lines, the line spacing
	                  is approximately 15 points.
	
	  Double          Line spacing for each line that is twice that of single
	                  line spacing. For example, in double-spaced lines of
	                  10-point text, the line spacing is approximately 20
	                  points.
	
	  At Least        Minimum line spacing that Word can adjust to accommodate
	                  larger font sizes or graphics that would not otherwise
	                  fit within the specified spacing.
	
	  Exactly         Fixed line spacing that Word does not adjust. This
	                  option makes all lines evenly spaced.
	
	  Multiple        Line spacing that is increased or decreased by a
	                  percentage that you specify. For example, setting line
	                  spacing to a multiple of 1.2 will increase the space by
	                  20 percent, while setting line spacing to a multiple of
	                  0.8 will decrease the space by 20 percent. Setting the
	                  line spacing at a multiple of 2 is equivalent to setting
	                  the line spacing at Double. In the At box, type or
	                  select the line spacing you want. The default is three
	                  lines.
	
	  At              The amount of line spacing you select. This option is
	                  available only if you select At Least, Exactly, or
	                  Multiple in the Line Spacing box.
	
	NOTE: If a line contains a large text character, graphic, or formula, Word
	increases the spacing for that line. To make all lines evenly spaced, click
	Exactly in the Line spacing box, and then select the line spacing in the At box
	that is large enough to fit the largest character or graphic in the line. If
	characters or graphics still appear cut off, select a larger number in the At
	box.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q192971 WD97: Definitions of Typography Terms in Word
	
	Additional query words: chopped cropped gone half halved cut disappeared accent French Canada Canadian accented missing invisible print view WordPerfect Ami Pro WordPro Uppercase Lowercase symbol grave
	
	======================================================================
	Keywords          : word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
