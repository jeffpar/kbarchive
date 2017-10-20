---
layout: page
title: "Q110349: PRB: Color Depth Doesn't Change Display Mode in FoxPro for Mac"
permalink: /kb/110/Q110349/
---

## Q110349: PRB: Color Depth Doesn't Change Display Mode in FoxPro for Mac

{% raw %}

	Article: Q110349
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the color depth displayed on the Macintosh does not alter FoxPro's
	display mode if the color depth is changed after FoxPro has been launched.
	
	RESOLUTION
	==========
	
	If a different color depth is desired, it should be set prior to starting FoxPro
	in order to avoid any anomalous behavior.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Apple menu, choose Control Panels. Double-click the Monitors icon
	  and set the Macintosh for 256 Colors.
	
	2. After closing the Monitors window, start FoxPro.
	
	3. Using the Monitors Control Panel again, change the color setting to Black
	  & White
	
	4. Change back to FoxPro.
	
	The FoxPro splash screen is still being displayed in its color version, rendering
	areas of the image completely black. This behavior also affects users'
	applications that display graphics.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
