---
layout: page
title: "Q133226: PPT7: Office Shortcut Bar Not Hidden During Slide Show on NT"
permalink: /kb/133/Q133226/
---

## Q133226: PPT7: Office Shortcut Bar Not Hidden During Slide Show on NT

	Article: Q133226
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbinterop kbui kbdta
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0, used with:
	   - the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a slide show from PowerPoint for Windows 95, version 7.0, under
	Windows NT version 3.51, the Office shortcut bar is visible.
	
	Furthermore, if you are running Windows NT using the Windows 95 shell, the
	Windows taskbar is also visible during a slide show.
	
	If you choose to autohide the Windows taskbar and/or the Office shortcut bar,
	they still appear as thin gray lines along the edge of your screen.
	
	CAUSE
	=====
	
	When you run a PowerPoint slide show, PowerPoint tries to take control of the
	entire screen. Windows 95 allows PowerPoint to do so, so the Windows taskbar and
	Office shortcut bars are hidden during slide shows running on Windows 95.
	Windows NT, however, does not allow any application to take total control of the
	entire screen, so the Windows taskbar and Office shortcut bar remain visible.
	
	WORKAROUND
	==========
	
	To view your slide show without the Office shortcut bar, close the shortcut bar
	prior to running your slide show.
	
	To view your slide show without the Windows taskbar, do the following:
	
	1. Click the Start button on the taskbar and point to Settings.
	
	2. Click Taskbar. This takes you to Taskbar Properties.
	
	3. Click the Taskbar Options tab. Clear the "Always on top" check box.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft
	PowerPoint 97 for Windows.
	
	Additional query words: 7.0O ppt95 w_office power point winppt macppt shows up bleeds through mom msoffice toolbar task bar short cut
	
	======================================================================
	Keywords          : kbinterop kbui kbdta 
	Technology        : kbPowerPtSearch kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0; winnt:3.51
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
