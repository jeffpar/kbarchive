---
layout: page
title: "Q71267: A B&amp;W Palette Does Not Guarantee a B&amp;W Bitmap"
permalink: /kb/071/Q71267/
---

## Q71267: A B&amp;W Palette Does Not Guarantee a B&amp;W Bitmap

{% raw %}

	Article: Q71267
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When saving a file created with a black and white palette, subsequent loading of
	the picture may cause the black and white palette to change to the color
	palette.
	
	This information applies to Microsoft Windows versions 3.0, and 3.0a. This
	information does not apply to later versions of Windows.
	
	By default, Paintbrush saves a bitmap using the "16-color bitmap" format. Even
	though the picture was created with a black and white palette, and/or loaded
	with a black and white palette, the color information is saved into the bitmap
	file.
	
	The side effect is that the picture comes up in black and white (like it should),
	but the palette gets changed to color.
	
	To save the black and white palette with the picture, you must select Monochrome
	Bitmap as the type of bitmap to save.
	
	MORE INFORMATION
	================
	
	Saving the Black and White Palette with a Bitmap File
	-----------------------------------------------------
	
	1. From the File menu, choose File Save As and select Options.
	
	2. Select Monochrome Bitmap (press M).
	
	3. Choose OK to save the picture.
	
	Reproducing Palette Change
	--------------------------
	
	1. Open Paintbrush.
	
	2. From the Options menu, choose Image Attributes and select Black and White for
	  the color palette.
	
	3. From the File menu, choose New. (The palette should change to black and white
	  at this point.)
	
	4. Draw something (not required).
	
	5. From the File menu, choose File Save.
	
	6. From the File menu, choose File Open and select the file you saved in step 5.
	
	At this point the same picture should be on the screen, but the palette has
	changed back to color.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
