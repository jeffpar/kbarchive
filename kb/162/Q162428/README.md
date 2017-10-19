---
layout: page
title: "Q162428: MSB Dinosaurs: Err Msg: PCM Audio Codec is Not Installed"
permalink: /kb/162/Q162428/
---

## Q162428: MSB Dinosaurs: Err Msg: PCM Audio Codec is Not Installed

	Article: Q162428
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install or run The Magic School Bus Explores in the Age of
	Dinosaurs, you may receive the following error message:
	
	  The program detected that:
	  -PCM Audio Codec is not installed or is not active The program will now
	  install the missing components. <OK>
	
	You will receive this message if the Microsoft ADPCM CODEC (audio compression
	codec) is missing, damaged, or disabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Microsoft ADPCM CODEC by clicking OK on
	this message. This will start the Windows setup. Follow the on screen
	instructions, and after Windows Setup is complete, the program will install and
	run properly.
	
	If you are running MSB Dinosaurs on Microsoft Windows 2000, reinstall the
	Microsoft ADPCM CODEC:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Hardware.
	
	2. Click Next, click "Add/Troubleshoot a Device", and then click Next.
	
	3. Click "Add a new device", and then click Next.
	
	4. Click "No, I want to select the hardware from a list", and then click Next.
	
	5. Click "Sound, video, and game controllers", and then click Next.
	
	6. Click Have Disk. In the "Copy manufacturer's files from" box, point to
	  %SystemRoot%\System32\Mmdriver.inf (where %SystemRoot% is the folder in which
	  Windows 2000 is installed).
	
	7. Click OK, and then click Microsoft ADPCM CODEC in the list.
	
	8. Click Next, and then click Finish.
	
	9. Restart your computer.
	
	MORE INFORMATION
	================
	
	Running Windows Setup to install the ADPCM codec will correct the problem if the
	codec was missing. However, if the Microsoft ADPCM CODEC has been disabled in
	the Multimedia Properties Advanced settings, it will remain disabled. If this is
	the case, you will receive this error message again and Windows Setup will
	install the codec every time you run the program. This will happen until the
	codec is enabled in the Windows Control Panel.
	
	For information about how to permanently enable the Microsoft ADPCM CODEC, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q141801 Troubleshooting Audio Codecs in Windows 95
	
	Additional query words: kids mskids msb frizz kbmm multimedia multi- media multi msbdino msbdinos codek codak codac error errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbMSBSearch
	Version           : :1.0
	
	=============================================================================
	
