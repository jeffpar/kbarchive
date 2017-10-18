---
layout: page
title: "Q96244: SMTP: Err Msg: Socket Error (123) When Starting Gateway"
permalink: kb/096/Q96244/
---

## Q96244: SMTP: Err Msg: Socket Error (123) When Starting Gateway

	Article: Q96244
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Immediately after starting the Microsoft Mail Gateway to SMTP, this message
	appears on the PC that runs the SMTP gateway:
	
	  socket error (123)
	
	CAUSE
	=====
	
	The gateway reports this error under one of the following conditions:
	
	- TCP/IP is not running when the gateway is started.
	
	- TCP/IP from the appropriate vendor is not running when the gateway is
	  started. At installation, the gateway is configured specifically for one of
	  five vendor's TCP/IP (LAN Manager TCP/IP and Novell Lan Workplace for DOS are
	  the only versions of TCP/IP version 3.0 supports).
	
	  For example, if the gateway is configured for FTP pc/TCP, and the gateway PC
	  runs LAN Manager TCP/IP, the error occurs when the gateway attempts to detect
	  the FTP software and does not find it.
	
	- SOCKET.EXE is not started when LAN Manager is used. SOCKET is provided with
	  Microsoft LAN Manager for MS-DOS.
	
	RESOLUTION
	==========
	
	These resolutions correspond to the causes above:
	
	- Start TCP/IP before running the gateway software.
	
	- Reconfigure the gateway to match the TCP/IP stack actually in use. Copy the
	  appropriate executable file from the Microsoft Mail Gateway to SMTP disk to
	  the directory that contains Microsoft Mail. Change the name of the gateway
	  file to SMTPGATE.EXE. The table below lists the appropriate files:
	
	     Executable    TCP/IP Software Vendor
	     --------------------------------------------------------------------
	
	     SMTPLMN.EXE   Microsoft LAN Manager for MS-DOS
	
	     SMTPFTP.EXE   PC/TCP Kernel from FTP Software, Inc.
	
	     SMTPNVL.EXE   Novell LAN WorkPlace for DOS (version 4.0)
	
	     SMTPWIN.EXE   Excelan EXOS 205T Intelligent Ethernet Controller with
	                   LAN WorkPlace Network Software (version 3.4)
	
	     SMTPXLN.EXE   WIN/TCP for DOS RunTime (version 4.1) from The
	                   Wollongong Group, Inc.
	
	  For example, if you are using Microsoft LAN Manager, use a command like the
	  following to copy the SMTPLMN.EXE file into the directory that contains the
	  Microsoft Mail file as SMTPGATE.EXE:
	
	  " copy a:\smtplmn.exe n:\mailexe\smtpgate.exe " (without the quotation marks)
	
	- The LAN Manager TCP/IP stack does not automatically load all sockets with the
	  LOAD TCPIP command. The SOCKETS command runs SOCKTSR.EXE to load the SMTP
	  socket required by the gateway. When you use LAN Manager TCP/IP, execute the
	  LOAD TCPIP and SOCKETS commands before starting the gateway.
	
	Additional query words: 2.10 3.00 Lan Error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
