---
layout: page
title: "Q233490: Access Violation When Using Multi-Protocol Router Function Calls"
permalink: /kb/233/Q233490/
---

## Q233490: Access Violation When Using Multi-Protocol Router Function Calls

{% raw %}

	Article: Q233490
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.5
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MprConfigServerBackup() and MprConfigServerRestore() functions
	from the Microsoft Multi-Protocol Router API on a computer running Window NT
	that has Microsoft Routing and Remote Access Upgrade for Windows NT 4.0 Server
	Hotfix Pack 3.0, you may receive an error message that an access violation
	exception has occurred.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information about Microsoft Routing and Remote Access Upgrade for
	Windows NT 4.0 Server Hotfix Pack 3.0, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q189594 RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.0,4.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
