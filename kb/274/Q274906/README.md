---
layout: page
title: "Q274906: CFS2 Err Msg: Rundll32 Has Caused an Error in IVIVIDEO.AX"
permalink: /kb/274/Q274906/
---

## Q274906: CFS2 Err Msg: Rundll32 Has Caused an Error in IVIVIDEO.AX

	Article: Q274906
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Combat Flight Simulator 2, you may receive the
	following error message:
	
	  Rundll32 has caused an error in IVIVIDEO.AX.
	
	CAUSE
	=====
	
	This behavior can occur if the WinDVD media player is installed on your
	computer.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	- Rename the file IVIVIDEO.ax to IVIVIDEO.old.
	
	  -or-
	
	- Uninstall the WinDVD media player. For information about how to do this,
	  please refer to the documentation for the WinDVD media player.
	
	  -or-
	
	- Go to http://www.digital-digest.com/dvd/downloads/dvdgenie.html and use it to
	  unregister the ivivideo.ax filter.
	
	MORE INFORMATION
	================
	
	If you want to play DVD movies on your computer, the latest version of Microsoft
	Windows Media Player supports DVD movie playback. Windows Media Player is
	available as a free download from the following Microsoft Web site:
	
	  http://www.microsoft.com/windows/windowsmedia/en/download/default.asp
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame combatfs cfs2
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
