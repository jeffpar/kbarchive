---
layout: page
title: "Q138766: Removing Default Items from Custom Network Neighborhood"
permalink: /kb/138/Q138766/
---

## Q138766: Removing Default Items from Custom Network Neighborhood

{% raw %}

	Article: Q138766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
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
	
	After you create a custom Network Neighborhood by using the Local
	User\Shell\Custom Folders\Custom Network Neighborhood setting in System Policy
	Editor, Network Neighborhood stills displays your default workgroup and the
	Entire Network icon.
	
	CAUSE
	=====
	
	This behavior is by design. There are individual settings in System Policy
	Editor that prevent the default workgroup and the Entire Network icon from being
	displayed in Network Neighborhood.
	
	RESOLUTION
	==========
	
	The following steps describe how to prevent the default workgroup and the Entire
	Network icon from being displayed in your custom Network Neighborhood.
	
	NOTE: You can edit the registry using System Policy Editor (Poledit.exe)
	     or Registry Editor (Regedit.exe). Check with your network
	     administrator before you make any changes to the registry. Note that
	     you should make a backup copy of the registry files (System.dat and
	     User.dat) before you edit the registry.
	
	     System Policy Editor is available in the Admin\Apptools\Poledit
	     folder on the Windows 95 CD-ROM. Use the Add/Remove Programs tool
	     in Control Panel to install System Policy Editor.
	
	     System Policy Editor is included in the CD-ROM version of Windows
	     95, but not in the floppy disk version. If you are using the floppy
	     disk version of Windows 95 and want to use System Policy Editor,
	     please see the following article in the Microsoft Knowledge Base for
	     information about the availability of System Policy Editor:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	1. Start System Policy Editor.
	
	2. On the File menu, click Open Registry.
	
	3. Double-click Local User.
	
	4. Double-click Shell.
	
	5. Double-click Restrictions.
	
	6. Click "No 'Entire Network' in Network Neighborhoods" and "No workgroup
	  contents in Network Neighborhood."
	
	7. Click OK.
	
	Additional query words: poledit
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
