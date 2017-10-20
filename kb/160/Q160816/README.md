---
layout: page
title: "Q160816: FP: FrontPage Editor Adds Space to Empty Table Cell"
permalink: /kb/160/Q160816/
---

## Q160816: FP: FrontPage Editor Adds Space to Empty Table Cell

{% raw %}

	Article: Q160816
	Product(s): Word Front Page
	Version(s): windows:97, macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194235.
	
	SYMPTOMS
	========
	
	FrontPage Editor places a non-breaking space character (&nbsp;) in all empty
	table cells. If you remove this character from the HyperText Markup Language
	(HTML) source code, FrontPage replaces it. For example, FrontPage converts this
	HTML code
	
	     <td></td>
	
	to this:
	
	     <td>&nbsp;</td>
	
	CAUSE
	=====
	
	FrontPage Editor inserts the non-breaking space character to make the table cell
	outline visible.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97, macintosh:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
