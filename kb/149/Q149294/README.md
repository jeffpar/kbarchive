---
layout: page
title: "Q149294: IBM CA/400 Gathers Incomplete List of Partner APPC LU Aliases"
permalink: /kb/149/Q149294/
---

## Q149294: IBM CA/400 Gathers Incomplete List of Partner APPC LU Aliases

	Article: Q149294
	Product(s): Microsoft SNA Server
	Version(s): winnt:2.1,2.11,3.0 (all SP)
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.1, 2.11, 3.0 (all SP) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use IBM Client Access/400 v3r1 on top of the SNA Windows 3.x client,
	and you select the Cancel Button in the SNA Server EHNAPPC Security dialog, it
	will not cycle through all of the partner APPC LU aliases available in SNA
	Server Admin.
	
	This security dialog will appear when you start the IBM Client Access/400 Setup
	applet during installation. An incomplete list may also appear in the Systems
	list in the Browse Folders dialog box of the Network Connections (Folders)
	applet.
	
	NOTE: This problem has been seen with IBM CA/400 v3r1, but it does not seem to be
	an issue with v3r1m1.
	
	CAUSE
	=====
	
	In the SNA Server EHNAPPC Security dialog box, CA/400 gathers a list of all the
	APPC LUs partnered with the local LU. If CA/400 reaches a Remote APPC LU on a
	pending or inactive connection, it will stop at that LU.
	
	To test what LUs are available to the client:
	
	1. Start the SNA Server 5250 applet.
	
	2. Click Session Configuration on the Session menu.
	
	3. In the Session Configuration dialog box, open the Partner LU Alias list box.
	  It should contain the complete list of partnered APPC LUs.
	
	WORKAROUND
	==========
	
	In SNA Server Admin, un-partner any unavailable Remote APPC LUs. They can be
	left un-partnered or re-partnered to place them at the bottom of the list. Save
	the configuration and restart SNA Server service.
	
	Additional query words: prodsna Client Access IBM CA/400 CA\400
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ210NT kbSNAServ211NT
	Version           : winnt:2.1,2.11,3.0 (all SP)
	
	=============================================================================
	
