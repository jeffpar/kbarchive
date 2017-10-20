---
layout: page
title: "Q24201: Flipping vs. Swapping Screens in CodeView"
permalink: /kb/024/Q24201/
---

## Q24201: Flipping vs. Swapping Screens in CodeView

{% raw %}

	Article: Q24201
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.12,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Flipping and swapping are both ways of maintaining two alternate screens for
	display on one monitor. The difference is in the way the task is accomplished.
	
	When swapping is selected, CodeView allocates a 16K buffer (a 4K buffer for a
	monochrome adapter) to hold the alternate screen. When the other screen is
	required, CodeView swaps the screen into the display buffer and places the other
	screen into the storage buffer. Swapping takes memory and time but it does not
	have the limitations of flipping.
	
	Flipping uses the video-display pages of the graphics adapter to store each
	screen of text. When the alternate screen is required, the other page is
	selected. Flipping is much faster than swapping and does not require the 16K
	buffer. However, it cannot be used with a monochrome adapter, or with programs
	that display graphics or use the video pages.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2
	Version           : :2.2,3.0,3.11,3.12,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
