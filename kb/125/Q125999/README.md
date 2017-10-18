---
layout: page
title: "Q125999: System Log Event ID 7003: The Microsoft Windows Internet Name..."
permalink: kb/125/Q125999/
---

## Q125999: System Log Event ID 7003: The Microsoft Windows Internet Name...

	Article: Q125999
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you start Windows NT Server, the following error message may appear in the
	Event Viewer System Log:
	
	  Event ID: 7003
	  Source: Service Control Manager
	  Description: MDI service
	  The Microsoft Windows Internet Name Service service
	  depends on the following non-existent service NTLMSSP.
	
	CAUSE
	=====
	
	This error message occurs when the RPC Configuration service is not installed or
	is disabled. Several services, such as DHCP and Windows Internet Name Service
	(WINS), rely on this service. If the RPC configuration service is removed they
	fail with the Event ID 7003 error message.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Run Control Panel, choose Services, and change the service to a type other
	  than disabled.
	
	  -or-
	
	- Run Control Panel, choose Network, and reinstall the RPC Configuration
	  service.
	
	Additional query words: domain domains prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
