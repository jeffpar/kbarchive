---
layout: page
title: "Q272169: Microsoft Reader: Cannot Read Text with ATI Rage Turbo Installed"
permalink: /kb/272/Q272169/
---

## Q272169: Microsoft Reader: Cannot Read Text with ATI Rage Turbo Installed

	Article: Q272169
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Reader, version 1.5, you may be unable to read sections
	of text.
	
	CAUSE
	=====
	
	This behavior can occur if an ATI Rage Pro Turbo video adapter is installed on
	your computer and either one of the following conditions are true:
	
	- Microsoft Windows is configured to use a 1024 x 768 screen resolution with
	  16-bit color.
	
	- The video driver is outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these methods in the order in which they are
	presented.
	
	Reduce the Windows Screen Resolution and Color Depth
	----------------------------------------------------
	
	To reduce the Windows screen resolution and color depth:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Move the Display Area slider to 800 x 600 or lower.
	
	5. In the Color Palette box, click High Color (16-bit) or lower.
	
	6. Click OK. If you are prompted to restart the computer, do so.
	
	If the issue continues to occur, proceed to the next method.
	
	Install the Latest Version of Your Video Driver
	-----------------------------------------------
	
	Contact your hardware manufacturer to inquire about how to obtain and install the
	latest version of the video driver for your video adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To determine the manufacturer and the model of the video adapter that is
	installed in your computer:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the plus sign (+) next to "Display adapters" to expand the branch.
	
	5. Under the "Display Adapters" branch, note the manufacturer and the model of
	  your video adapter, and then click OK.
	
	6. Close Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Reader, version 1.5.
	
	Additional query words: multi multi-media media mm msreader
	
	======================================================================
	Keywords          :  
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	
	=============================================================================
	
