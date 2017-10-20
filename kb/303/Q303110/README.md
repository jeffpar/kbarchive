---
layout: page
title: "Q303110: Game Error: &quot;Fatal Exception OE&quot; Err Msg Displayed"
permalink: /kb/303/Q303110/
---

## Q303110: Game Error: &quot;Fatal Exception OE&quot; Err Msg Displayed

{% raw %}

	Article: Q303110
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	WARNING:This information is preliminary and has not been confirmed or tested by Microsoft. Use only with discretion.
	
	SYMPTOMS
	========
	
	When you play one of the products listed above, you may experience one or more
	of the following behaviors:
	
	- The game intermittently stops responding (hangs).
	
	  -or-
	
	- You receive an error message (blue screen) similar to the following:
	
	  A fatal exception 0E has occurred at 0028:<address> in VXD TBCSPUD
	  (01).
	  The current application will be terminated.
	
	CAUSE
	=====
	
	This behavior can occur if the Voyetra Turtle Beach Santa Cruz sound card is
	installed in your computer.
	
	The Santa Cruz sound card drivers may not fully support Direct Sound
	acceleration.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Method 1: Turn Off Direct Sound Acceleration in Control Panel
	-------------------------------------------------------------
	
	To turn off Direct Sound acceleration, follow these steps:
	
	1. Quit all running programs.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. In Control Panel, double-click "Santa Cruz Control Panel".
	
	4. On the Other tab, click to clear the "Enable Direct Sound Acceleration" check
	  box.
	
	5. Quit the "Santa Cruz Control Panel" dialog box.
	
	6. Start Combat Flight Simulator 2.
	
	Method 2: Edit the Sound Entries in the Cfs2.cfg File
	-----------------------------------------------------
	
	For additional information about editing sound in the Cfs2.cfg file, and for
	detailed troubleshooting steps, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q285213 Combat Flight Simulator 2: Sound or Frame Rate Issues
	
	MORE INFORMATION
	================
	
	For additional information about the Santa Cruz sound card, browse to the
	following Voyetra Turtle Beach Web site:
	
	  http://www.voyetra-turtle-beach.com/site/sales_support/sales_support.asp
	
	For additional information about troubleshooting sound-related issues, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q263047 Games: How to Troubleshoot Sound Related Issues
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
