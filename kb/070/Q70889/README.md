---
layout: page
title: "Q70889: PRB: SPY Updates Only One Line with Small Buffer"
permalink: /kb/070/Q70889/
---

## Q70889: PRB: SPY Updates Only One Line with Small Buffer

{% raw %}

	Article: Q70889
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using SPY, only the bottom line of the SPY window is updated as messages
	are received.
	
	CAUSE
	=====
	
	In the SPY Options dialog, the number of lines to save in the buffer is smaller
	than the number of lines that will fit in the SPY main window.
	
	RESOLUTION
	==========
	
	Specify a buffer size larger than the size of the SPY main window.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
