---
layout: page
title: "Q294672: Flight Sims: Does Not Detect Joystick in Windows 2000/XP"
permalink: /kb/294/Q294672/
---

## Q294672: Flight Sims: Does Not Detect Joystick in Windows 2000/XP

{% raw %}

	Article: Q294672
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft Flight Simulator 2000 Professional Edition, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft SideWinder Force Feedback Pro, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft Flight Simulator 2002 Professional Edition, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft Flight Simulator 2002, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Sidewinder Force Feedback Pro joystick to play any of
	the games and versions listed in the "applies to" section of this article, you
	may experience one or more of the following behaviors:
	
	- The joystick may not work at all in games listed above, but it is recognized
	  in the Game Controller/Game Options window.
	
	- The Enable check box in games listed above is selected, but it is unavailable
	  (dimmed).
	
	- The joystick may work in Combat Flight Simulator: WWII Pacific Theater, but
	  you feel no forces through it in any of the other games listed.
	
	- You may not feel force feedback effects during flight.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following sound cards are installed on
	your computer:
	
	   - Turtle Beach Santa Cruz
	
	- AC'97-based onboard sound cards made by the following companies:
	
	  Avance
	  Intel
	  SoundMax
	  VIA
	
	
	These cards are not compatible with the SideWinder Force Feedback Pro joystick
	when installed on a Microsoft Windows 2000-based computer.
	
	MORE INFORMATION
	================
	
	For more information about the Turtle Beach sound card, please visit the
	following Turtle Beach Web site:
	
	  http://www.voyetra-turtle-beach.com/site/products/santacru/requirements.asp
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	To identify the manufacturer and model of your sound card:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Hardware tab, and then click Device Manager.
	
	4. Click the plus sign (+) next to "Sound, video and game controllers" to expand
	  the branch.
	
	5. Under the "Sound, video and game controllers" branch, note the manufacturer
	  and model of sound card.
	
	6. Close all open windows.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
