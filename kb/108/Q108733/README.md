---
layout: page
title: "Q108733: X400: Setting Up the Gateway as a EiconCard Server"
permalink: kb/108/Q108733/
---

## Q108733: X400: Setting Up the Gateway as a EiconCard Server

	Article: Q108733
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 allows use of either (or both)
	the TP0/X.25, TP4/CLNP transports. This article explains how to set up the
	TP0/X.25 transport in the EiconCard Server mode.
	
	MORE INFORMATION
	================
	
	With this configuration, the EiconCard and OSI LAN Gateway software are both
	installed on a PC. This PC, acting as an EiconCard server, is used to run the
	X.400 gateway. The EiconCard is also shared out for other systems to use the
	EiconCard Redirector to connect to the EiconCard.
	
	To use this configuration:
	
	- On the Gateway PC, install the EiconCard and the OSI LAN Gateway DOS GATEWAY
	  software.
	
	- In the Gateway PC, modify the AUTOEXEC.BAT file to set up the computer as an
	  EiconCard server.
	
	The following example shows part of the AUTOEXEC.BAT file for a Gateway PC that
	is an EiconCard server, servicing other redirector PCs on a Microsoft Compatible
	Network.
	
	X25serv is the server name, MYPASS is the server password, and 12 is the maximum
	number of workstation sessions.
	
	  REM Starting LAN Manager
	  NET START ...
	
	  REM Starting X.25
	  NABIOS SRV x25serv MYPASS/12
	  ECLOAD
	
	On a Novell NetWare Network using Microsoft MS-DOS version 5.0 is installed and
	NetBIOS is to be run.
	
	  REM Starting Novell with NETBIOS emulation
	  IPX
	  NET5
	  NETBIOS
	
	  REM Starting X.25
	  NABIOS SRV x25serv MYPASS/12
	  ECLOAD
	
	Here is an example showing the same configuration, except that NetBIOS is not
	present:
	
	  REM Starting Novell without NetBIOS emulation
	  IPX
	  NET5
	
	  REM Starting X.25
	  NABIOS SPX SRV x25serv MYPASS/12
	  ECLOAD
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
