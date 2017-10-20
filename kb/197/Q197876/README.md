---
layout: page
title: "Q197876: Poor Performance with Access MDB Stored on Windows NT Server"
permalink: /kb/197/Q197876/
---

## Q197876: Poor Performance with Access MDB Stored on Windows NT Server

{% raw %}

	Article: Q197876
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that it takes several seconds longer to open an Access MDB file
	stored on a Windows NT Server computer than if the same MDB is stored on a
	Windows95 or Windows 98 computer.
	
	CAUSE
	=====
	
	This problem occurs because the Windows NT Server computer is not optimized for
	file sharing.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Open Control Panel on the Microsoft Windows NT Server.
	
	2. Double-click the Network icon.
	
	3. Click the Services tab.
	
	4. Double-click the Server Service.
	
	5. Click to select the Maximize Throughput For File Sharing radio button.
	
	6. Restart the server.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If the MDB files are stored on a Windows95 or Windows 98 computer, the
	performance returns to normal.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
