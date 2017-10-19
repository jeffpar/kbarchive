---
layout: page
title: "Q85340: FAX: Role of the Fax Board and Software"
permalink: /kb/085/Q85340/
---

## Q85340: FAX: Role of the Fax Board and Software

	Article: Q85340
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The fax board used by the Microsoft Mail Gateway to Fax controls the
	asynchronous connection and the communication with the remote fax machine.
	
	Faxes are placed in the fax board queue by the gateway. The board dials and
	connects to the remote fax machine, and handles actual transmission of the
	message. Any errors encountered by the fax board are passed back to the gateway,
	usually identified by a "Communication Error."
	
	The fax board also accepts incoming calls from fax machines, receives transmitted
	faxes, and passes the received messages to the gateway.
	
	Fax boards should be tested before running the fax gateway by sending and
	receiving faxes using the fax software that was shipped with the board.
	
	REFERENCES
	==========
	
	The "Installing the Fax Board Software" chapter of the "Microsoft Mail Gateway
	to Fax Administrator's Guide"
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  "Fax" (without the quotation marks) and "Gateway" (without the quotation
	  marks) and "role" (without the quotation marks) and "pcmail" (without the
	  quotation marks)
	
	
	Additional query words: 3.00 2.1a error pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
