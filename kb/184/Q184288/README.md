---
layout: page
title: "Q184288: GP Fault May Occur with IIS on Multiprocessor System"
permalink: /kb/184/Q184288/
---

## Q184288: GP Fault May Occur with IIS on Multiprocessor System

{% raw %}

	Article: Q184288
	Product(s): Internet Information Server
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A general protection (GP) fault may occur with Internet Information Server (IIS)
	when running on Windows NT 4.0, Service Pack 3 on a multi- processor system.
	When this problem occurs, a dialog box appears, indicating an application
	exception occurred in Inetinfo.exe. The exception number is 0xC0000005.
	
	CAUSE
	=====
	
	During initialization of IIS, a security key pair is generated for secure socket
	layer (SSL) connections. The security key may become corrupt if a client browser
	connects to the IIS server before the generation of the key is complete. If the
	key is corrupted, a subsequent SSL request using the key may cause the general
	protection fault.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: Secure
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
