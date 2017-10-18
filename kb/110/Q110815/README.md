---
layout: page
title: "Q110815: Font Installer Doesn't Find Non-TrueType Compressed Fonts"
permalink: kb/110/Q110815/
---

## Q110815: Font Installer Doesn't Find Non-TrueType Compressed Fonts

	Article: Q110815
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Fonts applet in Control Panel to add additional fonts, you
	don't have the option to install any compressed non-TrueType fonts.
	
	WORKAROUND
	==========
	
	You can work around this problem by manually expanding the non-TrueType font to
	a location on your hard disk or a floppy disk, then choose this location when
	you install fonts from Control Panel.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Control Panel window, choose the Fonts icon.
	
	2. Choose the Add button.
	
	3. Select a drive and a directory that contains one or more non-TrueType
	  compressed fonts. For example, choose the i386 directory from the Windows NT
	  CD.
	
	After all font names have been retrieved, notice that the List of Fonts contains
	only TrueType fonts.
	
	Additional query words: prodnt raster vector
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
