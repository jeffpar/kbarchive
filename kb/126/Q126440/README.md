---
layout: page
title: "Q126440: Default Location of FoxPro for Macintosh Temporary Files"
permalink: /kb/126/Q126440/
---

## Q126440: Default Location of FoxPro for Macintosh Temporary Files

	Article: Q126440
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro for Macintosh will automatically store temporary files on the drive used
	to boot the Macintosh.
	
	If no corresponding entries are found in the CONFIG.FPM file, FoxPro will create
	a folder on the boot drive named Temporary Items. Temporary files will be stored
	in this folder. This occurs whether you install a full copy of FoxPro on the
	local hard drive or perform a network installation from a shared hard drive.
	
	To redirect temporary files from the default installation, place the following
	entries in the CONFIG.FPM file, and restart the Macintosh:
	
	     TMPFILES=<drive:folder>
	     EDITWORK=<drive:folder>
	     SORTWORK=<drive:folder>
	     PROGWORK=<drive:folder>
	
	For more information on configuring FoxPro, refer to the Installation and
	Configuration Guide.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
