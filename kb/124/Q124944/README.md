---
layout: page
title: "Q124944: Sound Blaster Cards and Windows Driver Information"
permalink: /kb/124/Q124944/
---

## Q124944: Sound Blaster Cards and Windows Driver Information

	Article: Q124944
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Sound Blaster sound card and Windows driver information was
	obtained from Creative Labs support.
	
	MORE INFORMATION
	================
	
	                                  Creative Labs
	Card                 Model No.       BBS File
	------------------------------------------------
	
	Sound Blaster          1350           SBW31.EXE
	
	Sound Blaster Pro      1330           SBPW31.EXE
	
	Sound Blaster Pro 2    1600           SBP2W31.EXE
	
	Sound Blaster 16       CT2770         SB16UP.EXE
	(value edition)
	
	Sound Blaster 16 ASP   CT2230 (or)    SB16UP.EXE
	                      CT1740
	
	Sound Blaster 16 MCD   CT2230         SB16UP.EXE
	
	Sound Blaster 16 SCSI  CT1770         SB16UP.EXE
	
	Sound Blaster AWE 32   CT3780         SBAWE32.EXE
	(value edition)
	
	Drivers Installed in the Control Panel
	--------------------------------------
	
	The following is a list of the drivers installed in the Drivers
	section of the Control Panel.
	
	Sound Blaster Pro:
	
	  Creative Sound Blaster Pro 2 Midi Synthesizer
	  Creative Sound Blaster Pro Auxiliary Audio
	  Creative Sound Blaster Pro Wave and Midi
	
	Sound Blaster 1350:
	
	  Sound Blaster 2.0 Auxiliary  Audio
	  Sound Blaster 2.0 Wave and Midi
	  Sound Blaster 2.0 Sound
	
	Sound Blaster Pro 2 and the Sound Blaster 16 ASP:
	
	  Sound Blaster 16 Auxiliary Audio
	  Sound Blaster 16 Wave and Midi
	  Sound Blaster 16 Sound
	
	Sound Blaster 16:
	
	  Voyetra / Sound Blaster SuperSAPI FM Driver
	  Creative Sound Blaster 16 Auxiliary Audio
	  Creative Sound Blaster 16 Wave and MIDI
	
	WIN.INI Settings
	----------------
	
	There are no WIN.INI settings.
	
	SYSTEM.INI Settings
	-------------------
	
	 [386Enh]
	 Device=vsbpd.386
	
	 [Drivers]
	 AUX=sbpaux.drv
	 MIDI=sbpfm.drv    or   MIDI=sbp2fm.drv for Sound Blaster Pro 2
	 WAVE=sbpsnd.drv
	 MIDI1=sbpsnd.drv
	
	 [Sndblst.drv]
	 port=             Port, Interrupt, and DMA Channel settings for card
	 int=
	 dmachannel=
	
	Special Note for Sound Blaster 16 users
	---------------------------------------
	
	The Sound Blaster 16 installation adds these drivers to the  SYSTEM.INI:
	
	  [drivers]
	  Aux=sb16aux.drv
	  MIDI=sb16fm.drv
	  MIDI1=sb16snd.drv
	  Wave=sb16snd.drv
	
	Sound Blaster 16 adds this section to the SYSTEM.INI
	
	  [sndblst.drv]
	  Port=220
	  Int=5
	  DmaChannel=1
	  MidiPort=330
	  HDmaChannel=5
	  SaveOnExit=0
	  Palette=
	
	In some instances, the SNDBLST.DRV section in the SYSTEM.INI may be
	empty. This is caused by an incomplete or failed installation of the
	Sound Blaster 16 driver software. To reinstall the drivers, exit
	Windows, run the INSTALL program from the SB16 directory, and select
	"Setup Windows."
	
	MIDI Mapper Settings
	--------------------
	
	The MIDI Mapper Name field for the Sound Blaster 16 should be set to SB16
	Ext FM. The other Sound Blaster cards should have All FM or Ext FM for the
	Name field.
	
	Special Notes on Driver Filenames
	---------------------------------
	
	For Sound Blaster 1330, there should not be any drivers listed in the
	[Drivers] section of the SYSTEM.INI file that contain a "2" in the
	driver name; for example, "sbp2fm.drv" shouldn't be listed. If there
	is no bass line when you play the CANYON.MID file, the SBP2FM.DRV is
	probably being used instead of SBPFM.DRV. To play CANYON.MID, do the
	following:
	
	1. Open the Media Player, which is normally located in the Accessories
	  group.
	
	2. Choose MIDI Sequencer from the Device menu.
	
	3. Choose the CANYON.MID file located in the Windows directory and
	  choose OK.
	
	4. Choose the Play button.
	
	For earlier Sound Blaster 1600 cards, all drivers listed in the [Drivers]
	section of the SYSTEM.INI file will have a "2" in the driver name. Later
	Sound Blaster 1600 cards only have one driver file with a "2" in the driver
	name (sbp2fm.drv).
	
	The SET BLASTER Entry
	---------------------
	
	Specifies the base I/O address, Interrupt number (IRQ), DMA and HDMA
	channels for hardware configuration.
	
	Example:
	
	SET BLASTER=A220 I5 D1 H5 P330 T6
	
	  A--Specifies the Sound Blaster 16 base I/O port
	  I-- Specifies the Interrupt request line
	  D-- Specifies the DMA channel
	  H-- Specifies the HDMA channel
	  P-- Specifies the MPU-401 base I/O port
	  T-- Specifies the card type
	
	How to Tell What Type of Card You Have
	--------------------------------------
	
	The "T" entry on the Set Blaster line indicates what type of card you
	have.
	
	This T Entry       Means you have this card type
	------------------------------------------------
	
	T6                 All 16 bit Sound Blaster cards are type 6.
	T5                 The 8 bit Pro card is type 5.
	T4                 (card #1600) The SB PRO is type 4.
	T3                 (card #1350) A parameter of type 3 indicates an old
	                              Sound Blaster card
	T2                 (card #1330) All 8 bit cards are type 2.
	
	Note that the only way to be absolutely sure of your card type is to open
	your computer and look at the card.
	
	Other Sound Blaster Environment Settings
	----------------------------------------
	
	SET MIDI=SYNTH:<1 or 2> MAP:<G or E or B>
	
	In the above setting, <1 or 2> specifies the MIDI file format used (1 is an
	FM chip, 2 is an MPU-401 port), and <G or E or B> is where the MIDI data is
	sent to (G is General MIDI, E is Extended MIDI, and B is Basic MIDI).
	
	SET SOUND=<path>
	
	Specifies the directory location of SB16 drivers and software.
	
	For additional information, contact Creative Labs:
	
	- Technical support (405) 742-6655
	- Recorded frequently asked questions (405) 742-6622
	- Creative Labs BBS (File Section A): (405) 742-6660
	
	The Creative Labs products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles homekids win3x soundblaster
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
