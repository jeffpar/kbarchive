---
layout: page
title: "Q107088: FaxDrv: Send Fax Command Fails to Install in Word for Windows"
permalink: /kb/107/Q107088/
---

## Q107088: FaxDrv: Send Fax Command Fails to Install in Word for Windows

	Article: Q107088
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the Microsoft Fax Windows printer driver, the Send Fax
	command does not automatically install under the Word for Windows menus.
	
	CAUSE
	=====
	
	When the Word for Windows directory (usually, WINWORD) is not part of the
	current MS-DOS path, the installer does not check further to see if it is
	installed on the workstation. The path is normally set from the AUTOEXEC.BAT
	file and usually contains the path to the Word for Windows executable files.
	
	RESOLUTION
	==========
	
	Manually install the Send Fax command by using one of the following two
	methods:
	
	Method 1
	--------
	
	1. Remove the Microsoft Fax driver from the Windows Control Panel.
	
	2. Quit Windows.
	
	3. Add Word for Windows to the path line of the AUTOEXEC.BAT file.
	
	4. Reboot the computer and go back into Windows.
	
	5. Install the Microsoft Fax driver again.
	
	6. The path is no longer required for the driver and can be changed back to its
	  original state.
	
	Method 2
	--------
	
	Run the FAXAUTO.DOC file from the Microsoft Fax disk. This automatically installs
	the Send Fax macro, then exits to Windows.
	
	MORE INFORMATION
	================
	
	The Microsoft Fax printer driver is included with the Microsoft Mail version 3.2
	server package and with version 3.0a of the Microsoft Mail Gateway to Fax.
	
	Additional query words: 3.00a manual
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300a
	Version           : MS-DOS:3.0a
	
	=============================================================================
	
