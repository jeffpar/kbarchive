---
layout: page
title: "Q121960: INFO: Alternative to PtInRegion() for Hit-Testing"
permalink: /kb/121/Q121960/
---

## Q121960: INFO: Alternative to PtInRegion() for Hit-Testing

	Article: Q121960
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95 _IK
	Last Modified: 12-MAY-2001
	
	3.00 3.10 4.00 | 3.10 3.50 3.51 4.00
	WINDOWS        | WINDOWS NT
	kbgraphic kbcode
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be useful to perform hit-testing on an object that is defined by a
	polygon. To accomplish this, you could call CreatePolygonRgn() to create a
	region from the polygon, and then call PtInRegion() to determine if the point
	falls within the region. However, this method can be expensive both in terms of
	GDI resources, and in terms of speed. If a polygon is complex,
	CreatePolygonRgn() will often fail due to lack of memory in Windows because
	regions are in GDI's heap.
	
	The code below provides a better method. Use it to determine if a point lies
	within a polygon. It is fast and does not use regions. The trick lies in
	determining the number of times an imaginary line drawn from the point you want
	to test crosses edges of your polygon. If the line crosses edges an even number
	of times, the point is outside the polygon. If it crosses an odd number of times
	it is inside. The line is drawn horizontally from the point to the right.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose. The references below do
	not constitute a recommendation. You are encouraged to examine any resource to
	determine whether or not it meets your needs. These books are not recommended
	over any others.
	
	The following code is based on an algorithm presented in "Algorithms" by Robert
	Sedgewick, Addison-Wesley, 1988, 2nd ed. ISBN 0201066734. The algorithm is on
	p.354, in the section "Inclusion in a Polygon" in the chapter "Elementary
	Geometric Methods." It is also discussed in "Computer Graphics" by Foley, van
	Dam, Feiner and Hughes, Addison-Wesley, 1990, 2nd ed. ISBN 0201121107, chapter
	2, section 1, p.34.
	
	Sample Code
	-----------
	
	     #include "windows.h"
	     #include "limits.h"
	
	     BOOL G_PtInPolygon(POINT *rgpts, WORD wnumpts, POINT ptTest,
	
	                     RECT *prbound) ;
	
	     BOOL G_PtInPolyRect(POINT *rgpts, WORD wnumpts, POINT ptTest,
	
	                      RECT *prbound) ;
	   
	     BOOL Intersect(POINT p1, POINT p2, POINT p3, POINT p4) ;
	
	     int  CCW(POINT p0, POINT p1, POINT p2) ;
	
	   /*************************************************************************
	
	     * FUNCTION:   G_PtInPolygon
	     *
	     * PURPOSE
	     * This routine determines if the point passed is in the polygon. It uses
	
	     * the classical polygon hit-testing algorithm: a horizontal ray starting
	
	     * at the point is extended infinitely rightwards and the number of
	    * polygon edges that intersect the ray are counted. If the number is odd,
	
	     * the point is inside the polygon.
	     *
	     * RETURN VALUE
	     * (BOOL) TRUE if the point is inside the polygon, FALSE if not.
	   *************************************************************************/ 
	
	    BOOL G_PtInPolygon(POINT *rgpts, WORD wnumpts, POINT ptTest,
	
	                     RECT *prbound)
	
	    {
	
	     RECT   r ;
	     POINT  *ppt ;
	     WORD   i ;
	     POINT  pt1, pt2 ;
	     WORD   wnumintsct = 0 ;
	
	     if (!G_PtInPolyRect(rgpts,wnumpts,ptTest,prbound))
	
	     return FALSE ;
	
	     pt1 = pt2 = ptTest ;
	     pt2.x = r.right + 50 ;
	
	     // Now go through each of the lines in the polygon and see if it
	     // intersects
	     for (i = 0, ppt = rgpts ; i < wnumpts-1 ; i++, ppt++)
	     {
	        if (Intersect(ptTest, pt2, *ppt, *(ppt+1)))
	           wnumintsct++ ;
	     }
	
	     // And the last line
	     if (Intersect(ptTest, pt2, *ppt, *rgpts))
	        wnumintsct++ ;
	
	     return (wnumintsct&1) ;
	
	     }
	
	  /*************************************************************************
	
	     * FUNCTION:   G_PtInPolyRect
	     *
	     * PURPOSE
	     * This routine determines if a point is within the smallest rectangle
	     * that encloses a polygon.
	     *
	     * RETURN VALUE
	     * (BOOL) TRUE or FALSE depending on whether the point is in the rect or
	
	     * not.
	   *************************************************************************/ 
	
	    BOOL  G_PtInPolyRect(POINT *rgpts, WORD wnumpts, POINT ptTest,
	
	                       RECT *prbound)
	
	     {
	
	     RECT r ;
	     // If a bounding rect has not been passed in, calculate it
	     if (prbound)
	
	     r = *prbound ;
	
	     else
	     {
	
	        int   xmin, xmax, ymin, ymax ;
	        POINT *ppt ;
	        WORD  i ;
	
	        xmin = ymin = INT_MAX ;
	        xmax = ymax = -INT_MAX ;
	
	        for (i=0, ppt = rgpts ; i < wnumpts ; i++, ppt++)
	        {
	           if (ppt->x < xmin)
	              xmin = ppt->x ;
	           if (ppt->x > xmax)
	              xmax = ppt->x ;
	           if (ppt->y < ymin)
	              ymin = ppt->y ;
	           if (ppt->y > ymax)
	              ymax = ppt->y ;
	        }
	        SetRect(&r, xmin, ymin, xmax, ymax) ;
	
	     }
	     return (PtInRect(&r,ptTest)) ;
	
	     }
	
	  /*************************************************************************
	     * FUNCTION:   Intersect
	     *
	     * PURPOSE
	     * Given two line segments, determine if they intersect.
	     *
	     * RETURN VALUE
	     * TRUE if they intersect, FALSE if not.
	   *************************************************************************/ 
	
	    BOOL Intersect(POINT p1, POINT p2, POINT p3, POINT p4)
	    {
	
	     return ((( CCW(p1, p2, p3) * CCW(p1, p2, p4)) <= 0)
	
	          && (( CCW(p3, p4, p1) * CCW(p3, p4, p2)  <= 0) )) ;
	
	     }
	
	  /*************************************************************************
	
	     * FUNCTION:   CCW (CounterClockWise)
	     *
	     * PURPOSE
	     * Determines, given three points, if when travelling from the first to
	     * the second to the third, we travel in a counterclockwise direction.
	     *
	     * RETURN VALUE
	     * (int) 1 if the movement is in a counterclockwise direction, -1 if
	     * not.
	   *************************************************************************/ 
	
	    int CCW(POINT p0, POINT p1, POINT p2)
	
	     {
	
	     LONG dx1, dx2 ;
	     LONG dy1, dy2 ;
	
	     dx1 = p1.x - p0.x ; dx2 = p2.x - p0.x ;
	     dy1 = p1.y - p0.y ; dy2 = p2.y - p0.y ;
	
	     /* This is basically a slope comparison: we don't do divisions because
	
	      * of divide by zero possibilities with pure horizontal and pure
	      * vertical lines.
	      */ 
	
	     return ((dx1 * dy2 > dy1 * dx2) ? 1 : -1) ;
	
	     }
	
	     /*************************************************
	
	     * The above code might be tested as follows:
	     *************************************************/ 
	
	     void PASCAL TestProc( HWND hWnd )
	
	     {
	
	      POINT rgpts[] = {0,0, 10,0, 10,10, 5,15, 0,10};
	      WORD wnumpts = 5;
	      POINT ptTest = {3,10};
	      RECT prbound = {0, 0, 20, 20};
	      BOOL bInside;
	
	      bInside = G_PtInPolygon(rgpts, wnumpts, ptTest, &prbound);
	
	      if (bInside)
	         MessageBox(hWnd, "Point is inside!", "Test", MB_OK );
	      else
	         MessageBox(hWnd, "Point is outside!", "Test", MB_OK );
	
	     }
	
	     /* code ends */ 
	
	Additional query words: 3.00 3.10 4.00 hittest hit-test fails
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95 _IK 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
