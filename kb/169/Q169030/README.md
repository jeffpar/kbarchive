---
layout: page
title: "Q169030: Uninstalling HP Direct Tape Access Changes System Icons"
permalink: /kb/169/Q169030/
---

## Q169030: Uninstalling HP Direct Tape Access Changes System Icons

{% raw %}

	Article: Q169030
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	After you uninstall Hewlett-Packard (HP) Direct Tape Access in Windows 95, icons
	for programs and other items may appear as generic document icons.
	
	CAUSE
	=====
	
	When HP Direct Tape Access is installed, it updates the registry to point to its
	custom icons. When HP Direct Tape Access is uninstalled using the Add/Remove
	Programs tool, the changes it made to the registry are not undone. Windows
	Explorer refers to the registry for information about which icons to display,
	but the registry points to icons that are no longer installed on the computer.
	As a result, Windows Explorer displays a generic document icon instead of the
	correct system icon.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (REGEDIT.EXE). Note that you should
	make a backup copy of the registry files (SYSTEM.DAT and USER.DAT) before you
	edit the registry.
	
	Use Registry Editor (Regedit.exe) to follow these steps:
	
	1. Create a "DefaultIcon" (without the quotation marks) subkey in the following
	  registry key, and specify a default value of "%1" (including quotation
	  marks):
	
	  HKEY_CLASSES_ROOT\exefile
	
	  If the HKEY_CLASSES_ROOT\exefile\DefaultIcon registry key already exists but
	  has a default value other than "%1" (including quotation marks) , change the
	  default value to "%1" (including quotation marks).
	
	2. Delete the following subkey from HKEY_CLASSES_ROOT\exefile\shellex:
	
	  IconHandler
	
	3. Create a "DefaultIcon" (without the quotation marks) subkey in the following
	  registry key, and specify a default value of "%1" (including quotation
	  marks)):
	
	  HKEY_CLASSES_ROOT\icofile
	
	  If the HKEY_CLASSES_ROOT\icofile\DefaultIcon registry key already exists but
	  has a default value other than "%1" (including quotation marks), change the
	  default value to "%1" (including quotation marks).
	
	4. Delete the following subkey from HKEY_CLASSES_ROOT\icofile\shellex:
	
	  IconHandler
	
	5. Close Registry Editor and restart your computer.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: ditto max icon shelliconcache shelli~1 seagate
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
