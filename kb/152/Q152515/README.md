---
layout: page
title: "Q152515: BUG: VFP Does Not Redraw Correctly After Resolution Change"
permalink: /kb/152/Q152515/
---

## Q152515: BUG: VFP Does Not Redraw Correctly After Resolution Change

	Article: Q152515
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When changing resolutions with the Monitor control panel, Visual FoxPro
	development environment may not correctly redraw the environment. Windows may
	have blank, overwritten, or misaligned areas. Toolbars may be docked or
	positioned incorrectly. This behavior can occur regardless of the tool used to
	change resolutions.
	
	WORKAROUND
	==========
	
	The only reliable workaround at this time is to quit and then relaunch Visual
	FoxPro. Visual FoxPro correctly polls the system at launch time and will respect
	the resolution chosen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Apple menu, choose Control Panels, Monitors.
	
	2. Click Options, and then choose the highest available resolution.
	
	3. Launch Visual FoxPro.
	
	4. Drag the Command window to near the right edge of the monitor.
	
	5. Without quitting Visual FoxPro, change resolution to 640x480.
	
	6. Return to Visual FoxPro.
	
	Additional query words: vFoxmac screen pixel
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
