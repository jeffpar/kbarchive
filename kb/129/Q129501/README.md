---
layout: page
title: "Q129501: Mac Srv: Mail Server and Client AppleTalk Protocols"
permalink: /kb/129/Q129501/
---

## Q129501: Mac Srv: Mail Server and Client AppleTalk Protocols

	Article: Q129501
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail for AppleTalk Networks uses the following AppleTalk protocols:
	
	- Name Binding Protocol (NBP)
	  NBP provides name lookup in the internet names directory service.
	
	- AppleTalk Transaction Protocol (ATP)
	  ATP provides a reliable loss-free transport service using a transaction
	  request and a transaction response to deliver data reliably.
	
	MORE INFORMATION
	================
	
	When you communicate with other Microsoft Mail servers, and users signed into
	the server, a Mail server uses the AppleTalk Transaction Protocol. Server to
	server messages include user's mail messages, user lists, group expansions, and
	other server related information. User requests and replies to these requests by
	the server also use ATP.
	
	A Mail server uses NBP to look for Mail servers on a Network Scan and to verify
	that a server still exists on the Mail network. NBP is also used by the
	Macintosh Chooser when a user clicks the MS Mail icon, or the Network Manager
	clicks the MS Mail GW icon.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
