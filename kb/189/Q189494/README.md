---
layout: page
title: "Q189494: XCON: MTA 9277 RPC Cancel Call for Thread"
permalink: /kb/189/Q189494/
---

## Q189494: XCON: MTA 9277 RPC Cancel Call for Thread

{% raw %}

	Article: Q189494
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0, 5.0, 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A large number (up to hundreds) of Event IDs: 9277 appear in the application
	event log, similar to the following:
	
	  9277: MSExchangeMTA
	  The MTA has issued an RPC Cancel call for thread 22, Locality Table
	  Index:
	  142, Time (ms): 1804070, Cancel result: 0 [TRUMAN RPC inactive
	  ncacn_ip_tcp:192.168.20.3[1966] BASE IL] (14)
	
	CAUSE
	=====
	
	The message transfer agent (MTA) makes remote procedure calls (RPCs) to other
	MTAs in the normal course of operation. When the MTA has made a call to another
	computer and does not receive a response within two minutes, it cancels the RPC.
	This is normal. A massive number of these RPC cancels indicates any of several
	possible problems, such as the following:
	
	- network problems
	
	- heavy network traffic
	
	- network latency issues (not uncommon with frame relay networks with guaranty
	  bandwidths of less than 128 kilobits per second)
	
	- problems with the remote computer
	
	- router problems (or router changes, including filtering or other software
	  running on the routers that analyzes and filters or alters network packets)
	
	- protocol stack problems
	
	WORKAROUND
	==========
	
	To work around this problem, verify basic connectivity between the Exchange
	Server computers, or fix the network issues.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0, 5.0, 5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
