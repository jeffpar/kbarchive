---
layout: page
title: "Q314140: Flight Simulator 2002: Performance Is Slow and Choppy"
permalink: /kb/314/Q314140/
---

## Q314140: Flight Simulator 2002: Performance Is Slow and Choppy

{% raw %}

	Article: Q314140
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Flight Simulator 2002, you may experience poor video
	performance. The display may not be updated smoothly and game play may be
	"choppy."
	
	CAUSE
	=====
	
	This issue can occur when your sound card has incompatible or outdated drivers.
	
	RESOLUTION
	==========
	
	To troubleshoot this behavior, use the following methods in the order in which
	they are presented.
	
	Method 1: Update Sound Card Drivers
	-----------------------------------
	
	Obtain and install the latest drivers for your sound card. For information about
	how to contact computer hardware manufacturers, click the appropriate article
	number in the following list to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If this does not resolve the issue, proceed to the following method.
	
	Method 2: Reduce Sound Card Hardware Acceleration
	-------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click "Sounds and Multimedia".
	
	3. Click the Audio tab, and then click Advanced under Sound Playback.
	
	4. Click the Performance tab.
	
	5. Drag the "Hardware acceleration" slider to the left until "Basic
	  acceleration" is displayed under "Hardware acceleration".
	
	6. Click Apply, click OK, and then click OK again.
	
	If this does not resolve the issue, proceed to the following method.
	
	Method 3: Disable the Sound Card
	--------------------------------
	
	To troubleshoot this issue further, disable the sound card, and then attempt to
	play Flight Simulator 2002. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click "System", and then click the Device Manager tab.
	
	3. In the "View devices by type" list, expand "Sound, video and game
	  controllers".
	
	4. Click your sound controller, and then click Properties.
	
	5. Under "Device usage", click to select the "Disable in this hardware profile"
	  check box, and then click OK.
	
	6. Click Yes when you are prompted to restart the computer.
	
	7. Attempt to play Flight Simulator 2002.
	
	If video performance is improved during game play, you may need to upgrade your
	sound card.
	
	MORE INFORMATION
	================
	
	To identify the manufacturer and model of your sound card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you have a Windows 95- or Windows 98-based computer, click the Device
	  Manager tab.
	
	  If you are using a Windows 2000-based computer, click the Hardware tab, and
	  then click Device Manager.
	
	4. click to expand the "Sound, Video and Game Controllers adapters" folder.
	
	5. Under the "Sound, Video and game controllers" folder, note the manufacturer
	  and model of your sound card, and then click OK.
	
	6. Close all open windows.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
