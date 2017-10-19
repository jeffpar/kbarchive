---
layout: page
title: "Q99566: Possible Causes for Net 3100 (Default) Errors"
permalink: /kb/099/Q99566/
---

## Q99566: Possible Causes for Net 3100 (Default) Errors

	Article: Q99566
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Over the course of 6-8 hours, the error log fills up with WORKSTATION 3100
	errors (one every few minutes), then the network dies.
	
	CAUSE
	=====
	
	NET3100 is the default error message: it is displayed when you have nothing else
	to map the error to. Some possible causes:
	
	- There may be a physical problem on network. Check cabling, NIC cards,
	  concentrators, transceivers and wiring closet.
	
	- Uncertified Arcnet cards may be in use.
	
	- A third party NetBIOS may not be sufficiently compatible with system
	  software.
	
	- Too much stress on server.
	
	- Database applications may be running in an MS-DOS box under OS/2 on the
	  server.
	
	- The group servers may have the wrong server name account.
	
	WORKAROUND
	==========
	
	Take appropriate actions for any cause you can isolate.
	
	Additional query words: adapter 2.20 2.10a 2.1a 2.1 2.10 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
