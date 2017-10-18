---
layout: page
title: "Q90002: No Volume Control with MS-DOS Application on WSS"
permalink: kb/090/Q90002/
---

## Q90002: No Volume Control with MS-DOS Application on WSS

	Article: Q90002
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS based application with Windows Sound System and use the
	headphones supplied with Windows Sound System, the volume may be too loud. There
	is no way to control the volume while using the headphones with an MS-DOS
	application.
	
	CAUSE
	=====
	
	The Windows Sound System board is Adlib compatible because it uses the Yamaha
	OPL3 chip. Some MS-DOS applications, especially games, use this chip to generate
	music. The volume level of the music cannot be controlled by the Windows Sound
	System volume control because MS-DOS applications have full control over the
	OPL3 chip.
	
	WORKAROUND
	==========
	
	Use the headphones with a stereo receiver that has a volume control. To connect
	Windows Sound System to a stereo receiver, see page 9 of the "Windows Sound
	System User's Guide" under the section titled "Connecting Audio Equipment."
	
	-or-
	
	- Use any volume control on non-Windows Sound System headphones.
	
	-or-
	
	- Place the headphones on the desk away from your ears.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
