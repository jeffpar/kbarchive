---
layout: page
title: "Q158910: Msbatch.inf Parameters: Multimedia Components Not Installed"
permalink: kb/158/Q158910/
---

## Q158910: Msbatch.inf Parameters: Multimedia Components Not Installed

	Article: Q158910
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to ensure multimedia components are installed using
	the Msbatch.inf file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	When you are installing Windows 95 using the Msbatch.inf file, specifying the
	multimedia components might not install all of the components because the
	multimedia hardware was not detected. Specifically, Audio Compression, Sample
	Sounds, Volume Control, Sound Recorder, and other components may be missing. To
	work around this problem, use the /p c- Setup switch.
	
	When you run Setup, specifying the /p c- switch will disable safe class detection
	and force detection of the multimedia hardware.
	
	For example:
	
	  Setup.exe /p c- (this disables safe class detection)
	
	  Setup.exe (this uses safe class detection)
	
	Safe class detection may not recognize all the multimedia hardware on a computer.
	Disabling safe class detection helps ensure that the proper hardware is detected
	for the multimedia components and that these components are installed.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
