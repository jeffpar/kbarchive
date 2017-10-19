---
layout: page
title: "Q89869: Sound Continues After Exiting Windows with Sound Blaster"
permalink: /kb/089/Q89869/
---

## Q89869: Sound Continues After Exiting Windows with Sound Blaster

	Article: Q89869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If more than one version of the Sound Blaster Pro virtual device driver is
	listed in the SYSTEM.INI file's [386ENH] section, the sound card may continue to
	play the System Exit sound in MS-DOS after you have exited Windows.
	
	MORE INFORMATION
	================
	
	Creative Labs Sound Blaster Pro is an audio card capable of playing both wave
	and MIDI files. In the more recent release of the Soundblaster Pro, the filename
	for the virtual device driver has been changed. When the old line in the
	SYSTEM.INI file for the virtual device driver is not removed during the
	installation of the new driver, two or more virtual device drivers are loaded.
	
	This causes the sound card to continue to play the System Exit sound even after
	Windows is no longer running. It may be necessary to restart the computer to
	stop the sound. Check the SYSTEM.INI file's [386ENH] section for the following
	entries:
	
	     DEVICE=VSBD.386
	     DEVICE=VADLIBD.386
	     DEVICE=VSBPD.386
	
	RESOLUTION
	==========
	
	If one or both of the first two device lines are present, remove the first
	lines, leaving only:
	
	       DEVICE=VSBPD.386
	
	Sound Blaster Pro is manufactured by Creative Labs, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty soundblaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
