---
layout: page
title: "Q151768: BUG: Tooltips on Primary Monitor when Toolbar on 2nd Monitor"
permalink: /kb/151/Q151768/
---

## Q151768: BUG: Tooltips on Primary Monitor when Toolbar on 2nd Monitor

{% raw %}

	Article: Q151768
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Macintoshes can be configured to use two or more monitors. The Monitors control
	panel is used to control which monitor is the primary monitor (the monitor with
	the menu bar on it) and which side or corner of the primary monitor is used to
	access the secondary monitor.
	
	In Visual FoxPro for the Macintosh, Toolbars, the Form Designer, the Project
	Manager, and all the other designers, builders, and wizards can be moved to the
	secondary monitor. This allows for much more workspace.
	
	However, when the secondary monitor is arranged to the right of the primary
	monitor in the Monitors control panel, Visual FoxPro for the Macintosh will show
	the Tooltips for any toolbars are on the secondary monitor on the primary
	monitor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Obtain a Macintosh that can support multiple monitors, and connect a second
	  monitor to it.
	
	2. In the Monitors control panel, arrange the secondary monitor to be to the
	  right of the primary monitor.
	
	3. Undock the Standard toolbar and drag it to the secondary monitor. The
	  Tooltips will show up on the right side of the primary monitor.
	
	Additional query words: 3.00 VFoxMac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
