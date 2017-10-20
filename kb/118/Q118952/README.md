---
layout: page
title: "Q118952: &quot;Cannot Open File&quot; Error Occurs When Trying to Start Falcon 3"
permalink: /kb/118/Q118952/
---

## Q118952: &quot;Cannot Open File&quot; Error Occurs When Trying to Start Falcon 3

{% raw %}

	Article: Q118952
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Spectrum Holobyte game Falcon 3.0 in an MS-DOS window
	in Windows 95, you receive the following error message:
	
	  Cannot Open File
	
	This error occurs even when the FALCON3 directory is in your PATH statement, and
	it still occurs when you provide the complete path to the FALCON3.EXE file.
	
	CAUSE
	=====
	
	When Falcon 3 is loading, it expects to find the necessary support files in the
	currently active directory.
	
	RESOLUTION
	==========
	
	To start Falcon 3.0, you must be in the FALCON3 directory. When you create a
	shortcut for Falcon 3, the working directory must be FALCON3.
	
	MORE INFORMATION
	================
	
	Falcon 3 is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: err msg 3rdparty
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
