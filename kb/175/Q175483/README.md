---
layout: page
title: "Q175483: XCON: Configuration Sample - Exchange X.400 Connector &amp; Infonet"
permalink: kb/175/Q175483/
---

## Q175483: XCON: Configuration Sample - Exchange X.400 Connector &amp; Infonet

	Article: Q175483
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a sample configuration between Microsoft Exchange
	Server's X.400 Connector and the Infonet X.400 message transfer agent (MTA)
	(net-BSD) platform.
	
	The connection data presented in this article is sample data used as an example.
	For further information, please consult your Infonet technical references.
	
	MORE INFORMATION
	================
	
	To successfully connect Microsoft Exchange Server and Infonet by an X.400
	connector, both sides of the connection must be configured properly. The
	following sample configuration is intended to be used only as a guideline. Your
	configuration will vary.
	
	Exchange Server Connection Information
	--------------------------------------
	
	Exchange MTA name : Highlanders
	Exchange TSAP : None
	Exchange IP address : 200.200.200.1
	
	Infonet Connection Information
	------------------------------
	
	INFONET MTA name : Infonet
	Infonet TSAP : 1032 (text value)
	Infonet IP Address : 200.200.200.10
	
	Exchange Server Configuration Example
	-------------------------------------
	
	TCP/IP Transport stack values
	
	  TSEL
	  SSEL
	  PSEL
	
	X.400 Connector Properties
	--------------------------
	
	General Tab:
	
	  Remote MTA Name : Infonet
	  Remote MTA Password : no password used.
	
	Stack tab:
	
	  IP address : 200.200.200.10 "This is the Infonet IP address."
	
	  (Outgoing OSI Information)
	
	  T selector : 1032 (Display in text)
	  S selector :
	  P selector :
	
	  (Incoming OSI Information)
	
	  T selector : 1032
	  S selector :
	  P selector :
	
	Override Tab:
	
	  All left in default values. Local MTA name may be used if the Infonet MTA
	  refers to the Exchange Server MTA by a name other than the Windows NT server
	  name. This configuration does not use any override values.
	
	Advanced TAB:
	
	  MTA conformance: 1988 normal mode
	  X.400 Link options: Allow BP-15 (in addition to BP-14)
	  Two way alternate: unchecked
	  Allow Msexchange Content: Unchecked
	
	Address Space:
	
	  Address space should contain the routing information. For example:
	
	     C=us;a=test;p=infonet;
	
	Connected Site:
	
	  This entry should be left blank. Connected sites are used between Exchange
	  Server sites only.
	
	Infonet Configuration Example
	-----------------------------
	
	This file is the configuration file, residing on the Infonet side and defining
	the connection to the Exchange Server MTA.
	
	     mtamaint: print conn
	     Entry Name : HIGHLANDERS
	     Connection : HIGHLANDERS
	     Status : enabled
	     Operating Hours : 00:00-23:59
	     Cost : 0
	     Out Connection Info:
	     dm=mono,rts=88,pp=on,rpsap="1032"/Internet=200.200.200.1,
	     lpsap="1032"/Internet=200.200.200.10,cp=30,wn=5
	
	     Enable Alternate : true
	     In Connection Info: dm=mono,rts=88,rpsap=Internet=200.200.200.1,
	     lpsap=Internet=200.200.200.10,cp=30,wn=5
	
	     Comment: This is the new connection to Microsoft Exchange Server MTA.
	
	     mtamaint: print mta
	     Entry Name: HIGHLANDERS
	     MTA: HIGHLANDERS
	     Queue File: _HIGHLANDERS
	     Queue Size: 0 (rep=0 high=0 normal=0 low=0 def=0)
	     Cost: 0
	     Management Domain: C=us/ADMD=test/PRMD=highlanders/ 
	     Connection: highlanders
	     Protocol: 88p1
	     Schedule Info: high=-1:0:0:E,normal=-1:0:0:E,low=-1:0:0:E,report=-1:0:0:
	     E,poll=1:0:0:E,any=0:0:0:E,max_txps=1
	
	     Comment: New MTA name
	
	Domain routing segment Route
	----------------------------
	
	  C=us/ADMD=test/PRMD=highlanders/ HIGHLANDERS
	  C=us/ADMD=test/PRMD=infonet @local
	
	
	Additional query words: infonet 51 security x.400 setup howto
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
