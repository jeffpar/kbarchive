---
layout: page
title: "Q125693: HOWTO: AngleArc in Windows 3.1, Win32s, and Windows 95"
permalink: /kb/125/Q125693/
---

## Q125693: HOWTO: AngleArc in Windows 3.1, Win32s, and Windows 95

{% raw %}

	Article: Q125693
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.3,3.1,95; winnt:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbSDKWin32 kbOSWin95 kbDSupport
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Win32s version 1.3 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows version 3.1, Win32s, and Windows 95, you may want to use the
	functionality provided by the Win32 API AngleArc(). AngleArc() is only supported
	on Windows NT.
	
	MORE INFORMATION
	================
	
	The AngleArc() function draws a line segment and an arc. The line segment is
	drawn from the current position to the beginning of the arc. The arc is drawn
	along the perimeter of a circle with the given radius and center. The length of
	the arc is defined by the given start and sweep angles. The starting point of
	the sweep is determined by measuring counterclockwise from the x-axis of the
	circle by the number of degrees in the start angle. The ending point is
	similarly located by measuring counterclockwise from the starting point by the
	number of degrees in the sweep angle.
	
	The code below provides two possible ways of getting functionality similar to
	that of the AngleArc() function. While both of these methods will work on any
	Windows platform, the second (AngleArc2) will be substantially faster due to the
	fact that it uses the Arc() function to draw the sweep rather than calculating
	each of the segments on the perimeter of the arc.
	
	NOTE: One limitation of the second method is that if the sweep angle is greater
	than 360 degrees, the arc will not be swept multiple times. In most cases this
	will not be a problem but in certain cases (constructing paths, for example)
	this can be a problem.
	
	Sample Code #1
	--------------
	
	     BOOL AngleArc1(HDC hdc, int X, int Y, DWORD dwRadius,
	
	                 float fStartDegrees, float fSweepDegrees)
	
	     {
	
	     float fCurrentAngle;       // Current angle in radians
	     float fStepAngle = 0.03f;  // The sweep increment value in radians
	     float fStartRadians;       // Start angle in radians
	     float fEndRadians;         // End angle in radians
	     int ix, iy;                // Current point on arc
	     float fTwoPi = 2.0f * 3.141592f;
	
	     /* Get the starting and ending angle in radians */ 
	     if (fSweepDegrees > 0.0f) {
	       fStartRadians = ((fStartDegrees / 360.0f) * fTwoPi);
	       fEndRadians = (((fStartDegrees + fSweepDegrees) / 360.0f) *
	              fTwoPi);
	     } else {
	       fStartRadians = (((fStartDegrees + fSweepDegrees)  / 360.0f) *
	             fTwoPi);
	       fEndRadians =  ((fStartDegrees / 360.0f) * fTwoPi);
	     }
	
	     /* Calculate the starting point for the sweep via */ 
	     /* polar -> cartesian conversion */ 
	      ix = X + (int)((float)dwRadius * (float)cos(fStartRadians));
	     iy = Y - (int)((float)dwRadius * (float)sin(fStartRadians));
	
	     /* Draw a line to the starting point */ 
	     LineTo(hdc, ix, iy);
	
	     /* Calculate and draw the sweep */ 
	     for (fCurrentAngle = fStartRadians;
	          fCurrentAngle <= fEndRadians;
	          fCurrentAngle += fStepAngle) {
	
	      /* Calculate the current point in the sweep via */ 
	      /* polar -> cartesian conversion */ 
	      ix = X + (int)((float)dwRadius * (float)cos(fCurrentAngle));
	      iy = Y - (int)((float)dwRadius * (float)sin(fCurrentAngle));
	
	      /* Draw a line segment to current point */ 
	      LineTo(hdc, ix, iy);
	       }
	
	     return TRUE;
	
	     }
	
	Sample Code 2
	-------------
	
	     BOOL AngleArc2(HDC hdc, int X, int Y, DWORD dwRadius,
	
	                    float fStartDegrees, float fSweepDegrees)
	
	     {
	
	     int iXStart, iYStart;   // End point of starting radial line.
	     int iXEnd, iYEnd;       // End point of ending radial line.
	     float fStartRadians;    // Start angle in radians.
	     float fEndRadians;      // End angle in radians.
	     BOOL bResult;           // Function result.
	     float fTwoPi = 2.0f * 3.141592f;
	
	     /* Get the starting and ending angle in radians. */ 
	     if (fSweepDegrees > 0.0f) {
	       fStartRadians = ((fStartDegrees / 360.0f) * fTwoPi);
	       fEndRadians = (((fStartDegrees + fSweepDegrees) / 360.0f) * fTwoPi);
	     }   else {
	       fStartRadians = (((fStartDegrees + fSweepDegrees)  / 360.0f) *
	                          fTwoPi);
	       fEndRadians =  ((fStartDegrees / 360.0f) * fTwoPi);
	     }
	
	     /* Calculate a point on the starting radial line via */ 
	     /* polar -> cartesian conversion. */ 
	     iXStart = X + (int)((float)dwRadius * (float)cos(fStartRadians));
	     iYStart = Y - (int)((float)dwRadius * (float)sin(fStartRadians));
	
	     /* Calculate a point on the ending radial line via */ 
	     /* polar -> cartesian conversion. */ 
	     iXEnd = X + (int)((float)dwRadius * (float)cos(fEndRadians));
	     iYEnd = Y - (int)((float)dwRadius * (float)sin(fEndRadians));
	
	     /* Draw a line to the starting point. */ 
	     if (fSweepDegrees > 0.0f)
	      LineTo(hdc, iXStart, iYStart);
	     else
	      LineTo(hdc, iXEnd, iYEnd);
	
	     /* Draw the arc. */ 
	     bResult = Arc(hdc, X - dwRadius, Y - dwRadius,
	                        X + dwRadius, Y + dwRadius,
	                        iXStart, iYStart,
	                        iXEnd, iYEnd);
	
	     /* Move to the ending point. Arc() will not do this and ArcTo() */ 
	     /* will not work on Win32s or Win16. */ 
	     if (fSweepDegrees < 0.0f)
	      MoveToEx(hdc, iXStart, iYStart, NULL);
	     else
	      MoveToEx(hdc, iXEnd, iYEnd, NULL);
	
	     return bResult;
	
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbSDKWin32 kbOSWin95 kbDSupport 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:1.3,3.1,95; winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
