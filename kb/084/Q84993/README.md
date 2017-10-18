---
layout: page
title: "Q84993: How to Enable the MIDI Sequencer Warning"
permalink: kb/084/Q84993/
---

## Q84993: How to Enable the MIDI Sequencer Warning

	Article: Q84993
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enable the MIDI Sequencer warning dialog generated when attempting to play a
	non-General MIDI file, edit the SYSTEM.INI file and remove the following line
	from the [mciseq.drv] section:
	
	     DisableWarning=TRUE
	
	This line is added when the "Don't display this warning in future" check box is
	selected in the non-General MINI warning dialog box.
	
	MORE INFORMATION
	================
	
	The MIDI Sequencer driver supplied with Microsoft Windows operating system
	version 3.1 (MCISEQ.DRV) reads the header of all MIDI files before attempting to
	play them. If the driver does not find the flag indicating that the file is in
	General MIDI format, it generates a warning message reading:
	
	  This file may not play correctly with the default MIDI setup.
	
	  [] Don't display this warning in future.
	
	The MIDI Sequencer warning message indicates that the file has not been flagged
	as General MIDI and may not play properly in Windows 3.1.
	
	If the Don't Disable This Warning In Future check box has been selected, this
	dialog box will not be evoked when non-General MIDI files are read in the
	future.
	
	Additional query words: 3.10 3.11 MWIN MCISEQ
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
