---
layout: page
title: "Q176124: WD97: Revision Bars Display and Print in Wrong Location"
permalink: /kb/176/Q176124/
---

## Q176124: WD97: Revision Bars Display and Print in Wrong Location

{% raw %}

	Article: Q176124
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have "Highlight Changes On Screen" or "Highlight Changes in Printed
	Document" selected, revision bars (also called "revised lines") may display or
	print in an unexpected location.
	
	Case 1
	------
	
	Right Border revision bars appear on the left side of text except in page layout
	view, online layout, and print preview.
	
	Case 2
	------
	
	If the document's text or table cells extend into the margins (as with a negative
	left or right paragraph indent), the revision bars are printed over the top of
	the text that extends into the margins.
	
	Case 3
	------
	
	When a document is formatted with multiple columns and you specify Left Border
	revision marks, the revision bars are displayed on the left of each column but
	are printed along the left edge of the page instead of along the left side of
	the edited column.
	
	When a document is formatted with multiple columns and you specify right Border
	revision marks, the revision bars appear on the right of each column but are
	printed along the right edge of the page.
	
	For a possible fix and additional information about this Case, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q158527 WD97: Multi-Column Revision Bars Do Not Print As Expected
	
	CAUSE/WORKAROUND/STATUS
	-----------------------
	
	Case 1 (Right Revision Bars Appear on Left):
	
	Cause
	
	This behavior is by design. Word displays right revision bars on the right side
	of a document in page layout view and in online layout view which is designed to
	display text as it prints. In all other views, Word displays revision bars to
	the left of the text to make editing easier.
	
	Resolution
	
	To view the right revision bars, switch to page layout view or online layout
	view.
	
	Case 2 (Revision Bars Print Over Text in Margin):
	
	Workaround
	
	Modify the text so that it does not extend into the margin.
	
	Status
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Case 3 (Revision Lines Print Only Along Left Column):
	
	
	Status
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	For a possible fix and additional information about this Case, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q158527 WD97: Multi-Column Revision Bars Do Not Print As Expected
	
	
	MORE INFORMATION
	================
	
	To turn on Track Changes in Microsoft Word 97 for Windows, do the following:
	
	1. On the Tools menu, point to Track Changes and then click Highlight Changes.
	
	2. Click to select the Track Changes While Editing check box.
	
	3. Click OK.
	
	To set where the revision lines appear, do the following:
	
	1. On the Tools menu, click Options, and then click the Track Changes tab.
	
	2. Under Changed Lines, click the option box for Mark. Your choices are:
	
	  (none)
	  Left border
	  Right border
	  Outside border
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
