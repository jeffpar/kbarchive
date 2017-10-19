---
layout: page
title: "Q266419: How to Disable Network Browsing But Keep UNC Functionality"
permalink: /kb/266/Q266419/
---

## Q266419: How to Disable Network Browsing But Keep UNC Functionality

	Article: Q266419
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kburl
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to use System Policy Editor to make network browsing
	unavailable but retain shortcuts that use universal naming convention (UNC)
	paths.
	
	MORE INFORMATION
	================
	
	You can edit the registry by using the System Policy Editor (Poledit.exe). Check
	with your network administrator before you make any changes to the registry.
	
	System Policy Editor (Poledit.exe) is available in the Admin\Apptools\Poledit
	folder on the Windows 95 compact disc. Use the Add/Remove Programs tool in
	Control Panel to install System Policy Editor.
	
	NOTE: If you are using the Microsoft Office 97 system policy templates that come
	with the Office 97 Resource Kit, you must use the Office 97 Resource Kit or
	Windows NT 4.0 Resource Kit version of the System Policy Editor.
	
	Policy.exe is a self-extracting executable file that contains Poledit.exe. To
	download this file from Microsoft's online services, visit the following Web
	site:
	
	  http://www.microsoft.com/office/ork/appa/appa.htm#dex4
	
	To use System Policy Editor to edit the registry, follow these steps:
	
	1. Start System Policy Editor (Poledit.exe).
	
	2. Double-click Default User.
	
	3. Click Shell, and then click Restrictions.
	
	4. Click to select the No Entire Network in Network Neighborhood check box.
	
	5. Click to select the No workgroup contents in Network Neighborhood check box.
	
	6. Click OK, and then quit System Policy Editor. At the prompt, save the changes
	  to the policy.
	
	7. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kburl 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
