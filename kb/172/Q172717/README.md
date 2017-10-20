---
layout: page
title: "Q172717: Error Message: Error FFh Attaching to NetWare Server"
permalink: /kb/172/Q172717/
---

## Q172717: Error Message: Error FFh Attaching to NetWare Server

{% raw %}

	Article: Q172717
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When you start Windows 95, you receive the following error message:
	
	  MSPSRV - <Printer Name>
	  Error FFh Attaching to NetWare Server <Server Name>
	
	- When you click OK on the Print Server tab in the properties for a printer
	  using the Microsoft Print Agent for NetWare Networks (MSPSRV), the computer
	  stops responding (hangs). When you restart the computer, you may receive the
	  error message listed above.
	
	CAUSE
	=====
	
	The Microsoft Print Agent for NetWare Networks is attempting to connect to a
	NetWare version 4.0 or earlier server. The connection is denied because the
	NetWare user license limit has been reached.
	
	MORE INFORMATION
	================
	
	MSPSRV uses a connection to the NetWare server. This connection is in addition
	to any other connections that may already exist between the Windows 95 client
	and the NetWare server (whether user or other MSPSRV connections).
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
