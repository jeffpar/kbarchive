---
layout: page
title: "Q10220: Locking Discardable Objects"
permalink: /kb/010/Q10220/
---

## Q10220: Locking Discardable Objects

{% raw %}

	Article: Q10220
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to put in a call to determine whether an object is discarded.
	GlobalLock() returns NULL if the object is discarded. There is no such thing as
	a swapped object. Locking a discarded object does not affect its lock count.
	Discarded objects always have a lock count of zero. Objects with a nonzero lock
	count are never discarded.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
