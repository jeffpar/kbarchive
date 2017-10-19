---
layout: page
title: "Q314505: Games: Err Msg: &quot;WINERR_One or More Arguments Are Invalid...&quot;"
permalink: /kb/314/Q314505/
---

## Q314505: Games: Err Msg: &quot;WINERR_One or More Arguments Are Invalid...&quot;

	Article: Q314505
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechCommander 2.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the games listed at the beginning of this article, you
	receive an error message similar to the following:
	
	  STOP:FAILED (0x80070057 - WINERR_one or more arguments are invalid) Create
	  Sound Buffer ; DSB_CNTRL VOLUME | DSBCAPS_LOCSOFTWARE, (PCM0-bit, 0 channel 0
	
	CAUSE
	=====
	
	This issue occurs when codecs are damaged or missing from your computer. Codecs
	are the programs that are used to decompress multimedia information.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please see your product documentation
	to complete these steps.
	
	Remove Default Codecs
	---------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia, and then click Details.
	
	4. Click to clear the Audio Compression check box and the Video Compression
	  check box, and then click OK.
	
	Reinstall Default Codecs
	------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia, and then click Details.
	
	4. Click to select the Audio Compression check box and the Video Compression
	  check box, and then click OK.
	
	MORE INFORMATION
	================
	
	You can also update your existing codecs and improve your multimedia performance
	by upgrading to a newer version of Windows Media Player. To download the latest
	version of the Windows Media Player from the Microsoft Download Center, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/windows/windowsmedia/download/default.asp
	
	For additional information about Windows Media Player 7.1, see the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows/windowsmedia/software/playerv7.asp
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbMechCommSearch kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
