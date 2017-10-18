---
layout: page
title: "Q77697: PRB: sndPlaySound with SND_MEMORY and SND_ASYNC Flags Hangs"
permalink: kb/077/Q77697/
---

## Q77697: PRB: sndPlaySound with SND_MEMORY and SND_ASYNC Flags Hangs

	Article: Q77697
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application uses the sndPlaySound() API to play a wave file with both
	the SND_ASYNC and SND_MEMORY flags set, Windows hangs.
	
	CAUSE
	=====
	
	The memory used to store the wave becomes invalid before the wave file is
	finished playing.
	
	RESOLUTION
	==========
	
	Ensure that the memory used to store the wave remains valid until the wave is
	complete.
	
	MORE INFORMATION
	================
	
	As it plays the sound, Windows must be able to access the memory used to store
	the wave file. If this memory is deleted during playback, Windows will hang
	because the memory is no longer valid. The memory can be deleted if an
	application starts to play a sound and exits. All memory allocated by an
	application is freed upon exit.
	
	To terminate the playback of a asynchronous wave initiated by sndPlaySound(),
	call sndPlaySound() with the lpszSoundName parameter set to NULL. This should be
	done only when an application is playing an asynchronous sound from memory and
	it is necessary to stop playing the sound. For example, this should be done if
	the application is playing a sound from memory and the user closes the
	application.
	
	Note: The memory allocated for the wave file must be shared. All shared memory
	allocated in a DLL (dynamic-link library) is owned by the DLL. Other memory
	allocated in a DLL is owned by the application that calls the DLL. When the DLL
	is freed, all shared memory allocated by the DLL is freed. Therefore, if the DLL
	that allocates the memory to hold the wave is freed before sndPlaySound is
	complete, Windows will hang.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
