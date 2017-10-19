---
layout: page
title: "Q184394: Upgrading PWS 1.x to 4.0 Leaves Network Service Entry"
permalink: /kb/184/Q184394/
---

## Q184394: Upgrading PWS 1.x to 4.0 Leaves Network Service Entry

	Article: Q184394
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a,95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you perform an upgrade from Microsoft Personal Web Server (PWS) version
	1.x for Windows 95 to version 4.0, Network properties still shows Personal Web
	Server listed as a networking service.
	
	WARNING: Do not try to remove the service from the Network properties applet,
	because this will de-register PWS version 4.0, requiring you to uninstall and
	reinstall the 4.0 version.
	
	CAUSE
	=====
	
	This problem is caused by a registry key that is left during the upgrade
	installation of the new Personal Web Server.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The PWS service registry entry can be removed by following these steps:
	
	1. Click the Start button.
	
	2. Click Run.
	
	3. Type "regedit" (without the quotation marks) in the dialog box and click OK.
	
	4. Browse and select the following key:
	
	     HKEY_LOCAL_MACHINE\Enum\Network\MSWEBSVR
	
	  NOTE: Verify that the key name displayed in the status bar on the bottom of
	  the Registry Editor matches the key you selected.
	
	5. Click Edit on the toolbar.
	
	6. Click Delete on the drop-down menu.
	
	7. Click Yes when asked if you are sure you want to delete the key.
	
	8. Exit the Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbiisSearch kbOSWinSearch kbiis400 kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a,95; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
