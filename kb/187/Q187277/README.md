---
layout: page
title: "Q187277: The FTP PORT Command Fails in IIS 3.0"
permalink: /kb/187/Q187277/
---

## Q187277: The FTP PORT Command Fails in IIS 3.0

{% raw %}

	Article: Q187277
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There is the possibility that, when the PORT command is sent to the FTP services
	on a Microsoft Internet Information Server (IIS) version 3.0 system that has
	more than one network interface card, the PORT command will fail with the
	following error:
	
	  Error 425, can't open data connection
	
	CAUSE
	=====
	
	When the FTP server connects to the client's data socket, IIS 3.0 will bind the
	socket to the first available address on the system. After applying this patch
	IIS 3.0 will now bind to the address of the user initiating the request.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbOSWinSearch kbOSWinNT400 kbiis300 kbOSWinNTSearch
	Version           : WinNT:3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
