---
layout: page
title: "Q153461: PostScript Printer Skips Blank Pages When Printing"
permalink: /kb/153/Q153461/
---

## Q153461: PostScript Printer Skips Blank Pages When Printing

{% raw %}

	Article: Q153461
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbpolicy kbprint win95 kbPrinting
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a PostScript printer, blank pages may not be printed. If you
	try to print a 3-page document with one blank page, only the two pages that are
	not blank may be printed.
	
	CAUSE
	=====
	
	This behavior is caused by a problem with the Windows 95 PostScript printer
	driver.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Insert text on a page that you want to be blank, and then format the color of
	  that text to be white.
	
	- Install the Windows 3.x PostScript driver. For information about using
	  Windows 3.x drivers in Windows 95, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q132946 How to Install Windows 3.1 Drivers in Windows 95
	
	  NOTE: Windows 3.x printer drivers cannot take advantage of some of the
	  printing enhancements in Windows 95.
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	Additional query words: duplex word word97 winword
	
	======================================================================
	Keywords          : kbpolicy kbprint win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
