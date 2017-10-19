---
layout: page
title: "Q170471: XCON: 290/4284 Errors Indicate Misconfigured MTA or Connector"
permalink: /kb/170/Q170471/
---

## Q170471: XCON: 290/4284 Errors Indicate Misconfigured MTA or Connector

	Article: Q170471
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) may return messages
	back to originators with Non-Delivery Reports (NDRs) that state:
	
	  Unable to deliver due to MTA congestion.
	
	These NDRs will be accompanied by the following events logged in the Windows NT
	Server Event Viewer Application Log:
	
	  4284 A error occurred during connection/disconnection.
	  Error code: 8511 [POP4 POP4 DOWN 4 179] (14)
	
	  290 A non-delivery report (reason code unable-to-transfer and diagnostic code
	  maximum-time-expired) is being generated for message C=US;A= ;P=Organization;
	  L=Server03-970224213600Z-1460. It was originally destined for
	  DN:/o=organization/ou=sitename/cn=recipients/cn=recipientnameC=US;A= ;
	  P=organization;O=sitename;S=user;G=joe; (recipient number 1); and was to be
	  redirected to . [MTA DISP:RESULT 20 136] (12)
	
	MORE INFORMATION
	================
	
	This combination of errors usually indicates a misconfigured MTA and/or
	connector. To troubleshoot this issue follow these steps:
	
	1. Verify that the Windows NT Servername matches the local MTA name.
	
	2. Verify that the naming conventions used to communicate between the two
	  servers are functioning correctly.
	
	3. If X400 connectors are being used, make sure all the manually entered
	  information is correct on both servers.
	
	If any of these are incorrect, this behavior is by product design.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbinfo
	
	=============================================================================
	
