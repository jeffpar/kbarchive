---
layout: page
title: "Q163480: MSB: Err Msg: &quot;Wave Error&quot; When Starting Program"
permalink: kb/163/Q163480/
---

## Q163480: MSB: Err Msg: &quot;Wave Error&quot; When Starting Program

	Article: Q163480
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0; WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the Magic School Bus products listed above, you may
	receive the following error message:
	
	  Wave Error X: All wave devices that can play files in the current format are
	  in use. Wait until a wave device is free, and then try again.
	
	where X refers to a number, most commonly 7 or 10.
	
	CAUSE
	=====
	
	You have Microsoft SoundBits (or a similar sound-producing program) installed
	and enabled on your computer, or there is a .dll or .drv file other than
	Mmsystem.dll on the drivers= line in the System.ini file.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Remark out the existing drivers= line located in the [boot] section of the
	  System.ini. Do this by placing a semi-colon (;) at the beginning of the
	  drivers= line, then add the following on a new line:
	
	  drivers=mmsystem.dll
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	- Disable or remove SoundBits.
	
	For more information about disabling SoundBits, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q100399 How to Disable SoundBits
	
	MORE INFORMATION
	================
	
	If Microsoft SoundBits (or a similar sound-producing program) is installed and
	enabled, you will either not hear any startup audio with the Magic School Bus
	program, or an error message may appear when you launch the program. This occurs
	because both SoundBits and the Magic School Bus are trying to play audio at the
	same time.
	
	Additional query words: kids mskids msb msbhb msbss frizz kbmm multimedia multi-media multi media msbdino msbdinos msbearth
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbZNotKeyword kbKidsSearch kbScholasticHuman kbScholasticOcean kbScholasticSolar kbScholasticDinosaurs kbScholasticEarth kbMSBSearch
	Version           : :1.0; WINDOWS:1.0
	
	=============================================================================
	
