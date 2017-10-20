---
layout: page
title: "Q185137: Log Logical Record Request May Be Sent to Wrong Server"
permalink: /kb/185/Q185137/
---

## Q185137: Log Logical Record Request May Be Sent to Wrong Server

{% raw %}

	Article: Q185137
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running an application on a Windows NT computer with Client Services for
	NetWare (CSNW) or Gateway Services for NetWare (GSNW) installed, the NetWare API
	Log Logical Record may be sent to the wrong server. This could result in either
	an error being returned from the server or successful log logical record being
	sent to an invalid server.
	
	CAUSE
	=====
	
	In CSNW and GSNW, the log request is sent to the client's preferred server, or
	to the primary server if a preferred server has not been configured. If neither
	of these servers is available at the time of the request, the client software
	will try to locate a new server to make the request to. Thus, if the client is
	running an application that requests a log logical record against any server
	other than the preferred or primary, it may send the request to an invalid
	server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix supersedes the fix referred to in the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q185142
	  TITLE : NetWare API Log Logical Record may Incorrectly Succeed
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: Novell Novel
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
