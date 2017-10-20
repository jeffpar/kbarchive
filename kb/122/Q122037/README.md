---
layout: page
title: "Q122037: HOWTO: How to Use a Program to Calculate Print Margins"
permalink: /kb/122/Q122037/
---

## Q122037: HOWTO: How to Use a Program to Calculate Print Margins

{% raw %}

	Article: Q122037
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbDSupport kbSDKWin16
	Last Modified: 29-AUG-2001
	
	4.00 | 3.10 3.50 3.51
	WINDOWS        | WINDOWS NT
	kbprint kbprg kbcode
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Software Development Kit (SDK) does not provide a function to
	calculate printer margins directly. An application can calculate this
	information using calls to the GetDeviceCaps(). This article discusses those
	functions and provides code fragments as illustrations.
	
	MORE INFORMATION
	================
	
	An application can determine printer margins as follows:
	
	Calculate the left and top margins
	
	a. Determine the upper left corner of the printable area calling GetDeviceCaps()
	  with the PHYSICALOFFSETX and PHYSICALOFFSETY indices. For example:
	
	     // Init our pt struct in case escape not supported
	     pt.x = 0; pt.y = 0;
	
	     // Locate the upper left corner of the printable area
	     pt.x = GetDeviceCaps(hPrnDC, PHYSICALOFFSETX);
	     pt.y = GetDeviceCaps(hPrnDC, PHYSICALOFFSETY);
	
	b. Determine the number of pixels required to yield the desired margin (x and y
	  offsets) by calling GetDeviceCaps() using the LOGPIXELSX and LOGPIXELSY
	  flags.
	
	     // Figure out how much you need to offset output to produce the left 
	     // and top margins for the output in the printer. Note the
	     // use of the "max" macro. It is possible that you are asking for
	     // margins that are not possible on this printer. For example, the HP
	     // LaserJet has a 0.25" unprintable area so we cannot get margins of
	     // 0.1".
	
	     xOffset = max (0, GetDeviceCaps (hPrnDC, LOGPIXELSX) *
	                       nInchesWeWant - pt.x);
	
	     yOffset = max (0, GetDeviceCaps (hPrnDC, LOGPIXELSY) *
	                       nInchesWeWant - pt.y);
	
	     // When doing all the output, you can either offset it by the above
	     // values or call SetViewportOrg() to set the point (0,0) at
	     // the margin offset you calculated.
	
	     SetViewportOrg (hPrnDC, xOffset, yOffset);
	     all other output here
	
	Calculate the bottom and right margins
	
	a. Obtain the total size of the physical page (including printable and
	  unprintable areas)calling GetDeviceCaps() with the PHYSICALWIDTH and
	  PHYSICALHEIGHT indices in Windows NT.
	
	b. Determine the number of pixels required to yield the desired right and bottom
	  margins by calling GetDeviceCaps using the LOGPIXELSX and LOGPIXELSY flags.
	
	c. Calculate the size of the printable area with GetDeviceCaps() using the
	  HORZRES and VERTRES flags. The following code fragment illustrates steps a
	  through c:
	
	     // Get the size of the printable area
	     pt.x = GetDeviceCaps(hPrnDC, PHYSICALWIDTH);
	     pt.y = GetDeviceCaps(hPrnDC, PHYSICALHEIGHT);
	
	     xOffsetOfRightMargin = xOffset +
	                            GetDeviceCaps (hPrnDC, HORZRES) -
	                            pt.x -
	                            GetDeviceCaps (hPrnDC, LOGPIXELSX) *
	                            wInchesWeWant;
	
	     yOffsetOfBottomMargin = yOffset +
	                             GetDeviceCaps (hPrnDC, VERTRES) -
	                             pt.y -
	                             GetDeviceCaps (hPrnDC, LOGPIXELSY) *
	                             wInchesWeWant;
	
	NOTE: Now, you can clip all output to the rectangle bounded by xOffset, yOffset,
	xOffsetOfRightMargin, and yOffsetOfBottomMargin.
	
	
	Additional query words: 3.00 3.10 3.50 4.00 95 GETPHYSPAGESIZE and GETPRINTINGOFFSET GetDeviceCaps
	
	======================================================================
	Keywords          : kbDSupport kbSDKWin16 
	Technology        : kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWin32sSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
