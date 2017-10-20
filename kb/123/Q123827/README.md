---
layout: page
title: "Q123827: SMTP: Err Msg: Error (119) Network Write Error"
permalink: /kb/123/Q123827/
---

## Q123827: SMTP: Err Msg: Error (119) Network Write Error

{% raw %}

	Article: Q123827
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP may display this message:
	
	  Error (119) Network Write Error,
	
	CAUSE
	=====
	
	This error message appears if:
	
	- An error at the TCP or IP layer has occurred.
	
	- The other host has gone down.
	
	- The network between the gateway computer and the other host has gone down.
	
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
	
	NOTE: Mail sent to IBM TCP/IP version 2, Release 2 may result in this error
	message if the PUSH flag is not set. FTPs pc/TCP automatically sets the PUSH
	flag for outgoing packets.
	
	For Microsoft LAN Manager TCP/IP, ensure you are using the 2.2b version of the
	file TCPTSR.EXE. By default, TCPTSR.EXE is found in
	\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP. The 2.2b version of TCPTSR.EXE is dated
	2/1/94 and is 42716 bytes. Then, add the parameter ForcePushBit=1 to the [TCPIP]
	section of the PROTOCOL.INI file. It defaults to 0, but when it is set to 1, it
	causes the PUSH bit to be set on every outgoing packet.
	
	Additional query words: 2.10 3.00 ERRMSG smart host push flag
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP3xSearch kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.x
	
	=============================================================================
	

{% endraw %}
