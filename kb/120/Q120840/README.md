---
layout: page
title: "Q120840: PRB: Setup Does Not Detect Existing FoxPro Installation"
permalink: kb/120/Q120840/
---

## Q120840: PRB: Setup Does Not Detect Existing FoxPro Installation

	Article: Q120840
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup program prompts you to install FoxPro, rather than running in
	maintenance mode to modify an existing FoxPro installation.
	
	CAUSE
	=====
	
	FoxPro is installed on a hard disk (volume) other than the boot disk. The setup
	program only checks the boot disk for an existing FoxPro installation.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When FoxPro is installed on the boot disk, the FoxPro Setup program starts in
	maintenance mode, prompting you to add or remove components of your current
	installation, reinstall FoxPro, or remove all FoxPro components of the current
	FoxPro installation.
	
	Additional query words: VFoxMac FoxMac drive akz
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
