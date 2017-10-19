---
layout: page
title: "Q117433: WD97: Field in Table Heading Row May Not Update on Second Page"
permalink: /kb/117/Q117433/
---

## Q117433: WD97: Field in Table Heading Row May Not Update on Second Page

	Article: Q117433
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a table, if your Table Heading rows contain fields whose results change on
	each page (such as PAGE or SEQ fields), Microsoft Word may not update these
	fields on the second and subsequent pages of your document.
	
	CAUSE
	=====
	
	When you add Table Heading rows to your table, Word repeats the table heading
	rows at the top of each page. The table heading rows on the second and
	subsequent pages have special properties; for example, you cannot select them,
	and, if you select the entire document and press F9 to update fields, Word does
	not update any fields in the table heading rows.
	
	WORKAROUND
	==========
	
	Method 1: Insert Same Fields on Each Page
	-----------------------------------------
	
	Avoid inserting fields in your table heading rows that have a different result
	from page to page.
	
	Method 2: Manually Create Table Headings
	----------------------------------------
	
	Use the following instructions to manually create table headings in a
	multiple-page table. This procedure creates two tables, one in the header (at
	the top of each page) and one in the document body. They appear as one table
	when you print the document.
	
	a. In your document, cut the table rows that you want to appear at the top of
	  each page.
	
	b. On the View menu, click Header And Footer. In the header, paste the table
	  rows that you cut in step a.
	
	c. On the File menu, click Page Setup, and then click the Margins tab.
	
	d. Type a minus sign (-) before the Top margin setting to make it a negative
	  number. For example, if your Top margin setting is 1 inch, change it to -1
	  inch. The minus sign sets a fixed top margin that is not pushed down by the
	  header.
	
	e. Under From Edge, in the Header box, type the top margin minus .19 inch, and
	  click OK. For instance, type .81" for a 1-inch top margin. This measurement
	  is usually correct when you add a single row table to the header that
	  contains a single row of 12-point or smaller text. For a table with
	  additional lines, rows or larger text, you must adjust the value that you
	  subtract from the top margin setting. You can adjust this setting as
	  necessary.
	
	  The following table lists Header From Edge settings for common margin values:
	
	                                       Header From
	       Top Margin      Change to       Edge Setting
	       ----------      ---------       ------------
	
	         2.0"           -2.0"                1.81"
	         1.5"           -1.5"                1.31"
	         1.0"           -1.0"                 .81"
	         0.5"           -0.5"                 .31"
	
	  NOTE: You can specify the Header From Edge setting to the hundredths place
	  (for example, .73 inch).
	
	f. Select the paragraph following the table in the header.
	
	g. On the Format menu, click Paragraph and click the Indents And Spacing tab.
	
	h. In the Line Spacing list, click Exactly. In the At box, type "4 pt" (without
	  the quotation marks), and click OK. This minimizes the space between the
	  table in the header and the table in the body of your document.
	
	i. On the Header And Footer toolbar, click Close.
	
	j. If the header table contains border formatting, remove the bottom portion of
	  the border; follow these steps:
	
	  1. Select the table.
	
	  2. On the Format menu, click Borders And Shading.
	
	  3. On the border diagram (under Preview), click the bottom border to remove
	     the border from the table.
	
	  4. Click OK.
	
	k. Switch to page layout view so you can check the relationship of the table in
	  the header to the table in the body of the document. Adjust the Header From
	  Edge value as necessary, using the instructions in step e.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: patch picture snapshot wrong result incorrect can't update cannot fields increment increments incrementing next number
	
	======================================================================
	Keywords          : kbfield word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
