---
layout: page
title: "Q113431: Lear Engine Sounds Are Choppy with SoundBlaster 16"
permalink: kb/113/Q113431/
---

## Q113431: Lear Engine Sounds Are Choppy with SoundBlaster 16

	Article: Q113431
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The engine sounds for the Lear Jet may cut in and out when you are using
	SoundBlaster 16 or SoundBlaster 16 ASP sound cards. The engine sounds for the
	Cessna will sound correct.
	
	MORE INFORMATION
	================
	
	This problem may occur for one of the following three reasons:
	
	1. PROBLEM: The High DMA channel for the sound card is set to a 16 bit channel.
	
	  RESOLUTION: The SoundBlaster 16 and SoundBlaster 16 ASP use a High DMA channel
	  as well as a standard DMA channel. Changing the High DMA channel to use the
	  standard DMA channel may correct this problem, as follows:
	
	  a. Open the AUTOEXEC.BAT file using a text editor such as the MS-DOS Editor
	     utility.
	
	  b. Locate the line that says:
	
	  SET BLASTER=
	
	  c. Change the number that appears after the H parameter so that it matches
	     the number after the D parameter.
	
	2. PROBLEM: There is not enough EMS memory configured.
	
	  RESOLUTION: Making the following changes to the Expanded Memory Manager may
	  correct the sound problem:
	
	  a. If you are using EMM386 as your Expanded Memory Manager:
	
	  i. Open the CONFIG.SYS file using a text editor such as the MS-DOS Editor
	  utility.
	
	  ii. Locate the line that says DEVICE=<path>EMM386.EXE, where
	  <path> is the path to your EMM386.EXE file.
	
	  iii. Modify it so that it reads as follows:
	
	  DEVICE=<path>EMM386.EXE 2048 RAM
	
	  b. If you are using a third party Expanded Memory Manager, consult the
	     manufacturer's documentation on how to configure EMS memory (2048K or
	     more.)
	
	3. PROBLEM: Too few EMS handles are configured, or the DMA buffer size is too
	  small.
	
	  RESOLUTION: Making the following changes to the Expanded Memory Manager may
	  correct the sound problem.
	
	  a. If you are using EMM386 as your Expanded Memory Manager:
	
	  i. Open the CONFIG.SYS file using a text editor such as the MS-DOS Editor
	  utility.
	
	  ii. Add the following to the end of the EMM386.EXE line in the CONFIG.SYS
	  file:
	
	  H=255 D=64
	
	  b. If you are using a third party Expanded Memory Manager, consult the
	     manufacturer's documentation on the following topics:
	
	      - How to increase EMS file handles (to 255)
	      - How to increase DMA buffer size (to 64)
	
	Additional query words: 5.00 flightsim fltsim dos FS5 stutters on off sb16 sbpro Pro
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
