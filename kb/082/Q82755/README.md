---
layout: page
title: "Q82755: Using Paintbrush's Fonts Tool with Windows 3.1"
permalink: kb/082/Q82755/
---

## Q82755: Using Paintbrush's Fonts Tool with Windows 3.1

	Article: Q82755
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows Paintbrush prints jagged fonts even when using TrueType fonts.
	This problem also occurs in Windows version 3.0.
	
	The printing of jagged fonts in Paintbrush occurs because a raster (or bitmap
	image) processor is converting the fonts to a bitmap at screen resolution.
	
	MORE INFORMATION
	================
	
	When using the Text (ABC) tool in Paintbrush, all letters that you type are
	converted to a bitmap at screen resolution. This is done mainly so that all
	drawing tools, including the Text tool, produce exactly the same type of image
	for Paintbrush to work with (a bitmap); therefore, Paintbrush does not have to
	worry about bitmap planes and text planes.
	
	The bitmap conversion is done so that after you type text in the image,
	Paintbrush can manipulate it like all other parts of the image. The disadvantage
	of bitmap conversion is that text cannot have a greater resolution than the
	screen resolution even when printed on a high resolution printer.
	
	Paintbrush is a low-end painting application. To achieve high-quality text and
	graphics, you can buy a third-party drawing application similar to the Microsoft
	Draw application that ships with Microsoft Word for Windows version 2.0.
	
	Additional query words: 3.10 3.11 True Type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
