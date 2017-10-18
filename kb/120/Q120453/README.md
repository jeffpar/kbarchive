---
layout: page
title: "Q120453: Unable to Capture Audio and Video Simultaneously with VidCap"
permalink: kb/120/Q120453/
---

## Q120453: Unable to Capture Audio and Video Simultaneously with VidCap

	Article: Q120453
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to capture audio and video together with the Microsoft Video for
	Windows VidCap program, you are unable to do so.
	
	NOTE: The Microsoft Video for Windows VidCap program has the ability to capture
	video and audio separately or together for creating .AVI files. You may still be
	able to capture audio and video separately if you are experiencing the above
	problem.
	
	CAUSE
	=====
	
	This problem occurs when you have an incorrect hardware configuration.
	
	The Video for Windows VidCap program uses two separate hardware devices for
	capturing. These devices are the audio sound card and the video capture card. If
	these two hardware items are set to the same IRQ, I/O address, or DMA channel, a
	conflict occurs that prevents both audio and video from being captured. These
	cards may function correctly when used individually, but when both cards are
	used together, a problem occurs.
	
	RESOLUTION
	==========
	
	To avoid these conflicts, determine what hardware settings are available to the
	audio and video cards. Verify that the sound card and the video capture card are
	using settings that do not conflict with one another.
	
	
	Additional query words: 1.00 1.10 vid cap audio-video conflict
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo100 kbVideo110
	Version           : WINDOWS:1.0,1.1
	
	=============================================================================
	
