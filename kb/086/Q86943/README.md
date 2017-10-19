---
layout: page
title: "Q86943: 3COM: Terms and Definitions of 3Com Networks"
permalink: /kb/086/Q86943/
---

## Q86943: 3COM: Terms and Definitions of 3Com Networks

	Article: Q86943
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the 3Com 3+Mail and 3+Name services, and the format of
	3+Mail addresses.
	
	3+Mail
	------
	
	3+Mail is a service that runs on 3Com networks, and is provided as part of the
	network operating system. Users log into the mail service, which provides
	messaging capabilities and folders. The full three-part name of the mail service
	must be provided when installing the gateway.
	
	3+Name
	------
	
	The 3+Name service is the program that allows the creation of IDs on the 3Com
	network. The _GATEWAY ID is created by the installation program, using this
	service, and can be modified using the installation program.
	
	Addressing
	----------
	
	A 3Com address is structured as user@domain:organization, where "user" is the
	mailbox ID of the 3Com user. "Domain:organization" can be any string, usually
	used to logically identify a group or area of the network (similar to Internet).
	The installation program asks for the domain:organization the _GATEWAY user will
	be created in. This must be unique on the network because it is used to route
	mail for Microsoft Mail users.
	
	
	Additional query words: 3.00 pcmail 3com 3+mail 3+name
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus300
	Version           : :3.0
	
	=============================================================================
	
