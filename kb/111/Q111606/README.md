---
layout: page
title: "Q111606: BUG: ROP2 Code Applied Incorrectly in Pie() Function"
permalink: kb/111/Q111606/
---

## Q111606: BUG: ROP2 Code Applied Incorrectly in Pie() Function

	Article: Q111606
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
	
	When calling the Windows SDK function Pie() using a ROP2 code other than the
	default R2_COPYPEN, and using a pen with a width greater than 1 (one), you may
	notice that the pie border is not drawn correctly.
	
	CAUSE
	=====
	
	The pen position is applied incorrectly and overlaps part of the interior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For a demonstration of this bug, run the sample program SHOWGDI that comes with
	the Windows 3.1 SDK or with Microsoft Visual C++. Set the pen width to greater
	than 1 and make sure that the pen color and brush color are different. For
	example, set the pen width to 5 and the pen color to RGB(0,255,0). Set the brush
	color to RGB(255,0,255). Set the ROP2 code to R2_XORPEN and then draw a pie. You
	will see three color ranges. The pen position is applied incorrectly and
	overlaps part of the interior.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
