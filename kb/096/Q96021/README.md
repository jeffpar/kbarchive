---
layout: page
title: "Q96021: VidCap: Captures Only Blackness with Video Blaster"
permalink: /kb/096/Q96021/
---

## Q96021: VidCap: Captures Only Blackness with Video Blaster

{% raw %}

	Article: Q96021
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to capture live video sequences with the VidCap utility included
	with Microsoft Video for Windows using the Creative Labs Video Blaster capture
	board, you may capture a series of black frames. This problem occurs if any of
	the following three scenarios exist:
	
	1. The computer has more than 15 MB of RAM.
	
	2. The driver setting for the base memory address is incorrect.
	
	3. The Video Blaster capture card is not installed properly.
	
	MORE INFORMATION
	================
	
	When you run the VidCap utility, you may find that if you choose Overlay Video
	from the Options menu, the picture displays correctly; however, when you choose
	the Preview Video command, the picture displays as blackness or is fuzzy.
	
	The Video Blaster contains 1 MB of memory. The starting address of this memory is
	located in the range between 1 MB and 15 MB. The base address of this block is
	selected in the Control Panel Drivers option and must be ABOVE all physical
	extended memory.
	
	This means that you can only have a maximum of 15 MB of memory in your system. If
	you already have 16 MB in your system, you have the following options:
	
	1. Physically remove SIMMs.
	
	2. Obtain another video capture card that does not have this limitation.
	
	
	Use the Control Panel Drivers option to add the Video Blaster driver from the
	Microsoft Video for Windows Drivers disk. Use the Setup button to configure the
	base memory address and interrupt. After the installation is complete, your
	SYSTEM.INI file should contain the following entry:
	
	  [Drivers]
	  msvideo=vblaster.drv
	
	If you still have problems after correctly setting the base memory address, run
	the supplied VBTEST.EXE utility to verify the correct operation of the hardware.
	Run all the tests, if any of the tests fail, you may need to call Creative Labs
	technical support.
	
	Note: The Video Overlay command may work even if all tests do not pass; however,
	the Capture command will not.
	
	For technical support of Creative Labs products, call (408) 428-6622.
	
	Additional query words: 1.00 distorted distortion dark blackness darkness videoblaster image black
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
