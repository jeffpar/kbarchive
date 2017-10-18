---
layout: page
title: "Q155720: Aldus Persuasion Table Uses Marlett as Default Font"
permalink: kb/155/Q155720/
---

## Q155720: Aldus Persuasion Table Uses Marlett as Default Font

	Article: Q155720
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an Aldus table into a newly created Aldus Persuasion document, the
	default font used is Marlett, a non-text font. Changing the font with the table
	formatting tools does not change the font from Marlett.
	
	CAUSE
	=====
	
	Persuasion performs an EnumFontFamilies to determine which fonts are installed
	and defaults to the first TrueType font returned. Marlett is the first TrueType
	font returned. This is also the case for Microsoft Windows 95.
	
	RESOLUTION
	==========
	
	Use the Text Properties command on the Edit menu to change the default font
	permanently.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
