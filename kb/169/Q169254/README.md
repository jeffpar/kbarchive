---
layout: page
title: "Q169254: PRB: Error -44 Encountered (Disk is Write Protected)"
permalink: /kb/169/Q169254/
---

## Q169254: PRB: Error -44 Encountered (Disk is Write Protected)

{% raw %}

	Article: Q169254
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing FoxBASE+ on a Macintosh from Disk 1, you may receive the
	following error messages:
	
	  Error -44 encountered (Disk is write protected) creating temp work
	  Foxtemxxx file" Ok where xxx is a random number.
	
	CAUSE
	=====
	
	You are running FoxInstall from Disk 1, but it should be copied to the FOX
	folder on your hard drive and run from the hard drive.
	
	RESOLUTION
	==========
	
	See Page Q-2 of the "Quick Start" manual to avoid this error. See text excerpt
	below.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the following instructions for setting up your Macintosh FoxBASE+ software.
	
	Quick Installation
	------------------
	
	1. Create a new folder and name it FOX.
	
	2. Open the distribution disk and drag all the files to the FOX folder.
	
	3. Open the FOX folder and double-click the FoxInstall icon.
	
	4. Enter your serial number, then enter either the demonstration or live
	  activation key.
	
	5. Start FoxBASE+/Mac by double-clicking the fox head icon.
	
	You will also want to drag the files from Disk 2 Microsoft FoxBASE+ for Apple
	Macintosh into the "FOXBASE+" default folder that is created by running the
	FoxInstall.
	
	REFERENCES
	==========
	
	Quick Start, Setup, Disk 1 Program, Disk Assy 224-096-003, 224-098-004,
	reinstall
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
