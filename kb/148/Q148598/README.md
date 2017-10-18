---
layout: page
title: "Q148598: PPT7: Menu Text Jumbled or Out of Place in PowerPoint for Window"
permalink: kb/148/Q148598/
---

## Q148598: PPT7: Menu Text Jumbled or Out of Place in PowerPoint for Window

	Article: Q148598
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In PowerPoint for Windows 95, the menu text or the commands on the menus may
	appear in the wrong place or may appear jumbled. For example, the order of the
	File, Edit, View, Insert, and Format menus may be changed, or they may not
	appear in English.
	
	Note that you will not experience this behavior in other Office programs.
	
	CAUSE
	=====
	
	This problem will occur if the Ppintl.dll file is corrupted. This file is
	located in the \Powerpnt or in the \Msoffice\Powerpnt folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Rename Ppintl.dll to Ppintl.old or Ppintl.bak.
	
	2. Run PowerPoint or Office Setup.
	
	3. In the Maintenance Mode dialog box, click Reinstall.
	
	4. Follow the instructions on your screen.
	
	
	MORE INFORMATION
	================
	
	Ppintl.dll contains the text strings that must be translated for international
	versions of PowerPoint. This driver is in part responsible for the appearance of
	menu names, commands on menus, Tip Of The Day text, alerts, and so on. Because
	of this, it may produce strange behavior if it is corrupted.
	
	Additional query words: 7.00 out of order mixed up disordered ppt ppt7 ppt95 powerpnt
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
