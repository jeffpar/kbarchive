---
layout: page
title: "Q111008: BUG: Gaps Between Wedges Drawn with Pie()"
permalink: /kb/111/Q111008/
---

## Q111008: BUG: Gaps Between Wedges Drawn with Pie()

{% raw %}

	Article: Q111008
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the Windows Pie() API will leave gaps between pie
	wedges when there should be a solid line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Pie() takes the following parameters:
	
	     BOOL Pie( HDC hdc,
	               int nLeftRect,
	               int nTopRect,
	               int nRightRect,
	               int nBottomRect,
	               int nxStartArc,
	               int nyStartArc,
	               int nxEndArc,
	               int nyEndArc )
	
	Pie() draws a pie-shaped wedge by drawing an elliptical arc whose center and two
	endpoints are joined by lines.
	
	Using Pie(), if two pie wedges are drawn with the same bounding rectangle and the
	end point of the first wedge is equal to the start point of the second wedge,
	there can be a gap between adjacent wedges. This gap shows up only with certain
	pie sizes and certain start/end points.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
