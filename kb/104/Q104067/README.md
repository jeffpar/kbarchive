---
layout: page
title: "Q104067: X400: Setting Up the Gateway as an EiconCard Redirector"
permalink: /kb/104/Q104067/
---

## Q104067: X400: Setting Up the Gateway as an EiconCard Redirector

	Article: Q104067
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 allows you to use the TP0/X.25
	transport, the TP4/CLNP transport, or both transports. This article describes
	how to set the TP0/X.25 transport in the EiconCard Redirector mode.
	
	With this configuration, the EiconCard and OSI LAN Gateway software are both
	installed on an EiconCard server computer. The OSI LAN Gateway DOS Workstation
	software is installed on a separate computer that is used to run the X.400
	gateway.
	
	MORE INFORMATION
	================
	
	To use this configuration:
	
	1. On the EiconCard server, install the EiconCard and the OSI LAN Gateway DOS
	  Gateway software.
	
	2. On the Gateway computer, install the EiconCard and the OSI LAN Gateway DOS
	  Workstation software.
	
	3. On the EiconCard server, modify the AUTOEXEC.BAT file to set up the computer
	  as an EiconCard server.
	
	4. On the Gateway computer, modify the AUTOEXEC.BAT file to set up the computer
	  as an EiconCard redirector.
	
	Example 1
	---------
	
	The following example shows parts of the AUTOEXEC.BAT files when the gateway
	computer is an EiconCard redirector. X25serv is the server name, mypassword is
	the server password, x25redir is the redirector name, and four workstation
	sessions are being supported on the redirector computer by the Eicon software.
	
	On the server (the computer with the EiconCard):
	
	  REM Starting LAN Manager
	  NET START ...
	
	  REM Starting X.25
	  NABIOS SRV x25serv mypassword /12
	  ECLOAD
	
	On the redirector (the gateway computer):
	
	  REM Starting LAN Manager
	  NET START ...
	
	  REM Starting X.25
	  NABIOS RDR x25redir /4
	  ECUSE x25serv mypassword
	
	Example 2
	---------
	
	This example shows the AUTOEXEC.BAT files needed for the gateway on a Novell
	NetWare network. Again, four workstation sessions are being supported on the
	redirector computer by the Eicon software. Microsoft MS-DOS version 5.0 is
	installed.
	
	On the server (the computer with the EiconCard):
	
	  REM Starting Novell with NetBIOS emulation
	  IPX
	  NET5
	  NETBIOS
	
	  REM Starting X.25
	  NABIOS SRV x25serv mypassword /12
	  ECLOAD
	
	On the redirector (the X.400 gateway computer):
	
	  REM Starting Novell with NetBIOS emulation
	  IPX
	  NET5
	  NETBIOS
	
	  REM Starting X.25
	  NABIOS RDR x25redir /4
	  ECUSE x25serv mypassword
	
	Additional query words: 3.20 PC
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
