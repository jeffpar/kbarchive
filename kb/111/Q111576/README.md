---
layout: page
title: "Q111576: BUG: LineTo() Endcaps Misaligned with Large Pen Width"
permalink: /kb/111/Q111576/
---

## Q111576: BUG: LineTo() Endcaps Misaligned with Large Pen Width

{% raw %}

	Article: Q111576
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If LineTo() is used with a wide pen selected, the endcaps are misaligned with
	the line; they are skewed at an angle relative to the line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, select a black pen of width about 100:
	
	  MoveTo(hDC,207,73)
	  LineTo(hDC,512,251)
	
	Look at the endcaps; they cause the line to appear twisted or deformed.
	
	NOTE: To invalidate the area, the following was used:
	
	  Rect.top=Y1-nCurPenWidth/2-1
	  Rect.left=X1-nCurPenWidth/2-1
	  Rect.bottom=Y2+nCurPenWidth/2+1
	  Rect.right=X2+nCurPenWidth/2+1
	
	If nCurPenWidth is greater than 103, then the endcaps are not completely erased,
	and fall outside the Rect area.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10 end caps
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
