---
layout: page
title: "Q100399: How to Disable SoundBits"
permalink: kb/100/Q100399/
---

## Q100399: How to Disable SoundBits

	Article: Q100399
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SoundBits, Hanna-Barbera 
	- Microsoft SoundBits, MGM Movies 
	- Microsoft SoundBits, Musical Instruments 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SoundBits functionality can be removed from operation in Windows, without
	removing the program, by modifying your system.ini file. Use the following steps
	to silence SoundBits in Windows 3.x and Windows 95.
	
	Accessing System.ini in Windows 3.x
	-----------------------------------
	
	1. From the Program Manager File menu, choose Run.
	
	2. In the Command Line field, type "sysedit" without the quotation marks). This
	  runs the System Configuration Editor (SysEdit). Choose OK.
	
	3. In SysEdit, select the system.ini window. This allows you to edit the
	  system.ini file.
	
	4. In the [boot] section of the system.ini file, remove all references to
	  "sndevnts.drv" (this will be on a "drivers=" line).
	
	5. In the [drivers] section, remove the following statement:
	
	     wavemapper=msacm.drv
	
	6. From the SysEdit File menu, choose Save.
	
	7. Exit SysEdit and restart Windows.
	
	When you restart Windows, SoundBits should be disabled.
	
	Accessing your System.ini file in Windows 95
	--------------------------------------------
	
	If you are using Windows 95, most of the functionality of SoundBits is included
	in the operating system. However, should you wish to remove the Sound Events
	driver for SoundBits, you need only remove any references to SndEvnts.drv in
	your system.ini. Making any other changes could impact the normal functioning of
	Windows 95.
	
	1. Click Start. Click Run.
	
	2. On the Run command line, type the following and click OK.
	
	     sysedit
	
	3. In SysEdit, select the system.ini window.
	
	4. Remove any references to "sndevnts.drv" (without the quotation marks).
	
	5. On the File menu, click Save.
	
	6. When you restart Windows, SoundBits should be disabled.
	
	MORE INFORMATION
	================
	
	NOTE: These steps disable the Windows Sound System sounds. To restore SoundBits
	functionality, reset your .ini settings.
	
	The documentation on this topic is incomplete in the SoundBits readme.txt file.
	It does not include step 5.
	
	Additional query words: 1.00 Hanna-Barbera classic hollywood movies mgm Sound Bits musical instruments world deinstall sound bits Usage Crun
	
	======================================================================
	Keywords          :  
	Technology        : kbSoundBitsSearch
	
	=============================================================================
	
