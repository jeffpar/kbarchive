---
layout: page
title: "Q125747: Paradox for DOS Over CSNW Causes Windows NT to Hang"
permalink: kb/125/Q125747/
---

## Q125747: Paradox for DOS Over CSNW Causes Windows NT to Hang

	Article: Q125747
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start Paradox for DOS version 4.0 or 4.5 by running PDOXDOS.PIF on
	Windows NT version 3.5 using Client Service for NetWare (CSNW) to connect to a
	NetWare server and you "shell out" to a command prompt from Paradox and run a
	few MS-DOS commands, Windows NT stops responding (hangs).
	
	
	CAUSE
	=====
	
	You used the NUPDATE utility to configure Paradox for a Microsoft LAN Manager
	network. However, because you are using CSNW, you are actually using a NetWare
	network protocol and must configure Paradox for a Novell network.
	
	RESOLUTION
	==========
	
	When you run Paradox on a Windows NT computer using CSNW to connect to a NetWare
	server, configure Paradox for a Novell network.
	
	NOTE: The same does not hold true when using Microsoft Gateway Services for
	NetWare (GSNW). When you run Paradox on a Windows NT computer connecting to a
	NetWare server through a Windows NT GSNW gateway, you are actually using an
	Server Message Block (SMB) network protocol and must configure Paradox for a
	Microsoft LAN Manager network.
	
	Paradox is manufactured by Borland, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt ncc nwcs ntvdm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
