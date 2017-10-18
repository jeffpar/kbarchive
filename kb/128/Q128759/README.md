---
layout: page
title: "Q128759: Garbled Sounds in Windows Sound System Using IMAADPCM.ACM"
permalink: kb/128/Q128759/
---

## Q128759: Garbled Sounds in Windows Sound System Using IMAADPCM.ACM

	Article: Q128759
	Product(s): Miscellaneous Windows Products
	Version(s): 2.00a
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing a .WAV file created with the IMAADPCM.ACM compression
	manager included with Windows Sound System version 2.0a, you may hear static or
	garbled sound.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a different version of the IMAADPCM.ACM
	file to play the .WAV file than the one that was in use when the .WAV file was
	created.
	
	RESOLUTION
	==========
	
	To correct this behavior, replace the IMAADPCM.ACM file with the one included
	with Windows Sound System 2.0a. The correct file has the following size and
	date:
	
	  IMAADPCM.ACM 10,320 12-15-93 2:00a
	
	MORE INFORMATION
	================
	
	A later version of the IMAADPCM.ACM file is installed when you install Microsoft
	Video for Windows Run-Time Edition version 1.1e. Note also that .WAV files
	created using the newer version of the file may not play correctly using the
	older version.
	
	
	Additional query words: 2.00a wave
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : 2.00a
	
	=============================================================================
	
