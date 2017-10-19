---
layout: page
title: "Q261969: StarLancer Err Msg: Invalid Page Fault in Module Kernel32.dll"
permalink: /kb/261/Q261969/
---

## Q261969: StarLancer Err Msg: Invalid Page Fault in Module Kernel32.dll

	Article: Q261969
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Starlancer, you may receive the following
	error message:
	
	  Lancer caused an invalid page fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the path to the StarLancer installation folder
	contains more than 44 characters.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall StarLancer, and then reinstall StarLancer in
	the default installation folder that is specified by StarLancer Setup.
	
	To uninstall StarLancer:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Starlancer, and then click Add/Remove.
	
	4. Click Uninstall, and then click OK.
	
	5. Click OK.
	
	To reinstall StarLancer:
	
	1. Insert the StarLancer CD-1 CD-ROM into the CD-ROM drive.
	
	  If StarLancer Setup does not start automatically:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of the CD-ROM drive.
	
	2. Follow the instructions on the screen to install StarLancer.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft StarLancer, version
	1.0.
	
	MORE INFORMATION
	================
	
	To install StarLancer in a folder other than the default installation folder,
	the path to the installation folder cannot contain more than 44 characters.
	
	Additional query words: 1.00 msgame star lancer gpf ipf hangs locks blue screen
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbStarlancerSearch kbStarlancer
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
