---
layout: page
title: "Q179094: Draw98: How to Remove (Uninstall) Microsoft Draw 98"
permalink: /kb/179/Q179094/
---

## Q179094: Draw98: How to Remove (Uninstall) Microsoft Draw 98

	Article: Q179094
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Draw 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	If you remove the Office Art component from Microsoft Publisher through Publisher
	Setup, the Microsoft Draw 98 component will not be removed. If you completely
	remove Microsoft Publisher, Microsoft Draw 98 still will not be removed if you
	have any other OLE client Microsoft Office programs installed on your computer.
	
	CAUSE
	=====
	
	This is by design. Microsoft Publisher uses the shared component Microsoft Draw
	98. Shared components cannot be removed as long as any program that uses the
	same component is still installed.
	
	WORKAROUND
	==========
	
	Microsoft Draw 98 can be removed only after Microsoft Publisher and any other
	Microsoft Office products (Microsoft Office for Windows 95 or Office 97) have
	been removed. However, you can remove the program manually. To remove Microsoft
	Draw 98 manually, you must delete the program files and the registry entries
	made by Microsoft Draw 98.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Delete the following files from the "C:\Program Files\Microsoft
	  Office\Office" folder:
	
	     Msdraw8.cnt
	     Msd8intl.dll
	     Msdraw8a.exe
	     Msdraw8.fts
	     Msdraw8.gid
	     Msdraw8.hlp
	     Msdraw8.opt
	
	2. Delete the following file from the "C:\Windows\System" folder:
	
	     Hlp95en.dll
	
	3. To delete the registry entries made by Microsoft Draw 98, click Start, click
	  Run, and then type "regedit" (without the quotation marks) in the Open box.
	
	4. Locate and delete the following key:
	
	     HKEY_CLASSES_ROOT\MSDraw.Drawing
	
	5. Locate and delete the following key:
	
	     HKEY_CLASSES_ROOT\MSDraw.Drawing.8
	
	6. Locate and delete the following key:
	
	     HKEY_CLASSES_ROOT\MSDraw.Drawing.8.1
	
	7. Locate and delete the following key:
	
	     HKEY_CLASSES_ROOT\CLSID\{000CA003-0000-0000-C000-000000000046}
	
	Additional query words: pub98 mspub98 pub_98 publisher98 ms_pub98 draw98 server application source uninstalled uninstall directory maintenance mode
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbDrawSearch kbDraw101
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	
