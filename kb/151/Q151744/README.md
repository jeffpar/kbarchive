---
layout: page
title: "Q151744: Network Client 3.0 with IPX Needs Direct Hosting on Server"
permalink: kb/151/Q151744/
---

## Q151744: Network Client 3.0 with IPX Needs Direct Hosting on Server

	Article: Q151744
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Network Client 3.0 computer cannot communicate with a Windows NT server using
	NWLink as the only protocol. A trace shows that the server does not respond to
	any client requests.
	
	CAUSE
	=====
	
	Assuming that IPX/SPX has been loaded on the server, the problem may be related
	to direct hosting. To communicate with a Windows NT Server by means of NWLink
	(IPX), the Network Client 3.0 needs direct hosting enabled on the server. This
	is normally enabled by default, but can be disabled.
	
	RESOLUTION
	==========
	
	Enable direct hosting at the server.
	
	1. In Control Panel, double-click the Network icon, and click Bindings.
	
	2. Select the Server.
	
	3. Either:
	
	  a. If the line "Server->Nwlink Ipx/Spx Compatible" (without quotes) is
	     there but disabled, select the line and click Enable. Click OK and quit
	     Network Settings.
	
	  b. If the line is not there, remove and reinstall the IPX/SPX compatible
	     transport. This will enable direct hosting by default.
	
	Alternatively, remove NWLink on the client and use another protocol.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.50 3.51
	
	=============================================================================
	
