---
layout: page
title: "Q156170: PRB: Open Tab on Docked Project Manager Stops Desktop Resize"
permalink: /kb/156/Q156170/
---

## Q156170: PRB: Open Tab on Docked Project Manager Stops Desktop Resize

{% raw %}

	Article: Q156170
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600kbfaq
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Project Manager is docked (that is, dragged by the title bar to the
	toolbar row of the Visual FoxPro desktop so that only the tabs of the Project
	Manager are visible) and a tab is open, the mouse pointer does not appear to
	function correctly if you use it to resize the Visual FoxPro desktop. When the
	pointer is positioned at the right edge of the Visual FoxPro desktop, it does
	not change into a "resizing" pointer.
	
	CAUSE
	=====
	
	The tabs of the Project Manager are really pop-up menus. When a pop-up menu,
	such as the Data tab, is open, the mouse pointer does not change to a resize
	pointer. This is true in other Windows applications as well. For example, click
	on any menu in Microsoft Word, keep the menu in the open state, and then try to
	resize the desktop window.
	
	WORKAROUND
	==========
	
	Click anywhere on either the Visual FoxPro desktop or the Windows desktop. The
	pop-up menu closes, and you can use the mouse pointer to resize the Visual
	FoxPro desktop. Usually it changes to the multi-headed resize cursor, but if
	positioned exactly over the right border of the VFP desktop, it remains an arrow
	that can resize the Desktop window.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbdsd pop-up cursor menu vfoxwin popup
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
