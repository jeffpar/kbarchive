---
layout: page
title: "Q256290: NBA Drive 2000 Err Msg: Invalid Page Fault in Module Unknown"
permalink: /kb/256/Q256290/
---

## Q256290: NBA Drive 2000 Err Msg: Invalid Page Fault in Module Unknown

	Article: Q256290
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu msgame
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Inside Drive 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft NBA Inside Drive 2000, you may receive an error message
	similar to one of the following:
	
	   - Armcfg32.exe caused an invalid page fault in module unknown.
	
	   - Armon32 caused an invalid page fault in module unknown.
	
	CAUSE
	=====
	
	This behavior can occur if MindSpring's Access Ramp Monitor software is
	installed on your computer.
	
	RESOLUTION
	==========
	
	To work around this issue, disable the Access Ramp Monitor software:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "armcfg32.exe" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, double-click the Armcfg32.exe file, and then
	  click to select the "Do not Load Access Ramp Monitor at Startup" check box.
	
	4. Restart the computer.
	
	To re-enable the Access Ramp Monitor software, repeat these steps, but click to
	select the "Load Access Ramp Monitor at Startup" check box in step 3.
	
	NOTE: You must disable the Access Ramp Monitor software each time you want to
	play NBA Inside Drive 2000.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: 1.00 msgame nba2000 nba2k basketball
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu msgame 
	Technology        : kbGamesSearch kbNBAInsideDrive2000
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
