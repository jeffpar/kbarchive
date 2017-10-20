---
layout: page
title: "Q132211: PC Win: GOODIES.DLL Fails Without a Tools Menu"
permalink: /kb/132/Q132211/
---

## Q132211: PC Win: GOODIES.DLL Fails Without a Tools Menu

{% raw %}

	Article: Q132211
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	- Microsoft Mail for PC Networks Resource Kit, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 1.0 of the Microsoft Mail for PC Networks Resource Kit, when the
	GOODIES.DLL is installed in Microsoft Mail for Windows that does not have a
	Tools menu, the following error will appear:
	
	  An entry in the list of mail extensions contains a syntax error and will be
	  ignored.
	
	
	CAUSE
	=====
	
	Some of the entries added to the [Custom Commands] section of the MSMAIL.INI
	during the installation of GOODIES.DLL add menu items to the Tools menu.
	
	The Tools menu is not a default menu item and must be added if it does not exist.
	
	RESOLUTION
	==========
	
	For the 16-bit Windows Client
	-----------------------------
	
	Add the following to the MSMAIL.INI [Custom Menus] section:
	
	  [Custom Menus]
	  Tools=3.0;&Tools;Window;Enable Tools menu
	
	Exit and save the changes, then restart the Windows client.
	
	For the 32-bit Windows Client
	-----------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	In HKEY_CURRENT_USER\Software\Microsoft\Mail\Custom Menus under Custom Menus, add
	a Value of TAG (REG_SZ) with a string as follows:
	
	  tools=3.0;&Tools;Window;Useful Development Toys
	
	NOTE: If the Custom Menus does not appear under Mail, you must add the key.
	
	Exit the registry editor. Restart the 32-bit Mail client.
	
	MORE INFORMATION
	================
	
	For additional information, please see Chapter One "Custom Commands" in version
	3.2 of Microsoft Mail for PC Networks "Technical Reference."
	
	For more information on the GOODIES.DLL and the options available, refer to pages
	161-162 of the Microsoft Mail Resource Kit.
	
	For more information on the 32-bit client, refer to the Windows NT Resource Kit
	(3.1) Part IV Windows NT Registry, pages 505 and 506.
	
	Additional query words: 3.20 3.20a 3.50 tool documentation reskit
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350 kbMailPCNRK
	Version           : WINDOWS:3.2,3.2a,3.5; :1.0
	
	=============================================================================
	

{% endraw %}
