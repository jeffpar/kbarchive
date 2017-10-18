---
layout: page
title: "Q71207: Previous Button Dimmed in Connect Net Drive Dialog Box"
permalink: kb/071/Q71207/
---

## Q71207: Previous Button Dimmed in Connect Net Drive Dialog Box

	Article: Q71207
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Previous button in the Connect Network Drive dialog box in File Manager is
	used to quickly access network drive connections (made in prior sessions from
	File Manager).
	
	This button may be dimmed and unavailable if the WINFILE.INI is corrupted or
	damaged. There may not be any other sign that this corruption has taken place.
	
	WORKAROUND
	==========
	
	Delete the WINFILE.INI and exit File Manager. The WINFILE.INI will automatically
	be rewritten.
	
	Additional query words: 3.0 3.00 win30 grayed greyed 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
