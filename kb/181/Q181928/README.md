---
layout: page
title: "Q181928: Using POLEDIT to Save Policy Files on NetWare Servers May Fail"
permalink: /kb/181/Q181928/
---

## Q181928: Using POLEDIT to Save Policy Files on NetWare Servers May Fail

{% raw %}

	Article: Q181928
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save policy files directly to a NetWare version 4.11 server and use
	Client Services for NetWare, you may receive the following error:
	
	  Unable to open s:\public\andyl.pol: error 1317 occurred
	
	
	This error will occur even if the Windows NT computer is not going through
	Gateway Services for NetWare (GSNW), but using Client Services for NetWare
	(CSNW) to connect directly to the Novell server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After you apply the fix, shut down your system properly and restart.
	
	NOTE: Service Pack 3 must be applied to the computer running Windows NT 4.0 prior
	to applying this fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetwareSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
