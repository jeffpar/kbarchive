---
layout: page
title: "Q238277: Very Slow Scrolling in Excel 97, 2000 and Internet Explorer 4.0"
permalink: /kb/238/Q238277/
---

## Q238277: Very Slow Scrolling in Excel 97, 2000 and Internet Explorer 4.0

	Article: Q238277
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Excel 97, 2000, or Microsoft Internet Explorer 4.0 on a
	Terminal Server client, you may experience very slow response when you scroll.
	
	CAUSE
	=====
	
	This problem is caused by the "provide feedback with animation" in Excel and the
	"use smooth scrolling" option in Internet Explorer.
	
	RESOLUTION
	==========
	
	To resolve this problem in Excel 97 or 2000:
	
	1. Start Excell 97 or 2000.
	
	2. On the Tools menu, click Options.
	
	3. Click the Edit tab, and then clear the Provide feedback with Animation
	  checkbox.
	
	To resolve this problem in Internet Explorer 4.0:
	
	- Start Internet Explorer 4.0.
	
	- On the View menu, click Internet Options.
	
	- Click the Advanced tab, then clear the use smooth scrolling checkbox.
	
	
	
	REFERENCES
	==========
	
	Q235100
	
	Additional query words: scroll, terminal server, display
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
