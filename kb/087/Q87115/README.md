---
layout: page
title: "Q87115: HOWTO: GetGlyphOutline() Native Buffer Format"
permalink: /kb/087/Q87115/
---

## Q87115: HOWTO: GetGlyphOutline() Native Buffer Format

{% raw %}

	Article: Q87115
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1,3.5,3.51,4.0,95
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The GetGlyphOutline function provides a method for an application to retrieve
	the lowest-level information about a glyph in the TrueType environment. This
	article describes the format of the data the GetGlyphOutline function returns.
	
	MORE INFORMATION
	================
	
	A glyph outline is a series of contours that describe the glyph. Each contour is
	defined by a TTPOLYGONHEADER data structure, which is followed by as many
	TTPOLYCURVE data structures as are required to describe the contour.
	
	Each position is described by a POINTFX data structure, which represents an
	absolute position, not a relative position. The starting and ending point for
	the glyph is given by the pfxStart member of the TTPOLYGONHEADER data
	structure.
	
	The TTPOLYCURVE data structures fall into two types: a TT_PRIM_LINE record or a
	TT_PRIM_QSPLINE record. A TT_PRIM_LINE record is a series of points; lines drawn
	between the points describe the outline of the glyph. A TT_PRIM_QSPLINE record
	is a series of points defining the quadratic splines (q-splines) required to
	describe the outline of the character.
	
	In TrueType, a q-spline is defined by three points (A, B, and C), where points A
	and C are on the curve and point B is off the curve. The equation for each
	q-spline is as follows (xA represents the x-coordinate of point A, yA represents
	the y-coordinate of point A, and so on)
	
	  x(t) = (xA-2xB+xC)*t^2 + (2xB-2xA)*t + xA
	  y(t) = (yA-2yB+yC)*t^2 + (2yB-2yA)*t + yA
	
	where t varies from 0.0 to 1.0.
	
	The format of a TT_PRIM_QSPLINE record is as follows:
	
	- Point A on the q-spline is the current position (either pfxStart in the
	  TTPOLYGONHEADER, the starting point for the TTPOLYCURVE, or the ending point
	  of the previous TTPOLYCURVE).
	
	- Point B is the current point in the record.
	
	- Point C is as follows:
	   - If the record has two or more points following point B, point C is the
	     midpoint between point B and the next point in the record.
	   - Otherwise, point C is the point following point B.
	
	The following code presents the algorithm used to process a TT_PRIM_QSPLINE
	record. While this code demonstrates how to extract q-splines from a
	TT_PRIM_QSPLINE record, it is not appropriate for use in an application.
	
	     pfxA = pfxStart;                // Starting point for this polygon
	
	     for (u = 0; u < cpfx - 1; u++)  // Walk through points in spline
	
	     {
	     pfxB = apfx[u];              // B is always the current point
	     if (u < cpfx - 2)            // If not on last spline, compute C
	
	        {
	        pfxC.x = (pfxB.x + apfx[u+1].x) / 2;  // x midpoint
	        pfxC.y = (pfxB.y + apfx[u+1].y) / 2;  // y midpoint
	        }
	
	     else                         // Else, next point is C
	
	        pfxC = apfx[u+1];
	
	                                  // Draw q-spline
	     DrawQSpline(hdc, pfxA, pfxB, pfxC);
	     pfxA = pfxC;                 // Update current point
	     }
	
	The algorithm above manipulates points directly, using floating-point operators.
	However, points in q-spline records are stored in a FIXED data type. The
	following code demonstrates how to manipulate FIXED data items:
	
	     FIXED fx;
	     long *pl = (long *)&fx;
	
	     // Perform all arithmetic on *pl rather than on fx
	
	     *pl = *pl / 2;
	
	The following function converts a floating-point number into the FIXED
	representation:
	
	     FIXED FixedFromDouble(double d)
	     {
	
	     long l;
	
	     l = (long) (d * 65536L);
	     return *(FIXED *)&l;
	
	     }
	
	In a production application, rather than writing a DrawQSpline function to draw
	each q-spline individually, it is more efficient to calculate points on the
	q-spline and store them in an array of POINT data structures. When the
	calculations for a glyph are complete, pass the POINT array to the PolyPolygon
	function to draw and fill the glyph.
	
	The following example presents the data returned by the GetGlyphOutline for the
	lowercase "j" glyph in the 24-point Arial font of the 8514/a (Small Fonts) video
	driver:
	
	     GetGlyphOutline GGO_NATIVE 'j'
	     dwrc            = 208      // Total native buffer size in bytes
	     gmBlackBoxX, Y  = 6, 29    // Dimensions of black part of glyph
	     gmptGlyphOrigin = -1, 23   // Lower-left corner of glyph
	     gmCellIncX, Y   = 7, 0     // Vector to next glyph origin
	
	     TTPOLYGONHEADER #1           // Contour for dot on "j"
	     cb       = 44              // Total size of dot polygon
	     dwType   = 24              // TT_POLYGON_TYPE
	     pfxStart = 2.000, 20.000   // Start at lower-left corner of dot
	
	     TTPOLYCURVE #1
	
	     wType  = TT_PRIM_LINE
	     cpfx   = 3
	     pfx[0] = 2.000, 23.000
	     pfx[1] = 5.000, 23.000
	     pfx[2] = 5.000, 20.000   // Automatically close to pfxStart
	
	     TTPOLYGONHEADER #2   // Contour for body of "j"
	     cb       = 164     // Total size is 164 bytes
	     dwType   = 24      // TT_POLYGON_TYPE
	     pfxStart = -1.469, -5.641
	
	     TTPOLYCURVE #1     // Finish flat bottom end of "j"
	
	     wType  = TT_PRIM_LINE
	     cpfx   = 1
	     pfx[0] = -0.828, -2.813
	
	     TTPOLYCURVE #2    // Make hook in "j" with spline
	
	                      // Point A in spline is end of TTPOLYCURVE #1
	      wType  = TT_PRIM_QSPLINE
	      cpfx   = 2               // two points in spline -> one curve
	      pfx[0] = -0.047, -3.000  // This is point B in spline
	      pfx[1] = 0.406, -3.000   // Last point is always point C
	
	     TTPOLYCURVE #3    // Finish hook in "j"
	
	                      // Point A in spline is end of TTPOLYCURVE #2
	     wType  = TT_PRIM_QSPLINE
	     cpfx   = 3               // Three points -> two splines
	     pfx[0] = 1.219, -3.000   // Point B for first spline
	                               // Point C is (pfx[0] + pfx[1]) / 2
	     pfx[1] = 2.000, -1.906   // Point B for second spline
	     pfx[2] = 2.000, 0.281    // Point C for second spline
	
	     TTPOLYCURVE #4    // Majority of "j" outlined by this polyline
	
	      wType  = TT_PRIM_LINE
	      cpfx   = 3
	      pfx[0] = 2.000, 17.000
	      pfx[1] = 5.000, 17.000
	      pfx[2] = 5.000, -0.250
	
	     TTPOLYCURVE #5    // start of bottom of hook
	
	      wType  = TT_PRIM_QSPLINE
	      cpfx   = 2               // One spline in this polycurve
	      pfx[0] = 5.000, -3.266   // Point B for spline
	      pfx[1] = 4.188, -4.453   // Point C for spline
	
	     TTPOLYCURVE #6    // Middle of bottom of hook
	
	      wType  = TT_PRIM_QSPLINE
	      cpfx   = 2               // One spline in this polycurve
	      pfx[0] = 3.156, -6.000   // B for spline
	      pfx[1] = 0.766, -6.000   // C for spline
	
	     TTPOLYCURVE #7    // Finish bottom of hook and glyph
	
	      wType  = TT_PRIM_QSPLINE
	      cpfx   = 2               // One spline in this polycurve
	      pfx[0] = -0.391, -6.000  // B for spline
	      pfx[1] = -1.469, -5.641  // C for spline
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : :3.1,3.5,3.51,4.0,95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
