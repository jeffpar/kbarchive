---
layout: page
title: "Q123997: Inserted Picture Converted w/Visio 3 Contains Horizontal Lines"
permalink: /kb/123/Q123997/
---

## Q123997: Inserted Picture Converted w/Visio 3 Contains Horizontal Lines

{% raw %}

	Article: Q123997
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Visio version 3.0, white horizontal lines appear on inserted
	color pictures. The white lines also appear on the images when printed.
	
	CAUSE
	=====
	
	This problem is caused by the way Image Stream version 1.9.11, the graphics
	filter included with Visio 3.0, converts images for displaying on the screen.
	The lines appear only on those images that are converted--bitmap (.BMP) and
	Windows metafile (.WMF) images display and print correctly.
	
	WORKAROUND
	==========
	
	Using a graphics utility other than Visio, convert the image from its original
	format to bitmap (.BMP) or Windows metafile (.WMF) format. Then insert the
	bitmap image into Visio.
	
	MORE INFORMATION
	================
	
	Visio is manufactured by vendors independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	Additional query words: 3rdparty PCX TIF EPS
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
