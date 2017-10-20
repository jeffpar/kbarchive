---
layout: page
title: "Q315614: Games Err Msg: &quot;Signal Out of Range&quot; or &quot;Out of scan range&quot;"
permalink: /kb/315/Q315614/
---

## Q315614: Games Err Msg: &quot;Signal Out of Range&quot; or &quot;Out of scan range&quot;

{% raw %}

	Article: Q315614
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a game, you may receive an error message similar to either of the
	following:
	
	  Signal out of Range.
	
	  -or-
	
	  Out Of Scan Range
	
	CAUSE
	=====
	
	This behavior can occur if the signal from the video adapter exceeds the scan
	range of the monitor. The video adapter setting for updating the screen (the
	refresh rate) is incompatible with the monitor.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow the steps below in the order in which they are
	given.
	
	Reduce Display Settings
	-----------------------
	
	To reduce your display settings, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab, and then write down the settings for Colors and
	  "Screen area".
	
	4. In the Colors or Color Palette box, click "High Color (16 bit)".
	
	5. Move the "Screen area" or "Desktop area" slider to "800 by 600 pixels", and
	  then click OK.
	
	6. If you are prompted to restart the computer, click Yes.
	
	Test the game again. If the issue is not resolved, continue with the next
	section.
	
	Change the Refresh Rate for Your Video Adapter
	----------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Advanced.
	
	4. On the Adapter tab, click Adapter default under "Refresh rate", and then
	  click Ok.
	
	  NOTE: If there is not an Adapter tab, you cannot change the refresh rate for
	  your video adapter.
	
	5. If you are prompted to test the setting, click OK.
	
	Change the Refresh Rate Setting in DirectX
	------------------------------------------
	
	To change the default refresh rate setting in Dxdiag:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag.exe" (without the quotation marks), and then
	  click OK.
	
	3. On the More Help tab, click Override.
	
	4. Click Override Value, type a refresh rate setting in the Override Value box
	  that is supported by both your video adapter and your monitor, and then click
	  OK. Try one value at a time.
	
	  NOTE: Typical values are 60, 62, 72, and 75.
	
	5. Click Exit.
	
	  NOTE: If you change the video refresh rate to a setting that is not supported
	  by your monitor, you can damage your monitor. Check the documentation for
	  your monitor or contact the manufacturer of your monitor to determine
	  compatible refresh rates before you change the default refresh rate setting
	  for your video adapter.
	
	  To determine a refresh rate setting that is supported by both your video
	  adapter and your monitor:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. On the Settings tab, click "Advanced" or "Advanced Properties".
	
	  d. On the Monitor tab, make sure your monitor is selected. If an incorrect
	     monitor is selected, or if a standard or unknown monitor is selected,
	     click Change, click the manufacturer and model of your monitor, and then
	     click OK.
	
	  e. On the Adapter tab, click the Refresh Rate box.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbZNotKeyword kbGolf99 kbGolfSearch kbMidtownMadSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbMidtownMadness2 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
