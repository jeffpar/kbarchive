---
layout: page
title: "Q141979: Cannot Print to Legal Paper on HP LJ IIP/IIIP with PostScript"
permalink: /kb/141/Q141979/
---

## Q141979: Cannot Print to Legal Paper on HP LJ IIP/IIIP with PostScript

{% raw %}

	Article: Q141979
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 31-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to legal-size paper on a Hewlett-Packard (HP) LaserJet IIP or
	IIIP printer with a PostScript cartridge, you may experience one or more of the
	following problems:
	
	- The document is not printed.
	
	- The top portion of the page is not printed.
	
	RESOLUTION
	==========
	
	To print to legal-size paper on an HP LaserJet IIP or IIIP printer with a
	PostScript cartridge, follow these steps:
	
	1. Format the document for legal-size paper and select the Manual Feed paper
	  source. Do not use the Auto Select Tray paper source. This source defaults to
	  the size of paper in the standard paper tray.
	
	2. Print the document.
	
	3. When you see the message "MF FEED LEGAL" in the printer's display window,
	  make sure that legal-size paper is loaded in the MP tray and then press the
	  ONLINE button on the printer once. Do not press ALT+CONTINUE. Pressing
	  ALT+CONTINUE informs the printer that you do not have the requested paper
	  size and to use the default paper.
	
	NOTE: The above steps have been tested with an HP PostScript cartridge. These
	steps may or may not work with third-party PostScript cartridges.
	
	
	Additional query words: word winword excel lj
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	

{% endraw %}
