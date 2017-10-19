---
layout: page
title: "Q127152: HOWTO: How to Make an Application Display Real Units of Measurem"
permalink: /kb/127/Q127152/
---

## Q127152: HOWTO: How to Make an Application Display Real Units of Measurem

	Article: Q127152
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin2000 kbOSWin310 kbOSWin95 _IK kbSDKWin16
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes you need an application to display things in terms of a real unit of
	measurement such as an inch or millimeter. When dealing with a printer,
	resolution is usually given in dots per inch (DPI), which makes it easy to
	convert pixels to real inches. However, on a video display, resolution is given
	only in pixels. A given video mode will be some X pixels wide with no
	information as to the real dimensions of the display area.
	
	Because there is no way to programmatically determine the real dimensions of the
	viewable area on a video display, it is impossible for a program to determine
	real output dimensions. Two manual methods for determining real output
	dimensions are given in this article.
	
	MORE INFORMATION
	================
	
	When output is destined for a printer, the application can call GetDeviceCaps()
	using LOGPIXELSX and LOGPIXELSY to determine dots per real inch. However, for a
	video display, LOGPIXELSX and LOGPIXELSY are defined by the video driver and may
	vary wildly. These numbers define a logical inch, which is almost never equal to
	a real inch.
	
	Applications that need to output real sizes to the video display can use one of
	the following two methods for determining output size:
	
	1. The application can ask the user what size monitor is attached. Using this
	  value, an application can approximate the actual viewable area, and given the
	  resolution of the output (GetDeviceCaps, HORZRES, VERTRES), the application
	  can approximate real inches. This solution gives only an approximation of a
	  real inch. Several factors can introduce errors into this approximation
	  including the size adjustments on digital monitors.
	
	2. The application can ask the user to hold a measuring device to the screen and
	  measure a given line. This is the only way to guarantee that output on a
	  video display is exactly the expected size, and recalibration would be
	  necessary after any adjustment to the monitor.
	
	Additional query words: 3.10 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin2000 kbOSWin310 kbOSWin95 _IK kbSDKWin16 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Search kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinAdvServSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbhowto
	
	=============================================================================
	
