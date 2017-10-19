---
layout: page
title: "Q134537: No Sound or Incorrect Sound from Sound Card"
permalink: /kb/134/Q134537/
---

## Q134537: No Sound or Incorrect Sound from Sound Card

	Article: Q134537
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a sound from a sound card in Windows 95, the sound may play
	incorrectly or not at all. The problem usually occurs when you play a sound at
	the same time you print something.
	
	CAUSE
	=====
	
	Both the sound card and the printer's ECP port are configured to IRQ 7.
	
	RESOLUTION
	==========
	
	By using Device Manager, move either the ECP port or the sound card to a new
	IRQ. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel on
	  the menu that appears.
	
	2. Double-click the System Icon.
	
	3. In the System Properties dialog box, click the Device Manager tab, and then
	  select either the Sound card icon or the Ports icon.
	
	4. In the Properties dialog box for the device you selected, click the Resources
	  tab, and then make sure the Use Automatic Settings box is not checked.
	
	5. Adjust the IRQ for the device to a new value that does not conflict with any
	  other device.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
