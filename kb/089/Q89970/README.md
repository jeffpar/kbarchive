---
layout: page
title: "Q89970: How to Determine Interrupt, I/O, and DMA Channel Conflicts"
permalink: /kb/089/Q89970/
---

## Q89970: How to Determine Interrupt, I/O, and DMA Channel Conflicts

	Article: Q89970
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
	
	This article covers the valid ranges and some procedures for determining the
	right I/O address, interrupt, and direct memory access (DMA) channel for the
	Windows Sound System card.
	
	MORE INFORMATION
	================
	
	Choosing the Correct I/O Address
	--------------------------------
	
	The Windows Sound System card occupies two I/O address ranges: one is for the
	Yamaha OPL3 synthesis chip, and the other is for the Codec chip. Address range
	0x388- 0x38b is always reserved for the OPL3 chip, whereas the Codec chip uses
	one of the following ranges (depending on the jumper settings on the board):
	
	  0x530-0x537
	  0x604-0x60c
	  0xe80-0xe87
	  0xf40-0xf47
	
	The default I/O address is 0x530. To configure the I/O address after Windows
	Sound System is installed:
	
	1. Run Control Panel.
	
	2. Choose the Drivers icon.
	
	3. Select Microsoft Windows Sound System.
	
	4. Choose the Setup button.
	
	If you see one or more of the following symptoms, there is likely an I/O address
	conflict with the Windows Sound System and another card:
	
	- The Windows Sound System driver displays an error saying it can't find a
	  card.
	
	- The Windows Sound System driver displays an error saying that the card is not
	  responding correctly.
	
	- FM synthesis does not work correctly.
	
	- Windows Sound System does not play any sounds.
	
	- Another card in your system does not work.
	
	- Windows does not start.
	
	- Windows stops responding (hangs).
	
	- Your computer does not start.
	
	If the I/O port you have chosen is not working, the best way to find a new I/O
	port address is to remove the Windows Sound System board and rerun Setup using
	the following procedure. Setup looks for available I/O ports, and recommends the
	correct jumper settings. While Setup can detect available I/O port addresses, it
	may misjudge. In this case, you should consult the documentation for your other
	cards, or experiment with jumper settings.
	
	To test for the correct I/O port, do the following:
	
	1. Turn the computer off and remove the Windows Sound System board.
	
	2. Restart the computer and start Windows.
	
	3. Run Windows Sound System Setup.
	
	4. Choose Continue twice to get to the Microsoft Windows Sound System Setup
	  dialog box.
	
	5. Choose the Board button.
	
	6. Choose the Auto button.
	
	7. Note the jumper settings Setup suggests.
	
	8. Choose Continue, then exit Windows.
	
	9. Turn off the computer and change the jumper settings as suggested by Setup.
	
	Choosing the Correct Interrupt
	------------------------------
	
	The Windows Sound System board uses Interrupts 7, 9, 10, and 11. Interrupts 10
	and 11 are available only if the board is plugged into a 16-bit slot. Interrupt
	11 is the default.
	
	If you see one or more of the following symptoms, there is likely an IRQ
	conflict:
	
	- The first .25 seconds of sound repeats continuously.
	
	- The other card does not function correctly.
	
	- Windows stops responding (hangs).
	
	The only way to find a new interrupt is to experiment. Sometimes the Windows
	Sound System card is able to positively identify an occupied IRQ and can prevent
	you from selecting this interrupt. Some cards, notably network cards, fool the
	Windows Sound System detection, and it can't tell what interrupt the other card
	is using.
	
	Try the following procedure:
	
	1. Restart the computer, but do NOT start Windows.
	
	2. Insert Windows Sound System Disk #1 into your floppy disk drive.
	
	3. From the MS-DOS prompt, run the Windows Sound System Setup program by typing
	  the following:
	
	  <drive>:setup
	
	  where <drive> is the letter of your floppy disk drive.
	
	4. Choose OK and follow the instructions on your screen.
	
	5. When Setup prompts you, remove the Windows Sound System driver.
	
	6. When Windows and Setup run again (automatically), choose Custom Board Setup.
	
	7. Change the IRQ setting.
	
	8. Restart Windows to activate the Windows Sound System driver.
	
	Choosing the Correct DMA Channel
	--------------------------------
	
	The Windows Sound System board uses DMA channels 0, 1, and 3. DMA channel 0 is
	only available if the card is plugged into a 16-bit slot, and is the default.
	
	If you see one or more of the following symptoms, there is likely a DMA
	conflict:
	
	- The sound stops playing as soon as another device uses the DMA channel. For
	  example, if there is a DMA conflict with a disk drive, then the sound stops
	  as soon as the drive is accessed. The sound may continue playing but play the
	  wrong data.
	
	- The other card won't function correctly.
	
	- Windows stops responding (hangs).
	
	The only way to find a new DMA channel is by experimentation or examination of
	the hardware interrupts.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
