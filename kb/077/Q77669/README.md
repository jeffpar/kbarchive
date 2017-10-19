---
layout: page
title: "Q77669: PC OS2: Install Fails If Windows Ported Application Is Active"
permalink: /kb/077/Q77669/
---

## Q77669: PC OS2: Install Fails If Windows Ported Application Is Active

	Article: Q77669
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of the Presentation Manager (PM) client software for Microsoft Mail
	for PC Networks can fail if there are other applications active within the OS/2
	environment that use the Windows Libraries for OS/2 (WLO).
	
	CAUSE
	=====
	
	The PM client software requires the WLO libraries in order to operate correctly.
	Updated versions of these libraries are copied to the destination directory
	during installation. If another application is running during installation that
	also uses the WLO libraries, the files cannot be copied and the installation
	will fail.
	
	RESOLUTION
	==========
	
	Shut down OS/2 and restart it without running any other WLO applications. The PM
	client installation will now operate correctly.
	
	Additional query words: 2.10 2.10d 2.10e 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
