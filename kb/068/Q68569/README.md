---
layout: page
title: "Q68569: Sample Code Uses PatBlt to Drag a Frame Rectangle"
permalink: /kb/068/Q68569/
---

## Q68569: Sample Code Uses PatBlt to Drag a Frame Rectangle

{% raw %}

	Article: Q68569
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes a procedure to smoothly drag the window
	frame; this procedure is similar to the one that Windows uses when a window is
	moved by dragging its caption bar. When the user moves a window with the mouse
	or with the keyboard, Windows shows the movement of the window by a moving a
	gray-patterned frame. The dragging looks smooth because Windows updates only the
	portions of the frame that need to be erased or drawn, leaving all other areas
	untouched.
	
	One technique to implement smooth dragging for a single rectangle is described
	below. An actual frame in Windows consists of four thin rectangles dragged
	together.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dragrect.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	To smoothly drag a rectangle, redraw only the invalid portions of the rectangle.
	For example, if a rectangle is dragged up by 3 pixels, only the top 3 pixels
	need to be drawn and the bottom 3 pixels erased. All other parts of the
	rectangle are left alone. The same principle applies when a rectangle is moved
	on a diagonal--two edges are drawn, two edges are erased, and the bulk of the
	middle of the rectangle remains the same.
	
	To implement smooth dragging of a single solid rectangle, perform the following
	eight steps:
	
	1. When dragging begins, save the coordinates of the rectangle.
	
	2. Draw the initial rectangle using a pattern brush and the PatBlt function.
	  Windows uses its own gray brush made with a bitmap of alternating 0x55 and
	  0xAA values. In the PatBlt call, use the PATINVERT option to combine the
	  pattern brush and the screen using the XOR operation. The XOR option is very
	  convenient because another XOR operation restores the screen to its original
	  state.
	
	  Alternatively, use the DSTINVERT option, which performs a NOT operation on the
	  destination rectangle, ignoring the current selected brush. A second NOT
	  operation restores the screen to its original state. A NOT operation is
	  slightly faster than an XOR operation; however, it is not nearly as flexible
	  with respect to the nature of the rectangle drawn.
	
	3. Each time the mouse is moved, save the new coordinates. The old coordinates
	  must be retained for the time being.
	
	4. Create an intersection rectangle of the old and new positions using the
	  IntersectRect function. If this rectangle is empty, call the PatBlt function
	  twice: to erase the old rectangle and to draw the new rectangle. This is
	  allowed because the old and new positions have no overlapping region.
	
	5. If the two rectangles intersect, update only the nonoverlapping regions--the
	  edges of the old and new rectangles that are not in the intersection.
	
	6. In most cases, the rectangle moves in both horizontal and vertical
	  directions, which creates two regions that need updating:
	
	     XXXXXXXXXXXX    The union of X, x, and . is the original
	     XXXXXXXXXXXX       rectangle.
	     x...........o   The union of O, o, and . is the new rectangle.
	     x...........o
	     x...........o   Erase the areas marked with an X or x.
	     x...........o   Draw the areas marked with an O or o.
	     x...........o
	      OOOOOOOOOOOO
	      OOOOOOOOOOOO
	
	7. Each update region contains two smaller rectangles: one that makes up the
	  horizontal section along the top (marked with uppercase characters in the
	  diagram above) and one that makes up the vertical section along the side
	  (marked with lowercase characters).
	
	  Once the application determines the coordinates of these rectangles, call the
	  PatBlt function to draw or erase them as appropriate. Do not draw overlapping
	  areas twice; that is, when dealing with areas marked x or o, do not draw in
	  the areas marked X or O, or vice versa.
	
	  At this point, the rectangle has been moved without affecting the intersecting
	  region (marked with periods) at all. Because the intersection was not erased
	  or drawn, no flicker occurs and the dragging appears smooth.
	
	8. When dragging stops (the mouse button is released), call the PatBlt function
	  to erase the current rectangle because it is no longer needed.
	
	When a window is moved by dragging the caption bar, Windows divides the window's
	rectangle into four parts: the bottom, top, left, and right lines. Each line is
	a rectangle because the border of a window is usually thicker than one pixel.
	The dragging process above is applied to all of these rectangles at the same
	time.
	
	The DRAGRECT sample program available in the Microsoft Software Library
	demonstrates the dragging process for both a single rectangle and a frame made
	of four separate rectangles. Note that the sample program is not optimized to
	drag a frame with the same efficiency as Windows; it is meant only to
	demonstrate the concepts involved.
	
	Additional query words: softlib DRAGRECT.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
