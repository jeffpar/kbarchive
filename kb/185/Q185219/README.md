---
layout: page
title: "Q185219: IIS 4.0 with Multiple Certificates May Return Error"
permalink: kb/185/Q185219/
---

## Q185219: IIS 4.0 with Multiple Certificates May Return Error

	Article: Q185219
	Product(s): Internet Information Server
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a 40-bit browser and try to connect to a 128- bit Internet
	Information Server (IIS) 4.0 computer using a secured connection, you may
	receive the following error instead of the 403.5 Forbidden SSL 128 required
	error message:
	
	  The server has received bad data from client
	
	CAUSE
	=====
	
	This problem occurs only if there are multiple certificates installed on the
	server. Schannel.dll does not handle multiple certificates correctly.
	
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
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
