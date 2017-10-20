---
layout: page
title: "Q118471: BUG: Caching GDI Objects Causes Temporary GDI Resource Leak"
permalink: /kb/118/Q118471/
---

## Q118471: BUG: Caching GDI Objects Causes Temporary GDI Resource Leak

{% raw %}

	Article: Q118471
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The amount of free GDI resources decreases as an application prints, especially
	over the course of several print jobs.
	
	NOTE: The information in this article also applies to the screen; however, this
	issue more often impacts applications when printing, and therefore that is the
	specific subject of this article.
	
	CAUSE
	=====
	
	The application caches GDI objects by creating them and not deleting them until
	the application terminates. Those objects are selected in and out of a printer
	Device Context (DC) when needed, over the course of several print jobs.
	
	GDI creates a new physical object structure for each logical object that is
	selected into a printer DC. New physical objects are created even if the same
	logical objects are selected into a different printer DC. Those physical objects
	are not deleted until the corresponding logical objects are deleted. The more
	objects used in printing, and the more jobs that are printed using those
	objects, the more physical objects are created and more GDI resources are used
	up.
	
	RESOLUTION
	==========
	
	Do not cache GDI objects (such as pens, brushes, and fonts). Instead, create
	them, use them during printing, and then delete them after each print job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem can be reproduced as follows:
	
	1. Create a logical object such as a pen, brush, or font.
	
	2. Repeat the following steps:
	
	  a. Create a printer DC.
	
	  b. Select the object into and out of the printer DC.
	
	  c. Delete the printer DC.
	
	With each iteration, GDI memory decreases.
	
	Additional query words: buglist3.10 3.10 system resources
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
