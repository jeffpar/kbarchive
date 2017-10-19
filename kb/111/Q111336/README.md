---
layout: page
title: "Q111336: BUG: R2_XORPEN Binary ROP Code Ignored for Wide Pens"
permalink: /kb/111/Q111336/
---

## Q111336: BUG: R2_XORPEN Binary ROP Code Ignored for Wide Pens

	Article: Q111336
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
	
	If a wide pen is selected in a device context and SetROP2() is called to set the
	binary raster-operation (ROP) code to R2_XORPEN, the desired effect is not
	achieved for ellipses, arcs, roundrects, or rectangles. The ROP is basically
	ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
