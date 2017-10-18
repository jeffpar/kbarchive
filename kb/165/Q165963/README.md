---
layout: page
title: "Q165963: HP Vectra Pauses During WinNT Install or During Cold Restarts"
permalink: kb/165/Q165963/
---

## Q165963: HP Vectra Pauses During WinNT Install or During Cold Restarts

	Article: Q165963
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you install Windows NT on a HP Vectra computer, Setup pauses or appears to
	stop responding for a very long time at the point it is trying to copy the
	Kbdus.dll from the CD-ROM.
	
	-or-
	
	The computer will stop responding during restart while entering GUI-mode setup
	while displaying dots (for example, ...) on the blue kernel screen loading the
	Fastfat.sys file.
	
	Select [VGA MODE] when starting into GUI-mode setup to display the device driver
	that causes the computer to stop responding.
	
	After Windows NT finishes installation and you power off the computer to perform
	a cold restart, Windows NT again seems to stop responding for several minutes
	while displaying the dots (for example, . . . .) on the boot screen.
	
	Once you get into Windows NT, everything works normally and a warm restart (that
	is, Shutdown - Restart) starts normally without the long pause.
	
	CAUSE
	=====
	
	This problem has been isolated to a machine BIOS setting for the secondary IDE
	controller when only an IDE CD-ROM is attached.
	
	To verify that this is the cause, perform the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Devices icon.
	
	2. Change the startup type of CD-ROM from system to disabled.
	
	3. Shutdown Windows NT and perform a cold restart of the computer. If the pause
	  does not occur or the system responds as expected, then communications to the
	  CD-ROM is the source of the system not responding.
	
	4. Re-enable the CD-ROM device in the Control Panel Devices tool to start at
	  startup.
	
	RESOLUTION
	==========
	
	The system BIOS has configured the secondary controller to show a CD-ROM
	attached. This setting needs to be disabled. To disable the setting, perform the
	following steps:
	
	1. Go in to the system BIOS and disable the secondary controller by following
	  this BIOS option tree:
	
	  configuration
	     hard drives
	        hard drive #2 --> enter
	           auto or none - select none.  (f7 or f8 to select)
	
	2. Exit and save the BIOS options.
	
	3. Power off the computer and cold start it. The computer should start normally
	  and not pause while starting Windows NT. After you log on, you should have
	  access to the CD-ROM drive.
	
	
	Additional query words: hang dots boot kbdus fastfat
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
