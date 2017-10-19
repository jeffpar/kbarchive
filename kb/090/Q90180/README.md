---
layout: page
title: "Q90180: NCB Performance and Piggybackacks"
permalink: /kb/090/Q90180/
---

## Q90180: NCB Performance and Piggybackacks

	Article: Q90180
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	On file servers and workstations that are heavily used, be sure that
	PIGGYBACKACKS is set to 1 (default value, ON). When "piggybacked"
	acknowledgments are used, a computer that receives a request for data can send
	an acknowledgment of the request and the data itself in the same frame, cutting
	down on network traffic overhead. Using piggybacked acknowledgments increases
	file-transfer performance.
	
	MORE INFORMATION
	================
	
	Tests indicate poor performance when you send data in one direction only or do a
	very simple send-wait-receive ping-pong with piggybackack turned on. This occurs
	because the receiving NetBEUI stack does not send its acknowledgment until the
	T2 timer pop, thus slowing the network traffic.
	
	By turning PIGGYBACKACKS off, these tests perform as expected.
	
	In real-world scenarios, PIGGYBACKACKS should be left on. In most cases, data is
	transferred in both directions and is not contingent on the completion of an
	earlier request.
	
	
	Turning PIGGYBACKACKS off will result in higher network traffic and degraded
	performance.
	
	Additional query words: 2.0 2.00 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
