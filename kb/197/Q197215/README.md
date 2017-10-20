---
layout: page
title: "Q197215: WD97: Including Chapter Numbers in Header/Footer But Not in Text"
permalink: /kb/197/Q197215/
---

## Q197215: WD97: Including Chapter Numbers in Header/Footer But Not in Text

{% raw %}

	Article: Q197215
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to use the heading numbering feature in Word as it
	applies to table of contents, page numbering, and indexes, without displaying
	the chapter numbers in the text.
	
	Heading numbering allows you to automatically number paragraphs formatted with
	the built-in heading styles in Word. You can access the options and settings for
	heading numbering by clicking Heading Numbering on the Format menu.
	
	For example, the first chapter begins like this
	
	  Introduction to Cooking
	
	and you want this in the header
	
	  Page 1-1
	
	and this in the table of contents:
	
	  Introduction to Cooking..........1-1
	  Cooking Basics...................2-8
	
	Ordinarily, to get the chapter number to appear in the page number and table of
	contents, you must also show the chapter number in the text, as in the
	following:
	
	  Chapter One    Introduction to Cooking
	
	This article explains how to have the chapter number show in page numbering,
	table of contents, and indexes but not in the document itself. This formatting
	requires the following steps, which are described in detail in this article:
	
	1. Show nonprinting characters in text.
	
	2. Format the Heading 1 style.
	
	3. Apply the Heading 1 style.
	
	4. Apply the use of chapter numbers.
	
	NOTE: This method assumes you are not using the Heading 1 style anywhere in the
	document. If you are using Heading styles, they must all be changed to the next
	level.
	
	TIP: If you are going to make many changes, start with the highest- numbered
	heading style first. If the highest heading level used is Heading 7, change the
	Heading 7 paragraphs to Heading 8, then change Heading 6 paragraphs to Heading
	7, and so on. This is the least confusing way to change the styles of the
	paragraphs.
	
	Step 1 - Show Nonprinting Characters in Text
	--------------------------------------------
	
	Display the nonprinting characters in the document so that you can apply
	formatting, such as heading numbering, to hidden lines. To display the
	nonprinting characters, use either of the following procedures:
	
	- On the Standard toolbar, click the Show/Hide button. (This button has a
	  paragraph mark symbol on the face.)
	
	  -or-
	
	- On the Tools menu, click Options. Click the View tab. In the Nonprinting
	  Characters section, make sure All is selected. Click OK.
	
	Step 2 - Format the Heading 1 Style
	-----------------------------------
	
	1. On the Format menu, click Style.
	
	2. From the Styles list, select Heading 1 and click the Modify button.
	
	3. Click the Format button and select Numbering.
	
	4. Choose the Numbering style you want to use. (If you have already chosen a
	  numbering style in the document, this will be pre-selected.)
	
	5. Click OK.
	
	6. Click the Format button and select Font.
	
	7. Select the Hidden check box.
	
	8. Click OK twice.
	
	9. Click Close.
	
	Step 3 - Apply the Heading 1 Style
	----------------------------------
	
	Paragraph marks indicate where in the document you have pressed the ENTER key.
	Blank lines contain only a single paragraph mark. These paragraph marks not only
	represent the end of a paragraph, but they "carry" the formatting applied to the
	paragraph.
	
	1. Create a blank line--that is, a single paragraph mark--above the chapter
	  title.
	
	2. Apply the Heading 1 style to the blank paragraph. To do this, use either of
	  the following methods:
	
	   - Place the insertion point in front of the paragraph mark. If the
	     Formatting toolbar is displayed, click the drop-down arrow of the Style
	     box. Select Heading 1.
	
	  -or-
	
	   - Place the insertion point in front of the paragraph mark. On the Format
	     menu, click Style. Select the Heading 1 style from the list and click the
	     Apply button.
	
	  The blank lines will be numbered, giving the chapters numbers. Hidden text is
	  illustrated by a dotted line under the text.
	
	Step 4 - Insert Chapter Numbers
	-------------------------------
	
	To insert chapter-page numbers in the header or footer, follow these steps:
	
	1. On the Insert menu, click Page Numbers.
	
	2. In the Position list, choose the location for the page numbers.
	
	3. Click Format.
	
	4. Select the Include Chapter Number check box.
	
	5. In the "Chapter Starts with Style" list, select Heading 1.
	
	6. Select Start At, and select "1" from the list.
	
	7. Click OK twice.
	
	Chapter and page numbers now appear in the header and footer. Because page
	numbers include the chapter number, they will be included automatically when you
	insert the table of contents and the index.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q127249 How to Create a Table of Contents in Word
	
	  Q72763 How to Create Multiple Tables of Contents
	
	  Q125937 How to Create a Table of Contents or an Index with Field Codes
	
	Additional query words: table contents create chapter numbering text header footer page index hide outline how to
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
