---
layout: page
title: "Q263090: How to Install Win2K Print Driver in NT4 for Point and Print"
permalink: /kb/263/Q263090/
---

## Q263090: How to Install Win2K Print Driver in NT4 for Point and Print

{% raw %}

	Article: Q263090
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install a Microsoft Windows 2000 print driver on a
	Microsoft Windows NT 4.0 print server for point and print functionality.
	
	MORE INFORMATION
	================
	
	Section 1: Installing a Windows 2000 Print Driver
	-------------------------------------------------
	
	To install a Windows 2000 print driver on a Windows NT server, follow these steps
	from a Windows 2000-based computer on your network:
	
	NOTE: If you are using either a Windows NT 4.0 driver or a Windows 2000 driver
	that is supplied by a third party, these steps may not work due to differences
	in design or driver names.
	
	You may also encounter errors when you are managing drivers on a Windows NT
	4.0-based printer server from a Windows 2000-based computer. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q318577 You Receive an Error Message When You Manage a Windows NT 4.0 Printer
	  Server from Windows 2000
	
	1. Click Start, click Run, and then type the Uniform Naming Convention (UNC)
	  path for the Windows NT 4.0 print server (for example: \\Nt4srvname).
	
	  This action displays the shares on the remote computer.
	
	2. Open the Printers folder. This action takes you into the printers folder on
	  the remote computer.
	
	3. Right-click the icon for the printer for which you want to add the Windows
	  2000 driver, and then click Sharing.
	
	4. From the Sharing tab, click Additional Drivers, click the "Intel/Windows
	  2000" option, and then click OK.
	
	Section 2: Verifying That the Drivers Are Installed
	---------------------------------------------------
	
	To verify that the drivers are installed, do one of the following:
	
	From a Windows 2000-based computer:
	
	1. While you are still viewing the Printers folder of the remote, Windows NT
	  4.0-based computer, click File.
	
	2. Select Server Properties, and then click the Drivers tab.
	
	3. A list of installed printer drivers is displayed with the following
	  properties:
	
	  <Printer_Name> Intel Windows 2000 (Windows 2000 drivers)
	  <Printer_Name > Intel Windows NT 4.0 or 2000 (Windows NT 4.0 drivers)
	
	From a Windows NT 4.0-based computer:
	
	1. Run Regedt32.exe and navigate to the registry of the Windows NT 4.0 computer.
	  Open the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Environments\Windows
	  NT x86\Drivers
	
	2. Under this key, you should see the following two subkeys that list the
	  drivers currently installed:
	
	  Version-2 is for NT 4.0 drivers
	  Version-3 is for 2000 drivers
	
	NOTE: Windows 2000 print drivers can be installed simultaneously for all drivers
	on a Windows NT 4.0 system using the Fixprnsv.exe file from the Windows 2000
	Server CD-ROM.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q247196 Overview of Fixprnsv.exe
	
	  Q246855 Managing Network Printing in a Windows 2000 Environment
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
