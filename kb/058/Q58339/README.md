---
layout: page
title: "Q58339: Windows 3.0 WIN.INI &#91;devices&#93; Section"
permalink: /kb/058/Q58339/
---

## Q58339: Windows 3.0 WIN.INI &#91;devices&#93; Section

{% raw %}

	Article: Q58339
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
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
	
	[DEVICES] SECTION
	-----------------
	
	The [devices] section names the active printers. The settings in this
	section reflect those in the [PrinterPorts] section, without the
	timeout values. This section is necessary for Windows Versions 2.x
	applications, which look for the [devices] section for this
	information.
	
	The [devices] section can contain settings of the following type:
	
	<device-name>=<driver-name, port-name>
	
	Purpose: The <device-name> keyname is the name of the device. The
	        <driver-name> value is the driver filename. If a device is
	        not currently connected, the <port-name> value should be the
	        string specified in the NullPort settings (in the [windows]
	        section).
	
	To change: Choose the Printers icon from the Control Panel window.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
