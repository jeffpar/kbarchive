---
layout: page
title: "Q132625: S3 Adapter Using High Color Resolution May Have Blue Tint"
permalink: /kb/132/Q132625/
---

## Q132625: S3 Adapter Using High Color Resolution May Have Blue Tint

{% raw %}

	Article: Q132625
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
	
	When you are using a High Color resolution (with more than 256 colors) with an
	S3 video adapter, the colors on the screen may have a blue tint.
	
	CAUSE
	=====
	
	The S3 display driver is using a different High Color mode from the mode set in
	the video BIOS.
	
	RESOLUTION
	==========
	
	To correct this problem, add the following line to the [display] section of the
	System.ini file and then restart your computer:
	
	  HighColor=15
	
	This setting forces the S3 driver to use the 555 mode.
	
	MORE INFORMATION
	================
	
	A High Color mode can have one of two variations: a 555 mode or a 565 mode. In
	the 555 mode, the blue component of the color is in the low five bits, the green
	component is in the next five bits, and the red component is in the following
	five bits. The high bit is not used. In the 565 mode, the low five bits are for
	blue, the next six are for green, and the last five are for red.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
