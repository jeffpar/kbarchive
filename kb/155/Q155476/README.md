---
layout: page
title: "Q155476: PPT7: Lines on Handouts Page Vary in Thickness When Printed"
permalink: /kb/155/Q155476/
---

## Q155476: PPT7: Lines on Handouts Page Vary in Thickness When Printed

	Article: Q155476
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbdta kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing handouts (3 per page), Microsoft PowerPoint for Windows 95,
	version 7.0 automatically places lines on the right-hand side of the printout.
	You may find that the line thickness varies from page to page, or even within a
	page. There are no menu options to control or disable this feature.
	
	CAUSE
	=====
	
	The thickness of the lines on Handouts is influenced by the bottom slide image
	on each Handouts page. The color and line thickness of the line or border that
	is closest to the front of the 3rd slide image controls the thickness of the
	lines on the right side of the page.
	
	RESOLUTION
	==========
	
	One way of controlling this behavior is to place a line or bordered object of
	the desired thickness and color on every 3rd slide, then use the Bring to Front
	command on the Draw menu to bring the object to the front of the stack of
	objects on that slide.
	
	The line may be hidden within a thicker line of the same color, if desired, but
	must not be obscured by a filled object.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 7.00 hand outs righthand too thick missing Erratic notes note handout print
	
	======================================================================
	Keywords          : kbprint kbdta kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
