---
layout: page
title: "Q89874: MIDIMAP.CFG Is Replaced During Windows Sound System Setup"
permalink: kb/089/Q89874/
---

## Q89874: MIDIMAP.CFG Is Replaced During Windows Sound System Setup

	Article: Q89874
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Windows Sound System installation, if the file MIDIMAP.CFG is located in
	the Windows SYSTEM subdirectory, it is replaced with the Windows Sound System
	MIDIMAP.CFG file. Windows Sound System Setup saves a copy of the previous
	MIDIMAP.CFG under the filename MIDIMAP.WSS.
	
	MORE INFORMATION
	================
	
	You can replace the Windows Sound System MIDIMAP.CFG file with the original by
	renaming the files to their original names. To do this, use the following MS-DOS
	commands, and press ENTER after each line:
	
	  rename midimap.cfg midimap.old
	  rename midimap.wss midimap.cfg
	
	Because the Windows Sound System does not support multiple sound cards running
	under a single installation of Windows, we do not recommend or support the
	merging of two .CFG files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
