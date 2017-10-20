---
layout: page
title: "Q179983: RDR Sessions on UNC Name Images May Log Off Prematurely"
permalink: /kb/179/Q179983/
---

## Q179983: RDR Sessions on UNC Name Images May Log Off Prematurely

{% raw %}

	Article: Q179983
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
	
	The problem occurs when multiple sessions access an image as a UNC name. When
	the first session to access the file logs off, the second session can no longer
	access the image.
	
	Example
	-------
	
	Thread A impersonates a user and maps a file (typically, loads an image) using a
	UNC name. Another thread (thread B) impersonates a different user and maps the
	same file. Thread A logs off and thread A's session is logged off the server.
	Thread B cannot access the mapped file any longer.
	
	CAUSE
	=====
	
	Because of the way RDR and memory management work, thread B is accessing the
	mapped file on thread A's user ID. When both threads first access the server,
	two separate sessions are opened, creating two separate user IDs. However, when
	the session object is created to access the mapped file by thread B, and because
	it is the same file, it uses the same file object that was opened by thread A.
	The file object contains session information that the redirector uses to access
	the remote computer; therefore, thread B accesses the file on thread A's
	session.
	
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
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
