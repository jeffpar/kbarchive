---
layout: page
title: "Q120591: PRB: Maintenance Setup Runs When Trying to Install FoxPro"
permalink: kb/120/Q120591/
---

## Q120591: PRB: Maintenance Setup Runs When Trying to Install FoxPro

	Article: Q120591
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
	
	When you are trying to install FoxPro, the Setup program runs in maintenance
	mode, which prompts you to add or remove components of your current
	installation, reinstall FoxPro, or remove all FoxPro components.
	
	CAUSE
	=====
	
	The Setup program found files on the hard disk from a previous installation of
	FoxPro.
	
	RESOLUTION
	==========
	
	To install FoxPro from maintenance mode Setup, choose the Reinstall button.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Although the main FoxPro folder of a previous installation of FoxPro may have
	been deleted, some components of FoxPro may still exist in other folders, such
	as the System Folder. When the Setup program finds these components, it switches
	into maintenance mode.
	
	Additional query words: VFoxMac FoxMac akz
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
