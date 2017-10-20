---
layout: page
title: "Q151626: XCON: Sockets Error When Connecting to Foreign X.400 MTA"
permalink: /kb/151/Q151626/
---

## Q151626: XCON: Sockets Error When Connecting to Foreign X.400 MTA

{% raw %}

	Article: Q151626
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to foreign X.400 MTAs using the Microsoft Exchange X.400
	Connector via TCP/IP, SOCKETS ERRORs might occur. The following errors may be
	written to the NT Event log when the connection is initiated from the foreign
	MTA.
	
	  message NMI9236: Internal Operating System Error, severity 12
	
	  (BASE IL TCP/IP DRVR(22) Proc 262) 04-10-96 05:52:10pm
	  Receive socket closed on CB 1
	  Socket error 0
	
	  message NMI1279: X.400 Service Event, severity 8
	
	  (PLATFORM KERNEL(6) Proc 94) 04-10-96 05:52:10pm
	  Session - Remote initiation of Transport Disconnection
	  Control block index 1, type 1
	
	  message NMI2036: Internal Processing Error, severity 10
	
	  (BASE TCP/IP DRVR(22) Proc 138) 04-10-96 05:52:10pm
	  Lost connections to locality 4
	
	  message NMI9225: Internal Processing Error, severity 14
	
	  (BASE IL TCP/IP DRVR(22) Proc 255) 04-10-96 05:52:10pm
	  Bad message type 769 for socket CB 1 in state 2
	
	As a result, the foreign MTA is not able to establish a connection.
	
	RESOLUTION
	==========
	
	Analyzing the connection attempt shows that in the example below the remote MTA
	is not able to interpret a CONNECT CONFIRM. This frame was sent by Microsoft
	Exchange as an answer to a CONNECT REQUEST.
	
	The following is a traced CONNECT CONFIRM frame sent by Microsoft Exchange:
	
	ADDR  HEX                                                ASCII
	0000  00 00 A2 00 C0 4A 00 80  5F D4 A0 48 08 00 45 00  .....J.._..H..E.
	0010  00 54 E9 A6 40 00 20 06  04 0A 86 26 34 4D 86 26  .T..@.....&4M.&
	0020  2C 5A 00 66 06 13 01 CF  46 C8 5D 5B 6A 31 50 18  ,Z.f....F.][j1P.
	0030  22 09 60 73 00 00 03 11  00 2C 27 D0 01 CA 00 29  ".`s.....,'....)
	0040  00 C1 0D 53 57 49 53 53  4C 49 46 45 54 53 41 50  ...SWISSLIFETSAP
	0050  C2 0D 45 58 43 48 41 4E  47 45 54 53 41 50 31 C0  ..EXCHANGETSAP1.
	0060  01 0B                                             ..
	
	This trace shows Byte 37 as set to 11.
	A receiving MTA may refuse this frame and disconnect.
	
	STATUS
	======
	
	According to RFC-1006, the Byte at address 37 is reserved, meaning a receiving
	MTA should not try to interpret this Byte. Instead of refusing the frame it
	should accept it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
