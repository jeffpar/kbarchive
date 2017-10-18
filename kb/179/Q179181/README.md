---
layout: page
title: "Q179181: FP: Page Margins Not Visible in Browser"
permalink: kb/179/Q179181/
---

## Q179181: FP: Page Margins Not Visible in Browser

	Article: Q179181
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q196487.
	
	For a Microsoft FrontPage 98 version of this article, see Q193954.
	
	SYMPTOMS
	========
	
	When you apply a top or left margin to a page, you do not see any margin when
	you open the page in your Web browser.
	
	NOTE: To apply a top or left margin, click Page Properties on the File menu in
	FrontPage Editor.
	
	CAUSE
	=====
	
	This behavior occurs in either of the following cases:
	
	- You are using Netscape Navigator or Netscape Communicator. Netscape
	  Navigator, version 3.02 and earlier, and Netscape Communicator, version 4.01
	  and earlier, do not support the leftmargin and topmargin attributes of the
	  body tag.
	
	  -or-
	
	- You are using Microsoft Internet Explorer 3.02 or earlier and you specified a
	  margin width of 255 pixels or greater.
	
	RESOLUTION
	==========
	
	To set the page margins, choose the appropriate method for your situation.
	
	Method 1: If You Are Using Netscape Navigator
	---------------------------------------------
	
	If you are using Netscape Navigator, set the page margin to zero in FrontPage
	Editor. For more information about setting the page margins for Netscape
	Navigator, please see the following article in the Microsoft Knowledge Base:
	
	  Q180349 FP97: Creating Zero Margins in FrontPage for Netscape Navigator 4
	
	Method 2: If You Are Using Microsoft Internet Explorer
	------------------------------------------------------
	
	If you are using Internet Explorer 3.02 or earlier, your page margins must be
	less than or equal to 255 pixels.
	
	MORE INFORMATION
	================
	
	FrontPage allows you to specify a page margin of up to 9999 pixels for the top
	or left margin of a page.
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
