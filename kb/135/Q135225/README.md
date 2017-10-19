---
layout: page
title: "Q135225: Setting Up Gateway 2000 Aztec Sound Card with Windows 95"
permalink: /kb/135/Q135225/
---

## Q135225: Setting Up Gateway 2000 Aztec Sound Card with Windows 95

	Article: Q135225
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the support software for a Gateway 2000 Aztech sound card, the
	installation program displays a message stating that it is restarting Windows
	95. The installation program then reports that it can be installed only in
	Windows 3.1, and restarts the computer. You may also receive an error message
	concerning the DMA channel used by the sound card.
	
	CAUSE
	=====
	
	The support software for this sound card was designed for Windows 3.1 and fails
	to correctly identify Windows 95.
	
	RESOLUTION
	==========
	
	The drivers for the sound card should be installed correctly, even though you
	received the error message stated above. If you received an error message
	concerning the DMA channel, follow these steps to verify or adjust the DMA
	setting:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the Sound, Video, And Game
	  Controllers branch.
	
	3. Click the Aztech sound card, and then click Properties.
	
	4. On the Resources tab, check the DMA setting. If you think the setting may be
	  incorrect for the sound card, consult the sound card's documentation for the
	  correct setting.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
