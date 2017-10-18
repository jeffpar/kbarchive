---
layout: page
title: "Q141943: Colors Change Briefly When Inserting Object in WordPad"
permalink: kb/141/Q141943/
---

## Q141943: Colors Change Briefly When Inserting Object in WordPad

	Article: Q141943
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
	
	When you insert a graphic image or video clip into WordPad, the colors on the
	screen may change briefly and then return to normal.
	
	CAUSE
	=====
	
	The color change occurs because WordPad changes the color palette so that it can
	display the colors in the graphic image or video clip. This behavior occurs only
	with a color setting of 256 or fewer colors.
	
	RESOLUTION
	==========
	
	To prevent the brief color change, increase the number of colors in the color
	palette. To do so, change the Color Palette setting on the Settings tab in
	Display properties to High Color (16-bit) or True Color (24-bit). These settings
	produce 65,000 or 16.8 million colors, respectively. Before changing the Color
	Palette setting, make sure your display adapter and monitor are capable of
	displaying more than 256 colors.
	
	To change the Color Palette setting, follow these steps:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab.
	
	3. In the Color Palette box, click the setting you want.
	
	4. Click OK.
	
	5. When you are prompted to restart your computer, do so.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
