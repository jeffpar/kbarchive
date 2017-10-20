---
layout: page
title: "Q93549: Pro Audio Spectrum 16 Settings and Features"
permalink: /kb/093/Q93549/
---

## Q93549: Pro Audio Spectrum 16 Settings and Features

{% raw %}

	Article: Q93549
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 3.1 drivers for the Pro Audio Spectrum 16 audio card from Media
	Vision come packaged with the card on a disk labeled "Pro Audio 16 Windows
	Drivers." To install the drivers, run the INSTALL.EXE on the drivers disk. The
	INSTALL.EXE file is a Windows program and must be run from Windows.
	
	MORE INFORMATION
	================
	
	Installation of the Pro Audio Spectrum 16 Windows drivers causes the following
	changes:
	
	Changes to the SYSTEM.INI file:
	
	     [386enh]
	     device=vpasd.386
	
	     [mci]
	     CDAudio=mcicda.drv
	     Mixer=mcimixer.drv
	     Sequencer=mciseq.drv
	     WaveAudio=mciwave.drv
	
	     [drivers]
	     Aux=mvproaud.drv
	     MIDI=mvproaud.drv
	     MIDI1=opl3.drv
	     Midimapper=midimap.drv
	     Mixer=mvmixer.drv
	     Timer=timer.drv
	     Wave=mvproaud.drv
	
	     [Multimedia.Setup]
	     audio=mvproaud.drv,0,0,0
	
	     [mvproaud.drv]
	     dma=3
	     irq=7
	
	The settings for the DMA channel (3) and interrupt (7) are the factory defaults.
	Valid settings for the DMA channel are 0, 1, 2, 3, 5, 6, and 7. Valid settings
	for the interrupt are 2, 3, 5, 7, 10, 11, 12, and 15. The Pro Audio Spectrum 16
	includes a Sound Blaster compatibility mode which is automatically set to DMA
	channel 1, interrupt 5, and I/O port address 220. In most cases, DMA channel 1
	can be shared with the Sound Blaster compatibility mode, but it is not possible
	to share the same interrupt setting.
	
	Changes made to the WIN.INI file:
	
	     [Extensions]
	     wav=prec.exe ^.wav
	
	     [embedding]
	     PocketRec=Pocket Recorder Wave,Pocket Recorder
	        Wave,C:\WINDOWS\PREC.EXE,picture
	     PocketMix=Pocket Mixer Settings,Pocket Mixer
	        Settings,C:\WINDOWS\PMIX.EXE,picture
	
	Files copied to the \WINDOWS directory:
	
	  MIX.EXE
	  PMIX.EXE
	  PREC.EXE
	  PROMIX.EXE
	
	Files copied to the \WINDOWS\SYSTEM directory:
	
	  MCIMIXER.DRV
	  MIDIMAP.CFG
	  MMMIXER.DLL
	  MVFM.DRV
	  MVMIXER.DRV
	  MVPROAUD.DRV
	  OEMSETUP.INF
	  OPL3.DRV
	  VPASD.386
	
	The WHATSUP.DOC file on the "Pro Audio 16 Windows Drivers" disk contains a
	description of most of the above files.
	
	
	The Pro Audio Spectrum 16 includes the following features:
	
	- Supports Large Library of Software
	
	  AdLib, Sound Blaster, Pro Audio Spectrum, and Real Sound Compatible
	
	- Advanced FM Stereo Synthesizer
	
	  20 Stereo Voices, 4 Operator FM Sounds, and 16-Bit FM DAC
	
	- Digital Sampling and Playback at up to 44.1 kHz in Stereo
	
	  16-Bit DAC/ADC and Dynamic Filtering
	
	- High Performance 16-Bit Interface
	
	  16-Bit DMA Data Transfer and Software Addressable IRQs and DMAs.
	
	- SCSI Support
	
	  Supports all standard SCSI CD-ROM drives and Fast SCSI Interface (690 KB per
	  second Data Transfer Rate)
	
	- Built-in Amplifier
	
	  4 Watts (RMS) per channel
	
	- Built-in Joystick/MIDI Port
	
	  Supports all standard game I/O and MIDI devices
	
	For more information, contact Media Vision, Inc. Technical Support. On
	CompuServe, Media Vision can be reached by typing "GO MEDIAVISION" at any
	prompt.
	
	The product included here, Pro Audio Spectrum 16, is manufactured by Media
	Vision, Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	REFERENCES
	==========
	
	"Pro Audio Spectrum 16 User's Guide," pages 1-3 to 1-4 and 1-27 to 1-36
	
	Additional query words: 3.10 audiospectrum mediavision multi-media mmtitles
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
