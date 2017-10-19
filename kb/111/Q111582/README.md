---
layout: page
title: "Q111582: BUG: Arc() Not Drawn Completely with a Wide Pen"
permalink: /kb/111/Q111582/
---

## Q111582: BUG: Arc() Not Drawn Completely with a Wide Pen

	Article: Q111582
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 18-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling Arc() with a wide pen selected, occasionally there will be an
	unfilled line in the third quadrant of the arc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1.
	
	MORE INFORMATION
	================
	
	This behavior may be reproduced as follows on a VGA display:
	
	With a pen width of 100 selected into the DC, call Arc() with the following
	parameters:
	
	  X1=165, Y1=12, X2=445, Y2=294, X3=279, Y3=142, X4=227, Y4=20
	
	There will be a slanted line of width 1 (one) that is not drawn in the pen color.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
