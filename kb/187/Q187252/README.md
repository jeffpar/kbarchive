---
layout: page
title: "Q187252: FrontPage Editor Removes Spaces From Tables"
permalink: /kb/187/Q187252/
---

## Q187252: FrontPage Editor Removes Spaces From Tables

	Article: Q187252
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdtakbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a table and specify non-breaking spaces using the &nbsp;
	character entity in some of the table cells, FrontPage Editor may remove the
	&nbsp; character entities from your HyperText Markup Language (HTML)
	document.
	
	CAUSE
	=====
	
	FrontPage Editor will not retain the &nbsp; character entities if a table
	cell has an explicit height setting because the &nbsp; would force a minimum
	height for the cell. When parsing the HTML, FrontPage Editor removes any
	&nbsp; character entities it deems extraneous.
	
	RESOLUTION
	==========
	
	Install the FrontPage 98b patch. You can obtain this update from the following
	Microsoft World Wide Web site:
	
	  http://office.microsoft.com/downloads/9798/fp98bupd.aspx
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta kbbuglist
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
