---
layout: page
title: "Q186448: FP: Image Disappears Changing Alignment of Formatted Style Text"
permalink: /kb/186/Q186448/
---

## Q186448: FP: Image Disappears Changing Alignment of Formatted Style Text

	Article: Q186448
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an image in a paragraph that use the Formatted style, and you
	change the image alignment to left or right justification, the image
	disappears.
	
	This behavior does not occur in FrontPage 98.
	
	CAUSE
	=====
	
	The HTML parser in FrontPage removes the <IMG> tag if the align= attribute
	occurs inside the <IMG> tag and the <IMG> tag is nested inside the
	<PRE> element.
	
	RESOLUTION
	==========
	
	Format the image and text using a table. To do this, follow these steps:
	
	1. Click at the beginning of the Formatted style paragraph.
	
	2. On the Table menu, click Insert Table.
	
	3. In the Rows box, enter "1" (without the quotation marks). In the Columns box,
	  enter "2"(without the quotation marks).
	
	4. Click OK.
	
	5. Select the formatted paragraph.
	
	6. On the Edit menu, click Cut.
	
	7. Click in the cell where you want the text to appear and then click Paste on
	  the Edit menu.
	
	  NOTE: If you want the image to appear to the left of the text, place the text
	  in the right-hand cell. If you want the image to appear to the right of the
	  text, place the text in the left-hand cell.
	
	8. Click in the other cell and then click Image on the Insert menu.
	
	  NOTE: You may need to adjust the image, cell, and table properties to achieve
	  the correct formatting for the page.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
