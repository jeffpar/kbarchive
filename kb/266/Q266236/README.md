---
layout: page
title: "Q266236: HOWTO: Use Serial Comm with Windows CE Emulators"
permalink: /kb/266/Q266236/
---

## Q266236: HOWTO: Use Serial Comm with Windows CE Emulators

	Article: Q266236
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSETK
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The new PocketPC emulation does not require the Wceemuld driver in order for an
	application to use the serial port in emulation. This article describes the
	additional steps to set up the HPC Pro 3.0 and Palm-size 1.2 emulators for
	serial communications under Microsoft Windows NT 4.0 and Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	The Windows CE Platform emulators perform most of the functionality of a real
	device, with some limitations. In the case of the serial communications API, the
	emulators for the Palm-size PC 1.2 and HPC Pro 3.0 need to "talk" through a
	special driver in order to communicate over the serial port. However, the new
	PocketPC emulator does not need a special driver in order for an application to
	make use of the serial communications port.
	
	Steps for Windows NT 4
	----------------------
	
	The following are steps for setting up serial communications support for the HPC
	Pro 3.0 and Palm-size PC 1.2 emulators on a computer that is running Windows NT
	4.0. Note that in order to perform all of these steps you must be logged on to
	the system as a user in the Administrators group.
	
	1. Stop any applications that may be using the serial port.
	
	2. Stop the serial driver.
	
	  a. Open Control Panel.
	
	  b. Open the Devices application.
	
	  c. Click to select the device named Serial.
	
	  d. Click Stop.
	
	At this point you might consider disabling this driver so that if you
	occasionally stop and restart your system, you do not need to repeat step 2.
	
	3. Start the driver named Wceemuld.
	
	  a. Open Control Panel.
	
	  b. Open the Devices application.
	
	  c. Click to select the device named Wceemuld.
	
	  d. Click Start.
	
	Similar to step 2, you might consider setting this driver to Automatic so that it
	starts automatically when the system is started.
	
	Steps for Windows 2000
	----------------------
	
	In Windows 2000, manipulating drivers in this way requires some different steps.
	The following steps set up serial communications support for the HPC Pro 3.0 and
	Palm-size PC 1.2 emulators on a computer that is running Windows 2000:
	
	1. Stop any applications that may be using the serial port.
	
	2. Disable the serial port.
	
	  a. Right-click My Computer, and then click Properties.
	
	  b. Click the Hardware tab, and then click Device Manager.
	
	  c. Open the tree node named Ports (COMM & LPT).
	
	  d. Right-click a port node named Communications Port (COM1).
	
	  e. Click Disable. You will be prompted to restart Windows now. Click No.
	
	  f. Repeat steps d and e for each COM port.
	
	  g. Restart Windows 2000.
	
	3. Start the Wceemuld driver.
	
	  a. Open a command prompt.
	
	  b. Type the "Net" (without the quotation marks) command to start a service,
	     specifying Wceemuld. For example:
	
	  "net start wceemuld" (without the quotation marks)
	
	There are no steps described for Windows 9x because the emulators are not
	supported on this operating system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbVCeMb
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
