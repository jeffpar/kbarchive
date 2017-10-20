---
layout: page
title: "Q255065: Printing with Zero Margins Overlaps First and Last Lines of Page"
permalink: /kb/255/Q255065/
---

## Q255065: Printing with Zero Margins Overlaps First and Last Lines of Page

{% raw %}

	Article: Q255065
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing with the Generic Text-Only driver and you are using the
	Continuous-No Page Break paper source, using 0 (zero) for the top and bottom
	margins causes the first line on a page to be printed on top of the last line of
	the previous page.
	
	CAUSE
	=====
	
	Because each page of a print job uses a form feed (FF) control to advance to the
	next page, the printer driver does not send a line feed (LF) at the end of the
	last line of text on the page. When you are using the Continuous-No Page Break
	paper source for the Generic Text-Only driver, the FF to advance to the next
	page is not used. If the bottom and top margins are 0 (zero), the lack of a FF
	or LF means that the first line of text on the next page starts printing on the
	same line as the last line of text printed on the previous page.
	
	RESOLUTION
	==========
	
	Set a top margin size that is equivalent to the space that a line of text
	occupies. This causes the first line of text on a page to be printed directly
	under the last line printed from the previous page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
