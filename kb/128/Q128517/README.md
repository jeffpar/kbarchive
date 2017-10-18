---
layout: page
title: "Q128517: MS-DOS-Based Game Plays No Sound or Shuts Down"
permalink: kb/128/Q128517/
---

## Q128517: MS-DOS-Based Game Plays No Sound or Shuts Down

	Article: Q128517
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some MS-DOS-based games require an 8-bit direct memory access (DMA) channel
	setting for the sound card to provide sounds. Games known to require an 8-bit
	DMA channel setting include:
	
	- Renegade: Battle for Jacob's Star
	
	- Where in the World is Carmen Sandiego
	
	MORE INFORMATION
	================
	
	If the sound card in your computer is set for a 16-bit DMA channel (5, 6, or 7),
	use Device Manager to change the card's configuration to use an 8-bit DMA
	channel (0, 1, or 3).
	
	You may also need to run the configuration tool that is included with the sound
	card to change its DMA channel setting to match the setting in Device Manager.
	If no configuration tool is included with the sound card, you may need to change
	jumpers on the card.
	
	Changing the DMA Channel in Device Manager
	------------------------------------------
	
	To change the DMA channel for the sound card in Device Manager, follow these
	steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab, then double-click Sound, Video, And Game
	  Controllers.
	
	4. Double-click the sound card that is installed in your computer.
	
	5. Click the Resources tab.
	
	6. Double-click Direct Memory Access, then change the DMA setting to the setting
	  you want.
	
	7. Click OK. When you are prompted to do so, restart your computer.
	
	Additional query words: pas16 w95use
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
