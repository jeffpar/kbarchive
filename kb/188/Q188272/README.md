---
layout: page
title: "Q188272: SBS IMC 4106 Event: The Parameter is Incorrect"
permalink: kb/188/Q188272/
---

## Q188272: SBS IMC 4106 Event: The Parameter is Incorrect

	Article: Q188272
	Product(s): Microsoft Exchange
	Version(s): 4.5,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Small Business Server customers who configure the Internet Mail Service for
	dial-up networking, may see the following Event Id logged in the application
	log:
	
	  Event ID: 4106
	  Source: MSExchangeIMC
	  Category: SMTP Interface Events
	  Description: The dial-up connection <phonebook entry name here>
	  could not be  made. The error reported was: [87] The parameter
	  is incorrect.
	
	WORKAROUND
	==========
	
	This issue may be caused by a dial-up networking connection name that has more
	than 20 characters in the length.
	
	To solve this issue, perform the following the steps:
	
	1. Create a new phonebook entry in the Dial-Up Connections tab of the Internet
	  Mail Service or the Connections tab for Message Delivery. Create a new
	  phonebook entry in the Dial-up networking phonebook with 20 or less
	  characters in the name.
	
	2. Remember to change the configuration of the Internet Mail Service to use this
	  newly created phonebook entry.
	
	3. To test this, send another message and check the event log.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbSBServSearch kbSBServ450
	Version           : :4.5,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
