---
layout: page
title: "Q243285: HOWTO: Draw TrueType Glyph Outlines"
permalink: kb/243/Q243285/
---

## Q243285: HOWTO: Draw TrueType Glyph Outlines

	Article: Q243285
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdraw kbFont kbGDI kbSDKWin32 kbTTFonts kbDSupport kbGrpDSGDI
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Win32 API GetGlyphOutline function can return native glyph outline data from
	a TrueType font. To draw a TrueType glyph outline, the data must be converted
	from its native B-Spline definition to a sequence of Bezier line definitions.
	Then the PolyBezier Win32 API function can be used to draw the outline.
	
	MORE INFORMATION
	================
	
	The GetGlyphOutline function in the Win32 Application Programming Interface(API)
	can retrieve a TrueType outline. The GGO_NATIVE format option fills a buffer
	with Quadratic B-Spline curves for a TrueType outline. Quadratic B-Splines are
	used by TrueType to describe the glyph outline in a TrueType font file. To draw
	these outline curves one can implement a B-Spline drawing function or use the
	PolyBezier function from the Win32 API.
	
	Quadratic B-Spline curves are a class of parametric curves that define the path
	of multiple curve segments via a few control points. A Quadratic curve is a
	second order parametric curve. There is no function in the API to draw a
	Quadratic Spline directly but if the Quadratic is converted to a Cubic it can be
	drawn with the Win32 API function for drawing a Bezier curve; called
	PolyBezier.
	
	Quadratic B-Spline curves in particular and parametric curves in general are a
	well-researched topic of graphics in computer science. They can also be quite
	complex. Algorithms have been published in various texts that can be used to
	implement a function to draw a Quadratic Spline, but describing such an
	algorithm is beyond the scope of this article.
	
	The PolyBezier function can draw a Quadratic Spline because a Bezier curve is a
	cubic or third order parametric curve. Since a Quadratic Spline is a second
	order equation, it can be expressed in terms of the higher order cubic equation.
	Although an equation for expressing a quadratic as a cubic is given in the
	sample code, its derivation is not discussed in this article.
	
	The sample code in this article is a demonstration of how to parse a GGO_NATIVE
	glyph buffer returned by the GetGlyphOutline function. The buffer returned by
	the GGO_NATIVE format flag conforms to the TTPOLYGONHEADER structure. The
	TTPOLYGONHEADER structure and the data that immediately follows it constitute
	one contour of a TrueType glyph. A contour is one complete path of curves that
	is implicitly closed if it is not explicitly returned that way.
	
	Please see the Platform SDK for documentation on the TTPOLYGONHEADER and
	TTPOLYCURVE structures.
	
	A glyph contour consists of multiple curve segments represented by TTPOLYCURVE
	structures. In a contour, the TTPOLYGONHEADER is followed by one or more
	TTPOLYCURVE structures and coordinate point data. The pfxStart member gives the
	starting coordinate point of the contour. The count of curve records that follow
	the TTPOLYGONHEADER is given by the cb member. The starting point is relative to
	the origin of the glyph. The origin of a glyph is the lower left corner of the
	character at the character's baseline.
	
	Each TTPOLYCURVE curve record (a curve segment) consists of either Quadratic
	B-Spline control points or simple Polyline points. The count of points is given
	by the TTPOLYCURVEcpfx member. The curve type of either spline or polyline is
	given by the wType member. The array of coordinate points immediately follow the
	structure. The starting point of the curve is given by the apfx member.
	
	Since a glyph may contain more than one contour, the buffer contains one or more
	groups of TTPOLYGONHEADER structures and data. Subsequent contours are packed
	immediately following the previous one in the native buffer. The next contour
	starts with a TTPOLYGONHEADER at the next byte beyond the last point of the
	previous curve record.
	
	This sample code draws the outline of a TrueType glyph by parsing the GGO_NATIVE
	buffer to create a list of Bezier line segments that form each contour. The list
	of Bezier line segments is then drawn using PolyBezier. The code that parses the
	buffer is in the DrawT2Outline function.
	
	The first step to create a list of Bezier lines is to determine the size of the
	buffer for the list. Four points define Bezier lines. The PolyBezier function
	interprets an array of points as being one continuous line of Bezier segments
	where the start of the next line is coincident with the endpoint of the previous
	line. Thus, only three points are needed to describe an additional Bezier line
	segment.
	
	The GGO_NATIVE buffer may contain either a polyline curve or a Quadratic B-Spline
	curve. Two points define a line segment while three points define a B-Spline.
	Since each type is to be drawn with a Bezier line using PolyBezier, the worst
	case scenario occurs when one contour that is entirely composed of line segments
	expands to multiple Beziers.
	
	Note that to express an additional curve segment in a B-Spline curve
	representation requires only one additional point. That point explicitly defines
	the "B" or off curve point and implicitly defines the additional on curve point.
	The on curve point is the midpoint to the next "B" point. Thus either an
	additional line segment or an additional curve segment will expand to three
	additional points of a Bezier line.
	
	The code assumes that the entire native buffer will consist of POINTFX structures
	so it can determine the largest possible number of points represented by the
	buffer. The actual number is slightly smaller since there is structure overhead
	in describing the contours and curves. The size of the buffer for the Bezier
	list is given by the maximum possible number of points multiplied by the data
	size of a POINT structure and multiplied by three. Three is the number of
	additional points that are needed for each additional line segment or quadratic
	spline segment when converted to a Bezier.
	
	Once the Bezier buffer has been allocated the code parses the native buffer by
	starting at the first TTPOLYGONHEADER. During an iteration of the loop the code
	processes one contour and draws it. A Second inner loop parses each curve type.
	
	In the case of a polyline curve (TT_PRIM_LINE), each line segment of the polyline
	is converted and appended to the list of Beziers with the AppendPolyLineToBezier
	function. If the curve is a Quadratic B-Spline (TT_PRIM_QSPLINE), the
	AppendQuadBSplineToBezier function converts and appends the Quadratic B-Spline.
	Each of these functions uses a loop to parse out each segment of the curve into
	its independent control points. Then the line or spline is converted to a Bezier
	and appended to the list of Beziers.
	
	A Bezier line can draw a straight line easily. The start and ending vectors
	simply point at the opposite end of the line segment. This is done in the
	MakeBezierFromLine function.
	
	To convert a quadratic spline into a cubic Bezier spline requires expressing the
	cubic's control points in terms of the quadratic's control points. The equation
	to translate the control points is located in the MakeBezierFromQBSpline
	function.
	
	Before drawing the contour, the code ensures that the path is closed by calling
	the CloseContour function. The function is called only if the start and end
	points of the sequence of Beziers are not coincident. Then the PolyBezier
	function is called.
	
	After the contour is drawn, the next contour's TTPOLYGONHEADER is found by
	advancing the lpHeader pointer beyond the end of the records in the current
	contour. If this results in a pointer value beyond the end of the native buffer,
	the code has processed all of the contours and exits.
	
	  /****************************************************************************
	   *  FUNCTION   : IntFromFixed
	   *  RETURNS    : int value approximating the FIXED value.
	   ****************************************************************************/ 
	  int PASCAL NEAR IntFromFixed(FIXED f)
	  {
	      if (f.fract >= 0x8000)
	      return(f.value + 1);
	      else
	      return(f.value);
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : fxDiv2
	   *  RETURNS    : (val1 + val2)/2 for FIXED values
	   ****************************************************************************/ 
	  FIXED PASCAL NEAR fxDiv2(FIXED fxVal1, FIXED fxVal2)
	  {
	      long l;
	
	      l = (*((long far *)&(fxVal1)) + *((long far *)&(fxVal2)))/2;
	      return(*(FIXED *)&l);
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : MakeBezierFromLine
	   *
	   *  PURPOSE    : Converts a line define by two points to a four point Bezier
	   *               spline representation of the line in pPts.
	   *
	   *
	   *  RETURNS    : number of Bezier points placed into the pPts POINT array.
	   ****************************************************************************/ 
	  UINT MakeBezierFromLine( POINT *pPts, POINT startpt, POINT endpt )
	  {
	      UINT cTotal = 0;
	
	      // starting point of Bezier
	      pPts[cTotal] = startpt;
	      cTotal++;
	
	      // 1rst Control, pt == endpoint makes Bezier a line
	      pPts[cTotal].x = endpt.x;
	      pPts[cTotal].y = endpt.y;
	      cTotal++;
	
	      // 2nd Control, pt == startpoint makes Bezier a line
	      pPts[cTotal].x = startpt.x;
	      pPts[cTotal].y = startpt.y;
	      cTotal++;
	
	      // ending point of Bezier
	      pPts[cTotal] = endpt;
	      cTotal++;
	      
	      return cTotal;
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : MakeBezierFromQBSpline
	   *
	   *  PURPOSE    : Converts a quadratic spline in pSline to a four point Bezier
	   *               spline in pPts.
	   *
	   *
	   *  RETURNS    : number of Bezier points placed into the pPts POINT array.
	   ****************************************************************************/ 
	  UINT MakeBezierFromQBSpline( POINT *pPts, POINTFX *pSpline )
	  {
	      POINT   P0,         // Quadratic on curve start point
	              P1,         // Quadratic control point
	              P2;         // Quadratic on curve end point
	      UINT    cTotal = 0;
	
	      // Convert the Quadratic points to integer
	      P0.x = IntFromFixed( pSpline[0].x );
	      P0.y = IntFromFixed( pSpline[0].y );
	      P1.x = IntFromFixed( pSpline[1].x );
	      P1.y = IntFromFixed( pSpline[1].y );
	      P2.x = IntFromFixed( pSpline[2].x );
	      P2.y = IntFromFixed( pSpline[2].y );
	
	      // conversion of a quadratic to a cubic
	
	      // Cubic P0 is the on curve start point
	      pPts[cTotal] = P0;
	      cTotal++;
	      
	      // Cubic P1 in terms of Quadratic P0 and P1
	      pPts[cTotal].x = P0.x + 2*(P1.x - P0.x)/3;
	      pPts[cTotal].y = P0.y + 2*(P1.y - P0.y)/3;
	      cTotal++;
	
	      // Cubic P2 in terms of Qudartic P1 and P2
	      pPts[cTotal].x = P1.x + 1*(P2.x - P1.x)/3;
	      pPts[cTotal].y = P1.y + 1*(P2.y - P1.y)/3;
	      cTotal++;
	
	      // Cubic P3 is the on curve end point
	      pPts[cTotal] = P2;
	      cTotal++;
	
	      return cTotal;
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : AppendPolyLineToBezier
	   *
	   *  PURPOSE    : Converts line segments into their Bezier point 
	   *               representation and appends them to a list of Bezier points. 
	   *
	   *               WARNING - The array must have at least one valid
	   *               start point prior to the address of the element passed.
	   *
	   *  RETURNS    : number of Bezier points added to the POINT array.
	   ****************************************************************************/ 
	  UINT AppendPolyLineToBezier( LPPOINT pt, POINTFX start, LPTTPOLYCURVE lpCurve )
	  {
	      int     i;
	      UINT    cTotal = 0;
	      POINT   endpt;
	      POINT   startpt;
	      POINT   bezier[4];
	
	      endpt.x = IntFromFixed(start.x);
	      endpt.y = IntFromFixed(start.y);
	
	      for (i = 0; i < lpCurve->cpfx; i++)
	      {
	          // define the line segment
	          startpt = endpt;
	          endpt.x = IntFromFixed(lpCurve->apfx[i].x);
	          endpt.y = IntFromFixed(lpCurve->apfx[i].y);
	
	          // convert a line to a bezier representation
	          MakeBezierFromLine( bezier, startpt, endpt );
	
	          // append the Bezier to the existing ones
	                                      // Point 0 is Point 3 of previous.
	          pt[cTotal++] = bezier[1];   // Point 1
	          pt[cTotal++] = bezier[2];   // Point 2
	          pt[cTotal++] = bezier[3];   // Point 3
	
	      }
	
	      return cTotal;
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : AppendQuadBSplineToBezier
	   *
	   *  PURPOSE    : Converts Quadratic spline segments into their Bezier point 
	   *               representation and appends them to a list of Bezier points. 
	   *
	   *               WARNING - The array must have at least one valid
	   *               start point prior to the address of the element passed.
	   *
	   *  RETURNS    : number of Bezier points added to the POINT array.
	   ****************************************************************************/ 
	  UINT AppendQuadBSplineToBezier( LPPOINT pt, POINTFX start, LPTTPOLYCURVE lpCurve )
	  {
	      WORD                i;
	      UINT                cTotal = 0;
	      POINTFX             spline[3];  // a Quadratic is defined by 3 points
	      POINT               bezier[4];  // a Cubic by 4
	
	      // The initial A point is on the curve.
	      spline[0] = start;
	
	      for (i = 0; i < lpCurve->cpfx;)
	      {
	          // The B point.
	          spline[1] = lpCurve->apfx[i++];
	
	          // Calculate the C point.
	          if (i == (lpCurve->cpfx - 1))
	          {
	              // The last C point is described explicitly
	              // i.e. it is on the curve.
	              spline[2] = lpCurve->apfx[i++];
	          }     
	          else
	          {
	              // C is midpoint between B and next B point
	              // because that is the on curve point of 
	              // a Quadratic B-Spline.
	              spline[2].x = fxDiv2(
	                  lpCurve->apfx[i-1].x,
	                  lpCurve->apfx[i].x
	                  );
	              spline[2].y = fxDiv2(
	                  lpCurve->apfx[i-1].y,
	                  lpCurve->apfx[i].y
	                  );
	          }
	
	          // convert the Q Spline to a Bezier
	          MakeBezierFromQBSpline( bezier, spline );
	          
	          // append the Bezier to the existing ones
	                                      // Point 0 is Point 3 of previous.
	          pt[cTotal++] = bezier[1];   // Point 1
	          pt[cTotal++] = bezier[2];   // Point 2
	          pt[cTotal++] = bezier[3];   // Point 3
	
	          // New A point for next slice of spline is the 
	          // on curve C point of this B-Spline
	          spline[0] = spline[2];
	      }
	
	      return cTotal;
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : CloseContour
	   *
	   *  PURPOSE    : Adds a bezier line to close the circuit defined in pt.
	   *
	   *
	   *  RETURNS    : number of points aded to the pt POINT array.
	   ****************************************************************************/ 
	  UINT CloseContour( LPPOINT pt, UINT cTotal )
	  {
	      POINT               endpt, 
	                          startpt;    // definition of a line
	      POINT               bezier[4];
	
	      // connect the first and last points by a line segment
	      startpt = pt[cTotal-1];
	      endpt = pt[0];
	
	      // convert a line to a bezier representation
	      MakeBezierFromLine( bezier, startpt, endpt );
	
	      // append the Bezier to the existing ones
	                                  // Point 0 is Point 3 of previous.
	      pt[cTotal++] = bezier[1];   // Point 1
	      pt[cTotal++] = bezier[2];   // Point 2
	      pt[cTotal++] = bezier[3];   // Point 3
	
	      return 3;
	  }
	
	  /****************************************************************************
	   *  FUNCTION   : DrawT2Outline
	   *
	   *  PURPOSE    : Decode the GGO_NATIVE outline, create a sequence of Beziers
	   *               for each contour, draw with PolyBezier.  Color and relative 
	   *               positioning provided by caller. The coordinates of hDC are
	   *               assumed to have MM_TEXT orientation.
	   *
	   *               The outline data is not scaled. To draw a glyph unhinted
	   *               the caller should create the font at its EMSquare size
	   *               and retrieve the outline data. Then setup a mapping mode
	   *               prior to calling this function.
	   *
	   *  RETURNS    : none.
	   ****************************************************************************/ 
	  void DrawT2Outline(HDC hDC, LPTTPOLYGONHEADER lpHeader, DWORD size) 
	  {
	      WORD                i;
	      UINT                cTotal = 0; // Total points in a contour.
	      LPTTPOLYGONHEADER   lpStart;    // the start of the buffer
	      LPTTPOLYCURVE       lpCurve;    // the current curve of a contour
	      LPPOINT             pt;         // the bezier buffer
	      POINTFX             ptStart;    // The starting point of a curve
	      DWORD               dwMaxPts = size/size of(POINTFX); // max possible pts.
	      DWORD               dwBuffSize;
	
	      dwBuffSize = dwMaxPts *     // Maximum possible # of contour points.
	                   sizeof(POINT) * // sizeof buffer element
	                   3;             // Worst case multiplier of one additional point
	                                  // of line expanding to three points of a bezier
	
	     lpStart = lpHeader;
	     pt = (LPPOINT)malloc( dwBuffSize );
	
	      // Loop until we have processed the entire buffer of contours.
	      // The buffer may contain one or more contours that begin with
	      // a TTPOLYGONHEADER. We have them all when we the end of the buffer.
	      while ((DWORD)lpHeader < (DWORD)(((LPSTR)lpStart) + size) && pt != NULL)
	      {
	          if (lpHeader->dwType == TT_POLYGON_TYPE)
	          // Draw each coutour, currently this is the only valid
	          // type of contour.
	          {
	              // Convert the starting point. It is an on curve point.
	              // All other points are continuous from the "last" 
	              // point of the contour. Thus the start point the next
	              // bezier is always pt[cTotal-1] - the last point of the 
	              // previous bezier. See PolyBezier.
	              cTotal = 1;
	              pt[0].x = IntFromFixed(lpHeader->pfxStart.x);
	              pt[0].y = IntFromFixed(lpHeader->pfxStart.y);
	
	              // Get to first curve of contour - 
	              // it starts at the next byte beyond header
	              lpCurve = (LPTTPOLYCURVE) (lpHeader + 1);
	
	              // Walk this contour and process each curve( or line ) segment 
	              // and add it to the Beziers
	              while ((DWORD)lpCurve < (DWORD)(((LPSTR)lpHeader) + lpHeader->cb))
	              {
	                  //**********************************************
	                  // Format assumption:
	                  //   The bytes immediately preceding a POLYCURVE
	                  //   structure contain a valid POINTFX.
	                  // 
	                  //   If this is first curve, this points to the 
	                  //      pfxStart of the POLYGONHEADER.
	                  //   Otherwise, this points to the last point of
	                  //      the previous POLYCURVE.
	                  // 
	                  //   In either case, this is representative of the
	                  //      previous curve's last point.
	                  //**********************************************
	
	                  ptStart = *(LPPOINTFX)((LPSTR)lpCurve - sizeof(POINTFX));
	                  if (lpCurve->wType == TT_PRIM_LINE)
	                  {
	                      // convert the line segments to Bezier segments
	                      cTotal += AppendPolyLineToBezier( &pt[cTotal], ptStart, lpCurve );
	                      i = lpCurve->cpfx;
	                  }
	                  else if (lpCurve->wType == TT_PRIM_QSPLINE)
	                  {
	                      // Decode each Quadratic B-Spline segment, convert to bezier,
	                      // and append to the Bezier segments
	                      cTotal += AppendQuadBSplineToBezier( &pt[cTotal], ptStart, lpCurve );
	                      i = lpCurve->cpfx;
	                  }
	                  else
	                      // Oops! A POLYCURVE format we don't understand.
	                      ; // error, error, error
	
	              // Move on to next curve in the contour.
	              lpCurve = (LPTTPOLYCURVE)&(lpCurve->apfx[i]);
	              }
	
	              // Add points to close the contour.
	              // All contours are implied closed by TrueType definition.
	              // Depending on the specific font and glyph being used, these
	              // may not always be needed.
	              if ( pt[cTotal-1].x != pt[0].x || pt[cTotal-1].y != pt[0].y )
	              {
	                  cTotal += CloseContour( pt, cTotal );
	              }
	
	              // flip coordinates to get glyph right side up (Windows coordinates)
	              // TT native coordiantes are zero originate at lower-left.
	              // Windows MM_TEXT are zero originate at upper-left.
	              for (i = 0; i < cTotal; i++)
	                  pt[i].y = 0 - pt[i].y;
	
	              // Draw the contour
	              PolyBezier( hDC, pt, cTotal );
	          }
	          else
	              // Bad, bail, must have a bogus buffer.
	              break; // error, error, error
	
	          // Move on to next Contour.
	          // Its header starts immediate after this contour
	          lpHeader = (LPTTPOLYGONHEADER)(((LPSTR)lpHeader) + lpHeader->cb);
	      }
	
	      free( pt );
	  }
	
	REFERENCES
	==========
	
	For more information on the TrueType specification please see:
	
	  Microsoft TrueType Specifications
	  (http://www.microsoft.com/typography/tt/tt.htm)
	
	  Also available on the Microsoft Developer Network Library CD's under
	  Specifications.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdraw kbFont kbGDI kbSDKWin32 kbTTFonts kbDSupport kbGrpDSGDI 
	Technology        : kbAudDeveloper kbWin32sSearch kbWin32API
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
