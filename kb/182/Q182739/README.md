---
layout: page
title: "Q182739: Lock Workstation Button Still Functions After Being Disabled"
permalink: /kb/182/Q182739/
---

## Q182739: Lock Workstation Button Still Functions After Being Disabled

{% raw %}

	Article: Q182739
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you disable the Lock Workstation button in the Windows NT Security dialog
	box, the Lock Workstation button may still function normally.
	
	CAUSE
	=====
	
	This behavior can occur if the Novell IntraNetWare client version 4.11a for
	Windows NT is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Novell IntraNetWare client, and install the
	Microsoft Client Service for NetWare. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then double-click Network.
	
	2. On the Services tab, click the Novell IntraNetWare client in the Network
	  Services box, and then click Remove.
	
	3. Click Add.
	
	4. In the Network Services box, click Client Service For NetWare, and then click
	  OK.
	
	5. Click OK.
	
	6. When you are prompted to restart the computer, do so.
	
	MORE INFORMATION
	================
	
	For additional information, see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q174840
	  TITLE : Disabling Buttons in the Windows NT Security Dialog Box
	
	  ARTICLE-ID: Q172124
	  TITLE : Poledit.exe Not Updated During WinNT SP3 Installation
	
	Additional query words: disabled locked buttons
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
