---
layout: page
title: "Q247967: Setup Hangs After First Restart with S3 Savage/MX or Savage/IX"
permalink: /kb/247/Q247967/
---

## Q247967: Setup Hangs After First Restart with S3 Savage/MX or Savage/IX

{% raw %}

	Article: Q247967
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbhw kbsetup win95 kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows 95 on a computer with an S3 Savage/MX or
	Savage/IX chip set, your computer may stop responding (hang) after the following
	message appears:
	
	  Preparing to start Windows 95 on your system for the first time.
	
	CAUSE
	=====
	
	This issue can occur if your display adapter uses an S3 Savage/MX or Savage/IX
	chip set. Windows 95 detects these chip sets as S3 Legacy chip sets.
	
	RESOLUTION
	==========
	
	To work around this issue, press CTRL+ALT+DELETE to restart your computer, and
	then follow the instructions on your screen to resume Setup.
	
	For unattended deployment of Windows 95 on computers using the S3 Savage/MX or
	Savage/IX chip set, you can work around this behavior by performing the
	following steps:
	
	1. Copy the Windows 95 Setup files to a flat folder. Create your unattended
	  Setup batch file per the instructions in the Windows 95 Resource Kit, or by
	  using the MS Batch file creation utility.
	
	2. Copy the Savage .inf file and associated driver files to the flat folder.
	
	3. Extract the Msdet.inf file from the Precopy2.cab file into the installation
	  flat folder. Then, edit the Msdet.inf file and add the following lines to the
	  bottom of the file, following the last line with a couple of blank lines:
	
	  [Det.Options]
	  SkipList=#OEMSkipFactory
	
	  [OEMSkipFactory]
	  DetectS3
	  DetectS3801
	
	4. After saving the changes to the Msdet.inf, file run Setup from the flat
	  folder you created. Use whatever unattended parameters you typically would.
	  For example:
	
	  setup msbatch.inf /is
	
	This prevents the hang of the video chip set on reboot due to the hardware
	detection scheme used by Windows 95, and allow the video adapter to be
	enumerated by Plug and Play on the first boot into Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbsetup win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
