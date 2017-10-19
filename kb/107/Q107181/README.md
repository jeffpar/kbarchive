---
layout: page
title: "Q107181: Contents of the Windows Sound System 2.0 README.TXT"
permalink: /kb/107/Q107181/
---

## Q107181: Contents of the Windows Sound System 2.0 README.TXT

	Article: Q107181
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the complete text of the Microsoft Windows Sound System
	version 2.0 README.TXT file located on disk 1.
	
	======================================================================
	MICROSOFT WINDOWS SOUND SYSTEM (Version 2.0)
	Copyright (C) 1991-1993 Microsoft Corporation
	
	This document supplements the "Microsoft(R) Windows(TM) Sound System
	Software User's Guide" and accompanying software.
	
	CONTENTS
	
	1. Troubleshooting
	  1.1 Trouble Hearing Sound with Sound Finder or Music Box
	  1.2 Windows on a Network Installation
	  1.3 Using Music Box with a Future Domain SCSI Card
	  1.4 Using Quick Recorder with a 386 Computer with a 25 MHz or Lower
	      CPU
	  1.5 Playing Stereophonic Files with a Monophonic Audio Board
	  1.6 Playing MIDI Files with Sound Blaster Pro Audio Hardware
	  1.7 Opening More Than One Instance of a Quick Recorder File
	  1.8 Detecting Installed Hardware
	  1.9 Playing 44kHz files with Sound Blaster Pro Audio Board
	
	2. Voice Pilot
	  2.1 Using Multiple Mixer Devices
	  2.2 Confirmation Option Limitations
	  2.3 Using Audio Cues
	
	3. ProofReader
	  3.1 Versions Supported
	  3.2 Using Multiple Instances
	  3.3 Installation Sequence
	  3.4 Removing or Reinstalling ProofReader
	  3.5 ProofReader Dictionary for Non-U.S. English-Speaking Countries
	  3.6 Using ProofReader for Lotus 1-2-3 with International Country
	      Settings
	  3.7 Lotus 1-2-3 Release 4
	
	4. Using Windows Sound System with Windows NT
	
	5. Compatibility with Windows Sound System
	  5.1 Windows Sound System and Other Audio Drivers
	  5.2 Windows Sound System and MIDI Sequencing Software
	  5.3 Potential IRQ Conflicts in IBM PC/AT Bus Class Computers
	  5.4 Installing EMM386 on Stacked Drives
	  5.5 Using IRQ 7 on Gateway 2000 Computers
	  5.6 Using Windows Sound System in Windows Standard Mode
	  5.7 IRQ and DMA Conflicts on EISA Computers
	
	6. Removing Windows Sound System from Your Computer
	
	7. Sound Blaster Pro, Sound Blaster 16, and Sound Blaster 16 ASP
	  Issues
	
	8. Sound Blaster Compatibility with the Windows Sound System Sound
	  Board
	  8.1 Problems Playing Music
	  8.2 Using GAMES.PIF
	  8.3 Choosing between Sound Blaster and Sound Blaster Pro
	  8.4 Playing Mickey's ABC
	  8.5 Playing Alphabet Blocks
	  8.6 Playing Broderbund Games
	
	1. Troubleshooting
	
	1.1 Trouble Hearing Sound with Sound Finder or Music Box
	
	   If you do not hear sound when using Sound Finder or
	   if Music Box cannot find your CD-ROM drive, ensure
	   that you have the following entries or files in the
	   appropriate locations:
	
	   In the WIN.INI file in the Windows 3.1 directory:
	
	       [MCI extensions]
	       wav=waveaudio
	       mid=sequencer
	       rmi=sequencer
	
	   In the SYSTEM.INI file in the Windows 3.1 directory:
	
	       [MCI]
	       CDAudio=mcicda.drv
	       WaveAudio=mciwave.drv
	       Sequencer=mciseq.drv
	
	   In the Windows 3.1 system directory:
	
	             MCICDA.DRV
	             MCIWAVE.DRV
	             MCISEQ.DRV
	
	1.2 Windows on a Network Installation
	
	   If you're running Windows from a network installation, you cannot
	   play MIDI files.  You must install Windows on your local hard disk
	   to play MIDI files.
	
	   If you're running Windows from a network installation, CTL3D.DLL
	   does not get copied to your hard disk.  Either install Windows on
	   your local hard disk, or copy CTL3D.DLL to your Windows Sound System
	   directory on your local hard disk.
	
	1.3 Using Music Box with a Future Domain SCSI Card
	
	   If you have a Future Domain SCSI card installed in your computer
	   and Music Box doesn't play, ensure that you have the latest version
	   of the CD-ROM driver, FDCD.SYS (version 2.23 or later).
	
	1.4 Using Quick Recorder with a 386 Computer with a 25 MHz or Lower CPU
	
	   Quick Recorder cannot record reliably at high sampling rates on some
	   computers, particulary 386 computers with 25 megahertz (MHz) or
	   lower CPUs.
	
	   To correct the problem:
	
	   1. Record at a sampling rate lower than CD Quality (less than 44
	      kHz). This reduces your computer's processing.
	
	   2. Close other applications, if possible.
	
	   3. If you must make CD-quality recordings, keep them as short
	      as possible.
	
	1.5 Playing Stereophonic Files with a Monophonic Audio Board
	
	   Quick Recorder cannot play some CD-quality stereophonic files in
	   Recorder view. Try playing these files using Sound Finder or use
	   Quick Recorder in Expanded View.
	
	1.6 Playing MIDI Files with Sound Blaster Pro Audio Hardware
	
	   If you are using Sound Blaster Pro audio hardware, and you have
	   the microphone turned on in Voice Pilot, you will not be able to
	   hear a MIDI file while it is playing. Turn off the microphone.
	
	1.7 Opening More Than One Instance of a Quick Recorder File
	
	   To open more than one instance of a Quick Recorder file, you must
	   have SHARE.EXE installed in MS-DOS.  For instructions on installing
	   SHARE.EXE, see the "MS-DOS User's Guide."
	
	1.8 Detecting Installed Hardware
	
	   If your audio hardware does not function correctly, ensure
	   that you selected the right audio hardware when you ran Setup.
	   If an outdated driver is present, Setup may not detect the presence
	   of the correct audio hardware.
	
	1.9 Playing 44kHz files with Sound Blaster Pro Audio Board
	
	   Quick Recorder cannot play some 44kHz stereophonic files in
	   Recorder view. Try playing these files using Sound Finder or use
	   Quick Recorder in Expanded View.
	
	2. Voice Pilot
	
	2.1  Using Multiple Mixer Devices
	
	    Voice Pilot uses the mixer device with the lowest number (the one
	    listed in the first "mixerX=" line in your SYSTEM.INI file) that
	    meets its requirements. If you want to use a driver other than the
	    default driver for your Voice Pilot input, manually renumber the
	    "mixerX=" lines in your SYSTEM.INI file so that the number of the
	    mixer device you want to use is the lowest.
	
	2.2 Confirmation Option Limitations
	
	   The Confirmation option cannot be used on commands that are not
	   top-level commands; that is, the Confirmation option can be used
	   only with commands that appear on the menu bar or with commands that
	   are not contained on menus.
	
	2.3 Using Audio Cues
	
	   If you are using Voice Pilot's audio cues, Voice Pilot may attempt
	   to sound a cue at the same time another application, or VoicePilot
	   itself, tries to issue a sound. As a result, you may not be able to
	   use Voice Pilot to start ProofReader or you may receive a warning
	   that the device is being used by another application. To correct
	   this situation, in the Audio Cues section of the Preferences dialog
	   box, select None.
	
	3. ProofReader
	
	3.1 Versions Supported
	
	   ProofReader is supported only in Microsoft Excel version 3.0 or
	   higher and Lotus 1-2-3 for Windows versions 1.0, 1.0a, 1.1.01, and 4.
	
	3.2 Using Multiple Instances
	
	   If you run more than one instance of Microsoft Excel or Lotus 1-2-3
	   for Windows, ProofReader is present only on the menu of the first
	   instance.
	
	3.3 Installation Sequence
	
	   You must install your Windows-based spreadsheet application before
	   installing ProofReader with the Windows Sound System Setup program.
	
	3.4 Removing or Reinstalling ProofReader
	
	   To remove or reinstall ProofReader for Microsoft Excel, see your
	   Microsoft Excel documentation for information on how to remove or
	   install an add-in.
	
	   To remove or reinstall ProofReader for Lotus 1-2-3 for Windows
	   (123RDR), see your Lotus 1-2-3 for Windows documentation for
	   information on how to remove or install an add-in.
	
	3.5 ProofReader Dictionary for Non-U.S. English-Speaking Countries
	
	   The ProofReader dictionary NON-US.DCT contains terms that
	   accommodate the differences between English as spoken in the United
	   States and English as spoken in some other English-speaking
	   countries.
	
	   To use this dictionary, add it to the list of active ProofReader
	   dictionaries:
	
	   1. From the Microsoft Excel or Lotus 1-2-3 for Windows
	      Proof menu, choose Options.
	
	      The Options dialog box appears.
	
	   2. In the Category box, choose Dictionary.
	
	      The Dictionaries dialog box appears.
	
	   3. Choose Add Dictionary.
	
	      The Add Dictionary dialog box appears.
	
	   4. In the Directories box, choose the Windows Sound
	      System directory (the default is C:\SNDSYS).
	
	      NOTE: If you installed Windows Sound System
	            in a directory other than C:\SNDSYS,
	            choose the proper directory name.
	
	      The list of available dictionaries (*.DCT files)
	      appears in the File Name box.
	
	   5. In the File Name box, select NON-US.DCT.
	
	   6. Choose OK.
	
	   7. Choose Done.
	
	3.6 Using ProofReader for Lotus 1-2-3 for Windows and
	   International Country Settings
	
	   Lotus 1-2-3 for Windows uses its own country settings, not
	   the country settings used by Windows. If ProofReader does
	   not read some numbers correctly, verify that the country
	   settings selected in the Windows Control Panel match the
	   country settings that are set for Lotus 1-2-3 for Windows.
	
	3.7 Lotus 1-2-3 for Windows Release 4
	
	   Lotus 1-2-3 Release 4 does not support accelerator keys for
	   add-ins, such as ProofReader.  Use the mouse or the arrow
	   and Enter keys to select commands.
	
	4. Using Windows Sound System with Microsoft Windows NT(TM)
	
	  The Windows Sound System sound board can be used in ISA/EISA
	  computers running Microsoft Windows NT. Sound applications
	  that are shipped with Windows NT play sounds through the
	  Windows Sound System sound board by using an audio driver
	  included with Windows NT. Windows NT-based applications that
	  use the Microsoft Windows version 3.1 Sound Application
	  Programming Interfaces (APIs) should operate properly with the
	  Windows Sound System sound board.
	
	5. Compatibility with Windows Sound System
	
	5.1 Windows Sound System and Other Audio Drivers
	
	   The Windows Sound System audio driver may conflict with other
	   audio drivers. If you use multiple sound boards and drivers,
	   you may experience interrupt (IRQ) channel, I/O address, or
	   DMA channel conflicts that can cause your computer to stop
	   or to repeat sounds. Therefore, we recommend that you remove
	   all other audio drivers by using the Windows Control Panel
	   Drivers application.
	
	   If you remove an old audio board and install a new board,
	   you may have to manually remove the driver entries from
	   your SYSTEM.INI file.
	
	   For information on how to remove Windows Sound System software,
	   see DEINSTAL.TXT in your Windows Sound System directory (the
	   default is C:\SNDSYS).
	
	5.2 Windows Sound System and MIDI Sequencing Software
	
	   Windows Sound System is incompatible with certain Musical
	   Instrument Digital Interface (MIDI) sequencing applications.
	
	   Sound Finder cannot play a file with an .MID or an .RMI
	   extension while a sequencing application is open, regardless
	   of whether a file is actually loaded into the sequencer. If
	   you want to use Sound Finder to browse MIDI files and other
	   types of files, close your sequencer first. Alternatively,
	   you can use your sequencing application to play MIDI files.
	
	   Finale 2.2 for Windows from Coda Music Technology is compatible
	   with the Windows Sound System sound board and software if you
	   modify the WIN.INI file. For more information on using
	   Finale for Windows or MusicProse for Windows with the
	   Windows Sound System sound board, contact Coda Music
	   Technology at (612) 937-9611.
	
	   If you experience difficulties while using your MIDI sequencer
	   with your Windows Sound System sound board:
	
	   1. See the Windows Sound System documentation to ensure you
	      have installed and configured both the sound board and
	      the software properly.
	
	   2. See the documentation for your sequencer.
	
	   3. If you continue to experience problems, contact Microsoft
	      Product Support Services.
	
	5.3 Potential IRQ Conflicts in IBM PC/AT Bus Class Computers
	
	   IRQ 2 is unavailable to add-in cards on IBM PC/AT bus class
	   computers. If you are using an IBM PC/AT bus class computer
	   and you select IRQ 2, your selection defaults to IRQ 9.
	
	5.4 Installing EMM386 on Stacked Drives
	
	   Installing Windows Sound System on stacked drives and
	   running the MS-DOS Configuration program to enable
	   Sound Blaster compatiblity may cause your stacker drive
	   to load incorrectly. Stacked drives are often loaded
	   into UMB space; therefore, EMM386 must be present to
	   provide UMBs. Copy EMM386 onto a nonstacked boot drive.
	   The nonstacked drive is usually the drive that contains
	   the MS-DOS system files.
	
	5.5 Using IRQ 7 on Gateway 2000 Computers
	
	   Windows Sound System cannot use IRQ 7 on some Gateway
	   2000 computers. However, you may be able to make IRQ 7
	   available for use on such a computer by changing a
	   BIOS setting.  Contact your Gateway 2000 representative
	   to determine how to make IRQ 7 available. (For information
	   on IRQ settings, see the "Microsoft Windows Sound
	   System Software User's Guide.")
	
	5.6 Using Windows Sound System in Windows Standard Mode
	
	   You cannot perform a sound check if you are running
	   Setup in Windows Standard mode.  To check hardware
	   operation, run Windows in Enhanced mode or use Sound
	   Finder or Quick Recorder to play a file.
	
	5.7 IRQ and DMA Conflicts on EISA Machines
	
	   If an EISA machine is incorrectly configured, Windows
	   Sound System may report that all IRQ or DMA channels are
	   in use.
	
	   To solve this problem:
	
	   1. Use the EISA configuration utility supplied by your
	      hardware manufacturer to configure the computer properly.
	      This is the preferred solution.
	
	   -or-
	
	   2. Disable the EISA resource scan of SNDSYS.DRV and
	      VSNDSYS.386 by adding the EnableEISAResourceScan=FALSE
	      flag to the [SNDSYS.DRV] section of the SYSTEM.INI file.
	      Note that disabling this feature can cause problems with
	      enhanced SCSI adapters, such as the Adaptec 1742.
	
	6. Removing Windows Sound System from Your Computer
	
	  If you want to remove Windows Sound System from your computer,
	  see DEINSTAL.TXT, in your Windows Sound System directory
	  (C:\SNDSYS by default).
	
	7. Sound Blaster Pro, Sound Blaster 16, and Sound Blaster
	  16 ASP Issues
	
	  Setting the MIDIInPersistence= variable in the [WSSSBPRO.DRV]
	  or [WSSSB16.DRV] section of your SYSTEM.INI file allows you
	  to configure the amount of data that will be processed in the
	  MIDI-in interrupt.  The default value is 50, the recommended
	  range is 50 to 1024. Decreasing this value may prevent the
	  MIDI-in device from being completely serviced and may
	  cause data loss or may stop input.
	
	8. Sound Blaster Compatibility with the Windows Sound System Sound Board
	
	8.1 Problems Playing Music
	
	   If your game offers the choice, select Ad Lib
	   compatibility for music output and Sound Blaster
	   compatibility for sound effects.  This will prevent
	   music from playing too slowly.
	
	8.2 Using GAMES.PIF
	
	   If you're using a user-specified shell in MS-DOS,
	   ensure that the file GAMES.PIF (located in the directory
	   in which you installed Windows Sound System, C:SNDSYS
	   by default) references the same shell as your COMSPEC system
	   variable.  To edit the GAMES.PIF file, use Windows PIF
	   Editor. For more information on the COMSPEC system variable,
	   see your MS-DOS documentation.
	
	8.3 Choosing between Sound Blaster andSound Blaster Pro
	
	   If your game offers choice between Sound Blaster and Sound
	   Blaster Pro, you must select Sound Blaster, not Sound
	   Blaster Pro, as your audio board.
	
	8.4 Playing Mickey's ABC
	
	   Mickey's ABC cannot detect the presence of
	   the Windows Sound System sound board. However, it will
	   work correctly if you select Ad Lib compatibility
	   as the option for music.
	
	8.5 Playing Alphabet Blocks
	
	   If you experience problems playing Sierra On-Line
	   Alphabet Blocks with the Windows Sound System sound
	   board, add AcceptCloseSamplingRates=TRUE to the
	   [SNDSYS.DRV] section of the SYSTEM.INI file.
	   Alphabet Blocks uses a nonstandard sampling rate
	   that is not directly supported by the Windows Sound
	   System sound board. Setting this flag to true allows
	   the driver to accept sampling rates that are within
	   5% of the actual supported rate.
	
	8.6 Playing Broderbund Games
	
	   If you experience problems while playing Broderbund
	   games, set the VirtualHDIRQ=FALSE switch in the [386Enh]
	   section of the SYSTEM.INI file.
	
	Additional query words: 2.00 read me
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	
	=============================================================================
	
