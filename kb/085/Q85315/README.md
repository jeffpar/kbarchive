---
layout: page
title: "Q85315: Norton Desktop 2.0 Adds Options to Windows 3.1 File Manager"
permalink: /kb/085/Q85315/
---

## Q85315: Norton Desktop 2.0 Adds Options to Windows 3.1 File Manager

{% raw %}

	Article: Q85315
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Norton Desktop for Windows version 2.0 is installed on a system with
	Microsoft Windows, Norton Desktop adds two new options to File Manager: an
	Undelete command is added to the File menu, and a Norton menu is added (to the
	left of the Help menu).
	
	MORE INFORMATION
	================
	
	When you install Norton Desktop for Windows 2.0, it adds the above two options
	under the File Manager menu bar, and makes the following changes to the
	WINFILE.INI file:
	
	- In the [AddOns] section of the file, Norton Desktop adds the line:
	
	        NortonDesktopDLL=NFMEXT.DLL
	      
	
	- In the [Settings] section of the file, Norton Desktop adds the line:
	
	  undelete.dll=NFMEXT.DLL
	
	- Norton Desktop adds a new section called [Norton Desktop] and adds the line:
	
	  ToolsTitle=&Norton
	
	As a result of these modifications to WINFILE.INI, File Manager is modified in
	the following ways:
	
	- An Undelete command is added to the File menu. The Undelete command allows
	  you to undelete files from File Manager.
	
	- A new menu, Norton, is added to the left of the Help menu. The Norton menu
	  allows quick access to the following Norton Desktop programs:
	
	  Desktop Editor
	  Calculator (NDW version)
	  KeyFinder
	  Scheduler
	  Screen Saver (Norton "Sleeper" program)
	  SuperFind
	  Unerase
	  Shredder
	  Norton Disk Doctor
	  Norton Backup
	  Norton AntiVirus
	  System Info
	  Icon Editor
	  Batch Builder
	  Macro Builder
	  Norton Viewer
	
	The product included here, Norton Desktop for Windows, is manufactured by a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: calc 3.10 3.1 3.11 Norton NDW desktop addons addins
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
