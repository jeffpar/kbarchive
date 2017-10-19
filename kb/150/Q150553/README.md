---
layout: page
title: "Q150553: Weitekp9 Video Driver Collides with Media Vision Sound Driver"
permalink: /kb/150/Q150553/
---

## Q150553: Weitekp9 Video Driver Collides with Media Vision Sound Driver

	Article: Q150553
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to use the Media Vision Proaudio Spectrum 16 driver (Mvaudio.sys)
	in conjunction with any of these Diamond Viper video cards:
	
	  Diamond Viper PCI
	  Diamond Viper PRO PCI
	  Diamond Viper PRO VLB
	  Diamond Viper VLB
	  Diamond Viper SE PCI
	  Diamond Viper SE VLB
	
	you may receive a combination of the following event messages (the messages
	received depends on which driver was loaded first):
	
	  Event id: 22
	  source: Weitekp9
	  type: error
	
	     Description: A conflict has been detected between two drivers which
	     claimed two overlapping Io port regions. Driver weitekp9, with device
	     <\Device\Video1.Translated>, claimed an IO port range with starting
	     address in data address 0x28 and 0x2c, and length in data address
	     0x30.
	
	     0000: 000c0000 005e0003 00000000 c0040016
	     0010: 00000000 00000000 00000000 00000000
	     0020: 00000000 00000000 0000f000 00000000
	     0030: 00000c04
	
	  Eventid: 22
	  source: Weitekp9
	  type: error
	
	     Description: A conflict has been detected between two drivers which
	     claimed two overlapping Io port regions. Driver mvaudio, with device
	     <\Device\PASWaveOut0.Translated>, claimed an IO port range with
	     starting address in data address 0x28 and 0x2c, and length in data
	     address 0x30.
	
	     0000: 000c0000 005e0003 00000000 c0040016
	     0010: 00000000 00000000 00000000 00000000
	     0020: 00000000 00000000 0000f388 00000000
	     0030: 00000004
	
	  Event id: 22
	  source: mvaudio
	  type: error
	
	     Description: The description for Event ID (22) in Source ( mvaudio )
	     could not be found. It contains the following insertion string(s): ,
	     weitekp9, \Device\Video0.Translated.
	     
	     0000: 000c0000 005c0003 00000000 c0040016
	     0010: 00000000 00000000 00000000 00000000
	     0020: 00000000 00000000 0000f000 00000000
	     0030: 00001000
	
	  Event id: 22
	  source: mvaudio
	  type: error
	
	     Description: The description for Event ID (22) in Source ( mvaudio )
	     could not be found. It contains the following insertion string(s): ,
	     mvaudio, \Device\PASWaveOut0.Translated.
	     
	     0000: 000c0000 005c0003 00000000 c0040016
	     0010: 00000000 00000000 00000000 00000000
	     0020: 00000000 00000000 0000f388 00000000
	     0030: 00000004
	
	  Event id: 7000
	  source: Service control manager
	  type: error
	
	     Description: The mvaudio service failed to start due to the following
	     error: The parameter is incorrect.
	
	CAUSE
	=====
	
	All of the Diamond Viper video cards listed above use the Weitekp9 video chip
	set. The Weitekp9.sys and the Mvaudio.sys drivers try to use overlapping I/O
	resources.
	
	RESOLUTION
	==========
	
	Replace the Weitekp9-based video card with another video card that is on the
	Hardware Compatibility List (HCL) but doesn't use the Weitekp9 chip set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
