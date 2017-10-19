---
layout: page
title: "Q100651: Using TCP/IP Extensions to Integrate Subnet Domains"
permalink: /kb/100/Q100651/
---

## Q100651: Using TCP/IP Extensions to Integrate Subnet Domains

	Article: Q100651
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The TCP/IP Extensions for LAN Manager address issues relating to two of the
	three types of broadcasts: second class mail slots, and name query frames
	spanning subnets to allow domain functionality.
	
	When using the Microsoft TCP/IP Extensions with LAN Manager hub and node services
	to view multiple domains, make sure your node services are configured to
	propagate broadcasts for all appropriate domains within LANMAN.INI.
	
	MORE INFORMATION
	================
	
	Below is an example. To put an X in the checkboxes for the types of messages you
	want to route through the TCP/IP hub , click on the checkbox or put the cursor
	in the box and press the SPACEBAR.
	
	  [tcpip_node]
	
	  ..Hub Name:  <NetBIOS name of the hub service.
	  ..Hub IP Addr:  <IP address of the hub service> ex: 140 30 40 200
	    Domains : <domain name, domain name>
	
	  Sub-services:
	  [X] UAS  Replication
	  [X] Net View
	  [X] Logon Validation
	  [ ] Net Who
	  [ ] Net Send
	  [ ] Replication          User-Defined Mailslots
	  [ ] User-defined 1       [                                 ]
	  [ ] User-defined 2       [                                 ]
	  [ ] User-defined 3       [                                 ]
	
	Note: In the Domains field, list the domain(s) you want this TCP/IP node to serve
	on the line provided.
	
	REFERENCES
	==========
	
	Microsoft LAN Manager "Installation And Configuration Guide," pages 375-383
	
	Microsoft TCP/IP Extensions for LAN Manager by Margaret K. Johnson (Volume 3,
	Number 29 September 1992)
	
	Additional query words: 2.10a 2.1a 2.20 2.2 hub node
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
