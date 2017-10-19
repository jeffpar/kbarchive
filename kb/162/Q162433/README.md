---
layout: page
title: "Q162433: MSB Dinosaurs: Media Control Device Not Installed Message"
permalink: /kb/162/Q162433/
---

## Q162433: MSB Dinosaurs: Media Control Device Not Installed Message

	Article: Q162433
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up the Magic School Bus Explores in the Age of Dinosaurs (MSB
	Dinosaurs), you may receive the following message:
	
	  MSB Dinosaurs
	  The program detected that:
	  -Media Control Interface (MCI) for video is not installed The program will now
	  install the missing components; <OK>
	
	You will receive this error message if the Microsoft MCI Motion Video Device
	(Media Control) is missing, damaged, or disabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Microsoft MCI Motion Video Device (Media
	Control) by clicking OK on this message. This will start Windows Setup. Follow
	the on screen instructions, and after Windows Setup completes, the program will
	install and run properly.
	
	MORE INFORMATION
	================
	
	Running Windows Setup for this media control device will correct the problem if
	the device was missing. However, if the Motion Video Device has been disabled in
	the Multimedia Properties Advanced settings, it will remain disabled.
	
	If the Motion Control Device has been disabled, when you start MSB Dinosaurs you
	will get the original error message, Windows will install the media control
	device, and you will receive the following error message:
	
	  MSB Dino
	  Internal error #416
	  Use Video for Windows 1.1 or greater, not <Abort> <Retry>
	  <Ignore>
	
	Clicking Abort will bring up the following window:
	
	  Program Error Terminating application.
	  <Close>
	
	Clicking Retry or Ignore will minimize MSB Dinosaurs in a black screen state, and
	you must exit using the Alt+F4 key combination on your keyboard.
	
	To resolve these problems, enable the Microsoft MCI Motion Video Device (Media
	Control) using the following steps:
	
	Enable the Motion Video Device
	------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Multimedia icon.
	
	3. Click the Advanced tab.
	
	4. Double-click Media Control Devices.
	
	5. Click the Motion Video Device (Media Control, and then click the Properties
	  button.
	
	6. Click Use This Media Control Device, and then click OK.
	
	7. Close the Control Panel and then restart Windows.
	
	Additional query words: kids mskids msb frizz kbmm multimedia multi- media multi msbdino msbdinos mci
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbMSBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	
