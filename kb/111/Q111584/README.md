---
layout: page
title: "Q111584: BUG: Occasional Gap Between Adjacent Pie() Wedges"
permalink: /kb/111/Q111584/
---

## Q111584: BUG: Occasional Gap Between Adjacent Pie() Wedges

{% raw %}

	Article: Q111584
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Pie() function is used to draw two pie wedges with the same bounding
	rectangle and the end point of the first wedge is equal to the start point of
	the second wedge, there can be a gap between adjacent wedges. This gap only
	occurs occasionally, and with certain pie sizes and start-and-end points.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior can be reproduced using the following code fragment on a VGA
	display:
	
	Sample Code
	-----------
	
	  #define     xLeft     (25)
	  #define     yTop     (25)
	  #define     xRight     (450)
	  #define     yBottom     (450)
	  #define     xMiddle     ((xLeft + xRight) / 2)
	  #define     yMiddle     ((yTop + yBottom) / 2)
	  {
	  HBRUSH hbrushRed, hbrushBlue, hbrushOld;
	
	  hbrushRed = CreateSolidBrush(RGB(255, 0, 0));
	  hbrushBlue = CreateSolidBrush(RGB(0, 0, 255));
	
	  hbrushOld = SelectObject(hdc, hbrushRed);
	  Pie(hdc, xLeft, yTop, xRight, yBottom, xRight, yMiddle, xRight, yTop);
	  SelectObject(hdc, hbrushBlue);
	  Pie(hdc, xLeft, yTop, xRight, yBottom, xRight, yTop, xMiddle, yTop);
	
	  SelectObject(hdc, hbrushOld);
	  DeleteObject(hbrushRed);
	  DeleteObject(hbrushBlue);
	  }
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
