---
layout: page
title: "Q155500: FP: Centering Bullet List Causes Extra Spaces Between Lines"
permalink: /kb/155/Q155500/
---

## Q155500: FP: Centering Bullet List Causes Extra Spaces Between Lines

	Article: Q155500
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194273.
	
	SYMPTOMS
	========
	
	Creating a bulleted list and then setting the format to center causes extra
	spacing between lines.
	
	CAUSE
	=====
	
	When the bulleted list is centered, paragraph (<p>) tags are inserted
	between the lines causing the extra spacing.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Insert the bulleted list in a table
	---------------------------------------------
	
	1. On the Table menu, click Insert Table.
	
	2. Under Size, in both the Row and Columns boxes, type "1" (without the
	  quotation marks).
	
	3. Under Layout, in the Alignment list, select Center. In the Border Size box,
	  type "1" (without the quotation marks). Click OK.
	
	4. Create the bulleted list in the table.
	
	Method 2: Use a WebBot Component
	--------------------------------
	
	1. Place the insertion point on the line before the bulleted list.
	
	2. On the Insert menu, click Bot, and select HTML Markup.
	
	3. In the HTML Markup dialog box, type "<center>" (without the quotation
	  marks). Click OK.
	
	4. Create and format the bulleted list the way you want. (Do not center the
	  list).
	
	5. Place the insertion point on the line after the bulleted list.
	
	6. On the Insert menu, click Bot. Select the HTML Markup component, and click
	  OK.
	
	7. In the HTML Markup dialog box, type "</center>" (without the quotation
	  marks). Click OK.
	
	The center formatting will not be visible in FrontPage Editor; however, when you
	view the page in a Web browser that supports the <center> tag, the list
	will be centered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : :; MACINTOSH:1.0; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
