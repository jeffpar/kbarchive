---
layout: page
title: "Q185142: NetWare API Log Logical Record May Incorrectly Succeed"
permalink: /kb/185/Q185142/
---

## Q185142: NetWare API Log Logical Record May Incorrectly Succeed

{% raw %}

	Article: Q185142
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
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
	Log Logical Record may have succeeded even though another client computer
	already owned the lock. Additionally, if a Windows NT computer owned the lock,
	other client requests for the same lock may have succeeded even though they
	should failed.
	
	CAUSE
	=====
	
	Incorrect data is being sent to the NetWare (or compatible) server in the Log
	Logical Record request by the Windows NT client. This causes the server to
	return a success to the log call with a different lock being logged. Thus, the
	call is succeeding even though the lock is already owned.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix supersedes the fix referred to in the following articles in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q185137
	  TITLE : Log Logical Record Request May Be Sent to Wrong Server
	
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
