---
layout: page
title: "Q85601: FAX: How to Control the Polling for Sending Mail Via Fax"
permalink: /kb/085/Q85601/
---

## Q85601: FAX: How to Control the Polling for Sending Mail Via Fax

	Article: Q85601
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
	
	The "FAX in/out cycle:" parameter in the PROFILE.GLB file controls the polling
	for sending new mail through fax gateway, and polls the fax board for incoming
	faxes.
	
	For example, setting the "FAX in/out cycle:" to 5 means that the gateway checks
	the fax queue for outgoing mail for 5 minutes, then checks the fax board for
	incoming faxes for 5 minutes.
	
	For more information on this parameter, see the "Microsoft Mail Gateway to Fax
	Administrator's Guide."
	
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
