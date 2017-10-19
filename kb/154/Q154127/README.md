---
layout: page
title: "Q154127: Only One Font Available in HyperTerminal"
permalink: /kb/154/Q154127/
---

## Q154127: Only One Font Available in HyperTerminal

	Article: Q154127
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the font in HyperTerminal, there may be only one font
	available to select (the Courier New TrueType font).
	
	CAUSE
	=====
	
	This behavior can occur if you upgraded a previous version of Windows in which
	the Show Only TrueType Fonts In Applications option was enabled to Windows 95.
	This setting is replicated in Windows 95 during the upgrade process.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Control Panel, double-click Fonts.
	
	2. On the View menu, click Options.
	
	3. Click the TrueType tab.
	
	4. Click the "Show only TrueType fonts in the programs on my computer" check box
	  to clear it.
	
	5. Click OK. When you are prompted to restart your computer, do so.
	
	After you follow these steps, the following fonts should be available in
	HyperTerminal:
	
	- Courier
	
	- Courier New
	
	- Fixedsys
	
	- Terminal
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
