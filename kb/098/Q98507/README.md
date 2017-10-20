---
layout: page
title: "Q98507: HP PaintJet XL Prints from Paper Tray with Manual Feed Option"
permalink: /kb/098/Q98507/
---

## Q98507: HP PaintJet XL Prints from Paper Tray with Manual Feed Option

{% raw %}

	Article: Q98507
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have configured your printer driver for manual feed and you print to a
	Hewlett-Packard (HP) PaintJet XL, the printer takes the paper from the paper
	tray if you issue the Print command before you place a piece of paper in the
	manual feeder.
	
	CAUSE
	=====
	
	If you issue the Print command and no paper has been placed in the manual
	feeder, the printer draws paper from the paper tray and pauses. The Manual Feed
	Mode light comes on, and Print Manager prompts you to insert paper. When you
	choose OK (even after placing paper in the manual feeder), the output is printed
	on the page taken from the paper tray.
	
	WORKAROUND
	==========
	
	To work around this situation, place a piece of paper in the manual feeder
	before you issue the Print command. When Print Manager asks for paper to be
	inserted, choose OK; the page will be manually fed to the printer.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
