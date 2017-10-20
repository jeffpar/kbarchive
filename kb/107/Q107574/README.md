---
layout: page
title: "Q107574: Err Msg: Error Loading PROTMAN.DOS After Using SETUP /H"
permalink: /kb/107/Q107574/
---

## Q107574: Err Msg: Error Loading PROTMAN.DOS After Using SETUP /H

{% raw %}

	Article: Q107574
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you run SETUP /H with Windows for Workgroups 3.11 and reboot the machine,
	you may receive the following error message after the NET START command is run
	from the AUTOEXEC.BAT file:
	
	  PRO0011E: Equal sign missing between keyword and value Error loading device
	  driver PROTMAN.DOS
	
	MORE INFORMATION
	================
	
	SETUP /H:<FILE>, where <FILE> is the name of the system settings
	file, is a batch mode process that sets up Windows for Workgroups with little or
	no user interaction. SETUP.SHH, located on Disk 1, is the systems settings
	template that can be copied or modified to create a custom system settings
	file.
	
	This error message occurs when the MakeProtocol=yes entry appears in the
	[network] section of the SETUP.SHH file and the [protocol.ini] section is
	missing. This results in invalid sections that the NET command cannot read being
	written to the PROTOCOL.INI file. Removing these unnecessary sections in the
	PROTOCOL.INI file corrects this problem.
	
	The [protocol.ini] section tells Setup which sections from the SETUP.SHH file to
	delete after it creates the new PROTOCOL.INI file. The [protocol.ini] section in
	the SETUP.SHH file was not required in installations prior to Windows for
	Workgroups 3.11.
	
	Additional query words: 3.11 protman setup/h
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
