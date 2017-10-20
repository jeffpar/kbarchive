---
layout: page
title: "Q111589: BUG: Brush Misaligned in PaintRgn()"
permalink: /kb/111/Q111589/
---

## Q111589: BUG: Brush Misaligned in PaintRgn()

{% raw %}

	Article: Q111589
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin32
	Last Modified: 18-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a mapping mode other than MM_TEXT with the background mode set to
	TRANSPARENT, when calling PaintRgn() to paint a nonrectangular region with a
	hatched brush, the brush is misaligned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	MORE INFORMATION
	================
	
	To work around this problem, call SetMapMode() to switch to the mapping mode
	MM_TEXT before calling PaintRgn().
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbSDKWin32 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
