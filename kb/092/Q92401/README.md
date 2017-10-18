---
layout: page
title: "Q92401: Noise (Hissing) During Playback of Sound Files"
permalink: kb/092/Q92401/
---

## Q92401: Noise (Hissing) During Playback of Sound Files

	Article: Q92401
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
	
	When using the software included with the Microsoft Windows Sound System, you
	may hear noise during the playback of sound files (*.WAV, *.MID, *.RMI, *.VOC,
	*.SND, *.AIF). This noise is best described as an audible "hiss" and can be
	caused by the following situations:
	
	1. The Windows Sound System board has been installed next to a video board or
	  the power supply.
	
	2. The Windows Sound System volume has been set low while the volume of an
	  external device (that is, speakers or amplifier) has been set high.
	
	MORE INFORMATION
	================
	
	The Windows Sound System board may pick up and amplify interference from other
	boards that are not functioning correctly. Interference from the computers power
	supply can also cause noise during the playback of sound files. The Windows
	Sound System board should be installed as far away from the power supply and
	other boards as possible.
	
	Another cause of audible hissing is an inconsistency in the volume control of the
	Windows Sound System and amplified external devices. For example, if the Windows
	Sound System volume control is set low, while the volume control of external
	speakers is set high, the speakers will amplify the low sound being produced by
	the sound card. This will result in distortion or hissing during playback.
	
	The Windows Sound System volume control should match that of any external devices
	(that is, if Sound System's volume control is set at 50 percent, any external
	device's volume control should also be set at 50 percent).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
