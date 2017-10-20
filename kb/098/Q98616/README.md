---
layout: page
title: "Q98616: Printing Overlaps .75 Inch to Next Page on Okidata ML 380"
permalink: /kb/098/Q98616/
---

## Q98616: Printing Overlaps .75 Inch to Next Page on Okidata ML 380

{% raw %}

	Article: Q98616
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the "tear-off" feature on the Okidata ML-380 printer may result in the
	document printing .75 inch onto the next page. The tear-off feature causes the
	print head to be positioned approximately .75 inch from the top of the paper.
	Windows assumes that the top margin starts where the print head is positioned.
	
	CAUSE
	=====
	
	The Okidata ML-380 printer tear-off feature advances the paper so that the
	perforation is under a straight edge bar. This make it easier to separate pages
	but creates problems determining where the top of the page is located.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Subtract .75 inch from the top and bottom margins set in the application.
	  Leave the printer driver margins set to 0 (zero). (The printer driver margins
	  are set in Control Panel.)
	
	- Use the Epson LQ-850 printer driver and set the top margin to .75 inch. To do
	  this, open Control Panel, choose the Printers icon, choose Setup, then choose
	  Options and reset the top margin value.
	
	- Disable the tear-off feature on the printer.
	
	This problem is caused by the printer driver not using the form feed command to
	move to the next page; instead, it uses line spacing. The tear-off feature
	itself does not cause this problem. If you set a top margin for the printer
	driver in Control Panel, the margin will be that much shorter on each page.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
