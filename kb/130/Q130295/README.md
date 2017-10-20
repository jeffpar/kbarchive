---
layout: page
title: "Q130295: Problems Using Saved Colors with 256-Color Bitmap"
permalink: /kb/130/Q130295/
---

## Q130295: Problems Using Saved Colors with 256-Color Bitmap

{% raw %}

	Article: Q130295
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Paint, you cannot use a palette that you saved with
	the Save Colors command to edit a 256-color bitmap. If you load the saved
	palette with the Get Colors command, choose a color from the saved palette, then
	use that color to edit the 256-color bitmap, the color that appears is different
	than the color you chose.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Note that the Get Colors command may be unavailable on the Options menu in Paint
	if you are using a 256-color palette. This occurs because the 256- color palette
	is fixed and cannot accommodate new colors. If your system supports more than
	256 colors, follow these steps to enable the Get Colors command:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab.
	
	3. In the Color Palette box, click a setting with more than 256 colors.
	
	  NOTE: If your system does not support more than 256 colors, you will not be
	  able to select a higher setting.
	
	4. Click OK.
	
	After you make this change, you may still experience the symptoms described in
	this article.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
