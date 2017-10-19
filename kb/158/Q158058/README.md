---
layout: page
title: "Q158058: MSNDS Client Does Not Prompt to Log On"
permalink: /kb/158/Q158058/
---

## Q158058: MSNDS Client Does Not Prompt to Log On

	Article: Q158058
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft NetWare Directory Services client (MSNDS) to connect
	to a Novell NetWare version 3.x or 4.x server, you may not receive a prompt to
	log on.
	
	CAUSE
	=====
	
	MSNDS performs a Get Nearest Server NCP query rather than a Get General Server
	NCP query. A Get General Server query is issued by a Windows 95 client only if a
	Get Nearest Server query does not report any NetWare servers. In this case,
	MSNDS should perform a Get General Server NCP query instead.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
