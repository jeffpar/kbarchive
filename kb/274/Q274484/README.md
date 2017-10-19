---
layout: page
title: "Q274484: HOWTO: Grant Users the Access to Add Visual Basic Components"
permalink: /kb/274/Q274484/
---

## Q274484: HOWTO: Grant Users the Access to Add Visual Basic Components

	Article: Q274484
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,4.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbVS kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When Visual Basic 6.0 is installed by an administrator on either Windows NT 4.0
	or Windows 2000, generic users can run the Visual Basic application. However, if
	they try to add Components from the Project menu drop-down list box, they
	receive the following error message:
	
	  Access Denied
	
	This article demonstrates how to grant users access to add components without
	giving them Administrator or Power User rights.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To grant user access, create a new group of users.
	
	In Windows 2000, the steps are:
	
	1. On the Start menu, point to Programs, point to Administrative Tools, and then
	  click Computer Management.
	
	2. To expand the branches, click the plus symbol (+) next to System Tools under
	  the Tree tab, and then click the plus symbol (+) next to Local Users and
	  Groups.
	
	3. Right-click the Groups folder to view the shortcut menu. Click the New Group
	  menu to view the New Group dialog box.
	
	4. Give the new group a Group Name, such as VB Programmers, a description, and
	  then add one or more Members. Click Create to save the new group.
	
	NOTE: In Windows NT 4.0, use User Manager for Domains.
	
	After you finish the preceding steps, modify the registry. Modify the permissions
	on the following keys and add VB Programmers to these keys with full control
	inheriting the permissions down the key as follows:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following keys in the registry:
	
	  HKEY_CLASSES_ROOT\TypeLib
	  HKEY_CLASSES_ROOT\Interface
	  HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface
	  HKEY_LOCAL_MACHINE\SOFTWARE\Classes\TypeLib
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Visual Basic
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio
	
	3. For each key, click Permissions on the Security menu. Add the VB Programmers
	  group to the key, and then click Apply.
	
	4. Select the new VB Programmers group, and then select the Allow Full Control
	  check box. Click Allow inheritable permissions from parent to propagate to
	  this object.
	
	NOTE: On Windows NT 4.0, click Replace permission on existing sub keys.
	
	5. Click Apply, and then click OK.
	
	6. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbVS kbDSupport 
	Technology        : kbOSWin2000 kbVBSearch kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbOSWinNTSearch
	Version           : :2000,4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
