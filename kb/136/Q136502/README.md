---
layout: page
title: "Q136502: Fury3 README.TXT (Part 3 of 3) Troubleshoot Audio Conflicts"
permalink: kb/136/Q136502/
---

## Q136502: Fury3 README.TXT (Part 3 of 3) Troubleshoot Audio Conflicts

	Article: Q136502
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbreadme
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fury 3 for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is from the Microsoft Fury3 README.TXT file. This text
	has not been modified and appears as is. This is part 3 of 3.
	
	-------------
	>  Troubleshooting Sound Cards
	
	Use the following list of troubleshooting suggestions
	if Microsoft Fury3 does not play sound properly:
	
	* Be sure you are using the latest sound driver
	available. Contact your sound card manufacturer to
	obtain the latest sound driver.
	
	* Be sure that your system's volume control is not
	muted and is turned up.
	
	* Verify that Windows 95 can play .WAV files:
	Click the Start button, and then point to Settings.
	Click Control Panel.
	Double-click the Sounds icon.
	Try to play a .WAV file.
	
	* Verify that Windows 3.1 can play .WAV files:
	Click the Main group, and then double-click
	    Control Panel.
	Double-click the Sound icon.
	Try to play a .WAV file.
	
	* If Windows cannot play a .WAV file:
	Check to see that you have an audio card. If you don't
	have an audio card, contact your equipment
	dealer to obtain one.
	
	* If you are able to play a .WAV file:
	Start Microsoft Fury3.
	On the Options menu, click Sound Options.
	Verify that the Play Sound Effects and Play Music
	    check boxes are checked, and that Volume for both
	    is 100%. If the volume is turned up, then click
	    Advanced.
	Verify that Fury3 recognizes an audio driver by
	    looking at the Sound Card Detected line.
	Click Test to see if Fury3 will play a sound file.
	
	*If you are having trouble hearing sound in Fury3, it
	may be related to the type of sound card you have. Use
	the list of sound cards and settings below to adjust
	settings for your sound card.
	On the Fury3 Options menu, click Sound Options. In
	    the Sound Options dialog, click Advanced.
	In the Number of Buffers box, select the number
	    that correlates to the number of buffers for
	    your sound card in the list below. Then select the
	    appropriate number for Buffer Size.
	Click Test to listen to the results of your
	    changes. Click Default to return the numbers to
	    their original values.
	
	Sound Cards and Settings:
	
	-------------
	Windows 95 Sound Settings:
	Sound Card: Aztech Sound Galaxy Pro 16, FCC: I38-MMSN810
	Driver:  Win 95 SB Pro
	# of Buffers=3
	Buffer Size=2304
	
	Sound Card: Creative Labs Sound Blaster, CT 1350B
	Driver: Win 95 SB
	# of Buffers=3
	Buffer Size=2304
	
	Sound Card: Turtle Beach Monte Carlo
	Driver: Win 95 SB Pro
	# of Buffers=3
	Buffer Size=4096
	
	Sound Card: Creative Labs Sound Blaster 16 SCSI, CT 1770
	Sound Card: Creative Labs Sound Blaster 16, CT  2230
	Driver: Win 95 SB 16 / AWE 32
	# of Buffers=3
	Buffer Size=4096
	
	Sound Card: Creative Labs Sound Blaster 16 SCSI-2
	Driver: Win 95 SB 16 / AWE 32
	# of Buffers=3
	Buffer Size=3072
	
	Sound Card: Creative Labs Sound Blaster 16 Value Card,
	CT 2770
	Driver: Win 95 SB 16 / AWE32
	# of Buffers=5
	Buffer Size=2560
	
	Sound Card: Creative Labs Sound Blaster 16-ASP Card
	(Advanced Signal Processor), CT 1790
	Driver: Win 95 SB 16 / AWE32
	# of Buffers=4
	Buffer Size=2048
	
	Sound Card: Creative Labs Sound Blaster AWE32 Card,
	CT 2760
	Driver: Win 95 SB 16 / AWE32
	# of Buffers=3
	Buffer Size=3584
	
	Sound Card: Sound Galaxy NX Pro 16
	Driver: Win 95 MS Windows Sound System Compatible
	# of Buffers=3
	Buffer Size=3072
	
	Sound Card: Turtle Beach Monte Carlo
	Driver: Win 95 MS Windows Sound System Compatible
	# of Buffers=4
	Buffer Size=1536
	
	-------------
	Windows 3.1 Sound Settings
	Sound Card: Aztech Sound Galaxy Nova 16,
	FCC: I38-MMSN815
	# of Buffers=4
	Buffer Size=3072
	
	Sound Card: Creative Labs Sound Blaster Pro, CT 1330A
	Driver: Creative Labs Sound Blaster 1.5
	# of Buffers=3
	Buffer Size=3072
	
	Sound Card: Creative Labs Sound Blaster w/2.0 DSP,
	CT 1320C
	Driver: Creative Labs Sound Blaster 1.5
	# of Buffers=4
	Buffer Size=1024
	
	Sound Card: Creative Labs Sound Blaster v2.00, CT 1320A
	Driver: Creative Labs Sound Blaster 1.0
	# of Buffers=5
	Buffer Size=2048
	
	Sound Card: Creative Labs Sound Blaster 16, CT 1740
	Driver: Creative SB 16 Wave and Midi v.3.01
	# of Buffers=5
	Buffer Size=1536
	
	
	-------------
	Windows NT Sound Settings
	Sound Card: Creative Labs Sound Blaster w/2.0 DSP,
	CT 1320C
	Driver: Win NT 3.51 SB 1.x
	# of Buffers=4
	Buffer Size=1536
	
	Additional query words: kbhowto fury 3 fury-3 1.00 Audio
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword kbFury3
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
