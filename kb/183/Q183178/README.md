---
layout: page
title: "Q183178: XADM: IMS Will Not Start with Event Log Error 4071"
permalink: /kb/183/Q183178/
---

## Q183178: XADM: IMS Will Not Start with Event Log Error 4071

	Article: Q183178
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service does not start and when you review the application
	event log on the server, it will contain a message similar to the following:
	
	  Event ID: 4071 - Source: MSExchangeIMC
	  Type: Error
	  Category: Initialization/Termination
	
	  Unable to start the Internet Mail Service because it has not been
	  configured.
	  You must go to Connections in the Microsoft Exchange Administrator
	  program for this site, select the Internet Mail Service object, and
	  configure its setting.
	
	In some cases, the error appears only when the Internet Mail Service starts
	automatically after you restart your computer. If you manually start the
	Internet Mail Service, it may work correctly in these instances.
	
	NOTE: Event ID 4072 may also be logged.
	
	CAUSE
	=====
	
	The error occurs when the Internet Mail Service is unable to obtain a pointer to
	the Internet Mail Service administrator mailbox during initialization of the
	service. This usually means that the Internet Mail Service administrator mailbox
	has not been set, is incorrect, or is inaccessible.
	
	WORKAROUND
	==========
	
	Starting the Internet Mail Service manually may allow the service to start and
	work correctly.
	
	RESOLUTION
	==========
	
	Ensure that you set a correct, and accessible mailbox for the Internet Mail
	Service administrator mailbox. To locate the administrator mailbox, go to the
	Internet Mail tab of the Internet Mail Service properties. If no mailbox has
	been specified, you should specify one. If the mailbox is incorrect (if it does
	not exist, for example), change it to a different mailbox. If everything appears
	to be correct, change it to point to a different mailbox, click OK to accept the
	change, and then go back into the properties of the Internet Mail Service.
	Change it back to the original mailbox, and then click OK to accept that change.
	This should reset the mailbox internally.
	
	
	Additional query words: IMC Internet connector administrator mailbox reboot services start
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
