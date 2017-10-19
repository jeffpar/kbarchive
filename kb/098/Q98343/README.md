---
layout: page
title: "Q98343: Creating Colored Hot Spot with no Underline in MM Viewer"
permalink: /kb/098/Q98343/
---

## Q98343: Creating Colored Hot Spot with no Underline in MM Viewer

	Article: Q98343
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	To create a text hot spot that will be displayed with a given color and
	without an underline by the Multimedia Viewer, follow these steps:
	
	1. Begin the hidden text for the hot spot with the division sign character "%".
	  If you are using the Viewer Topic Editor to create the hot spot, choose the
	  Jump To 'jump_or_command' Viewer Element. Then select the None option button
	  in the Hot Spot Formatting group box. The % character turns off the standard
	  underline and color. For more information, see the documentation for the \v
	  RTF token in Chapter 2 of the Microsoft Multimedia Viewer 2.0 "Technical
	  Reference."
	
	2. In Word for Windows, format the hot spot text with the desired color. To do
	  this:
	
	  a. Select the hot spot text
	
	  b. From the Word 6.0x Format menu, choose Font (from the Word 2.0x Font menu,
	     choose Character)
	
	  c. Set the desired color
	
	Additional query words: 2.00 2.00a hotspot
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
