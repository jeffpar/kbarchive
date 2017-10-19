---
layout: page
title: "Q120713: Err Msg w/IntelliPoint/Type &amp; ProofReader: Sound Input Is Busy"
permalink: /kb/120/Q120713/
---

## Q120713: Err Msg w/IntelliPoint/Type &amp; ProofReader: Sound Input Is Busy

	Article: Q120713
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0; WINDOWS:1.0
	Operating System(s): 
	Keyword(s): mnk
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	- Microsoft Natural Keyboard with IntelliType software, version 1.0 
	- Microsoft IntelliPoint software, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Microsoft IntelliType or IntelliPoint software with the
	ProofReader utility that ships with the Microsoft Windows Sound System, the
	following error is displayed:
	
	  The Sound Input Is Busy
	
	CAUSE
	=====
	
	This problem occurs when two input devices attempt to use the sound device at
	the same time. The above error can be generated in the Windows Sound System
	ProofReader under the following conditions:
	
	- The IntelliType software is installed and you have enabled sounds for
	  keyboard activities, and you have chosen the On Entry command in the
	  ProofReader.
	
	  -or-
	
	- The IntelliPoint software is installed and you have enabled sounds for mouse
	  actions with the Microsoft Home or Standard Mouse, and you have chosen the
	  Selected Range command in the ProofReader.
	
	WORKAROUND
	==========
	
	- If you are using IntelliType, open the Microsoft Natural Keyboard IntelliType
	  Manager. Click the Keyboard Options tab and disable Sounds by selecting
	  Sounds Off.
	
	  -or-
	
	- If you are using IntelliPoint, open IntelliPoint Tools & Controls and
	  disable the sound by clicking the Special Effects tab and selecting
	  Unassigned under Scheme. As an alternative, you can remove the mouse action
	  sound (.WAV file) that is causing the problem by selecting that particular
	  mouse action and changing its action sound to None. Both of these techniques
	  allow the Windows Sound System ProofReader to proofread selected ranges
	  correctly.
	
	MORE INFORMATION
	================
	
	If you are using either IntelliType or IntelliPoint, the software generates a
	warning when you first activate or change the sounds. These messages are listed
	below.
	
	Microsoft IntelliPoint Tools & Controls
	---------------------------------------
	
	IntelliPoint sound effects may conflict with other multimedia applications.
	Microsoft recommends that you disable IntelliPoint sound while running
	audio-enabled applications
	
	Microsoft IntelliType
	---------------------
	
	IntelliType keyboard sounds may conflict with other multimedia applications.
	Microsoft recommends that you disable IntelliType keyboard sounds while running
	audio-enabled applications
	
	For more information about these issues, refer to the README.TXT file that ships
	with the IntelliType software.
	
	Additional query words: 2.00 intellityp intellipont intelitype intelipoint intlityp intlipoint mous
	
	======================================================================
	Keywords          : mnk 
	Technology        : kbMSHardwareSearch kbIntellipointSearch kbWinSoundSysSearch kbWinSoundSys200 kbIntelliPoint100 kbNKeyboardIntelliType100
	Version           : :2.0; WINDOWS:1.0
	
	=============================================================================
	
