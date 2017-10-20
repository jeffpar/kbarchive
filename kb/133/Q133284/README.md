---
layout: page
title: "Q133284: Folders/Shortcuts Re-created When You Run Setup Again"
permalink: /kb/133/Q133284/
---

## Q133284: Folders/Shortcuts Re-created When You Run Setup Again

{% raw %}

	Article: Q133284
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup to install Windows 95 over an existing installation of
	Windows 95, some folders and shortcuts that you may have removed from the Start
	menu are re-created.
	
	The following actions can also re-create folders and shortcuts that you have
	removed:
	
	- Running the following command:
	
	  grpconv /m
	
	- Double-clicking a .grp file.
	
	- Double-clicking Runonce.exe in the Windows\System folder.
	
	CAUSE
	=====
	
	When a Windows 3.x program group is converted, the .grp file is not removed from
	the Windows folder. Each time you run Setup, it searches for and converts all
	the .grp files.
	
	RESOLUTION
	==========
	
	After you run Setup successfully, remove all the .grp files and the Progman.ini
	file from the Windows folder.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	During the Run Once portion of Setup, Setup searches for all the Windows 3.x
	program group files and converts them to shortcuts on the Start menu. If you run
	Setup (or the group converter tool or Runonce.exe) again, all the group files
	are converted to shortcuts again.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119941 How to Rebuild, Convert, Troubleshoot Folders in Windows 95
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
