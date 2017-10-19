---
layout: page
title: "Q150606: Event ID 4024 with Services for the Macintosh"
permalink: /kb/150/Q150606/
---

## Q150606: Event ID 4024 with Services for the Macintosh

	Article: Q150606
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an Apple Laserwriter on your network and set it up for
	spooling through Windows NT, the following message appears in Event Viewer:
	
	  Event id: 4024 Source: MacPrint Type: Error
	  The printer <printer name> could not be registered on the AppleTalk
	  Network
	
	CAUSE
	=====
	
	The share name created for this printer on the Windows NT Server is the same as
	the printer name.
	
	Apple Laserwriter printers connected to the network with a network interface card
	(NIC) or other adapter will broadcast themselves on the network. If the printer
	is created on a Windows NT Server for use by other clients on the network, and
	the share name is the same as the printer name, the printer will not be able to
	register itself on the network.
	
	RESOLUTION
	==========
	
	Change the share name of the printer to something other than the printer name.
	
	Additional query words: prodnt Macintosh SFM
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
