---
layout: page
title: "Q86277: Testing the MIDI Mapper to Determine If It's Being Bypassed"
permalink: /kb/086/Q86277/
---

## Q86277: Testing the MIDI Mapper to Determine If It's Being Bypassed

	Article: Q86277
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of the MIDI Mapper is to provide a way to customize your MIDI setups
	to meet the specific needs of your MIDI systems. Some software products have the
	ability to bypass the MIDI Mapper. These software packages allow you to bypass
	the MIDI Mapper by changing a software setting.
	
	MORE INFORMATION
	================
	
	Cakewalk, for example, can be configured to use the MIDI Mapper or bypass it. To
	configure Cakewalk to use the MIDI Mapper, do the following:
	
	1. Start Cakewalk for Windows.
	
	2. From the Settings menu, choose Midi Devices.
	
	3. Select the MIDI Mapper.
	
	Determining If MIDI Mapper Is Being Bypassed
	--------------------------------------------
	
	To determine if the MIDI Mapper is being bypassed by any application:
	
	1. In the Control Panel window, choose the MIDI Mapper icon.
	
	2. Choose the Setups command button.
	
	3. Choose the Edit button.
	
	4. Clear the Active check box for each of the active ports, except for one
	  channel that the MIDI device is capable of accepting. Most devices will allow
	  for channel 1 at minimum.
	
	5. Choose the OK button to save the changes.
	
	6. Start the Media Player from the Accessories group.
	
	7. Play a file from the Media Player (CANYON.MID for example). The Media Player
	  should play sounds for the one active port only; therefore the sound output
	  should be fairly quiet. If the output is quiet, the MIDI Mapper is
	  functioning correctly.
	
	8. Start a third-party application.
	
	9. Play a file (CANYON.MID for example). If the third-party application plays
	  all channels, just as it did before you disabled all but one channel, the
	  third-party application is bypassing the MIDI Mapper.
	
	For information on configuring your third-party application to use the MIDI
	Mapper, consult your documentation or contact the third party vendor.
	
	KBCategory: kbmm kbsound kb3rdparty
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 1.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWinMultiXSearch kbWin310 kbWin311 kbWinMultiX100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
