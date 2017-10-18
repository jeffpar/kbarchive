---
layout: page
title: "Q106620: Art Gallery/ Wine Guide: Animations Don't Play with ATI"
permalink: kb/106/Q106620/
---

## Q106620: Art Gallery/ Wine Guide: Animations Don't Play with ATI

	Article: Q106620
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The animations in Art Gallery or Wine Guide may be distorted, or may fail to
	play at all. This can occur if you are using an ATI video card and an ATI Mach
	video driver (either Mach 8 or Mach 32).
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Open the ATI Flexdesk control panel. This utility ships with the ATI Mach
	  video cards.
	
	2. Click Advanced.
	
	3. Set the Device Bitmaps setting for the video card to Off.
	
	Changing this setting enables the animations in Art Gallery and Wine Guide to run
	correctly.
	
	Additional query words: 2.00 multi media multimedia multi-media national
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbWine100 kbWine200 kbArtGallery
	Version           : WINDOWS:1.0,2.0
	
	=============================================================================
	
