---
layout: page
title: "Q134774: 256-Color Bitmap Loses Colors When Drawing Tools Are Used"
permalink: kb/134/Q134774/
---

## Q134774: 256-Color Bitmap Loses Colors When Drawing Tools Are Used

	Article: Q134774
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you paste a 256-color bitmap image into Paint and you apply a drawing tool
	from the toolbox (such as the Line, Curve, Rectangle, Polygon, Rounded
	Rectangle, or Ellipse tool) to the image, any area covered by the tool loses its
	256-color depth.
	
	CAUSE
	=====
	
	This behavior occurs when you run Windows 95 in 256-color mode.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Before you apply a drawing tool to the image, save it in Paint and then open
	  it again.
	
	- If your video adapter supports these settings, change the Color Palette
	  setting in Display properties to High Color (16 bit) or True Color (24 bit).
	  For information about changing this setting, please see the "To change the
	  number of colors your monitor displays" topic in Windows 95 Help.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
