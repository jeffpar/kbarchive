---
layout: page
title: "Q135058: How to Draw Cubic Bezier Curves in Windows and Win32s"
permalink: kb/135/Q135058/
---

## Q135058: How to Draw Cubic Bezier Curves in Windows and Win32s

	Article: Q135058
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.3,3.1,95; winnt:
	Operating System(s): 
	Keyword(s): kbfile kbOSWin2000 kbOSWin32s kbOSWin95 kbSDKWin16
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows 95 
	   - Microsoft Win32s version 1.3 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can get the functionality provided by the Win32 PolyBezier() function on the
	Windows 3.1 and Win32s platforms. The Bezier sample code shows by example how to
	draw cubic Bezier curves as well as curves with other degrees on both Windows
	version 3.1 and Win32s.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  BEZIER.EXE
	  (http://support.microsoft.com/download/support/mslfiles/BEZIER.EXE)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	
	The PolyBezier() function draws cubic Bezier curves by using the endpoints and
	control points specified by the lppt parameter. The first curve is drawn from
	the first point to the fourth point by using the second and third points as
	control points. Each subsequent curve in the sequence needs exactly three more
	points: the ending point of the previous curve is used as the starting point,
	the next two points in the sequence are control points, and the third is the
	ending point.
	
	Steps to Using the Sample Code
	------------------------------
	
	1. Compile the sample code using the .mak file that corresponds to the platform
	  you are running (Bezier.mak for Win32s and Bezier16.mak for Win16).
	
	2. Run the compiled program.
	
	3. Use the left mouse button to position the endpoints and the control points in
	  the client area. As soon as you've positioned enough points to draw a curve
	  with the current degree (the default is cubic so you'll need four points),
	  the curve will be drawn. Keep in mind that if you set the degree to a higher
	  value, you'll have to position degree+1 points before the curve can be
	  calculated and displayed.
	
	Additional query words: Windows Stones GDI kbfile
	
	======================================================================
	Keywords          : kbfile kbOSWin2000 kbOSWin32s kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:1.3,3.1,95; winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
