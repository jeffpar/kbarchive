---
layout: page
title: "Q262930: Allegiance: Sounds Associated with Menus Are Played Repeatedly"
permalink: /kb/262/Q262930/
---

## Q262930: Allegiance: Sounds Associated with Menus Are Played Repeatedly

{% raw %}

	Article: Q262930
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbsound kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click any of the menus in Microsoft Allegiance, the sound that is
	associated with the menu may be played repeatedly until you quit the game.
	
	CAUSE
	=====
	
	This behavior can occur if a Sound Blaster AWE 64 sound card is installed in
	your computer, and one of the following conditions is true:
	
	- The preferred playback device is set to Game Compatible Device.
	
	- The audio compression codecs are not installed properly on your computer or
	  are the incorrect version.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Set the Preferred Playback Device to AWE 64 Wave Out
	----------------------------------------------------
	
	To set the preferred playback device to AWE 64 Wave Out:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Audio tab, under Playback, click AWE 64 Wave Out in the "Preferred
	  device" box.
	
	4. Click to select the "Use only preferred devices" check box.
	
	5. Click Apply, and then click OK.
	
	6. Close Control Panel, and then restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Uninstall and Reinstall the Audio Compression Codecs
	----------------------------------------------------
	
	To uninstall and reinstall the audio compression codecs:
	
	1. Quit all programs that are running on your computer.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Windows Setup tab.
	
	5. In the Components box, click to clear the Multimedia check box.
	
	6. Click Apply.
	
	7. In the Components box, click to select the Multimedia check box.
	
	8. Click Apply. If you are prompted to insert the Microsoft Windows CD-ROM, do
	  so.
	
	9. Close Control Panel, and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Allegiance, version
	1.0.
	
	Additional query words: 1.00 msgame igz msngz stutter repeating continue
	
	======================================================================
	Keywords          : kbenv kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
