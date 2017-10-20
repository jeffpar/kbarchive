---
layout: page
title: "Q102585: How to Play Waveform (.WAV) Files in FoxPro for Windows"
permalink: /kb/102/Q102585/
---

## Q102585: How to Play Waveform (.WAV) Files in FoxPro for Windows

{% raw %}

	Article: Q102585
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 3.00
	Operating System(s): 
	Keyword(s): kbcode kbmm
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code example below shows how to play waveform (.WAV) files from within
	FoxPro for Windows. This code can be placed in several different snippets
	including SETUP, VALID, WHEN, and MORE.
	
	MORE INFORMATION
	================
	
	The example below uses the FoxTools library to call a function in MMSYSTEM.DLL.
	This dynamic-link library (DLL) is shipped with Windows 3.1 and is located in
	the Windows SYSTEM subdirectory (usually C:\WINDOWS\SYSTEM).
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL"
	     MREGISTER=REGFN("SndPlaySound","CI","I","mmsystem")
	     MWAVE="Chimes.wav"
	     MFLAG=1
	     MCALL=CALLFN(MREGISTER,MWAVE,MFLAG)
	
	The sndPlaySound() function plays a waveform sound specified by a filename or by
	an entry in the [Sounds] section of the WIN.INI file. If the sound can't be
	found, it plays the default sound specified by the SystemDefault entry in the
	[Sounds] section of the WIN.INI file. If there is a now SystemDefault entry or
	if the default sound can't be found, the function makes no sound and returns
	FALSE.
	
	MWAVE specifies the name of the sound to play. The function searches the [Sounds]
	section of the WIN.INI file for an entry with this name and plays the associated
	waveform file. If no entry by this name exists, it assumes the name is the name
	of a waveform file. If this parameter is NULL, any currently playing sound is
	stopped. (For example, MWAVE="SystemStart" will play the waveform file
	associated with Windows starting, and MWAVE=0 will stop any currently playing
	sound.)
	
	MFLAG specifies options for playing the sound using one or more of the following
	flags:
	
	  0 - The sound is played synchronously and the function does not
	      return until the sound ends (all programs stop processing until
	      the sound is done playing).
	  1 - The sound is played asynchronously and the function returns
	      immediately after beginning the sound. To terminate an
	      asynchronously played sound, call the sndPlaySound() function
	      with MWAVE set to NULL. (The program will continue operation
	      with the sound playing at the same time.)
	  2 - If the sound can't be found, the function returns silently
	      without playing the default sound.
	  9 - The sound will continue to play repeatedly until sndPlaySound()
	      is called again with MWAVE set to NULL.
	 16 - If a sound is currently playing, the function will immediately
	      return FALSE without playing the requested sound.
	
	NOTE: To use more than one option, add the numbers together. [For example, use 11
	to play the sound repeatedly; if the sound cannot be found, sndPlaySound() will
	not play the default sound.]
	
	The sound must fit in available physical memory and be playable by an installed
	waveform audio device driver. The directories searched for sound files are, in
	order: the current directory; the Windows program directory; the Windows SYSTEM
	subdirectory; the directories listed in the PATH environment variable in the
	AUTOEXEC.BAT file; the list of directories mapped in a network.
	
	REFERENCES
	==========
	
	Microsoft Windows with Multimedia "Programmer's Reference," version 1.0
	
	Additional query words: kbsound VFoxWin FoxWin 2.50 wave form WAV wave
	
	======================================================================
	Keywords          : kbcode kbmm 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : 2.50 2.50a 3.00
	
	=============================================================================
	

{% endraw %}
