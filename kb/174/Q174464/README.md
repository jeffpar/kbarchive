---
layout: page
title: "Q174464: Windows 95 RAS Client Cannot Ping Remote Network"
permalink: /kb/174/Q174464/
---

## Q174464: Windows 95 RAS Client Cannot Ping Remote Network

{% raw %}

	Article: Q174464
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0;Windows:95
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork win95 _IK12469 kbSDKPlatform kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial into a Windows NT 4.0 Remote Access Service (RAS) server using a
	Windows 95 RAS client with the TCP/IP protocol, you are unable to ping any hosts
	on the remote network, including the RAS server's IP addresses, and you may
	receive the following error message:
	
	  No domain server was available to validate your password. You may not be able
	  to gain access to some network resources.
	
	NOTE: This problem does not occur when dialing with a Windows NT 4.0 RAS client.
	
	
	CAUSE
	=====
	
	One or more services have been added or changed on the RAS server without
	reapplying the Microsoft Windows NT Service Pack 3 (SP3).
	
	
	
	RESOLUTION
	==========
	
	Reapply SP3 to the RAS server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork win95 _IK12469 kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
