---
layout: page
title: "Q146623: PRB: IsClipListChanged Will Always Return TRUE"
permalink: /kb/146/Q146623/
---

## Q146623: PRB: IsClipListChanged Will Always Return TRUE

{% raw %}

	Article: Q146623
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 23-JUN-1999
	
	1.00
	WINDOWS
	kbgraphic kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	the IsClipListChanged function always sets lpbChanged, the out parameter, to
	TRUE even when the cliplist has changed.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 1.00 DDraw DirectDraw
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
