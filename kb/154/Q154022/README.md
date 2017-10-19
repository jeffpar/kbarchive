---
layout: page
title: "Q154022: Wine Guide: Distorted Display When Playing Video Clips"
permalink: /kb/154/Q154022/
---

## Q154022: Wine Guide: Distorted Display When Playing Video Clips

	Article: Q154022
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a,2.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Matrox Millennium video card, when you play a video clip in
	Microsoft Wine Guide, part of the display area surrounding the video window may
	become distorted or scrambled.
	
	CAUSE
	=====
	
	Quick Color Dithering for the Matrox Millennium video card is not turned on.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. In Program Manager, open the Matrox MGA Millennium program group.
	
	2. Double-click the Matrox Control Panel icon.
	
	3. Make sure the Use ModeSWITCH With QCDP option is selected.
	
	4. Click OK or Close.
	
	5. Restart your computer when you are prompted.
	
	MORE INFORMATION
	================
	
	You can also resolve this problem by increasing the display resolution to
	greater than 640 X 480 pixels, or by increasing the color palette to greater
	than 256 colors. For more information about how to accomplish these task, see
	your Windows printed documentation or online Help.
	
	For more information about this issue, see your Matrox Millennium printed
	documentation or contact Matrox technical support at (514) 685-2630.
	
	This problem does not occur with Microsoft Windows 95.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm matrox mga millennium
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWine100 kbWine100a kbWine200
	Version           : WINDOWS:1.0,1.0a,2.0,3.1,3.11
	
	=============================================================================
	
