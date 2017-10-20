---
layout: page
title: "Q159897: PRB: Listbox Repaint Problem under Middle East Windows 3.1"
permalink: /kb/159/Q159897/
---

## Q159897: PRB: Listbox Repaint Problem under Middle East Windows 3.1

{% raw %}

	Article: Q159897
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbIntlDev
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under 16-bit Middle East Windows (Arabic and Hebrew Windows 3.1), if an
	application uses the Arabic or Hebrew SDK to create listboxes that are aligned
	to the right(using the WS_EX_BIDI_SCROLL style), setting the horizontal listbox
	extent causes repaint problems when a listbox is scrolled (fragments of strings
	are scattered throughout the listbox when it is scrolled).
	
	RESOLUTION
	==========
	
	The same executable can be run on Middle East Windows 95 versions (Arabic
	Windows 95, Hebrew Windows 95) without this problem.
	
	MORE INFORMATION
	================
	
	32-bit Middle East applications do not have this problem.
	
	Additional query words: 3.10 kbdsd WS_EX_RIGHT WS_EX_RTLREADING ME
	
	======================================================================
	Keywords          : kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
