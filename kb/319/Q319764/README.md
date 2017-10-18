---
layout: page
title: "Q319764: FS2002: Error Message: Cannot Find the Default Flight"
permalink: kb/319/Q319764/
---

## Q319764: FS2002: Error Message: Cannot Find the Default Flight

	Article: Q319764
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Flight Simulator, you receive the following
	error message:
	
	  Microsoft Flight Simulator cannot find the default flight
	  (Flights\Other\Fltsim.flt). This file must exist for Flight Simulator to
	  start.
	
	CAUSE
	=====
	
	This behavior can occur when the Flight Simulator installation has become
	damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove Flight Simulator, use a clean boot to restart your
	computer, and then reinstall Flight Simulator to a new folder.
	
	A clean boot is a way to create a clean environment. When you start your computer
	with a clean boot, Windows starts and loads only basic devices and services. For
	information about how to use a clean boot and how to use a normal startup, see
	the "More Information" section later in this article.
	
	To remove Flight Simulator and then reinstall it after a clean boot, follow these
	steps:
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. In the list of currently installed programs, click Flight Simulator 2002, and
	  then click Change/Remove.
	
	4. Follow the on-screen instructions to completely uninstall the program.
	
	5. Use a clean boot to restart your computer.
	
	6. Insert the Flight Simulator CD-ROM into the CD-ROM drive or DVD-ROM drive.
	
	7. Click Start, and then click Control Panel.
	
	8. Click "Add or Remove Programs".
	
	9. Click Add New Programs.
	
	10. Click "CD or Floppy".
	
	11. Follow the on-screen instructions to complete the installation.
	
	  When the installation program asks you to confirm the destination folder for
	  Flight Simulator, browse to a folder other than the folder where the program
	  was previously installed.
	
	12. Use a normal startup to restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information about how to perform a clean boot and how to perform
	a normal startup, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	  Q267288 How to Perform a Clean Boot in Millennium Edition
	
	  Q281770 How to Perform Clean Boot Troubleshooting for Windows 2000
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
