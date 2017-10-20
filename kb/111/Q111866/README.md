---
layout: page
title: "Q111866: BUG: Outline of a Pie() Slice May Not Be Completely Smooth"
permalink: /kb/111/Q111866/
---

## Q111866: BUG: Outline of a Pie() Slice May Not Be Completely Smooth

{% raw %}

	Article: Q111866
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 18-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The outline of a Pie() slice may not be completely smooth.
	
	CAUSE
	=====
	
	Windows calculates the Pie() center using device points. Round-off errors,
	especially in mapping modes other than MM_TEXT, can put the center of the pie
	off center, resulting in a slightly "crinkly" pie slice.
	
	RESOLUTION
	==========
	
	The bounding rectangle of the Pie() function includes the top left coordinates
	(X1,Y1) but not the bottom right coordinates (X2,Y2). Adding 1 to X2 and Y2
	makes the real extent even, and therefore the radius can be nicely placed. But
	this method works on the screen only in the default MM_TEXT mode. If you change
	the mapping of the device context to some high resolution mode, such as
	MM_HIENGLISH or MM_TWIPS, the center again goes off 1 by pixel and you get
	slightly crinkly pie slices.
	
	Windows converts all four pairs of coordinates of the Pie() function from logical
	points to device points, and then it calculates the center of the pie. If you're
	going from a high resolution mode to a low resolution device, such as the screen
	or a 75 dpi printer, you'll get rounding errors.
	
	As a workaround, an application can do a DPtoLP() of (1,1) and add that to X2 and
	Y2. For example, in MM_HIENGLISH, the result of the DPtoLP() of (1,1) is about
	13 logical points instead of just 1. Note, however, that this method will not
	work all the time, because the rounding error depends on the actual
	coordinates.
	
	If an application requires smooth pie slices, and must use a mapping mode other
	than MM_TEXT, the application could proceed as follows (this does defeat the
	purpose of using a mapping mode):
	
	1. Call LPtoDP() for all four coordinate pairs.
	
	2. Make sure the coordinate pairs are proper and will allow a true center for
	  the pie.
	
	3. Call DPtoLP() on the coordinate pairs.
	
	4. Pass the coordinates to Pie().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
