---
layout: page
title: "Q174676: NetWare Authentication Failure When Logging On to NetWare Server"
permalink: /kb/174/Q174676/
---

## Q174676: NetWare Authentication Failure When Logging On to NetWare Server

{% raw %}

	Article: Q174676
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log off and then back on to a Novell NetWare server using Client
	Services for NetWare (CSNW) or Gateway Services for NetWare (GSNW), you may
	receive the following error message:
	
	  NetWare Authentication Failure
	
	  You cannot be authenticated on <NetWare Tree and Context> due to the
	  following reason: A connection to the server could not be made because
	  the limit on the number of concurrent connections for this account has
	  been reached.
	
	  Do you want to select another preferred server or context?
	
	CAUSE
	=====
	
	Windows NT does not disconnect from the NetWare server before attempting to log
	on again, and the setting to limit concurrent connections for your NetWare user
	account is enabled and set to 1 on the server.
	
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
	
	
	Additional query words: ipx spx nds directory services bindery 3.11 3.12 4.1 4.00
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
