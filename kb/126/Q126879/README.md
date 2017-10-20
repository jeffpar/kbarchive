---
layout: page
title: "Q126879: Baseball 1995: BS95READ.TXT (Part 3 of 3)"
permalink: /kb/126/Q126879/
---

## Q126879: Baseball 1995: BS95READ.TXT (Part 3 of 3)

{% raw %}

	Article: Q126879
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is part 3 of the BS95READ.TXT included with Microsoft Complete
	Baseball for Windows, 1995 edition.
	
	SOUND DOESN'T PLAY AT ALL
	-------------------------
	
	If you don't hear anything when you play sounds in Complete Baseball,
	be sure that:
	
	*  A sound card is installed.
	
	*  A speaker is connected to the jack on your sound card (not to the
	CD-ROM drive).
	
	*  The volume is set to an audible level.
	
	*  You have Sounds turned on in the Complete Baseball Sounds dialog
	box.  This can be accessed from the
	  Options menu.
	
	You can test sounds with the Sound option in the Windows Control
	Panel.  If you hear no sound during the tests, open the Drivers
	option to check the installed sound driver files.  These drivers must
	be compatible with your sound board.  Be sure that a driver for WAVE
	audio and the entry "[MCI] Sound" appears in the Drivers dialog box.
	If  "[MCI] Sound" is missing, click the Add button in the Drivers
	dialog box.  Then, select "[MCI] Sound" in the list of drivers and
	click OK.  The Drivers application will ask you to insert one of your
	Windows installation disks that contains the driver, so be sure to
	have these disks on hand.
	
	If necessary, try setting up your sound board again.  If you still
	can't hear sounds, contact the sound board manufacturer to verify
	that you are using the correct drivers and that no hardware conflicts
	exist.
	
	Please note that Complete Baseball requires a sound board to be
	installed and is not intended to run with
	drivers which use the PC internal speaker, such as the unsupported
	"PC Speaker" driver.  Such a driver will in most cases not play any
	sounds, and if the driver setup option "Enable Interrupts" is not
	checked, the system may crash.  Check the "Drivers" configuration in
	your Windows control panel. If you have both a sound board and the PC
	Speaker driver installed, it is preferable to un-install the PC
	Speaker driver.
	
	Creative Labs Sound Blaster 16 and 16ASP Sound Cards
	----------------------------------------------------
	
	Compressed audio clips may fail to play if you are using a Sound
	Blaster 16 or Sound Blaster 16 ASP sound card.
	This problem occurs because some computers are unable to use the
	16-bit DMA (direct memory access) channel on the Sound Blaster cards.
	
	To correct this problem, switch the HDMA channel to use DMA or 8-bit
	DMA. You must change this setting in the following two places:
	
	  - The Drivers dialog box in the Windows Control Panel
	
	           -and-
	
	  - The SBCONFIG.EXE configuration program included with the Sound
	Blaster cards
	
	To change the settings, follow these steps:
	
	1. Choose the Drivers icon in the Windows Control Panel.
	
	2. Select the Sound Blaster 16 Wave/Midi driver and choose Setup.
	
	3. Under the HDMA setting, set the selection to DMA.
	
	4. Choose OK, and then choose Do Not Restart Now.
	
	5. Exit Windows.
	
	6. At the MS-DOS prompt, switch to the SB16 directory and run SBCONFIG.EXE.
	
	7. Follow the instructions provided by this configuration program. It
	assists you in selecting and testing the following variables:
	
	  Variable      Select
	  ------------------------------
	
	  Base I/O port          Autoscan
	  MidiPort address       Autoscan
	  DMA interrupt          Current
	  8-bit DMA          Current
	  16-bit DMA          Use 8-bit DMA
	
	After you have finished making these selections, the SBCONFIG program
	will restart your computer.
	
	8. Restart Windows.
	
	All compressed audio should now play correctly.
	
	For more information regarding Sound Blaster cards and about this
	problem, contact Creative Labs technical support at (405) 742-6622.
	
	Sound Blaster is manufactured by Creative Technology Ltd., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	----------------------
	SOUND PLAYS, BUT SKIPS
	----------------------
	
	If audio breaks up or skips periodically it is usually an indication
	that your CD-ROM drive does not have a fast enough Data Transfer
	Rate.  Complete Baseball requires that your CD be capable of
	transferring data at a rate of 150 KB per second while utilizing 40
	percent or less of the CPU.   You can continue to use your CD-ROM
	drive to run Complete Baseball, but you will continue to experience
	this choppiness in audio and animation clips.
	
	-------------------------------
	PROBLEMS USING SOUNDBLASTER PRO
	-------------------------------
	
	On rare occasions the Sound Blaster audio driver WSSSBPRO.DRV may
	have problems playing very short sound files, causing Baseball to
	crash.  If you encounter this problem, turn off button sounds in
	Baseball:
	
	1. Click the Options button.
	
	2. In the Options dialog box, click the Sound/Animation button.
	
	3. In the resulting dialog box, click the Button Sounds radio button
	to turn off button sounds.
	
	For more information on Sound Blaster, contact Creative Labs
	technical support at (405) 742-6622.
	
	---------------------------------------
	PROBLEMS USING MEDIA VISION PROAUDIO 16
	---------------------------------------
	
	On rare occasions the ProAudio 16 audio driver may have problems
	playing very short sound files, causing Baseball to crash.  If you
	encounter this problem, try the following fix:
	
	1. Edit your config.sys file located in your root directory (usually
	c:\config.sys).
	
	2. If you have a STACKS= line change it to STACKS=12,512.  If you
	have no STACKS= line then add the line at the end of the file.
	
	3. Save the file and re-start your system.
	
	For more information call Media Vision, Inc. Technical Support at
	(800) 638-2807 or (510) 770-9905. On CompuServe, Media Vision can be
	reached by typing GO MEDIAVISION at any prompt.
	
	=================================================================
	6.  RUNNING UNDER MICROSOFT WINDOWS NT
	=================================================================
	
	The Windows NT 3.1 version of the Indeo video decompressor from Intel
	was not officially released and tested before Windows NT 3.1 was
	finished.  Although Complete Baseball will run under  Windows NT 3.1,
	its videos will not play unless you have installed the decompressor.
	
	Additional query words: kbhowto 1995multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1995
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
