---
layout: page
title: "Q121911: The Close Button Does Not Appear or Is Disabled"
permalink: /kb/121/Q121911/
---

## Q121911: The Close Button Does Not Appear or Is Disabled

{% raw %}

	Article: Q121911
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
	
	After you start your application, the Close button (the button displaying an "x"
	in the upper-right corner of the window) is either dim or does not appear at
	all.
	
	Applications known to exhibit this behavior include:
	
	- Microsoft FoxPro for Windows, versions 2.5 and 2.6
	
	
	CAUSE
	=====
	
	Some applications draw their own caption and title bars. This prevents the
	Windows 95 Close button from appearing or being enabled.
	
	WORKAROUND
	==========
	
	Microsoft FoxPro for Windows
	----------------------------
	
	The Close button is dim in FoxPro for Windows because FoxPro deletes all the
	items in the System menu. It then enters its own items into the System menu,
	thus preventing Windows 95 from properly executing the Close button detection
	code.
	
	Currently, no workaround is available for this behavior.
	
	Additional query words: 3rdparty gray grayed grey dimmed
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
