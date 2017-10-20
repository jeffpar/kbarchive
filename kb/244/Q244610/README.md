---
layout: page
title: "Q244610: Err Msg: The Protected Storage Service Terminated with..."
permalink: /kb/244/Q244610/
---

## Q244610: Err Msg: The Protected Storage Service Terminated with...

{% raw %}

	Article: Q244610
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When this occurs, you see the following entry in the Event log:
	
	  Event ID 7024
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  Description: The Protected Storage Service Terminated with Service-Specific
	  Error 2148270091
	
	CAUSE
	=====
	
	The information for the Protected Storage store in the Windows NT registry is
	corrupted or invalid.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	First, try the steps in the following article in the Microsoft Knowledge Base:
	
	  Q189649 Err Msg: Protected Storage Failed to Start
	
	If those steps do not resolve the issue and there is not any information in the
	Protected Storage store that needs to be preserved, you can delete and rebuild
	the registry information. Note that you must be logged on to the computer with
	an account that is a member of the local Administrators group. If the computer
	is a domain controller, you must be logged on as a member of the Domain
	Administrators group.
	
	1. Start Registry Editor (Regedit.exe).
	
	2. Press F3, or click Find on the Edit menu. In the Find What box, type
	  "protected storage" (without the quotation marks), and then click OK.
	
	3. Back up each item that is found by clicking Export Registry File on the
	  Registry menu. Select the location in which to save the file, name the file,
	  and then click Save.
	
	4. After you save the registry file, press the DELETE key, or click Delete on
	  the Edit menu. Click Yes to confirm the deletion. Note that the deletion is
	  immediate and permanent. There is no "undo" functionality.
	
	5. Press F3 to find the next item that refers to Protected Storage, save the
	  key, and then delete the key. Repeat this process until there are no more
	  items in the registry that refer to Protected Storage.
	
	6. Click Start, point to Find, and then click "Files or Folders". In the Named
	  box, type "pstores.exe" (without the quotation marks), and then click OK.
	  This file is located by default in the %SystemRoot%\System32 folder.
	  Right-click the file, and then click Rename. Change the file name to
	  Pstores.exe.old.
	
	7. In the "Find: All Files" window, change the file name to Psbase.dll, and then
	  click Find Now. Rename this file to Psbase.dll.old.
	
	8. Close all open windows, and then reapply the current service pack. Note that
	  when a service pack is reapplied, if a message is displayed asking whether an
	  OEM version of a file should be overwritten, you should choose not to
	  overwrite the file. For more information please consult your hardware
	  manufacturer.
	
	Note that while you are deleting the Protected Storage keys, you may not be able
	to delete some keys. If this is the case, try skipping to the next key, complete
	the steps, and reboot the computer. If this does not resolve the issue, it may
	be best to contact Microsoft Product Support Services for further assistance.
	Any Protected Storage keys that remain are protected by the system and deletion
	of these keys is not advised.
	
	By default, only the System account can access certain registry subkeys. To
	remove Protected Storage subkeys, you may need to manipulate the permissions for
	those subkeys. The default permissions for Everyone is Read. In order to delete
	a locked down registry object, the currently logged on user must have Full
	Control of the object. To change the registry key permissions, use Registry
	Editor (Regedt32.exe). For more information about how to use Registry Editor to
	change permissions for registry objects, please consult the Registry Editor
	online Help file.
	
	MORE INFORMATION
	================
	
	The Protected Storage store is a location in which confidential information is
	saved. This information is encrypted and cannot be viewed or copied to another
	system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
