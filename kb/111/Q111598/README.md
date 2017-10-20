---
layout: page
title: "Q111598: BUG: Opaque Rectangle Too Small on Rotated TrueType Fonts"
permalink: /kb/111/Q111598/
---

## Q111598: BUG: Opaque Rectangle Too Small on Rotated TrueType Fonts

{% raw %}

	Article: Q111598
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310bug kbSDKWin16
	Last Modified: 24-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a TrueType font is rotated, the text background is too small to completely
	enclose the glyphs; the same text unrotated is enclosed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	MORE INFORMATION
	================
	
	You can reproduce this problem by running the FONTTEST sample, selecting Arial
	72 pt, setting the lfEscapement to 450, and typing in "ff" in the String window.
	Note how the upper-right part of the "f" goes outside the background rectangle.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310bug kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
