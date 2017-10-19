---
layout: page
title: "Q113780: Distorted Control Menu and Application Buttons"
permalink: /kb/113/Q113780/
---

## Q113780: Distorted Control Menu and Application Buttons

	Article: Q113780
	Product(s): Miscellaneous Windows Products
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows Sound System applications, such as Quick Recorder, a
	general protection (GP) fault may occur in the video driver. Choosing OK brings
	the application window back, but the Control menu and the Minimize and Maximize
	commands look distorted or are not available.
	
	CAUSE
	=====
	
	The problem is caused by a video conflict.
	
	RESOLUTION
	==========
	
	To correct the problem:
	
	1. As a test, use the basic VGA driver that comes with Windows. The Windows
	  Sound System applications should work correctly.
	
	2. Update the video driver.
	
	-or-
	
	3. Select a lower resolution video driver.
	
	
	Additional query words: 2.00 gpf gp gen protect card error message msg err
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : 2.00
	
	=============================================================================
	
