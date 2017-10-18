---
layout: page
title: "Q58338: Windows 3.0 WIN.INI [printerports] Section"
permalink: kb/058/Q58338/
---

## Q58338: Windows 3.0 WIN.INI [printerports] Section

	Article: Q58338
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	WININI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	MORE INFORMATION
	================
	
	[PRINTERPORTS] SECTION
	----------------------
	
	The [PrinterPorts] section lists the active and inactive printers that
	can be accessed by Windows device drivers, specifies the
	communications port or ports to which the devices are connected, and
	their corresponding timeout values.
	
	The [PrinterPorts] section can contain settings of the following type:
	
	<device-name>=<driver-name, port-name, TransmissionRetryTimeout,
	              DeviceNotSelectedTimeout>
	
	Purpose: The <device-name> keyname is the name of the device. The
	        <driver-name> value is the driver filename. If a device is
	        not currently connected, the <port-name> value should be the
	        string specified in the NullPort setting (in the [windows]
	        section).
	
	        The <TransmissionRetryTimeout> value determines the amount of
	        time (in seconds) allowed for attempted transmission retries.
	        The <DeviceNotSelectedTimeout> value determines the number of
	        seconds Print Manager will wait for a device to be switched
	        on. If these values are not set for a particular port,
	        Windows uses the default settings in the [windows] section.
	
	To change: Choose the Printers icon from the Control Panel window.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
