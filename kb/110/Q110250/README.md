---
layout: page
title: "Q110250: PRB: Compressed Bitmap Display Is Corrupt"
permalink: /kb/110/Q110250/
---

## Q110250: PRB: Compressed Bitmap Display Is Corrupt

{% raw %}

	Article: Q110250
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to display a compressed .BMP file in FoxPro for
	Macintosh, the output is either corrupt or the error message "Picture Too Big,
	Corrupt or Wrong Format" is displayed.
	
	CAUSE
	=====
	
	FoxPro for Macintosh can't uncompress bitmaps before displaying them. The
	routines to uncompress bitmaps are part of the Microsoft Windows operating
	system and are not available in the Macintosh operating system. Therefore, the
	pictures appear to be corrupted.
	
	NOTE: This may also be caused if a Macintosh disk compression utility, such as
	DiskDoubler, is being used.
	
	RESOLUTION
	==========
	
	To avoid this problem, store all .BMP files as uncompressed bitmaps.
	
	NOTE: Bitmaps that are created using the Windows Paintbrush program are
	automatically stored as uncompressed.
	
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
