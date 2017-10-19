---
layout: page
title: "Q165473: WD97: Numbered List Restarts at One After Saving to HTML"
permalink: /kb/165/Q165473/
---

## Q165473: WD97: Numbered List Restarts at One After Saving to HTML

	Article: Q165473
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a document in HTML format from Word 97, if you have the document
	formatted so that a bulleted or numbered list is located inside another numbered
	list, the outer numbered list is broken into two numbered lists, and the second
	part of the list is renumbered to start at 1.
	
	CAUSE
	=====
	
	This occurs due to the limitations of converting to HTML.
	
	In Word, items in the same list are placed non-contiguous in the document. In
	HTML, each list is an individual entity that starts with the <OL> tag and
	ends with the </OL> tag.
	
	This is an example of a common numbered list:
	
	  1. primary list item
	  2. primary list item
	  3. primary list item
	       1. embedded list item
	       2. embedded list item
	  4. primary list item
	  5. primary list item
	
	When saved in HTML format, the following HTML tags are applied:
	
	  <HTML>
	  <HEAD>
	  </HEAD>
	  <BODY>
	
	  <OL>
	  <LI>  primary list item
	  <LI>  primary list item
	  <LI>  primary list item</OL>
	
	  <OL>
	  <LI>  embedded list item
	  <LI>  embedded list item</OL>
	
	  <OL>
	  <LI>  primary list item
	  <LI>  primary list item</OL>
	
	This returns the following:
	
	  1. primary list item
	     2. primary list item
	     3. primary list item
	          1. embedded list item
	          2. embedded list item
	     1. primary list item        <-- This item is now numbered
	                                     incorrectly.
	     2. primary list item
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Create Two Separate Numbered Lists
	--------------------------------------------
	
	Use the following steps to manually reformat the list:
	
	1. Open the original Word 97 document.
	
	2. Select the lines of text you want numbered in the second part of the original
	  list.
	
	3. On the Format menu, click Bullets And Numbering.
	
	4. Click Customize.
	
	5. In the Customize Numbered List dialog box, click Start At, and select the
	  number you want to use to start the numbering sequence.
	
	You now have two separate numbered lists. When you save this document in HTML
	format, Word 97 converts the list with the proper HTML code, which adds the
	<OL START=X> tag (where X is the number with which you start the second
	list).
	
	Method 2: Use Multi-Level\Outline Numbering Instead of a List
	-------------------------------------------------------------
	
	To create a simple outline using outline numbering, follow these steps:
	
	1. In a new, blank document, type the following and press RETURN:
	
	  My Outline
	
	2. On the new line, type:
	
	  Level 1
	
	3. On the Format menu, click Bullets And Numbering.
	
	4. Click the Outline Numbered tab.
	
	5. Click the second sample from the left on the top row. Click OK.
	
	  Number 1) should appear to the left of Level 1.
	
	6. Press RETURN.
	
	  Number 2) should appear on the new line. Pressing TAB and SHIFT+TAB before you
	  type any text increases or decreases the indentation for this new line and
	  updates its numbering appropriately.
	
	  After you have typed some text on the line, you can still promote or demote
	  that line by using the Increase and Decrease Indent buttons on the formatting
	  toolbar. These entries can be more than one line in length. As you type, the
	  lines automatically wrap, using a hanging indent.
	
	  Another method of making changes to a numbered list is to press and hold the
	  CONTROL key while you click an entry. This presents you with several
	  options.
	
	  As you continue typing text in these entries, you continue to get new lines
	  with the appropriate numbering each time you press RETURN. However, if you
	  press RETURN twice without typing anything, the automatic numbering stops. It
	  can be restarted by clicking the Numbering button on the Formatting toolbar.
	  You can also use the Numbering button to remove or add numbering for any
	  entry. To do this, move the insertion point to the appropriate line, and
	  click the Numbering button to toggle numbering on and off.
	
	To restart the numbering series, follow these steps::
	
	  1. Place the insertion point in the entry where you want the numbering
	     sequence to be restarted.
	
	  2. On the Format menu, click Bullets And Numbering.
	
	  3. Click the Outline Numbered tab.
	
	  4. Click Restart Numbering.
	
	Method 3: Modify the HTML Document
	----------------------------------
	
	Manually reformat the incorrect list in the HTML document to start at the correct
	number, by following these steps:
	
	1. Position the insertion point at the start of the text for the incorrectly
	  numbered paragraph.
	
	  The insertion point will be immediately to the right of the number and the tab
	  that follows it.
	
	2. Press the BACKSPACE key on the keyboard to delete the numbering for the
	  paragraph.
	
	3. Type the correct number, followed by a space.
	
	  The autoformatter applies the new numbering scheme to the paragraph, and the
	  list is internally connected to the first half of the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
