---
layout: page
title: "Q89559: Cannot Browse LAN Manager 1.x Servers in WFWG"
permalink: /kb/089/Q89559/
---

## Q89559: Cannot Browse LAN Manager 1.x Servers in WFWG

{% raw %}

	Article: Q89559
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups (WFWG) computers are unable to browse (view) LAN Manager
	1.x server names in the Connect Network Drive, Connect Network Printer, and
	Select Computer dialog boxes. In addition, you cannot view servers in Workgroup
	Connections by using the NET VIEW \\Servername command.
	
	This is because LAN Manager 1.x does not use domains.
	
	MORE INFORMATION
	================
	
	LAN Manager version 2.0 was the first version to create domains for groups of
	users. Because LAN Manager 1.x does not use domains, Windows for Workgroups
	cannot tell that domains exist unless explicitly told. To access LAN Manager 1.x
	servers in Windows for Workgroups, manually type the path to the network
	resource in the dialog box.
	
	Additional query words: 3.10 3.11 lm wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	

{% endraw %}
