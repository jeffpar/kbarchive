---
layout: page
title: "Q157330: Windows NT 4.0 PostScript Driver Prints Only Last Page"
permalink: /kb/157/Q157330/
---

## Q157330: Windows NT 4.0 PostScript Driver Prints Only Last Page

{% raw %}

	Article: Q157330
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a PostScript printer that reverses the order in which the
	pages are printed, only the last page of the document may be printed.
	
	CAUSE
	=====
	
	This behavior can occur if page independence is disabled, causing the PostScript
	code to include a command indicating the last page of the print job on the last
	page of the document (which is printed first).
	
	RESOLUTION
	==========
	
	Enable page independence. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the PostScript printer you are using, and
	  then click Document Defaults on the menu that appears.
	
	3. Click the Advanced tab.
	
	4. Double-click the Document Options branch to expand it, and then double-click
	  the PostScript Options branch to expand it.
	
	5. Click Page Independence, and then change the setting to Yes.
	
	6. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
