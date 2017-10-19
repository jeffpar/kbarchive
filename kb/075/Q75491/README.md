---
layout: page
title: "Q75491: Performing a Transparent Sweep Within Paintbrush"
permalink: /kb/075/Q75491/
---

## Q75491: Performing a Transparent Sweep Within Paintbrush

	Article: Q75491
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within the Windows version 3.0 Paintbrush program, you can only sweep a cutout
	transparently if the selected background color is the same background color as
	the image to be swept.
	
	MORE INFORMATION
	================
	
	When doing a transparent sweep, the selected background color is not swept, so
	the underlying colors show through. If the background color of the selected
	image is not the same as the selected background color, the background color of
	the image is swept and draws over itself.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Paintbrush.
	
	2. Using the Line tool, split the screen from top to bottom, making sure that
	  the split is complete.
	
	3. Using the Paint Roller tool, make the right half of the screen red.
	
	4. Draw a black, empty square in the white half of the screen. The square image
	  is just an example. Any image can be used to see the effects.
	
	5. Choose the Pick tool and outline the square image.
	
	6. Hold the CTRL key down and drag the image with the left mouse button that
	  starts a transparent sweep and then the right mouse button that starts an
	  opaque sweep. At this point, proceed to cross in and out of the red half of
	  the screen.
	
	7. Change the background color and repeat step 6.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, chapter 8
	
	Additional query words: 3.00 win30 3.00a paint brush
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
