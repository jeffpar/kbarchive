---
layout: page
title: "Q60807: Windows Paintbrush Spill Tool Fills Only Once"
permalink: /kb/060/Q60807/
---

## Q60807: Windows Paintbrush Spill Tool Fills Only Once

	Article: Q60807
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select any color from the right half of the palette, the Microsoft
	Windows Paintbrush tool used to fill an entire area (the Paint Roller tool) only
	fills an area once. (You can't use the tool to change the color.) When you use
	the tool a second time, pixels of color appear in the new color, but the area
	isn't filled.
	
	CAUSE
	=====
	
	This problem occurs because the colors are dithered. (A dithered color is a
	combination of several colors used to create another color).
	
	When you indicate that an area should be filled, each pixel is examined
	individually. If the neighboring pixel is identical, the color expands,
	producing the fill. If the neighboring pixel is not identical, as is the case
	with a dithered color, the color fills only the first pixel.
	
	WORKAROUND
	==========
	
	You can use the Paint Roller tool to fill an object that has a solid color as
	its current foreground or background color. It does not fill objects that have a
	pattern or non-solid color.
	
	If you want to fill the area with a different color, use the Color Eraser tool to
	clear the area, then fill it with a different color.
	
	MORE INFORMATION
	================
	
	Some colors on the color palette are not solid colors even though they appear to
	be. These dithered colors are, counting from left to right, top: 10,13 and
	bottom: 9,10,11,12,13,14). To see the dithering in these colors, use the
	following steps:
	
	1. Draw a solid box using one of the dithered colors on the color palette.
	
	2. From the View menu, choose Zoom In.
	
	3. Select a section of the box.
	
	You can see that the box contains small squares of different colors that give the
	appearance of a blended color when not in zoom-in mode.
	
	If you want to use the Paint Roller tool to fill an object with an unblended
	(that is, undithered) color, choose Undo from the Edit menu before you choose a
	new color. This clears the dithered color. Be aware that this also clears
	everything you have done since you last clicked the Paint Roller tool. To avoid
	losing any work, click the Paint Roller tool each time you select a different
	color.
	
	Additional query words: 3.00 3.00a 3.10 rollertool win31 3.11 paint brush paintroller
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
