---
layout: page
title: "Q143358: Canon BJC-800 Prints Slowly in Windows 95"
permalink: /kb/143/Q143358/
---

## Q143358: Canon BJC-800 Prints Slowly in Windows 95

	Article: Q143358
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Canon BJC-800 printer in Windows 95 using the Canon
	BubbleJet BJC-800 printer driver, printing seems slow.
	
	CAUSE
	=====
	
	The Canon BJC-800 printer is designed to print on coated paper. When you use
	coated paper, the printer can use its fast "A" printing mode. When you use plain
	paper with this printer, the printer uses its slower "D" printing mode. The
	Windows 95 driver mentioned above defaults to using the slower "D" printing
	mode.
	
	RESOLUTION
	==========
	
	Set the printer driver to use the faster "A" printing mode. To do so, follow
	these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the Canon BubbleJet BJC-800 printer
	  driver, and then click Properties on the menu that appears.
	
	3. Click the Paper tab.
	
	4. In the Media Choice box, click "Coated Paper (Mode A)."
	
	5. Click OK.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
