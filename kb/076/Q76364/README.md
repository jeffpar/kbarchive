---
layout: page
title: "Q76364: BUG: PostScript Driver Version 3.4 Returns Incorrect Page Size"
permalink: /kb/076/Q76364/
---

## Q76364: BUG: PostScript Driver Version 3.4 Returns Incorrect Page Size

{% raw %}

	Article: Q76364
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.4 of the PostScript printer driver, when the DC_PAPERSIZE index is
	specified in the DeviceCapabilities function, the width of the paper is returned
	for both the x and y coordinates in each POINT structure. This function should
	return the height and width of each supported paper size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1, and in
	version 3.4 of the PostScript driver.
	
	Additional query words: 3.00 3.10 buglist3.00 buglist3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
