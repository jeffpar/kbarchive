---
layout: page
title: "Q299826: Streets and Trips: Program Unexpectedly Stops Responding"
permalink: kb/299/Q299826/
---

## Q299826: Streets and Trips: Program Unexpectedly Stops Responding

	Article: Q299826
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets and Trips 2001 
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing, starting, or using Microsoft Streets and Trips, the
	program may unexpectedly stop responding.
	
	CAUSE
	=====
	
	This behavior can occur if there are issues with the Streets and Trips CD-ROM or
	graphics-acceleration issues.
	
	RESOLUTION
	==========
	
	Use one or more of the following methods, as necessary, to determine the cause
	of this behavior and to work around the issue.
	
	Method 1: Reduce CD-ROM Caching and Prevent Read-Ahead
	------------------------------------------------------
	
	Follow these steps to reduce CD-ROM caching and prevent read-ahead activity:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click File System.
	
	4. On the CD-ROM tab, note the current settings, and then move the "Supplemental
	  cache size" slider to the Small position.
	
	5. In the "Optimize access pattern for" box, click "No read-ahead".
	
	6. Click OK, and then click Close.
	
	7. When you are prompted to restart your computer, click Yes.
	
	If these steps do not successfully resolve the issue, repeat the steps to restore
	the settings to the original values noted in step 4, and then proceed to the
	next method.
	
	Method 2: Reduce Graphics Acceleration
	--------------------------------------
	
	Follow these steps to reduce graphics acceleration.
	
	Microsoft Windows 98 and Microsoft Windows Millennium Edition:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the "Hardware acceleration" slider one step to the left.
	
	5. Click OK twice.
	
	Microsoft Windows 2000:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Advanced.
	
	4. On the Troubleshooting tab, move the "Hardware acceleration" slider one step
	  to the left.
	
	5. Click OK twice.
	
	If reducing the graphics-acceleration level does not successfully resolve the
	issue, repeat the steps again until you have tried reducing all
	hardware-acceleration settings.
	
	If reducing the graphics-acceleration level resolves the issue, contact your
	video card manufacturer to inquire about how to obtain and install the latest
	version of the video driver for your video adapter.
	
	For information about how to contact your video card manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To determine the manufacturer and model of your video adapter, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	  NOTE: In Windows 2000, click the Hardware tab, and then click Device Manager.
	
	4. Click the plus sign (+) next to Display Adapters.
	
	5. Under the Display Adapters branch, note the manufacturer and model of your
	  video adapter.
	
	6. Click OK, and then close Control Panel.
	
	For additional information about how to determine the version of the video driver
	that is installed on your computer, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	If the behavior continues to occur, proceed to the next method.
	
	Method 3: Test CD-ROM for File Access
	-------------------------------------
	
	The Streets and Trips CD-ROM may have a scratch or other defect that prevents
	access to the files. Follow these steps to determine whether any of the files on
	the CD-ROM cannot be read:
	
	1. Click Start, and then click Run.
	
	2. Type "command" (without the quotation marks), and then click OK.
	
	3. Type "xcopy drive <letter>:\*.* /s > null" (without the quotation
	  marks) (where <letter> is the drive letter of your computer's CD-ROM or
	  DVD-ROM drive), and then press ENTER.
	
	Depending on the speed of your CD-ROM or DVD-ROM drive, these steps can take
	several minutes to complete. If there are any files that cannot be read from the
	CD-ROM, you will receive error messages indicating that the CD-ROM is damaged.
	
	For additional information about testing CD-ROM drives, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q223443 Streets and Trips 2000: Testing CD-ROM Drive for File Access
	
	Additional query words: freezes locks up hangs title screen not responding
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000 kbExpediaStreets2001
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
