---
layout: page
title: "Q87933: Displaying .RLE Files as Wallpaper Under Windows"
permalink: /kb/087/Q87933/
---

## Q87933: Displaying .RLE Files as Wallpaper Under Windows

	Article: Q87933
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 3.1 allows the use of .RLE (run length encoded) files as background
	wallpaper. To use an .RLE file as wallpaper:
	
	1. Run Control Panel.
	
	2. Choose the Desktop icon.
	
	3. Type the name of the .RLE file in the Wallpaper text box.
	
	MORE INFORMATION
	================
	
	.RLE files store pixel color by run length, or the number of similar colored
	pixels that are side by side; whereas .BMP files store the color values for each
	pixel in the bitmap. A line in a .BMP file may look as follows:
	
	  blue,blue,blue,red,red,white,white,white,white
	
	The line above would appear as follows in an .RLE file:
	
	  3 blue,2 red,4 white
	
	The Wallpaper list box in the Desktop section of Control Panel only displays
	files with a .BMP extension. However, .RLE files may be selected by entering the
	name of the file in the Wallpaper box.
	
	Additional query words: 3.10 3.11 wall paper bitmap
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
