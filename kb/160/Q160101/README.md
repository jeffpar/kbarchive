---
layout: page
title: "Q160101: NBA Full Court Press: Invalid Page Fault in Kernel32.dll"
permalink: /kb/160/Q160101/
---

## Q160101: NBA Full Court Press: Invalid Page Fault in Kernel32.dll

	Article: Q160101
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsound kbimu
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting NBA Full Court Press, you may receive the following error if a
	conflict with the sound or video card exists:
	
	  Invalid Page Fault in Kernel32.dll at <memory address>
	
	RESOLUTION
	==========
	
	Possible resolutions to this error are to get updated drivers for the sound card
	and/or video card. Also try reinstalling Windows over the top of itself and
	installing the latest version of DirectX.
	
	One resolution Microsoft has found is to disable the sound card driver.
	
	NOTE: After disabling the sound card you will no longer have sounds in Windows
	and you will receive the error message: "Cannot initialize sound system" when
	launching NBA Full Court Press. However, you will be able to play the game.
	
	FURTHER TROUBLESHOOTING
	-----------------------
	
	If disabling the sound card driver solves the problem, there could possibly be a
	hardware or software conflict. For more information on troubleshooting hardware
	configuration problems, see the following article in the Microsoft Knowledge
	Base:
	
	  Q133240 Troubleshooting Device Conflicts with Device Manager
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NBA Full Court Press version
	1.0.
	
	MORE INFORMATION
	================
	
	NOTE: Most DirectX related problems have been resolved in the latest version of
	DirectX. Download the latest version of DirectX or, if you own a game that
	installs a later version of DirectX, install DirectX from the newer game's
	disc.
	
	The latest version of DirectX is available at the following Microsoft Web site:
	
	  http://www.microsoft.com/directx
	
	For more information about how to obtain the latest version of DirectX, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Additional query words: 1.00 direct x ts troubleshoot trouble shoot
	
	======================================================================
	Keywords          : kberrmsg kbsound kbimu 
	Technology        : kbGamesSearch kbZNotKeyword kbNBAFullCourtPress
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
