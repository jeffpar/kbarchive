---
layout: page
title: "Q121245: Adobe Type Manager Type 1 Fonts Not Displayed in Font Manager"
permalink: /kb/121/Q121245/
---

## Q121245: Adobe Type Manager Type 1 Fonts Not Displayed in Font Manager

	Article: Q121245
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Fonts icon in Control Panel, Adobe Type Manager (ATM)
	PostScript Type 1 fonts are not displayed.
	
	CAUSE
	=====
	
	Windows 95 displays only fonts that are listed in the registry or in the [FONTS]
	section of the WIN.INI file. When ATM is installed, the fonts are not added to
	this file. If you manually add the fonts to the WIN.INI file, they are
	displayed, but they cannot be opened (or viewed).
	
	RESOLUTION
	==========
	
	To view the installed ATM fonts, run the ATM Control Panel application
	(ATMCNTRL.EXE) included with Adobe Type Manager.
	
	MORE INFORMATION
	================
	
	Adobe Type Manager is manufactured by Adobe Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: pfm pscript ps
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
