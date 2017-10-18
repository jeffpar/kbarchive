---
layout: page
title: "Q97188: DRAGBMP Demonstrates Dragging Bitmaps on the Screen"
permalink: kb/097/Q97188/
---

## Q97188: DRAGBMP Demonstrates Dragging Bitmaps on the Screen

	Article: Q97188
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DRAGBMP shows how to drag images smoothly on the screen. This is achieved
	through the use of several bitmaps and a series of BitBlt operations.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dragbmp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Before you can drag a bitmap, you must store the following information:
	
	1. A bitmap of the desired image, such as the cards in Solitaire or the domino
	  used in this sample.
	
	2. A bitmap of what lies underneath the desired image. This information is
	  necessary to redraw the underlying area when the image is dragged elsewhere.
	
	3. The current position of the image (you can also store or retrieve the width
	  and height of the image using GetObject() in the image's bitmap).
	
	Once the information is stored, the image is ready to drag. You can select the
	image by clicking the left mouse button when the mouse pointer is on the image,
	drags the image by moving the mouse while pressing the mouse button. When the
	selection has been moved to the appropriate position the mouse button is
	deselected.
	
	In this sample, the image is a yellow domino. Choose Draw Image! to draw the
	domino, then drag the domino using the mouse. Hit-testing in WM_LBUTTONDOWN
	determines when the domino is selected. Once selected, the dragging process
	begins. On each WM_MOUSEMOVE, a new background bitmap is created, the old
	background bitmap is restored, and the domino is moved to its new location. The
	WM_LBUTTONUP message ends the dragging process.
	
	  (x',y')
	  +------------------------- new position
	  |\                       |
	  | \(dx,dy)               |
	  |  \                     |
	  |   + . . . . . . . . . . . . . . . . . old position
	  |   .(x,y)               |            .
	  |   .                    |            .
	  |   .                    |            .
	  ----.---------------------            .
	
	      .                                 .
	      .                                 .
	      . . . . . . . . . . . . . . . . . .
	
	The basic steps to perform the bitmap dragging are as follows:
	
	1. Calculate the delta x and delta y in the mouse movement (dx,dy).
	
	2. BitBlt() the screen at the new position onto a new bitmap. This corresponds
	  to a rectangle with origin at (x',y') in the prcedding figure and becomes the
	  new background bitmap.
	
	3. Since the new background bitmap still contains part of the domino's image
	  starting at point (x,y) in the figure above, BitBlt() the old background
	  bitmap to that point on the new background bitmap, offsetting it by dx and
	  dy. The resulting bitmap contains the correct background for the new
	  position.
	
	4. BitBlt() the domino's bitmap to the screen at its new location: origin at
	  point (x',y') in the figure above.
	
	5. The domino is now in the correct position on the screen. There is a bitmap of
	  what is underneath, but a portion of the domino appears at the lower right.
	  To erase this portion, first BitBlt() the bitmap of the domino onto the old
	  background's bitmap, offsetting it by -dx and -dy, and then BitBlt this
	  modified old background bitmap to the screen at point (x,y). This erases the
	  old portion of the domino without flashing.
	
	6. Dragging is now complete. Save the new background bitmap and delete the old
	  one.
	
	The Drag.c file contains the code for dragging and hit-testing. The Mainwind.c
	file contains the code for processing the mouse and paint messages.
	
	DRAGBMP was built and tested under Microsoft Windows version 3.1.
	
	Additional query words: softlib DRAGBMP.EXE kbFile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
