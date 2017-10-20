---
layout: page
title: "Q196720: WD97: Footnote Moved to Next Page"
permalink: /kb/196/Q196720/
---

## Q196720: WD97: Footnote Moved to Next Page

{% raw %}

	Article: Q196720
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 18-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Part or all of a footnote may be moved to the next page if it does not fit on
	the page on which the reference occurs.
	
	WORKAROUND
	==========
	
	If part or all of a footnote on a page is moved to the next page, you may need
	to change the setting or formatting of a footnote. To control the placement of
	footnotes, use the appropriate method for your situation.
	
	Method 1: Change the Use Printer Metrics Option
	-----------------------------------------------
	
	To change the Use Printer Metrics option, follow these steps:
	
	1. On the Tools menu, click Options, and then click the Compatibility tab.
	
	2. In the Recommended Options For list, click Microsoft Word 6.0/95.
	
	3. Under Options, click to change the "Use printer metrics to lay out document"
	  check box (if there is a check, clear it; if there is not a check, enter
	  one).
	
	NOTE: In most cases, clearing the "Use printer metrics to lay out document" check
	box solves the problem.
	
	Method 2: Change the Line Spacing of the Normal Text to "Exactly"
	-----------------------------------------------------------------
	
	Try this method if your document is set to a line spacing other than Single (on
	the Format menu, click Paragraph, and then click the "Indents and Spacing" tab).
	Set the line spacing of the normal text of the body to an exact point size. The
	point size depends on your normal font typeface and point size.
	
	To modify the normal text line spacing, follow these steps:
	
	1. On the Edit menu, click Select All.
	
	2. On the Format menu, click Paragraph.
	
	3. Under Line Spacing, click Exactly. Under AT, increase the point size to the
	  size that you want (for a 12-point font, try Exactly 24 PT for double-line
	  spacing).
	
	4. Click OK.
	
	Method 3: Set the Line Spacing of the Footnote Text Style to "Exactly"
	----------------------------------------------------------------------
	
	Set the line spacing of the Footnote Text style to an exact point size, slightly
	larger than the font size. This reduces the amount of space between footnotes,
	thus allowing more room for footnotes.
	
	To modify the footnote text line spacing, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Styles list, select Footnote Text, and then click Modify.
	
	3. In the Modify Style dialog box, click Format, and then click Paragraph.
	
	4. In the Line Spacing list, click Exactly.
	
	5. In the At box, type a point size slightly larger than the font size of the
	  footnote text, and then click OK. For example, if the font size of the
	  footnote text is 10 points, set the line spacing to exactly 10.5 points.
	
	  NOTE: If you set the line spacing to a size smaller than the point size of the
	  type, the top or bottom of the text may not be visible.
	
	6. Click OK, and then click Apply.
	
	Method 4: Reduce the Size of the Footnote Text Style by a Few Points
	--------------------------------------------------------------------
	
	To modify the Footnote Text style, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the Styles list, select Footnote Text, and then click Modify.
	
	3. In the Modify Style dialog box, click Format, and then click Font.
	
	4. In the Size box, reduce the size by a few points, and click OK.
	
	5. Click OK, and then click Apply.
	
	Method 5: Reduce the Size of the Page Margins
	---------------------------------------------
	
	To reduce the size of the page margins, follow these steps:
	
	1. On the File menu, click Page Setup.
	
	2. On the Margins tab, reduce the margin settings, and then click OK.
	
	Method 6: Reduce the Size of the Text
	-------------------------------------
	
	Reduce the point size of the text by a small amount. If you have applied styles
	to your text, you can modify the styles directly. If you have not applied styles
	to your text, highlight the text and use either of the following methods:
	
	- Click Font on the Format menu to change the size of the font.
	
	  -or-
	
	- Click Paragraph on the Format menu to change the line spacing of the text.
	
	Method 7: Change the Line Spacing of the Footnote Separator
	-----------------------------------------------------------
	
	To change the line spacing of the footnote separator, follow these steps:
	
	1. On the View menu, click Normal.
	
	2. On the View menu, click Footnotes. In the note pane, select Footnote
	  Separator from the Footnotes (or Notes) list.
	
	3. Select the footnote separator.
	
	4. On the Format menu, click Paragraph, and, as in method 2, change the Line
	  Spacing to an exact amount, such as 4 or 5 points.
	
	Method 8: Change the Footnote Paragraph Widow Orphan Control to Off
	-------------------------------------------------------------------
	
	1. On the View menu, click Normal.
	
	2. On the View menu, click Footnotes. Select all the footnotes in the note pane.
	
	3. On the Format menu, click Paragraph.
	
	4. Click the "Line and Page" breaks tab, and clear the Widow/Orphan Control
	  check box. Click OK.
	
	Method 9: Add and Hide a Custom Footnote Reference and Footnote
	---------------------------------------------------------------
	
	Insert a custom footnote to the right of the offending one, and then format it to
	be hidden. To do this, follow these steps:
	
	1. Place the insertion point to the right of the last footnote reference number,
	  and then click Footnote on the Insert menu.
	
	2. Under Numbering, click to select Custom Mark, type an asterisk, and then
	  click OK.
	
	3. Select the new footnote asterisk by pressing SHIFT+HOME. On the Format menu,
	  click Font. Click to select the Hidden check box and then click OK.
	
	4. Select the custom Footnote Reference mark in the body of the document, and on
	  the Format menu, click Font. Click to select the Hidden check box and then
	  click OK.
	
	
	Method 10: Use Inline Elements
	------------------------------
	
	If possible, do not anchor drawing objects in the header\footer layer. Use inline
	elements instead of float-over-text items. For example, drawn horizontal lines
	can be replaced with bordered table cells, or text boxes can be replaced with
	frames. Clip art should be placed inline instead of float over text.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was corrected in Microsoft
	Word 2000. However, for backward compatibility, Word 2000 maintains the original
	layout of older documents by default.
	
	To correct this behavior in Word 2000, use the following steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Compatibility tab, click to clear the "Lay out footnotes like Word
	  6.x/95/97" check box.
	
	MORE INFORMATION
	================
	
	For additional information about footnotes, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q158625 WD: Footnote Text Displayed or Printed on Top of Footer
	
	Additional query words: premature break soft unwanted continues continued split jump different wrong moves splits breaks foot note notes moved divided other transferred relocated migrated displaced shifted misplaced out of place kilter broken
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
