---
layout: page
title: "Q321454: &quot;At Least One Service Or Driver Failed&quot; Err Msg on Startup"
permalink: /kb/321/Q321454/
---

## Q321454: &quot;At Least One Service Or Driver Failed&quot; Err Msg on Startup

	Article: Q321454
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When you view the System Log in the Event Viewer, you may notice the following
	event:
	
	  
	
	  Date:     <date>          Event ID: 7024
	  Time:     <time>          Source:   Service Control Manager
	  User:     N/A             Type:     Error
	  Computer: ComputerName    Category: None
	
	  Description:
	  The Protected Storage Service terminated with service-specific
	  error 2148270091.
	
	If you try to manually start the Protected Storage service, you are unsuccessful.
	
	CAUSE
	=====
	
	This issue may occur if the Protected Storage store information in the registry
	is corrupted or not valid.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall Protected Storage. To do this, follow these
	steps.
	
	Step 1: Remove Protected Storage Registry Keys
	----------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Log on to the computer as an administrator.
	
	2. Click Start, click Run, type "regedt32.exe" (without the quotation marks) in
	  the Open box, and then click OK.
	
	3. Maximize the HKEY_LOCAL_MACHINE on Local Machine window if it is not already
	  maximized.
	
	4. Locate the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Protected Storage System Provider
	
	  NOTE: This registry key may appear to be unavailable (appear dimmed).
	
	5. On the Security menu, click Owner. Click Take Ownership.
	
	6. On the Security menu, click Permissions.
	
	7. In the Registry Key Permissions dialog box, click Add, click Administrators
	  in the Names list, click Add, click Full Control in the "Type of Access"
	  list, and then click OK.
	
	8. Click to select the "Replace Permission on Existing Subkeys" check box, and
	  then click OK.
	
	9. Click Yes to confirm the permission replacement on all existing subkeys in
	  Protected Storage System Provider.
	
	10. Quit Registry Editor.
	
	11. Click Start, click Run, type "regedit.exe" (without the quotation marks) in
	  the Open box, and then click OK.
	
	12. Locate the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Protected Storage System Provider
	
	13. On the Registry menu, click Export Registry File.
	
	14. In the "File name" box, type "pstore1.reg" (without the quotation marks),
	  and then click Save.
	
	  NOTE: If you later have to restore this registry key, you can do so by
	  double-clicking the pstore1.reg file that you saved.
	
	15. On the Edit menu, click Delete.
	
	16. Click Yes to confirm the deletion of the Protected Storage System Provider
	  registry key.
	
	17. Locate the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ProtectedStorage
	
	18. On the Registry menu, click Export Registry File.
	
	19. In the "File name" box, type "pstore2.reg" (without the quotation marks),
	  and then click Save.
	
	  NOTE: If you later have to restore this registry key, you can do so by
	  double-clicking the pstore2.reg file that you saved.
	
	20. On the Edit menu, click Delete.
	
	21. Click Yes to confirm the deletion of the ProtectedStorage registry key.
	
	22. Quit Registry Editor.
	
	Step 2: Repair Microsoft Internet Explorer
	------------------------------------------
	
	If you have a later version of Microsoft Internet Explorer installed, perform a
	repair operation. To do this, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. Click "Microsoft Internet Explorer <version>", and then click
	  Add/Remove.
	
	3. Click Repair Internet Explorer, and then click OK.
	
	4. Click Yes when you are prompted to confirm the Internet Explorer installation
	  repair.
	
	5. Restart the computer when prompted.
	
	Step 3: Reinstall Protected Storage
	-----------------------------------
	
	1. Log on to Windows as an administrator.
	
	2. Click Start, click Run, type "cmd" (without the quotation marks) in the Open
	  box, and then click OK.
	
	3. Change directory to <drive>:\%SYSTEMROOT%\system32 (where <drive>
	  is the drive on which Windows is installed). For example, type the following
	  command, and then press ENTER.
	
	  cd\winnt\system32
	
	4. Type "pstores.exe -install" (without the quotation marks), and then press
	  ENTER.
	
	5. Close the command prompt.
	
	6. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	7. Verify that the Protected Storage service is started and that it is
	  configured for automatic startup.
	
	Additional query words: pstores protected storage registry
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
