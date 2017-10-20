---
layout: page
title: "Q111338: BUG: Vector Font Rotation Skewed with Non-Top-Left Alignment"
permalink: /kb/111/Q111338/
---

## Q111338: BUG: Vector Font Rotation Skewed with Non-Top-Left Alignment

{% raw %}

	Article: Q111338
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 27-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Vector fonts do not rotate properly with a text alignment set to other than the
	top left.
	
	To reproduce this problem, create a logical font for the Script vector font. Call
	SetTextAlign() to set the text alignment to TA_BASELINE and TA_CENTER. Rotate
	the font, perhaps in a whirl pattern as the FONTEST sample does. Note that the
	rotation axis is skewed in the northwest- southeast direction. This problem
	occurs in all mapping modes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10 TA_TOP TA_LEFT
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
