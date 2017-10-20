---
layout: page
title: "Q152993: Raster Fonts Print Different on Windows NT 4.0 Than on 3.51"
permalink: /kb/152/Q152993/
---

## Q152993: Raster Fonts Print Different on Windows NT 4.0 Than on 3.51

{% raw %}

	Article: Q152993
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT 3.51 to Windows NT 4.0, raster fonts (for
	example, MS Sans Serif) print differently. This problem occurs even though the
	fonts listed in the registry did not change.
	
	CAUSE
	=====
	
	Raster fonts are bitmaps supplied in different sizes for specific video display
	resolutions. They are stored in files as bitmaps and are rendered as an array of
	dots for displaying on the screen and printing on paper.
	
	If the font to print is a raster font, Windows NT uses a font-mapping table to
	determine the most appropriate device font to use. When Windows NT uses the
	font-mapping table to match screen fonts to printer fonts, the characteristics
	used to find the closest match are in descending order of importance (character
	set, typeface name, variable versus fixed pitch, family, height, width, weight,
	slant, underline, and strikeout). The font chosen depends on what fonts are
	currently installed. The fonts installed on your system can be found in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Fonts
	
	Windows NT 4.0 uses a different priority order than Windows NT 3.51 when mapping
	raster fonts.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
