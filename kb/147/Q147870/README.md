---
layout: page
title: "Q147870: 3D Movie Maker: Program Hangs When Playing MIDI"
permalink: kb/147/Q147870/
---

## Q147870: 3D Movie Maker: Program Hangs When Playing MIDI

	Article: Q147870
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working in 3D Movie Maker, the program may stop responding (hang)
	with a sound card that is not configured to use an FM Synthesis MIDI driver.
	
	RESOLUTION
	==========
	
	Switch the configuration of the MIDI driver to use the FM Synthesis or OPL2/OPL3
	driver (or equivalent) by following the steps below:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia, then click the MIDI tab.
	
	3. Make sure Single Instrument is selected and it references MIDI for Internal
	  FM Synthesizer (or equivalent).
	
	4. Click OK to exit Multimedia.
	
	5. Run 3D Movie Maker.
	
	The program should run successfully after following these steps.
	
	MORE INFORMATION
	================
	
	Some sound cards may attempt to use a MIDI driver to play MIDI in a manner that
	is incompatible with the way that 3D Movie Maker plays MIDI.
	
	
	For information on a related issue, please see the following article in the
	Microsoft Knowledge Base
	
	  Q143232 3D Movie Maker: MIDI Does Not Work Properly with SB AWE 32
	
	
	Additional query words: kids mczee kbmm director animated movies melanie 3-d three dimensional 3d 3dmm freeze hangs 1.00
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : WINDOWS:1.0
	
	=============================================================================
	
