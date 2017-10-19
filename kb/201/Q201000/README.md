---
layout: page
title: "Q201000: Encarta 98 Err Msg: Fatal Exception 0E"
permalink: /kb/201/Q201000/
---

## Q201000: Encarta 98 Err Msg: Fatal Exception 0E

	Article: Q201000
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbsound kbimu
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Encarta 98 Encyclopedia for Windows, you may receive
	the following error message:
	
	  Fatal Exception 0E
	
	CAUSE
	=====
	
	This behavior can occur if your sound card is not configured to use single-mode
	DMA.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your sound card to use one Direct Memory Access
	(DMA) channel. To do this, use one of the following methods:
	
	Windows 3.x Sound Driver
	------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Advanced tab, click the PLUS SIGN (+) next to Audio Devices to expand
	  the branch.
	
	4. In the Audio Devices branch, click your sound card, and then click
	  Properties.
	
	5. Click Settings.
	
	6. Click to select the Use Single-Mode DMA check box. If this check box is not
	  available, proceed to the "Windows 95/98 Sound Driver" method.
	
	7. Click OK until you return to Control Panel.
	
	8. If you are prompted to restart the computer, click Yes.
	
	Windows 95/98 Sound Driver
	--------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click the PLUS SIGN (+) next to Sound, Video And
	  Game Controllers to expand the branch.
	
	4. In the Sound, Video And Game Controllers branch, click your sound card, and
	  then click Properties.
	
	5. On the Resources tab, click to clear the Use Automatic Settings check box.
	
	6. In the Settings Based On box, click a Basic Configuration setting that uses
	  only one DMA channel. If there are no resource conflicts listed in the
	  Conflict Information box, click OK, and then click Yes.
	
	7. If you are prompted to restart the computer, click Yes.
	
	Additional query words: 98 enc98 multimedia multi-media mmtitles lock hang blue screen
	
	======================================================================
	Keywords          : kberrmsg kbsound kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
