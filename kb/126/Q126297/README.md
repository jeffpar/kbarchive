---
layout: page
title: "Q126297: WinNT 3.5 RAS Server Doesn't Call Back Non-3.5 Clients Over ISDN"
permalink: /kb/126/Q126297/
---

## Q126297: WinNT 3.5 RAS Server Doesn't Call Back Non-3.5 Clients Over ISDN

	Article: Q126297
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 3.5 computer running Remote Access Service (RAS) fails to complete
	a callback to non-Windows NT 3.5 ISDN RAS clients (including Windows NT 3.1 RAS
	clients, Windows for Workgroups 3.11 RAS clients, and RAS 1.1a clients).
	
	The non-Windows NT 3.5 RAS client times out while waiting for the callback. The
	RAS server stays in a "calling back user" state and maintains control of the
	port.
	
	NOTE: This problem only occurs when connecting over ISDN.
	
	CAUSE
	=====
	
	There is a problem in the Windows NT 3.5 file, RASSRV.EXE. From Tony Bell:
	"Change made to RASSRV.EXE to set the framing type to AMB. This causes the
	Pcimac driver to start its inband negotiation from the server side and keeps the
	client from being stuck waiting for this negotiation to begin."
	
	WORKAROUND
	----------
	
	Use Windows NT 3.5 for both the RAS client and RAS server.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
