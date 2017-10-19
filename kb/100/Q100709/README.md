---
layout: page
title: "Q100709: SMTP: Err Msg: Network_read: Lost Network Connection"
permalink: /kb/100/Q100709/
---

## Q100709: SMTP: Err Msg: Network_read: Lost Network Connection

	Article: Q100709
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP may display this message:
	
	  ERROR Network_read: Lost network connection
	  SMTP_recv: system error
	
	CAUSE
	=====
	
	This error message appears if:
	
	- An error at the TCP or IP layer has occurred.
	
	- The other host has gone down.
	
	- The network between the Gateway computer and the other host has gone down.
	
	- The other host may require that the PUSH flag be sent to push the SMTP packet
	  up to the SMTP software, instead of remaining in the incoming buffer.
	
	RESOLUTION
	==========
	
	You can test these possible causes by attempting to telnet to port 25 of the
	smarthost and resending the message. This can usually be done by pressing
	SPACEBAR and typing "25" (without the quotation marks) after the IP address on
	the telnet command line.
	
	If the error message appears frequently, check the network with a protocol
	analyzer to determine the exact problem.
	
	NOTE: Mail sent to IBM TCP/IP Version 2, Release 2 may result in this error
	message if the PUSH flag is not set. FTP's pc/TCP automatically sets the PUSH
	flag for outgoing packets. For Microsoft LAN Manager TCP/IP, please contact
	Microsoft LAN Manager support for information on the availability to
	automatically set the PUSH flag.
	
	For Microsoft LAN Manager TCP/IP, ensure you are using version 2.2b (dated
	2/1/94, 42,716 bytes) or later of the file TCPTSR.EXE. By default, TCPTSR.EXE is
	found in the LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP directory. Then add the parameter
	ForcePushBit=1 to the [TCPIP] section of the PROTOCOL.INI file. It defaults to
	0, but when it is set to 1, it causes the PUSH bit to be set on every outgoing
	packet.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Tcptsru.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/20/WIN/EN-US/Tcptsru.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 2.10 3.00 ERRMSG smart host push flag
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
