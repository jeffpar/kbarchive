---
layout: page
title: "Q87199: PROFS: What Is the Gateway Name, and Why Is It Required?"
permalink: /kb/087/Q87199/
---

## Q87199: PROFS: What Is the Gateway Name, and Why Is It Required?

	Article: Q87199
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The gateway name is required during the installation of the Microsoft Mail
	Gateway to IBM PROFS and OfficeVision. It is also be required when installing
	the Gateway Access component.
	
	The gateway name is used only within the Microsoft Mail system, and is discarded
	before mail is sent to the host user. By using a gateway name, the system is
	able to define each PROFS user with a three-element address, similar to a native
	MS Mail address:
	
	  PROFS user: Gateway/Nodename/UserID
	  MS Mail user: Network/Postoffice/Mailbox
	
	This allows the mail system to easily hold PROFS users' addresses within the
	database using the same file structure as is used with other MS Mail users.
	
	Once outgoing mail from the LAN is queued up in the correct gateway mailbag, the
	gateway software discards the gateway name and uses only the Nodename/UserID to
	deliver mail to the recipient.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan addressing gateway name
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
