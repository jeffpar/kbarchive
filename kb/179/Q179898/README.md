---
layout: page
title: "Q179898: Close Combat Error Message: The Screen Size Has Changed..."
permalink: kb/179/Q179898/
---

## Q179898: Close Combat Error Message: The Screen Size Has Changed...

	Article: Q179898
	Product(s): Microsoft Home Games
	Version(s): MACINTOSH:1.0; WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbtlckbfaq
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for the Macintosh 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Close Combat on a Macintosh computer, you may receive
	the following error message:
	
	  The screen size has changed. Close Combat will now quit.
	
	CAUSE
	=====
	
	This behavior can occur if you are running the GoMac utility.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the GoMac utility or enable the Auto Hide feature
	of the GoMac utility. To do so, use the following methods:
	
	Disable the GoMac Utility
	-------------------------
	
	To disable the GoMac utility, use the following steps:
	
	1. Double-click the hard drive, and then double-click the System folder.
	
	2. Double-click the Control Panels folder, and then locate the GoMac file.
	
	3. Drag the GoMac file to the desktop.
	
	4. Close all open windows.
	
	5. On the Special menu, click Restart.
	
	Enable the Auto Hide feature of the GoMac utility
	-------------------------------------------------
	
	To enable the Auto Hide feature of the GoMac utility, use the following steps:
	
	1. Click the Apple menu, point to Control Panels, and then click GoMac.
	
	2. On the Program Bar tab, click the Auto Hide check box to select it.
	
	3. Close the GoMac window.
	
	MORE INFORMATION
	================
	
	The GoMac utility takes up the bottom portion of the screen, and emulates the
	Windows 95 Start menu. When Close Combat starts, it attempts to occupy the
	entire display area. If the Auto Hide feature of GoMac is not enabled, the GoMac
	taskbar prevents Close Combat from occupying the entire display area, causing
	the screen size error message to appear.
	
	Additional query words: 1.00 2.00 abtf abridgetoofar closecombat closecombat2 cc2 ccii
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbtlc kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbGamesSearch kbCloseCombatSearch kbCloseCombatMac kbCloseCombat2
	Version           : MACINTOSH:1.0; WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
