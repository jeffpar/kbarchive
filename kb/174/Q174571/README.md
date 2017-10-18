---
layout: page
title: "Q174571: INFO: Making the Alerter Service Automatic during Unattended Set"
permalink: kb/174/Q174571/
---

## Q174571: INFO: Making the Alerter Service Automatic during Unattended Set

	Article: Q174571
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to enable the Alerter service and set it to start
	automatically during an unattended Setup of Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The Alerter Service in Windows NT notifies selected users and computers of
	administrative alerts that occur on a computer. Normally, this service is either
	to be turned on by the administrator remotely, or on each workstation. The
	following steps describe how to enable the Alerter service and set it to start
	automatically during an unattended Setup.
	
	To turn on the Alerter Service automatically during setup, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. On a computer that already has Windows NT 4.0 installed, click Start button,
	  point to Settings, click Control Panel, and then double-click Services.
	
	2. Start Alerter service, and change its Startup option to automatic.
	
	3. Start Registry Editor (Regedit.exe), and go to the following subkey:
	
	  HKEY_Local_Machine\System\CurrentControlSet\Services\Alerter
	
	4. From the Registry menu, click Export Registry File.
	
	5. Save the file with a recognizable file name (Alerter.reg reccomended, you may
	  save with any name but the steps below will need to be adjusted to match your
	  filename).
	
	6. Open your Cmdlines.txt file under the $OEM$ directory on the distribution
	  server.
	
	7. Edit the [commands] section and add the following line:
	
	        .\Regedit.exe /s .\Alerter.reg
	
	8. Copy the files Alerter.reg and Regedit.exe to the $OEM$ directory on the
	  disbribution server.
	
	9. Edit the Unattend.txt file [unattended], and add the following:
	
	        OemPreinstall = yes
	
	It is recommended that you test your Alerter.reg file by double clicking on the
	file in Windows NT before attempting the Unattended setup.
	
	Then restart the computer (not just logon as a different user) and check Control
	Panel, Services to confirm the Alerter Service is turned on.
	
	Additional query words: Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
