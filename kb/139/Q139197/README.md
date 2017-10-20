---
layout: page
title: "Q139197: BUG: Screen Does Not Repaint in Windows 95"
permalink: /kb/139/Q139197/
---

## Q139197: BUG: Screen Does Not Repaint in Windows 95

{% raw %}

	Article: Q139197
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmmkbbuglist
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual FoxPro 3.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Mastering Microsoft Visual FoxPro compact disc under Windows
	95, the application window may not correctly repaint when another window has
	overlapped the application window.
	
	RESOLUTION
	==========
	
	When this problem occurs, the easiest way to force the window to repaint
	correctly is to minimize the application and then immediately restore it. This
	will cause all the windows of the application to be repainted correctly.
	
	To avoid this problem, avoid overlapping other windows on top of the application
	window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm kbbuglist
	Technology        : kbMSPressSearch
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
