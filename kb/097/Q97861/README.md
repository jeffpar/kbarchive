---
layout: page
title: "Q97861: WD97: Page Numbering in &quot;Page of Total Pages in Section&quot; Format"
permalink: /kb/097/Q97861/
---

## Q97861: WD97: Page Numbering in &quot;Page of Total Pages in Section&quot; Format

	Article: Q97861
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how you can number the pages of a section in the
	following format:
	
	  <Page Number> of <Total Number of Pages in Section>
	
	MORE INFORMATION
	================
	
	Use any of the following methods to create a Page X of Y numbering scheme.
	
	Method 1: Insert AutoText
	-------------------------
	
	To use the AutoText entry "Page X of Y," follow these steps:
	
	1. On the View menu, click Header and Footer.
	
	2. On the Header and Footer toolbar, click the Insert AutoText drop-down arrow,
	  and then click "Page X of Y."
	
	Method 2: Use Page and SectionPages Fields
	------------------------------------------
	
	To add "Page {Page} of {SectionPages}" to your document, follow these steps:
	
	1. On the View menu, click Header and Footer. In the header or footer, type
	  "Page" (without the quotation marks) and press the SPACEBAR.
	
	2. On the Insert menu, click Field.
	
	3. Under Categories, click (All). Under Field Names, click Page, and then click
	  OK.
	
	4. Immediately press the SPACEBAR once. Type "of" (without the quotation marks)
	  and press the SPACEBAR again.
	
	5. On the Insert menu, click Field.
	
	6. Under Categories, click (All). Under Field Names, click SectionPages, and
	  then click OK.
	
	For additional information about the SectionPages field, please see the following
	article in the Microsoft Knowledge Base:
	
	  
	
	  Q155199 WD97: How to Create Two Page Numbering Schemes in One Document
	
	Method 3: Use the PageRef Field
	-------------------------------
	
	Use the PageRef field to obtain the number of pages in the current section. To do
	this, follow these steps.
	
	NOTE: Page numbering starts at 1 for each section, and the PageRef field yields
	the number of pages in each section. Page numbering appears as "Page X of Y" on
	each page, where X is the current page in the current section, and Y is the
	number of pages in the current section.
	
	1. On the View menu, click Header And Footer.
	
	2. Position your insertion point where you want the page number and then click
	  the Insert Page Number button on the Header And Footer toolbar.
	
	3. On the Insert menu, click Page Numbers, and then click Format.
	
	4. Under Page Numbering, click Start At (1 should appear in the Start At box),
	  click OK twice, and then click Close on the Header And Footer toolbar.
	
	5. Repeat the following instructions in each section of your document to insert
	  a bookmark at the end of the section:
	  a. Select some text at the end of the last page of the section.
	
	  b. On the Insert menu, click Bookmark.
	
	  c. Type a Bookmark Name, and then click Add.
	
	6. On the View menu, click Header And Footer, and then follow these steps:
	  a. Starting at section 1 of your document, position the insertion point after
	     the Page field you inserted in steps 1 through 4, and then type " of "
	     (without the quotation marks, and including the spaces before and after
	     the word "of").
	
	  b. On the Insert menu, click Field. Under Categories, click (All). Under
	     Field Names, click PageRef. Under Field Codes, click after PAGEREF and
	     then type name of the bookmark you inserted to mark the end of the current
	     section.
	
	  c. Click OK.
	
	  d. On the Header And Footer toolbar, click the Show Next button. If Same As
	     Previous is turned on (you see the words Same As Previous on the right
	     side of the dotted line surrounding the header or footer), click the Same
	     As Previous button on the Header And Footer toolbar.
	
	     NOTE: The words Same As Previous disappear from the right side of the
	     dotted line surrounding the header or footer.
	
	  e. Turn on field codes by pressing ALT+F9 or by clicking Options on the Tools
	     menu, clicking the View tab, selecting the Field Codes check box (under
	     Show), and then clicking OK. With field codes turned on, the header or
	     footer appears as follows:
	
	  { PAGE } of { PAGEREF BookmarkName \* MERGEFORMAT}
	
	     where BookmarkName is the name of the bookmark you inserted in step 5.
	
	  f. Change the BookmarkName within the PAGEREF field to the name of the
	     bookmark for the respective Section.
	
	  g. Repeat steps a-f for each section header and section footer.
	
	With field codes turned off (press ALT+F9), if the current section contains 11
	pages, for example, the following appears in the header or footer on page 3:
	
	  3 of 11
	
	Additional query words: wrong incorrect numbering scheme creating create
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
