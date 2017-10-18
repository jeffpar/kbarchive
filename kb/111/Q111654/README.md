---
layout: page
title: "Q111654: BUG: StretchDIBits Not Correctly Stretching RLE DIBs w/ Jumps"
permalink: kb/111/Q111654/
---

## Q111654: BUG: StretchDIBits Not Correctly Stretching RLE DIBs w/ Jumps

	Article: Q111654
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 16-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling StretchDIBits() to stretch an RLE device-independent bitmap (DIB) with
	jumps in it results in random garbage being displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
