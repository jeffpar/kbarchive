---
layout: page
title: "Q87213: PROFS: What Is HUB Mail, and What Are Its Advantages?"
permalink: kb/087/Q87213/
---

## Q87213: PROFS: What Is HUB Mail, and What Are Its Advantages?

	Article: Q87213
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HUB mail enables you to send mail from one MS Mail postoffice to another, by
	means of the PROFS gateway. This effectively uses your mainframe computer as a
	"backbone" for mail traveling between two or more local area networks (LANs).
	
	MORE INFORMATION
	================
	
	To define a HUB mail connection, select the Ext-Admin/Create function in the
	Admin program. Create the new postoffice definition. Select "Indirect" as the
	routing type, and enter the direct PROFS gateway name when prompted for the
	network name.
	
	The new postoffice must also be defined in the PWACSI DATA file on the gateway VM
	ID's 191 "A" disk, and a REROUTE statement must be added in the MS-RSCS
	configuration file. This ensures that the HUB mail travels through one gateway
	to MS-RSCS, and then from MS-RSCS down through another gateway to the
	destination postoffice.
	
	There are two main advantages to using HUB mail:
	
	- With HUB mail, only one item is created on the host side of the gateway for
	  each message with attachments sent from the LAN. A message with multiple
	  attachments is encapsulated into one item, and forwarded directly to the
	  destination gateway.
	
	- The External program is not involved in the delivery of the message (between
	  two direct gateways). This frees External to handle other tasks, such as
	  servicing Remote Mail users.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan HUB
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
