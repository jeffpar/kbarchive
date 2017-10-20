---
layout: page
title: "Q119164: INFO: Use of Polygon() Versus PolyPolygon()"
permalink: /kb/119/Q119164/
---

## Q119164: INFO: Use of Polygon() Versus PolyPolygon()

{% raw %}

	Article: Q119164
	Product(s): Microsoft Windows Software Development Kit
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWinNT350 kbOSWinNT351 kbSDKWin16
	Last Modified: 12-MAY-2001
	
	3.10 3.50
	WINDOWS NT
	kbgraphic
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Polygon() draws a polygon, while PolyPolygon() draws a series of polygons. Using
	multiple calls to Polygon() can offer better performance than using a single
	call to PolyPolygon(); this is because PolyPolygon() does not consider the
	polygons to be independent, but considers them to be one polygon with multiple
	disjointed edges. However, there are times when PolyPolygon() is preferable,
	particularly if the number of polygons is small.
	
	MORE INFORMATION
	================
	
	PolyPolygon() batches polygons in a single call, so there is less call overhead
	than there is for multiple calls to Polygon(). However, to perform one combined
	fill, PolyPolygon() has to work with all the edges in all of the polygons
	simultaneously, resulting in sorting overhead. The overhead involved in sorting
	becomes quite expensive when there are a lot of polygons, causing a net loss of
	performance in comparison to Polygon().
	
	GDI batches multiple Polygon() calls to be more efficient. Setting the batch
	limit higher than the default of 10 with GdiSetBatchLimit() improves performance
	even further. GDI and some drivers optimize convex polygons, but will only
	optimize a single polygon drawn with either Polygon() or PolyPolygon().
	
	Because PolyPolygon() treats all edges as part of one big polygon, it also draws
	every pixel to be filled exactly once; this may be a performance advantage if a
	lot of overlapping polygons are drawn, because Polygon() draws every pixel in
	each polygon only once, even where there is an overlap.
	
	PolyPolygon() considers all the polygons when applying the current fill mode, as
	set by calling SetPolyFillMode(). Consequently, if any polygons overlap, the
	result of one PolyPolygon() call may be different than the result of the
	equivalent multiple Polygon() calls. If the polygons overlap and the raster
	operation takes the destination pixel values into account, or if you want the
	fill rule to be applied to overlapping areas, then it is preferable to use
	PolyPolygon().
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWinNT350 kbOSWinNT351 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin32sSearch kbWin32API
	Version           : winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
