---
layout: page
title: "Q136116: SMTP: XXENC User Unknown"
permalink: kb/136/Q136116/
---

## Q136116: SMTP: XXENC User Unknown

	Article: Q136116
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the SMTP Mail Gateway as the backbone between Microsoft Mail for PC
	Networks postoffices, the Unix system may try to send the following message to
	the POSTMASTER on the gateway postoffice (PO) (if a postmaster mailbox exists on
	the gateway PO):
	
	  XXENC User unknown
	
	MORE INFORMATION
	================
	
	When Mail for PC Networks postoffices are set up to communicate via SMTP (refer
	to Backbone Mail pages 51-58 of the Mail Gateway to SMTP "Administrator's
	Guide") messages are addressed to the standard 10/10/10 address as used with
	normal Mail messages. These messages are sent to the gateway, then they get
	encapsulated and sent to XXENC@ [SMTP alias of the downstream postoffice].
	
	If the SMTP alias of the downstream postoffice (refer to Mapping Microsoft
	Addresses to SMTP Addresses pages 34-36 of the Mail Gateway to SMTP
	"Administrator's Guide") is set implicitly, this mail message will not get to
	the gateway machine and subsequently to the intended postoffice.
	
	The Unix system will try to match the XXENC alias to an entry in its alias table
	and will not find a match. Then it will send the system message "XXENC User
	Unknown" to the POSTMASTER.
	
	When you set up mappings to Mail postoffices, remember to make the mapping
	explicit so the address does not need to be resolved by the Unix system. As a
	result, it will get to the intended gateway.
	
	Example of ADDR_MAP.CFG
	-----------------------
	
	----------- Incorrect ADDR_MAP.CFG ---------------
	MYNET/MYPO   mycompany.com
	--------------------------------------------------
	
	------------ Correct ADDR_MAP.CFG ----------------
	MYNET/MYPO   mypo.mynet.mycompany.com
	--------------------------------------------------
	
	Additional query words: 3.00 3.0.9
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
