---
layout: page
title: "Q92638: Windows Sound System Specifications"
permalink: kb/092/Q92638/
---

## Q92638: Windows Sound System Specifications

	Article: Q92638
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes hardware and software specifications for Microsoft
	Windows Sound System.
	
	MORE INFORMATION
	================
	
	Windows Sound System is a 16-bit add-in audio card that takes advantage of
	Windows 3.1 audio capabilities. It adds new features to the audio applications
	in Windows 3.1, including limited voice recognition, which allows you to
	substitute voice input for some keyboard input. Windows Sound System uses OLE to
	paste sound objects into OLE-compliant applications. The ProofReader feature in
	Windows Sound System reads aloud the numbers in your Excel or Lotus spreadsheets
	so that you can verify the numbers without the aid of another person.
	
	Minimum Hardware Requirements
	-----------------------------
	
	- An 80386 SX16MHz computer or higher with an enhanced graphics adapter (EGA).
	  (A video graphics array [VGA] adapter is recommended.)
	
	- 640K conventional memory plus 256K extended memory. (2048K extended memory is
	  recommended.)
	
	- A free 8-bit or 16-bit ISA or EISA expansion slot. (A 16-bit slot is
	  recommended for hardware configuration flexibility.)
	
	- Microsoft Windows version 3.1 or later.
	
	Board Specifics
	---------------
	
	Use the following connectors:
	
	  1/8" microphone input (mono)
	  1/8" line in (stereo)
	  1/8" headphones out (stereo)
	  RCA line out (one left, one right)
	
	Use DMA channel 0, 1, or 3 (software selectable).
	
	Use interrupt 7, 9, 10, or 11 (software selectable).
	
	Use the following addresses:
	
	  Synthesis: 388h (Adlib standard address. This address cannot be
	  disabled or changed.)
	
	  Digitized Wave Files: 530h, 604h, E80h, or F40h (jumper selectable).
	
	Software
	--------
	
	Windows Sound System can use software capable of stereo recording and playback of
	digital (waveform) data at sampling rates of 11kHz (radio quality), 22kHz (tape
	quality), and 44kHz (CD quality). The digital waveforms can be recorded and
	played back in mono or stereo and in 8-bit or 16-bit format. With Windows Sound
	System, you can easily mix different formats. For example, you could mix a voice
	sampled with 8 bits at 11kHz with music sampled with 16 bits at 44kHz without
	converting formats.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
