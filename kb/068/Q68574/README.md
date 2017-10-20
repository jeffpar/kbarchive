---
layout: page
title: "Q68574: Performance Differences Between LineTo() and Polyline()"
permalink: /kb/068/Q68574/
---

## Q68574: Performance Differences Between LineTo() and Polyline()

{% raw %}

	Article: Q68574
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application must draw a large number of lines, the Polyline() function
	will execute 1.1 to 1.5 times faster than the equivalent calls to the LineTo()
	function on video hardware that does not have a graphics coprocessor (such as
	EGA and VGA). On hardware with a graphics coprocessor (such as an 8514/A),
	Polyline() can execute up to 12 times faster than LineTo().
	
	In general, Polyline() is faster than LineTo(). This is magnified by drawing a
	very large number of lines. With a small number of lines, the difference in
	duration of the calls is negligible compared to the time required to draw the
	lines.
	
	MORE INFORMATION
	================
	
	LineTo() and Polyline() both use the same internal code to draw lines, but with
	slightly different setup procedures.
	
	Polyline() calls GlobalAlloc() and copies all points into that memory; as a
	result, there is some overhead. A pointer to the memory is passed to an internal
	function that draws all the lines.
	
	LineTo() essentially builds one point and calls the same internal function as
	Polyline(). LineTo() does not allocate additional memory.
	
	Polyline() is much more efficient for a large number of lines, since an
	application makes a single call to Windows and setup is only performed once. A
	large number of calls to LineTo() introduces significant overhead to make each
	call and repeatedly execute the setup code in LineTo().
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
