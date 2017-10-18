---
layout: page
title: "Q170236: FP: Text Boxes in Table Cells Don't Increment"
permalink: kb/170/Q170236/
---

## Q170236: FP: Text Boxes in Table Cells Don't Increment

	Article: Q170236
	Product(s): Word Front Page
	Version(s): windows:97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194326.
	
	SYMPTOMS
	========
	
	In Microsoft FrontPage Editor, when you insert text boxes in multiple cells of a
	table, all of the text boxes have the same name, "T1" (they do not increment).
	
	NOTE: To determine the name assigned to each text box, right-click the text box,
	and then click Form Field Properties on the menu that appears.
	
	CAUSE
	=====
	
	When you insert a text box in a table cell, FrontPage treats that cell as a
	separate form. As a result, when you insert multiple text boxes in multiple
	table cells, each cell is treated as a separate form and each form field is
	assigned the same name.
	
	RESOLUTION
	==========
	
	To set up a single form in a table, follow these steps:
	
	1. On the Insert menu, point to Form Field, and then click "One-Line Text Box."
	
	2. Select the text box Form Field and then press DELETE.
	
	  The dashed lines that indicate the area of the form remain even though you
	  deleted the form field.
	
	3. On the Table menu, click Insert Table.
	
	4. In the Insert Table dialog box, select the options you want, and then click
	  OK.
	
	You can now insert form fields in multiple cells. Each form field will be
	assigned a new name, such as T1, T2, T3, and so on.
	
	MORE INFORMATION
	================
	
	In FrontPage Editor, a form is comprised of one or more form fields. A one- line
	text box is an example of a form field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
