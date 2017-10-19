---
layout: page
title: "Q195331: WD97: General Information About Section Breaks"
permalink: /kb/195/Q195331/
---

## Q195331: WD97: General Information About Section Breaks

	Article: Q195331
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft Word 2002 version of this article, see QQ291184.
	
	For a Microsoft Word 2000 version of this article, see Q211723.
	
	For a Microsoft Word 7.0 version of this article, see Q141993.
	
	For a Microsoft Word 98 version of this article, see Q180917.
	
	SUMMARY
	=======
	
	This article describes the types of section breaks available in Word and their
	uses. When you start a document, there are no section breaks because the entire
	document consists of one section. A section break is the point at which you end
	one section and begin another because you want some aspect of page formatting to
	change. You can divide a document into any number of sections and format each
	section the way you want. Throughout this article, keep in mind that a section
	break acts as an embedded code that stores or maintains the properties of the
	section above it.
	
	For tips about using section breaks, refer to the "More Information" section of
	this article.
	
	Section/Page properties include the following settings:
	
	  Page Orientation (Portrait/Landscape)
	  Margins
	  Columns
	  Line Numbering
	  Vertical Alignment
	  Headers & Footers
	  Page Numbering
	  Paper Size
	  Paper Source
	
	It is recommended that when you are working with section breaks that you turn on
	the Show/Hide information by:
	
	1. On the Tools menu, click Options, and then click the View tab.
	
	2. Under Nonprinting Characters, select the All check box.
	
	3. Click OK.
	
	Using Section Breaks
	--------------------
	
	To create a new section, click the Break command on the Insert menu. In Normal
	view, Word displays a double dotted line and the words End of Section (Type of
	Section Break) to indicate a section break and its type.
	
	The line is not printed. There are several types of section breaks to choose
	from. The breaks and their purposes are described as follows.
	
	  Type           Characteristics
	------------------------------------------------------------------------
	
	  Next Page      Word breaks the page at the section break. The new
	                 section starts on the next page.
	
	                 Use this section break if you want to apply different
	                 page numbers, headers and footers, orientation,
	                 vertical alignment, or paper size to the sections in
	                 the document.
	
	  Continuous     Word inserts a section break and begins the new section
	                 on the same page. If the two sections have different
	                 settings for page size or orientation, the new section
	                 begins a new page even if you select Continuous.
	
	                 Use this section break if you want to have different
	                 column formatting or margins on the same page. If there
	                 are multiple columns in the previous section, Word
	                 balances the columns above the section break and then
	                 fills out the page with the new section.
	
	  Odd Page       Word begins the new section on the next odd-numbered
	                 page. This section break is often used for chapters that
	                 begin on odd-numbered pages.
	
	                 NOTE: If the section break falls on an odd-numbered
	                 page, Word leaves the intervening even-numbered page
	                 blank.
	
	  Even Page      Similar to Odd Page, but Word begins the new section on
	                 the next even-numbered page.
	
	To Insert a Section Break
	-------------------------
	
	1. Click at the point where you want to start a new section.
	
	2. On the Insert menu, click Break.
	
	3. Under Section Breaks, select the option that describes what type of section
	  break you want, as described above.
	
	4. Click OK.
	
	Determining the Type of Section Break
	-------------------------------------
	
	In Word, the type of section break is shown on your screen, in parentheses, after
	the words Section Break. This is not where the properties of that section break
	are stored. The properties for the type of section break indicated on the screen
	are stored in the next section break (which may have a different type of section
	break indicated). If there is no additional section break in your document, the
	properties for that section break are stored in the last paragraph mark of the
	document. The section breaks act as an embedded code that stores or maintains
	the properties of the section above it.
	
	For example, if you have a one-page document and half-way down the page you
	insert an Odd Page section break and farther into your document, on Page 1, you
	insert a Next Page section break, in normal view, you see the following:
	
	  Section Break (Odd Page)
	
	  Section Break (Next Page)
	
	If you place your insertion point above Section Break (Odd Page), the status bar
	shows Page 1 Sec 1. To see the actual properties for the first section, on the
	Format menu, click Document and then click the Layout tab. Under Section Start,
	it indicates that the section is New Page. The settings for this section break
	are stored in the section break below where your insertion point is located or
	as shown on the screen, Section Break (Odd Page).
	
	If you place your insertion point between Section Break (Odd Page) and Section
	Break (Next Page), the status bar shows Page 3 Sec 2. To see the actual
	properties for the second section, on the Format menu, click Document and then
	click the Layout tab. Under Section Start, it indicates that the section is Odd
	Page. The settings for this section break are stored in the section break below
	where your insertion point is located or as shown on the screen, Section Break
	(Next Page).
	
	If you place your insertion point below Section Break (Next Page), the status bar
	shows Page 4 Sec 3. To see the actual properties for the third section, on the
	Format menu, click Document and then click the Layout tab. Under Section Start,
	it indicates that the section is New Page. The settings for this section break
	are stored in the last paragraph mark of the document (because there are no more
	section breaks in the document).
	
	NOTE: A section break indicated on your screen as Next Page is defined as New
	Page on the Layout tab of the Document dialog box.
	
	To Delete a Section Break
	-------------------------
	
	For information about deleting a section break, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q180258 WD: What Happens When You Delete a Section Break
	
	MORE INFORMATION
	================
	
	- You can save a section break and the formatting it contains as an AutoText
	  entry for future use.
	
	- You can copy section formatting by copying the section break in normal view.
	  When you paste a section break into a new location, the text above the
	  section break takes on the formatting contained in the section break.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q176314 WD: Section Layout Formatting Changes Pasting Section Break
	
	- You can change the type of section break without deleting the current section
	  break by doing the following:
	
	  1. Place the insertion point into the section that you want to change.
	
	     NOTE: Remember to place your insertion point BELOW the section break that
	     you want to change.
	
	  2. On the File menu, click Page Setup.
	
	  3. Click the Layout tab.
	
	  4. Under Section Start, select the type of section you want and then click
	     OK.
	
	Additional query words: 8.0 8.00 formatting page next
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
