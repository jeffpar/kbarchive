---
layout: page
title: "Q221825: Return or Revenge of Arcade: Game Hangs or Quits Unexpectedly"
permalink: /kb/221/Q221825/
---

## Q221825: Return or Revenge of Arcade: Game Hangs or Quits Unexpectedly

	Article: Q221825
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame KbDirectX
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Return of Arcade for Windows, version 1.0 
	- Microsoft Revenge of Arcade, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a game in Microsoft Return of Arcade or Microsoft Revenge of
	Arcade, you may experience either of the following symptoms:
	
	- The game may stop responding (hang).
	
	- The game may quit unexpectedly and you may be returned to the Windows
	  desktop.
	
	CAUSE
	=====
	
	This behavior can occur if your computer is unable to initialize DirectSound.
	
	RESOLUTION
	==========
	
	To work around this issue, configure the Game Compatible Device to be the
	preferred audio playback device. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Audio tab.
	
	4. Under Playback, click Game Compatible Device in the Preferred Device box.
	
	  NOTE: The Game Compatible Device may not be listed in the Preferred Device
	  box.
	
	5. Click OK, and then close Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You may also be able to work around this issue on a Microsoft Windows 98-based
	computer by disabling audio hardware acceleration. To do this, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Audio tab.
	
	4. Under Playback, click Advanced Properties.
	
	5. On the Performance tab, move the Hardware Acceleration slider all the way to
	  the left (the None position).
	
	6. Click OK, click OK again, and then close Control Panel.
	
	
	Additional query words: 1.00 msgame roa rvoa
	
	======================================================================
	Keywords          : kbenv kbimu msgame KbDirectX 
	Technology        : kbGamesSearch kbArcadeRet kbArcadeRev kbArcadeSearch kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
