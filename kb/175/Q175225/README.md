---
layout: page
title: "Q175225: Disabling Context Menus Does Not Disable Key Combinations"
permalink: /kb/175/Q175225/
---

## Q175225: Disabling Context Menus Does Not Disable Key Combinations

{% raw %}

	Article: Q175225
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool kbui kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you disable context menus in Windows NT Explorer using system policies,
	you may still be able to access an object's properties by pressing ALT+ENTER.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: The files included with this hotfix are system files. You must use Mv.exe
	/x /d from the Windows NT Resource Kit to overwrite the files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The ability to disable context menus in Windows NT Explorer using system
	policies was added in Windows NT 4.0 Service Pack 2 and later.
	
	Additional query words: accelerator Windows NT Explorer My Computer print manager NoViewContextMenu NoFileMenu policy right-click
	
	======================================================================
	Keywords          : kbtool kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
