---
layout: page
title: "Q103281: Windows Sound System Err Msg: Could Not Play File"
permalink: kb/103/Q103281/
---

## Q103281: Windows Sound System Err Msg: Could Not Play File

	Article: Q103281
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play a musical instrument digital interface (MIDI) (.MID) or
	waveform (.WAV) file using the Sound Finder, you may receive the error message
	
	  Could not play file: <filename>
	
	where <filename> is the name of your file.
	
	The message may continue with:
	
	  Not enough memory available for this task.
	  Quit one or more applications to increase available memory, and then try
	  again.
	
	RESOLUTION
	==========
	
	If you are trying to play an .MID file, the cause may be a missing or corrupted
	TIMER driver. Run Control Panel and open the Drivers option. If TIMER does not
	exist, choose Add and install the TIMER; otherwise, remove it and reinstall the
	driver from the Windows disks.
	
	If you are trying to play a .WAV file and receive the second part of the message,
	the MMTASK.TSK file found in the Windows SYSTEM subdirectory may be missing or
	corrupted.
	
	Additional query words: 1.00 1.00a 2.00 errors
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
