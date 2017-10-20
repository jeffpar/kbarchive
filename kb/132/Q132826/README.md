---
layout: page
title: "Q132826: CSNAV List Box Does Not Scroll Properly When Updated"
permalink: /kb/132/Q132826/
---

## Q132826: CSNAV List Box Does Not Scroll Properly When Updated

{% raw %}

	Article: Q132826
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The session window of CSNAV (a program used to connect to CompuServe) has a list
	box that is updated as your session runs, letting you see the outcome of your
	logon session. In Windows 95, as new items are added to the list box, the list
	is not updated to show you the last item added.
	
	CAUSE
	=====
	
	This behavior occurs because of the new proportional scroll bars used by list
	boxes in Windows 95. The new scroll bar ranges and positions confuse CSNAV's
	scrolling code, and as a result, the list box does not scroll as items are
	added.
	
	RESOLUTION
	==========
	
	To follow the outcome of your session, manually scroll the new items into view.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, contact the manufacturer.
	
	MORE INFORMATION
	================
	
	The product discussed here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: navigator
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
