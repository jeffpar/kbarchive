---
layout: page
title: "Q107167: Using Tabs in Windows Help or Viewer Titles"
permalink: /kb/107/Q107167/
---

## Q107167: Using Tabs in Windows Help or Viewer Titles

	Article: Q107167
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	To change the default tab stops used by Viewer or Windows Help, the
	new tab stop positions must be explicitly set in Word for Windows.
	Word's default tab stops are not supported by Viewer.
	
	Word for Windows uses the RTF token \deftabN to save its default tab
	stops, where N is the size of the default tabs. Viewer doesn't support
	this RTF token, and when it sees tabs within the RTF file, Viewer it
	uses its own default tab stops, which are at .5 inches.
	
	If tab stop positions are explicitly set in Word, Word will write \txN
	tokens to the RTF file, where N is the position of the tab stop.
	Viewer does support the \tx token, and therefore the tabs will show up
	correctly in the Viewer title.
	
	Additional query words: 2.00 2.00a tabstop winword winhelp
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
