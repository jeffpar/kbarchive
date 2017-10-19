---
layout: page
title: "Q170535: XFOR: Event 290 Occurs When Performing Dirsync with cc:Mail"
permalink: /kb/170/Q170535/
---

## Q170535: XFOR: Event 290 Occurs When Performing Dirsync with cc:Mail

	Article: Q170535
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An event similar to the following occurs:
	
	  Event: 290
	  Source: MSExchange MTA
	  Category: X.400 Service
	  Description: A non-delivery report (reason code unable-to-transfer and
	  diagnostic code unrecognized-OR-name) is being generated for message
	  C=US;A= ;P=FL GOV;L=AG1EXS01=970612143602Z-28. It was originally
	  destined for DN:/o=FL GOV/ou=AUDITOR GENERAL/cn=RECIPIENTS/cn=8F7045D1S
	  (recipient number 1); and was to be redirected to.
	  (MTA DISP:RESULT 21 136)(12)
	
	CAUSE
	=====
	
	The message transfer agent that is attempting to pass the message to the
	Microsoft Exchange Connector for Lotus cc:Mail generates this event when the
	address space has not been defined or has been defined incorrectly.
	
	WORKAROUND
	==========
	
	Correct the address space defined for the cc:Mail postoffice in the Microsoft
	Exchange Connector for Lotus cc:Mail.
	
	MORE INFORMATION
	================
	
	For additional information on other causes of Event 290, please see the
	following Microsoft Knowledge Base article:
	
	  Q170471 XCON: 290/4284 Errors Indicate Misconfigured MTA or Connector
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Issue type        : kbprb
	
	=============================================================================
	
