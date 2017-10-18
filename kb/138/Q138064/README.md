---
layout: page
title: "Q138064: Search Order for OLE Servers"
permalink: kb/138/Q138064/
---

## Q138064: Search Order for OLE Servers

	Article: Q138064
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual Basic OLE server can be of three types:
	
	- 32-bit InProc Server (32-bit .dll)
	
	- 32-bit Local Server (32-bit .exe)
	
	- 16-bit Local Server (16-bit .exe)
	
	This article summarizes the order in which OLE servers are searched when a client
	makes a call to a server that has all three possible types registered on the
	computer. This search order depends on whether the client was a 32-bit or a
	16-bit Windows-based application. The first type of server found in the search
	order is the one that is started
	
	MORE INFORMATION
	================
	
	Search Order for a 32-bit Client
	--------------------------------
	
	32-bit InProc Server
	32-bit Local Server
	16-bit Local Server
	
	Search Order for a 16-bit Client
	--------------------------------
	
	32-bit Local Server (Only on a 32-bit Operating System)
	16-bit Local Server
	
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
