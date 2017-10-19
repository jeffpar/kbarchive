---
layout: page
title: "Q134951: X400: Public X.25 Mail Services Can Route on PRMD"
permalink: /kb/134/Q134951/
---

## Q134951: X400: Public X.25 Mail Services Can Route on PRMD

	Article: Q134951
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of the Microsoft Mail Gateway to X.400 supports X.25 the Eicon
	interface card for point to point communications on Transport Protocol class 0
	(TP0). When you address another X.400 Message Transfer Agent (MTA) on a Public
	X.25 Mail Service, you define a remote MTA with a single X.121 address---the
	Public Mail Services. The distribution of the message is then routed to the
	destination X.121 address, based on the Private Domain Name (PRMD).
	
	MORE INFORMATION
	================
	
	Sprint Mail is an example of a public X.25 Mail Service provider that routes on
	PRMD. For this reason, it is mandatory that users include the PRMD attribute of
	an X.400 address. A correct routing table will ensure proper message routing to
	Sprint Mail.
	
	Here is a example of a typical outbound Sprint Mail address and corresponding
	routing table:
	
	Recipient Address:
	------------------
	
	  C=US; A=TELEMAIL; P=MICROSOFT; O=PSS; OU1=WGA; S=USERMBX
	
	Local Route table:
	------------------
	
	  C=US
	  .. A=TELEMAIL
	  ....O=LOCAL <LOCAL-MTA>
	  ....O=* <SPRINT-MTA>
	
	In this example, only one X.121 address was defined for SPRINT-MTA, but by
	specifying the Private Domain Name (PRMD) Microsoft, it allowed Sprint to route
	the message to the proper X.121 address and receiving MTA.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
