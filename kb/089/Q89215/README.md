---
layout: page
title: "Q89215: INFO: Mapping Modes and Round-Off Errors"
permalink: /kb/089/Q89215/
---

## Q89215: INFO: Mapping Modes and Round-Off Errors

	Article: Q89215
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin95
	Last Modified: 12-MAY-2001
	
	3.00 3.10 4.00 | 3.50 3.51
	WINDOWS        | WINDOWS NT
	kbgraphic
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mapping modes, window extents/origins, and viewport extents/origins allow for
	very powerful coordinate manipulation, such as scaling or moving objects.
	However, you should be aware that there are cases when using mapping modes other
	than MM_TEXT results in improper painting due to round-off errors.
	
	Round-off errors occur when one logical unit does not equal one device unit, and
	an application requests the Graphics Device Interface (GDI) to perform an action
	that would result in a nonintegral number of pixels needing to be drawn,
	scrolled, blt'd, and so on.
	
	Round-off errors can manifest themselves in many ways, including unpainted
	portions of a client area when scrolling, gaps between objects that shouldn't
	have gaps (or vice versa), objects that shrink or grow one pixel depending on
	where they are on the screen, objects of unexpected sizes, and so on.
	
	MORE INFORMATION
	================
	
	To better understand round-off errors, consider the following code:
	
	     SetMapMode (hDC, MM_ANISOTROPIC);
	     SetWindowExt (hDC, 2, 2);
	     SetViewportExt (hDC, 3, 3);
	     PatBlt (hDC, 0, 0, 5, 2, BLACKNESS);
	
	This code tells the GDI to treat two logical units (the coordinates used by most
	GDI functions), in both the vertical and horizontal direction, as being equal to
	three device units (pixels). It then asks the GDI to draw what amounts to a
	black rectangle five logical units wide by three logical units tall starting at
	the logical point (0,0).
	
	The GDI would translate this request into a request to draw a rectangle 7.5 (5 *
	3/2 = 7.5) pixels wide by 3 (2 * 3/2 = 3) pixels tall. However, display cards
	cannot draw half a pixel, so the GDI would either have to round the width up to
	8 or truncate it to 7. If an application relied on one behavior or the other,
	improper painting could occur.
	
	Note that using mapping modes, window origins/extents, and viewport
	origins/extents does not mean that an application will have round-off errors.
	The occurrence of round-off errors depends on what these features are used for,
	the structure of the application, and other factors. Many applications take
	advantage of mapping modes, window origins/extents, and viewport origins/extents
	without ever encountering adverse round-off errors.
	
	If an application exhibits round-off errors, there are a number of ways to
	prevent them, some which are described below.
	
	Method 1
	--------
	
	Only use MM_TEXT mapping mode, where one logical unit always equals one device
	unit. However, the application must do all its own scaling and moving of
	objects. The benefit of this approach is that the application has strict control
	over how objects are scaled and moved; you can look at your code to see the
	algebra that leads to round-off errors, and counter these errors appropriately.
	The drawback to this approach is that it makes the code more complicated and
	harder to read than it might be if the SetMapMode, SetWindowOrg, SetWindowExt,
	SetViewportOrg, and SetViewportExt functions were used.
	
	Method 2
	--------
	
	Mix MM_TEXT mapping mode with the mapping mode required. Sometimes applications
	only have round-off problems with certain types of objects. For example, in a
	graphing program, the application might want to set a certain mapping mode to
	draw a bar graph; this mapping mode might cause the fonts that the application
	draws to be of the wrong size.
	
	To work around problems like this, mix MM_TEXT mapping mode with your mapping
	mode of choice. You could use MM_TEXT when dealing with objects that need exact
	sizes or placement and the other mapping mode for other drawing.
	
	The benefits and drawbacks of this method are almost the same as those for method
	1. However, with method 2, applications can take advantage of mapping modes for
	some of the scaling and moving of objects.
	
	Method 3
	--------
	
	If window/viewport origins/extents are set at compile time, be sure to only do
	operations that would result in no round-off errors. For example, take the
	fraction WindowExt over ViewportExt, and reduce this fraction. Then only do
	operations that involve multiples of the reduced WindowExt values. For example,
	given the following
	
	   WindowExt   = ( 6, 27)
	   ViewportExt = (50, 39)
	
	turn this into a fraction and reduce it. It yields:
	
	   in x direction:   6/50 = (2 * 3) / (2 * 5 * 5)  = 3/25
	   in y direction:  27/39 = (3 * 3 * 3) / (3 * 13) = 9/13
	
	Therefore, anything done in the x direction could be done using a multiple of
	three logical units; anything done in the y direction could be done using a
	multiple of nine logical units. For example, if the application wanted to scroll
	the window horizontally, it could scroll 3, 6, 9, 12, and so on logical units
	without having to deal with rounding errors. By using these values, the
	application will never have round-off errors.
	
	One benefit of this method is that an application can take advantage of window
	origins/extents and viewport origins/extents. A disadvantage is that the
	application is limited to a certain set of origins/extents (that is, those built
	into the application at compile time).
	
	Method 4
	--------
	
	Applications can perform method 3 on-the-fly. This allows the application to deal
	with arbitrary window origins/extents and viewport origins/extents. To determine
	the minimum number of logical units an application could use given arbitrary
	extent values, the following code might prove useful (the code shown is for
	determining the value to use in the horizontal direction):
	
	     int GetMinWinXFactor (HDC hDC)
	
	     {
	
	     int nMinX, xWinExt, xViewExt, nGCD;
	
	     xWinExt  = LOWORD (GetWindowExt (hDC));
	     xViewExt = LOWORD (GetViewportExt (hDC));
	     while ((nGCD = GreatestCommonDivisor (xWinExt, xViewExt)) != 1)
	
	        {
	        xWinExt  /= nGCD;
	        xViewExt /= nGCD;
	        }
	
	     return xWinExt;
	
	     }
	
	     int GreatestCommonDivisor (int i, int j)
	
	     {
	
	     while (i != j)
	
	        if (i < j)
	           i -= j;
	        else
	           j -= i;
	
	     return i;
	
	  }
	
	The return value from the GetMinWinXFactor function above can then be used just
	like in method 3 (that is, the application can do all output based on multiples
	of this value).
	
	Final Notes
	-----------
	
	The discussion above did not take into account the window origin, which can
	contribute to round-off errors. How origins and extents affect the coordinates
	that GDI uses is summed up in "Programmer's Reference.
	
	Developers using mapping modes are encouraged to study the equations presented in
	the programmer's reference. The GDI uses these equations when converting between
	logical and device units. When round-off errors occur in an application, it is
	always a good idea to run the numbers through these equations to try to
	determine the cause of the errors.
	
	Additional query words: 3.00 3.10 4.00 rounding
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin95 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
