---
layout: page
title: "Q107165: Stretched or Shrunken Graphics in Viewer"
permalink: /kb/107/Q107165/
---

## Q107165: Stretched or Shrunken Graphics in Viewer

	Article: Q107165
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	Graphics can be included in a Viewer title by using a {bml}, {bmc}, or
	{bmr} statement or an embedded pane picture statement (for example,
	{ewl}, {ewc}, or {ewr} with MVBMP2). Pages 9-6 though 9-9 of the
	Microsoft Multimedia Viewer Publishing Toolkit "Authoring Guide"
	describe the pros and cons of using the {bmX} statements and the {ewX}
	statements.
	
	For graphics included with {bmX} statements, Viewer will try to
	maintain the logical size of the graphic across different displays,
	which means the graphic will be shrunk on some displays and stretched
	on others. For device-independent bitmaps (DIBs), Viewer uses the
	biXPelsPerMeter and biYPelsPerMeter fields in the DIB's
	BITMAPINFOHEADER structure to determine how the DIB should be
	manipulated for the current display. These fields specify the
	horizontal and vertical resolution (in pixels per meter) of the target
	device for the bitmap. Note that many painting applications, including
	PaintBrush, always write 0s (zeros) in these fields. If these fields
	contain 0s, Viewer assumes the target device for the bitmap is
	standard VGA.
	
	Viewer does not try to preserve the logical size of graphics included
	with {ewX} statements. These graphics are just drawn to the screen
	without any stretching.
	
	Additional query words: 2.00 2.00a DIB blt StretchBlt
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
