---
layout: page
title: "Q137042: SMTP: How the Gateway Uses Memory"
permalink: kb/137/Q137042/
---

## Q137042: SMTP: How the Gateway Uses Memory

	Article: Q137042
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SMTP gateway only uses conventional memory. To run the gateway, make sure
	that you have at least 375 kilobytes available.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q105290 SMTP: Err Msg: Insufficient Memory
	
	MORE INFORMATION
	================
	
	The gateway, SMTPGATE, uses two executables: SMTPGET and SMTPPUT. SMTPGET is
	spawned by SMTPGATE every two minutes (by default). SMTPGET is responsible for
	checking for mail destine for your SMTP environment: Outbound mail. SMTPPUT is
	only spawned by SMTPGATE when a request for connection to Port 25 is made to the
	gateway machine. SMTPPUT is responsible for mail destine to your Microsoft Mail
	environment: Inbound mail.
	
	Both SMTPGET and SMTPPUT are spawned into memory: the actual C call is "Spawnlp."
	They do not overlay the memory addresses of SMTPGATE; they use their share of
	the largest executable conventional memory space. When each executable is
	finished sending mail, it is unloaded from memory. If you look in the log file,
	you can see the lines:
	
	  spawning SMTPGET    This is where "spawnlp" is called.
	  spawn(SMTPGET)=0    This is the return code to indicate that SMTPGET was
	                      successful.
	
	The following is an example of a memory layout for the SMTP Gateway:
	
	                 Bytes Per
	Dependency      Record Multiple   Variable   Memory Req.   Files
	-------------------------------------------------------------------------
	
	Local users            37            50         1,850       ACCESS2.GLB
	
	Dispatch networks      38             1            38       One Network
	                                                           Connection
	
	Dispatch postoffice    90             1            90       One Network
	                                                           Connection
	
	External networks      45             1            45       NETWORK.GLB
	
	External postoffices  115             1           115       *.XTN
	
	Gateways               83             1            83       MASTER.GLB
	
	Gateway Maps           83             1            83       ADDR_MAP.CFG
	                                                           or *.NME
	                                               2,304
	
	        Size of SMTPGATE         74,655 (for Novell's TCP/IP)
	        Size of SMTPPUT          66,751
	        Size of SMTPGET         107,251
	
	        Total                   250,961
	
	        Message Body space      Dependent on Header and Message size.
	                                250,961 plus message body space
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
