---
layout: page
title: "Q111600: BUG: Polygons Drawn with Pens of Odd Width (&gt; 5) Misalign"
permalink: /kb/111/Q111600/
---

## Q111600: BUG: Polygons Drawn with Pens of Odd Width (&gt; 5) Misalign

{% raw %}

	Article: Q111600
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When drawing frames with Polygon(), if the pen width results in an odd number of
	pixels (and therefore cannot be centered exactly on its coordinates), the extra
	pixel of width goes up and/or to the left for widths greater than 5 pixels,
	whereas it correctly goes down and to the right for widths less than or equal to
	5 pixels.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Using the ShowGDI sample, the following steps reproduce the problem:
	
	1. Start the ShowGDI sample and maximize it.
	
	2. Set the pen width to 5.
	
	3. Choose Polygon from the Draw menu and enter 4 for the number of points. Enter
	  the following ordered pairs for the points 0 through 4: (20,20) (40,20)
	  (40,40) (20,40).
	
	Note that a 5-pixel frame correctly puts the extra pixel of pen width to the
	right and/or below the 20 and 40 coordinate lines (resulting in two pixels up
	and left, and three pixels down and right). This is correct (as are 1- and
	3-pixel thick lines). However, odd widths of greater than or equal to 7 pixels
	start to round in the wrong direction:
	
	1. Choose Clear from the View menu.
	
	2. Choose Width from the Pen menu and enter 7 for the width.
	
	3. Repeat step 3 above.
	
	Now the extra pixels goes up and to the left, resulting in 4 up/left and 3
	down/right.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
