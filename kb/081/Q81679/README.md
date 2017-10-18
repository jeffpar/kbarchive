---
layout: page
title: "Q81679: Sound Blaster JUKEBOX.EXE Not Compatible with Windows 3.1"
permalink: kb/081/Q81679/
---

## Q81679: Sound Blaster JUKEBOX.EXE Not Compatible with Windows 3.1

	Article: Q81679
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set up the JukeBox program (JUKEBOX.EXE) that comes with the Sound
	Blaster I card, the following error message may be displayed:
	
	  The Sound Blaster cannot be installed. Please check your WIN.INI settings.
	
	CAUSE
	=====
	
	The Sound Blaster I JukeBox program is not compatible with Microsoft Windows
	version 3.1.
	
	This version of JukeBox does not use the Multimedia Extensions. It uses a custom
	DLL file called SNDBLST.DLL and assumes that it has complete control over the Ad
	Lib synthesizer. This causes problems with the Microsoft Multimedia Ad Lib
	driver.
	
	RESOLUTION
	==========
	
	There is another version of the JukeBox application called MMJBOX.EXE that uses
	the Microsoft Multimedia Extensions MCI sequencer. To obtain a copy of
	MMJBOX.EXE, please contact Creative Labs.
	
	MORE INFORMATION
	================
	
	The Sound Blaster products included here are manufactured by Creative Labs, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
