---
layout: page
title: "Q245733: Encyclopedia 2000: Error Message When You Click Voice Control"
permalink: kb/245/Q245733/
---

## Q245733: Encyclopedia 2000: Error Message When You Click Voice Control

	Article: Q245733
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsound kbtool kbui kbimu
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Voice Control on the Options menu in Microsoft Encarta
	Encyclopedia 2000, you may receive the following error message:
	
	  Encarta Encyclopedia could not start the speech recognizer. This is probably
	  because the computer is not equipped with a sound input device, or the device
	  is busy.
	
	CAUSE
	=====
	
	This behavior can occur if an incompatibility exists with the sound card
	selected as your "Preferred device" under Playback in the Multimedia tool in
	Control Panel.
	
	RESOLUTION
	==========
	
	To work around this issue, configure the Multimedia tool in Control Panel so
	that your default audio playback device is Game Compatible Device. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Under Playback, click Game Compatible Device in the "Preferred device" box.
	
	  NOTE: If the Game Compatible Device option is not available under Playback,
	  you can install this option. To do this, follow the steps in the "More
	  Information" section of this article, and then return to this step.
	
	4. Click to select the "Use only preferred devices" check box, and then click
	  OK.
	
	5. Close Control Panel, and then restart the computer.
	
	STATUS
	======
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	If the Game Compatible Device option is not available, use the following steps
	to install it:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. In the Modems Properties dialog box, click Add.
	
	  If a modem driver is not installed on your computer, you do not receive the
	  Modems Properties dialog box, and you are unable to click Add. In this case,
	  proceed to step four.
	
	4. Click to select the "Don't detect my modem; I will select it from a list"
	  check box, and then click Next.
	
	5. In the Manufacturers box, click 3X.
	
	  NOTE: In some versions of Microsoft Windows, 3X may be unavailable.
	
	6. In the Models box, click 3X 14.4 Data Fax Modem Voice.
	
	7. Click Next.
	
	8. Click any port, click Next, and then follow the instructions on the screen.
	
	9. Click Finish, and then click Close.
	
	Additional query words: multi multi-media media ee2k sound voice recognition extras
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsound kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
