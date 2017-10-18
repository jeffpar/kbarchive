---
layout: page
title: "Q93038: Startup and Exit Sounds May Not Work with WFWG"
permalink: kb/093/Q93038/
---

## Q93038: Startup and Exit Sounds May Not Work with WFWG

	Article: Q93038
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the sound files for Windows for Workgroups are on a network drive, the
	Startup or Exit system sounds, which are assigned in the Sound section of
	Control Panel, may not play when you start or exit Windows for Workgroups.
	
	CAUSE
	=====
	
	The network redirector may not be active during the startup or exit of Windows
	for Workgroups.
	
	WORKAROUND
	==========
	
	Startup and Exit sounds should be placed on a local drive. Any other system
	sound files can be placed on a network share.
	
	MORE INFORMATION
	================
	
	On an installation created by SETUP /N on a Microsoft LAN Manager or Windows for
	Workgroups server, the Startup and Exit sounds do work correctly; this is
	because the real mode redirector is active.
	
	On an installation created by SETUP /N on a Novell server, the sounds work only
	if they are located on the Novell server. This is because MSIPX, not the real
	mode redirector, is loaded.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
