---
layout: page
title: "Q76688: PRB: Resource Compiler Cannot Find Include Files"
permalink: /kb/076/Q76688/
---

## Q76688: PRB: Resource Compiler Cannot Find Include Files

{% raw %}

	Article: Q76688
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Resource Compiler (RC) is used to compile a resource script, it cannot
	locate include files.
	
	CAUSE
	=====
	
	The environment variable INCLUDE contains a path that ends in a backslash
	(example, set INCLUDE=C:\).
	
	RESOLUTION
	==========
	
	Change the declaration of the environment variable to remove the trailing
	backslash.
	
	This problem is often caused when the SUBST command is used to specify a logical
	drive for a path.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
