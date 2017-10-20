---
layout: page
title: "Q159856: WD97: Page Field in Header/Footer Causes Odd Behavior"
permalink: /kb/159/Q159856/
---

## Q159856: WD97: Page Field in Header/Footer Causes Odd Behavior

{% raw %}

	Article: Q159856
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a page number field in the header or footer of a document that
	exceeds 10 pages, the insertion point disappears or moves to the right of the
	paragraph mark (visible when you have Show/Hide turned on).
	
	- If you type any text at this point, the text repositions below or to the
	  right of the paragraph mark.
	
	- If you attempt to insert another field code--for example, if you click the
	  Insert Number of Pages button on the Header And Footer toolbar--the field
	  code is not inserted.
	
	- If you press the DELETE key, you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	  When you click Details, you receive the following error message:
	
	  Winword caused an invalid page fault in module WINWORD.EXE at 0137:30082841.
	
	NOTE: These symptoms do not occur if the document is less than 10 pages.
	
	CAUSE
	=====
	
	The insertion point disappears or moves after you insert the page number field
	using one of the following methods:
	
	- You click the Insert Page Number button on the Header And Footer toolbar.
	
	  -or-
	
	- You insert the page number field manually.
	
	  -or-
	
	- You insert the page number field by clicking Field on the Insert menu.
	
	The invalid page fault occurs when you press the DELETE key while the insertion
	point is not visible.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1: Click Page Numbers on the Insert Menu
	-----------------------------------------------
	
	Insert the page number by clicking Page Numbers on the Insert menu. To do this,
	follow these steps:
	
	1. On the Insert menu, click Page Numbers.
	
	2. In the Page Numbers dialog box, select any options you want, and then click
	  Format.
	
	3. In the Page Number Format dialog box, select a numbering format from the
	  Number Format list, and then click OK.
	
	Method 2: Move the Insertion Point
	----------------------------------
	
	Press the SPACEBAR, move the insertion point before the space character, and then
	insert the page number using Method 1. NOTE: You can also use the methods
	described in the "Cause" section.
	
	Method 3: Use AutoComplete
	--------------------------
	
	Insert the page number using the AutoComplete suggestion. To do this, follow
	these steps:
	
	NOTE: AutoComplete must be turned on for this option to work. See the "More
	Information" section for instructions on how to turn AutoComplete on or off.
	
	1. Type the word "page" (without the quotation marks).
	
	2. Press ENTER when the ScreenTip displays "Page X of Y."
	
	NOTE: You can delete "page" and "of Y" (where Y represents the total number of
	pages in your document) from the result if you want just the page number.
	
	Method 4: Store the Page Field as an AutoText Entry
	---------------------------------------------------
	
	When you type the AutoText entry, the AutoComplete tip displays your AutoText
	entry. To do this, use the following steps:
	
	NOTE: AutoComplete must be turned on for this option to work. See the "More
	Information" section for instructions on how to turn AutoComplete on or off.
	
	1. Insert a page field in your document.
	
	2. Select the page field.
	
	3. On the Insert menu, point to AutoText, and then click New.
	
	4. Type a name for the page field. For example, type "-page" (without the
	  quotation marks). NOTE: Be sure to include the hyphen in front of "page," and
	  then click OK.
	
	5. On the View menu, click Header And Footer.
	
	6. In the header (or footer), type "-page" (without the quotation marks). When
	  the AutoComplete ScreenTip displays the suggestion, press ENTER to insert the
	  page number field.
	
	MORE INFORMATION
	================
	
	To turn the AutoComplete feature on or off, do the following:
	
	1. On the Tools menu, click AutoCorrect, and then click the AutoText tab.
	
	2. Click to select or clear the "Show AutoComplete tip for AutoText and dates"
	  check box.
	
	3. Click OK.
	
	Additional query words: erratic incorrect display ip gone hidden invisible cursor missing disappeared disappearing disappears moved right below under beneath ipf
	
	======================================================================
	Keywords          : kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
