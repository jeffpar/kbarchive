---
layout: page
title: "Q108427: WFWG Err Msg: Selected Server Cannot Be Found on the Network"
permalink: /kb/108/Q108427/
---

## Q108427: WFWG Err Msg: Selected Server Cannot Be Found on the Network

{% raw %}

	Article: Q108427
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kb3rdparty kbenv kberrmsg kbsetup kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Connect Network Drive dialog box of File Manager, if you manually enter
	the path for the computer you want to connect to, you may receive one of the
	following error messages:
	
	  The selected server cannot be found on the network.
	
	-or-
	
	  You may not be routing through your Novell NetWare servers.
	
	CAUSE
	=====
	
	These errors occur when the following conditions exist:
	
	- You have installed Windows for Workgroups 3.11 over version 3.1 with MSIPX
	  and have elected to keep MSIPX rather than use the ODI drivers.
	
	  -and-
	
	- You remove the NetBEUI protocol from the machine that you are either
	  connecting to or from.
	
	  Example of protocols installed on machines:
	
	  Computer 1               Computer 2
	  ----------               ----------
	
	  Novell IPX               NetBEUI
	  IPX/SPX with NetBIOS     Novell IPX
	                           IPX/SPX with NetBIOS
	
	  As long as NetBEUI is on one computer and not the other, the workstations
	  cannot communicate.
	
	These errors can also occur if don't have sharing enabled.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- In Network Setup, restore NetBEUI to the computer it was removed from.
	
	  -or-
	
	- In Network Setup, remove NetBEUI from the computer(s) that must allow NWLink
	  to communicate and route through a Novell server.
	
	Additional query words: 3.11 net beui novell
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
