---
layout: page
title: "Q168496: Windows 95 RPC Does Not Retry Failed Named Pipe Connections"
permalink: /kb/168/Q168496/
---

## Q168496: Windows 95 RPC Does Not Retry Failed Named Pipe Connections

	Article: Q168496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr1 osr2 win95 kbAPI kbRPC kbSDKPlatform kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 clients using Remote Procedure Calls (RPCs) to connect to an endpoint
	over named pipes may receive the following error message:
	
	  The RPC server is unavailable. Do you wish to continue?
	
	CAUSE
	=====
	
	The named pipe connection code in the Windows 95 RPC run-time libraries does not
	make any retry attempts after a failed named pipe connect.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95 and OSR2,
	and later versions of this file:
	
	  RPCLTC1.DLL  version 4.00.951  dated 2/13/97  8,192 bytes
	
	A version of this file that resolves this problem is included in DCOM95 for
	Windows 95, version 1.3, and can be downloaded from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/com/dcom/dcom95/dcom1_3.asp
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The updated RPC stub code has been modified to retry failed named pipe connects
	up to 20 times. This is identical to the method used in Microsoft Windows NT.
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr1 osr2 win95 kbAPI kbRPC kbSDKPlatform kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
