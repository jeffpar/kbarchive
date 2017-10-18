---
layout: page
title: "Q87207: PROFS: How VM Addresses Are Converted to MS Mail Addresses"
permalink: kb/087/Q87207/
---

## Q87207: PROFS: How VM Addresses Are Converted to MS Mail Addresses

	Article: Q87207
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For mail sent from the host to the local-area network (LAN), the conversion of
	VM addresses to Microsoft Mail addresses is done by the Host Access component of
	the Microsoft Mail Gateway to IBM PROFS and OfficeVision.
	
	The addresses contained in a message or file delivered to the gateway from the
	host are in this form:
	
	  Nodename(UserID)
	
	Before the message is shipped to the LAN, the addresses are converted to the
	standard MS Mail format:
	
	  Network/Postoffice/Mailbox
	
	The Nodename is converted to a Network/Postoffice name by using the mappings
	defined in the PWACSI DATA file on the gateway's 191 "A" disk. The UserID is
	mapped directly to a Mailbox name.
	
	Once the message is transferred by the gateway program (HostDisp or VMGATE) to
	the gateway postoffice, it is distributed to the recipients in the same way as
	regular LAN mail.
	
	
	Additional query words: 3.00 addresses pcmail profslan
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
