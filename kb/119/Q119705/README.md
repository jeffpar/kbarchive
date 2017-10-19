---
layout: page
title: "Q119705: Windows Sound System and ASPI4DOS Causes Windows to Hang"
permalink: /kb/119/Q119705/
---

## Q119705: Windows Sound System and ASPI4DOS Causes Windows to Hang

	Article: Q119705
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Windows Sound System, Microsoft Windows loads on
	the first restart; however, if you quit Windows and then restart the system
	again, Windows stops responding (hangs) at the logo screen.
	
	CAUSE
	=====
	
	This problem occurs when the Adaptec ASPI4DOS.SYS driver version 3.30 is loaded
	on a system using the Adaptec 1542c bus-mastering SCSI hard disk controller.
	This combination causes Windows to hang at the logo screen after the Windows
	Sound System is installed and Windows is restarted a second time.
	
	RESOLUTION
	==========
	
	To correct this behavior:
	
	- Remove the ASPI4DOS driver.
	
	-or-
	
	- Remove the Windows Sound System drivers from the SYSTEM.INI file.
	
	Additional query words: 2.00 aspi4dos 1542cf hang setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
