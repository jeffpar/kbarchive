---
layout: page
title: "Q94594: Windows Sound System and Berkeley Systems' Screen Savers"
permalink: /kb/094/Q94594/
---

## Q94594: Windows Sound System and Berkeley Systems' Screen Savers

	Article: Q94594
	Product(s): Miscellaneous Windows Products
	Version(s): 1.00 1.00a, 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using Star Trek: The Screen Saver and After Dark version 2.0 screen savers may
	cause a change in the volume level of waveform (.WAV) files played by the
	Windows Sound System.
	
	MORE INFORMATION
	================
	
	The change in volume is caused by the way that After Dark versin 2.0 and similar
	screen savers control sound output. On the Windows Sound System, adjusting the
	volume for a particular screen saver module not only changes the volume of
	output for that module, it also changes the Windows Sound System's waveform file
	output level for as long as that module is active.
	
	This only occurs if After Dark version 2.0 Sound Setup has been configured to use
	Multimedia Windows Sound as its output device.
	
	
	WORKAROUND
	==========
	
	Set up After Dark version 2.0 to use the computer's internal speaker as its
	output device. For information about how to do this, see the After Dark
	documentation.
	
	-or-
	
	- Set all After Dark screen savers to the same volume level and use Volume
	  Control's Master volume slider bar to adjust the volume level.
	
	-or-
	
	- Upgrade to After Dark for Windows, version 3.0.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. While After Dark is running, run the Windows Sound System Volume Control
	  application. Set the Wave output level (visible only in Expanded View) to the
	  lowest possible level.
	
	2. Activate After Dark. Select the Starry Night module.
	
	3. Lower Starry Night's volume level to the lowest possible level.
	
	4. Arrange After Dark and Volume Control so that they are both visible at the
	  same time.
	
	5. In After Dark, increase Starry Night's volume level one level at a time. As
	  the level increases, the Wave slider bar in Volume Control should also rise,
	  eventually reaching the maximum volume level when Starry Night reaches its
	  maximum volume level.
	
	The Star Trek and After Dark screen savers are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For more information about the Windows Sound System, query on the following word
	in the Microsoft Knowledge Base:
	
	  windows and sound and system
	
	Additional query words: 1.00 1.00a 2.00 1.0 3.10 3.1 afterdark
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	Version           : 1.00 1.00a, 2.00
	
	=============================================================================
	
