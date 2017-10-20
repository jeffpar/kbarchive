---
layout: page
title: "Q161917: Printing Italics to a LexMark Printer Produces Incorrect Output"
permalink: /kb/161/Q161917/
---

## Q161917: Printing Italics to a LexMark Printer Produces Incorrect Output

{% raw %}

	Article: Q161917
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing italicized text using the 12 point Times New Roman font on an IBM
	or LexMark PostScript printer, incorrect output may result. The italicized
	letters overwrite the preceding space. Increasing the number of different fonts
	and point sizes, or including graphics makes the problem more pronounced.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT substitutes the TrueType font for a
	PostScript font that resides on the printer to help speed printing. The drivers
	use the metrics from the substituted PostScript font instead of the TrueType
	font when placing the characters.
	
	RESOLUTION
	==========
	
	There are two workarounds to this issue:
	
	1. In the Printers folder, select the printer then click Document Defaults from
	  the File menu.
	
	2. Find the TrueType Font option on the Advanced tab.
	
	3. Change it to Download As Soft Font.
	
	- or -
	
	1. In the Printers folder, select the printer and then click Properties from the
	  File menu.
	
	2. Find the Font Substitution option on the Device Settings tab.
	
	3. Change it to Slow but More Accurate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: spacing true type truetype
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
