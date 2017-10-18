---
layout: page
title: "Q107169: GI_BOTADDR Documented Incorrectly"
permalink: kb/107/Q107169/
---

## Q107169: GI_BOTADDR Documented Incorrectly

	Article: Q107169
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Page 9-43 of the Microsoft Multimedia Viewer version 2.0 "Technical
	Reference" incorrectly documents the lParam1 that can be used with the
	GI_BOTADDR flag for VwrGetInfo(). The documentation says "you can
	specify NULL to obtain the bottom address in the scrolling region of
	the topmost window." In fact, if NULL is specified for lParam1,
	VwrGetInfo always returns -1. lParam1 must specify the window handle
	of a Viewer topic region.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	
