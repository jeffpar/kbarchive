---
layout: page
title: "Q147555: Connecting to NetWare Servers Using Schedule Service"
permalink: /kb/147/Q147555/
---

## Q147555: Connecting to NetWare Servers Using Schedule Service

{% raw %}

	Article: Q147555
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a NetWare server from an application or batch
	file that runs under the Windows NT Schedule service, an "Access Denied" error
	message appears.
	
	CAUSE
	=====
	
	This problem occurs if the Schedule service runs using an account that does not
	have permissions on the NetWare server.
	
	RESOLUTION
	==========
	
	To work around this problem, do one or all of the following:
	
	- Add the account to the NTGATEWAY group on the NetWare server.
	
	- Use the following command syntax:
	
	  net use * \\<NetWare Server>\SYS /USER: <User Account>
	
	Additional query words: prodnt schedule AT
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
