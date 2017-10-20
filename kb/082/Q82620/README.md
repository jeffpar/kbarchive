---
layout: page
title: "Q82620: ObjectVision 2.0 Prints TrueType Fonts Smaller"
permalink: /kb/082/Q82620/
---

## Q82620: ObjectVision 2.0 Prints TrueType Fonts Smaller

{% raw %}

	Article: Q82620
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Borland's ObjectVision version 2.0 prints TrueType font characters 1 to 2 points
	smaller than the same characters printed from Write. For example, the 14-point
	Arial from ObjectVision approximates 12-point Arial from Write.)
	
	CAUSE
	=====
	
	This is due to the way that ObjectVision 2.0 requests fonts from Microsoft
	Windows.
	
	WORKAROUND
	==========
	
	According to Borland technical support, you can work around this problem by
	commenting out the following lines in the [FontSubstitutes] section of the
	WIN.INI file:
	
	     Helv=Ms Sans Serif
	     Helvetica=Arial
	
	ObjectVision is manufactured by Borland, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
