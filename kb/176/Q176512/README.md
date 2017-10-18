---
layout: page
title: "Q176512: RRAS Event ID 20050: The User Domain&#92;User Connected to..."
permalink: kb/176/Q176512/
---

## Q176512: RRAS Event ID 20050: The User Domain&#92;User Connected to...

	Article: Q176512
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to establish a dial-up connection to a Routing and Remote
	Access Service (RRAS) server from a Microsoft Windows 95 Dial-Up Networking
	(DUN) client, you may be able to log on but you are disconnected within the
	first 20 seconds. When you check the System event log on the RRAS Server, the
	following event message is displayed:
	
	  Event ID : 20050
	  Source : Router
	  Description: The user <Domain>\<Username> connected to port
	  <Com x> has been disconnected because the computer could not be
	  projected onto the network.
	
	If you try to use a Dial-Up Networking (DUN) connection to troubleshoot RRAS
	connectivity, it may not work, and it may generate the preceding error message.
	A Microsoft Windows NT-based computer that is using a DUN connection to connect
	to the RRAS computer generates an error message.
	
	CAUSE
	=====
	
	The DUN credentials that are being used on the Windows 95 client are the same as
	a Demand Dial interface on the RRAS server. This causes the RRAS Server to force
	IP address negotiation with the RAS client as if it were a router.
	
	
	RESOLUTION
	==========
	
	To work around this problem, you will need to do one of the following:
	
	- Re-create the Demand Dial interface using a different set of credentials.
	
	  -or-
	
	- Change the credentials of the DUN client so that they do not match any of the
	  Demand Dial interfaces on the RRAS server. This can be done by editing the
	  DUN connection and changing the logon user name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
