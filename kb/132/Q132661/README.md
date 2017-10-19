---
layout: page
title: "Q132661: Some Multimedia Titles Do Not Work on HP Vectra Communication"
permalink: /kb/132/Q132661/
---

## Q132661: Some Multimedia Titles Do Not Work on HP Vectra Communication

	Article: Q132661
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
	
	You may not be able to play the audio tracks on mixed-mode compact discs on a
	Hewlett-Packard (HP) Vectra Communication computer.
	
	CAUSE
	=====
	
	HP Vectra Communication computers incorporate a DSP-based combination
	sound/modem/fax/CD-ROM controller card that cannot play the audio tracks on a
	mixed-mode compact disc.
	
	Multimedia titles that include audio CD tracks in their sounds do not play
	correctly on these computers. Some games (such as Sound It Out Land by Conexus)
	do not progress beyond the opening screen. Other games may display error
	messages similar to the following:
	
	  MMSYSTEM 262 There is a problem with your media device. Make sure it is
	  working properly or contact the device manufacturer.
	
	RESOLUTION
	==========
	
	You may be able to work around this problem by using the computer's original
	real-mode drivers. Note that doing so will result in slight degradation in
	system performance. To use the real-mode drivers, follow these steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the System icon.
	
	2. On the Device Manager tab, double-click the SCSI controller branch, and then
	  double-click "Adaptec AIC-6x60 ISA Single Chip Controller."
	
	3. Click the Original Configuration (Current) check box to clear it.
	
	4. Click OK.
	
	5. Add the following lines to the Config.sys file:
	
	  device=c:\hp_iobrd\adaptec\aspi2dos.sys
	  device=c:\hp_iobrd\adaptec\aspicd.sys /d:aspicd0
	
	6. Remove the semicolon from the beginning of the Mscdex entry and then save and
	  close the Config.sys file.
	
	7. Add the following line to the Autoexec.bat file:
	
	  c:\windows\command\mscdex.exe /d:aspicd0
	
	  NOTE: This line may require modification to work with your computer.
	
	8. Restart your computer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
