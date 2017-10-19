---
layout: page
title: "Q86958: X400: The Structural Components of the X.400 Gateway"
permalink: /kb/086/Q86958/
---

## Q86958: X400: The Structural Components of the X.400 Gateway

	Article: Q86958
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The X.400 gateway is actually a series of modules that belong either to the
	Proprietary X.400 gateway or to the 1984 standard X.400 message handling system
	(MHS).
	
	MORE INFORMATION
	================
	
	All files are stored on the server; some are data files and some are executable
	files. The executable and data files include software components that are
	proprietary to the mail store, proprietary to the gateway, and standard to the
	X.400 message handling system. The following is an illustration:
	
	-------------       -------------       -------------
	|             |     |             |     |             |
	|  Microsoft  |<--->|  Gateway    |<--->|  X.400 MTA  |<---------->
	|   Mail      |     |             |     |             | to other mail
	|  Database   |     |             |     |             | systems via
	-------------       -------------       -------------  X.25
	
	The Microsoft Mail database contains the mailbox for the gateway, forwarding
	postoffices and the users for that postoffice. The message store contains the
	outgoing queue. The Microsoft message store and directory services are
	proprietary and are not X.400 compliant. The messages are currently in the
	following mail database directories:
	
	  MAI
	  KEY
	  MBG
	  ATT
	
	The gateway is the module that is defined as the process of interaction between
	the Microsoft mail store and format, and submission to the 1984 X.400 standard
	format. The gateway primarily changes the formats, encoding, and addressing of
	the messages. The gateway is proprietary and not X.400 compliant; however, the
	gateway converts messages to the X.400 compliant format and then submits the
	messages to the X.400 compliant message transfer agent (MTA). The gateway uses
	temporary work space to convert the message formats.
	
	  BODYPART.CFG
	  ADDRCONV.CFG
	  MAPTBL.IN
	
	The X.400 MTA is a 1984 MTA standard compliant. The ROUTE.CFG table is part of
	the MTA:
	
	  ROUTE.CFG
	  OUTCNCT.CFG
	  INCNCT.CFG
	  MTA.CFG
	  INCOMING
	  OUTGOING
	  CONTENT
	  BAD
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
