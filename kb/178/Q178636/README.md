---
layout: page
title: "Q178636: Directory Listing Not Correct When Using Russian Characters"
permalink: /kb/178/Q178636/
---

## Q178636: Directory Listing Not Correct When Using Russian Characters

{% raw %}

	Article: Q178636
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.11,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	- Microsoft Windows 3.11 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a directory containing Russian characters on a File and Print
	Services for NetWare (FPNW) server using a Windows-based client operating system
	with a NetWare redirector and then press F5 to refresh the Windows Explorer or
	File Manager view on that client, you notice that all directories without
	Russian characters (such as the default SYSVOL directories Login, Mail, Public,
	and System) disappear.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin3xSearch kbZNotKeyword3 kbWin311 kbServicesNetwareSearch kbFPNW400
	Version           : WinNT:3.11,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
