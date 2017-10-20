---
layout: page
title: "Q184996: Incomplete List of NetWare Server Volumes with CSNW/GSNW"
permalink: /kb/184/Q184996/
---

## Q184996: Incomplete List of NetWare Server Volumes with CSNW/GSNW

{% raw %}

	Article: Q184996
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When browsing a NetWare server in Network Neighborhood or Explorer, not all
	volumes on the server are shown.
	
	CAUSE
	=====
	
	The redirector for Client Services for NetWare (CSNW) for Windows NT Workstation
	and Gateway Services for NetWare (GSNW) for Windows NT Server fails to show any
	volumes on a NetWare server past a volume which is dismounted.
	
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
	
	
	MORE INFORMATION
	================
	
	NetWare volumes are enumerated by CSNW and GSNW based on volume number. The
	redirector requests the name of each volume starting with volume 0, and
	progresses incrementally through the volumes on the NetWare server. If the
	NetWare server reports that a particular volume number is not mounted, CSNW/GSNW
	stops enumerating the volumes at that point and displays the list it has to the
	user. If the NetWare server has more volumes mounted past the volume number
	where one (or more) was dismounted, they will not be displayed. However, a user
	can still connect to any volume by specifying its name in the Map Network Drive
	dialog box or with a NET USE command at a command prompt.
	
	Additional query words: Novel enumeration
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
