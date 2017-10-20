---
layout: page
title: "Q136265: PRB: Input/Output Operation Fails When Starting Visual FoxPro"
permalink: /kb/136/Q136265/
---

## Q136265: PRB: Input/Output Operation Fails When Starting Visual FoxPro

{% raw %}

	Article: Q136265
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive one of the following error messages when starting Visual FoxPro
	depending on which operating system you are using:
	
	- Input/Output Operation Failure.
	
	- This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	CAUSE
	=====
	
	There are two main situations where this can occur:
	
	- Visual FoxPro was installed from the CD-ROM disc without installing the help
	  files, and the CD-ROM disc is not in the drive.
	
	  -or-
	
	- A project is opened that is stored on a removable media, such as a Bernoulli
	  disk, that is not currently available to FoxPro.
	
	RESOLUTION
	==========
	
	In both cases, the media that contains the needed files should be available to
	FoxPro. In the case of the help file, re-run the setup program and install the
	help file to the Visual FoxPro directory so that it will not require the CD-ROM
	disc.
	
	FoxPro, upon startup, does not care what the CD-ROM disc is so long as there is
	one in the drive. Using the incorrect one will remove the error, but Help will
	not be available and all Help options will be grayed out on the main menu.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro without the Help file.
	
	2. Start Visual FoxPro without no CD-ROM disc in the CD-ROM drive. It will
	  terminate with one of the noted error messages.
	
	Additional query words: VFoxWin I/O failure input output setup
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
