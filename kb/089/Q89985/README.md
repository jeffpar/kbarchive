---
layout: page
title: "Q89985: Windows Sound System and MPC Compatibility"
permalink: /kb/089/Q89985/
---

## Q89985: Windows Sound System and MPC Compatibility

	Article: Q89985
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
	
	The Windows Sound System hardware does not meet all of the requirements to
	qualify for the Multimedia PC Marketing Council, Inc. (MPC) logo. However, if
	Windows Sound System is installed on a computer that includes the following from
	other cards, the system is considered MPC compliant:
	
	- a Musical Instrument Digital Interface (MIDI)
	
	- a small computer system interface (SCSI)
	
	- a joystick port
	
	MORE INFORMATION
	================
	
	The MPC designation applies to a complete computer system or to a full upgrade
	kit. The Windows Sound System is an audio card, which is one component of an
	MPC-compatible system. You need to add the other components to have your system
	qualify as an MPC system.
	
	MIDI, SCSI, and joystick ports were omitted from the Windows Sound System because
	most users do not require these components.
	
	Alternative means of supplying this functionality are described below.
	
	SCSI
	----
	
	Almost all CD-ROM drives have a SCSI interface card. If you install this card,
	you must use an additional slot on your computer that you would not have had to
	use if the Windows Sound System card had a SCSI interface.
	
	MIDI
	----
	
	Windows Sound System supports MIDI out, but not MIDI in. For example, Windows
	Sound System can play MIDI files, but cannot record them from a keyboard input
	source. To record MIDI in, you must have a separate MIDI card installed, and you
	must use it in conjunction with other MIDI software. The Windows Sound System
	card was designed for business users, who are more likely to need to play MIDI
	files than to create them.
	
	Joystick
	--------
	
	A joystick port is not built into Windows Sound System because Microsoft believes
	that the typical user uses a mouse to play games. For this functionality, you
	can install a separate card.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
