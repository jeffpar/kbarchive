---
layout: page
title: "Q323570: MSN Explorer remains in High Contrast after changing the Appeara"
permalink: /kb/323/Q323570/
---

## Q323570: MSN Explorer remains in High Contrast after changing the Appeara

	Article: Q323570
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	- The Microsoft Network Version 7.0 
	- the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MSN Explorer remains in High Contrast after changing your Appearance Scheme to
	the XP Theme or a non-High Contrast scheme through Accessibility Options or
	Display under the Control Panel.
	
	CAUSE
	=====
	
	Windows XP did not reset a setting stored in the registry that is checked by MSN
	Explorer to know if a High Contrast scheme is being used, and thus loads a High
	Contrast version of MSN Explorer.
	
	RESOLUTION
	==========
	
	Close MSN Explorer completely. Make sure the Notification Area (system tray)
	contains no MSN Explorer or MSN Messenger icon.
	
	1. Click Start, and then choose Control Panel.
	
	2. Double-click Display (if you do not see the Display icon, on the left pane,
	  switch to Classic View).
	
	3. Click the Appearance tab.
	
	4. From the Windows and Buttons: drop-down menu, choose Windows Classic Style.
	
	5. From the Color scheme: drop-down menu, choose Windows Standard.
	
	6. Click Apply.
	
	7. From the Windows and Buttons: drop-down menu, choose Windows XP Style.
	
	8. Click Apply.
	
	9. Close the Control Panel.
	
	10. Restart MSN Explorer.
	
	If MSN Explorer is still in the High Contrast scheme, then it was not closed
	completely before initiating the above instructions. Make sure MSN Explorer is
	completely closed, and then repeat the resolution procedure described above.
	
	Additional query words: MSN Explorer high contrast appearance scheme XP theme
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbOSWinXP kbMSNSearch kbMSN610 kbOSWinXPSearch kbMSN700
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
