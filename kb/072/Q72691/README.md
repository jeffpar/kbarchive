---
layout: page
title: "Q72691: INFO: Banding, Printing, and the Number of Bands"
permalink: /kb/072/Q72691/
---

## Q72691: INFO: Banding, Printing, and the Number of Bands

{% raw %}

	Article: Q72691
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Banding is a printing technique used to print full-page graphics on raster
	devices such as dot-matrix printers. In banding, an application prints an image
	by dividing the image into several bands (or slices) and sending each band to
	the printer separately.
	
	To properly implement banding, an application should never make assumptions about
	the number, size, or the ordering of bands that will be provided by a printer
	driver. Making assumptions can cause problems because these values can vary
	depending on the amount of free memory that is available and the printer driver
	that is being used. The correct method for determining the size and the starting
	position of bands is to call the escape function NEXTBAND. This escape function
	takes as a parameter a LPRECT, which points to a data structure that will
	receive the coordinates of the next band. The NEXTBAND escape function sets the
	band rectangle to the empty rectangle when printing reaches the end of the
	page.
	
	For more information on the NEXTBAND escape function, see pages 12-39 and 12-40
	of the Microsoft Windows SDK "Reference Volume 2" or page 489 of the Windows SDK
	"Programmer's Reference, Volume 3: Messages, Structures, and Macros" manual for
	version 3.1.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
