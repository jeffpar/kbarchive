---
layout: page
title: "Q89571: PRB: Colors Lost Printing Color Metafile on Color Printer"
permalink: /kb/089/Q89571/
---

## Q89571: PRB: Colors Lost Printing Color Metafile on Color Printer

{% raw %}

	Article: Q89571
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows graphical environment, when an application prints a
	metafile that has a palette to a color printer, all colors in the metafile are
	changed to black or white.
	
	CAUSE
	=====
	
	The color printer does not support a palette.
	
	RESOLUTION
	==========
	
	When the application creates the metafile, specify the colors using the
	PALETTERGB macro instead of the PALETTEINDEX macro.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
